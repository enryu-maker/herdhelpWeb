import React, { useState } from "react";
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import { checking, gender } from "../../Component/Constants";
import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { baseURL } from "../../helpers/helpers";
import { getHerds, getOverview, getTags } from "../../Store/actions";
import ImageUploading from 'react-images-uploading';
import Loading from "../../Component/Loading";
import axios from "axios";
import moment from 'moment';
export default function AddAnimals() {
  const [bred, setBred] = useState(false);
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [age, setAge] = useState(0);
  const [Breed, setBreed] = useState("");
  const [tag, setTag] = useState("");
  const [price, setPrice] = useState(0);
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const [dobt, setDobt] = useState(null);
  const [vaccinated, setVaccinated] = useState(false);
  const [vaccinateddate, setVaccinateddate] = useState(null);
  const [bought, setBought] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [registration, setRegistration] = React.useState("");
  const species = useSelector(state => state.Reducers.cat)
  const unit = useSelector(state => state.Reducers.unit)
  const [weight30, setWeight30] = useState(0);
  const [weight60, setWeight60] = useState(0);
  const [weight90, setWeight90] = useState(0);
  const [profile_pic, setprofile_pic] = React.useState([]);
  const [lease, setlease] = React.useState(false);
  const dispatch = useDispatch()
  const id = localStorage.getItem("id")
  const navigate = useNavigate()
  const clear = () => {
    // setSpcies([])
    setWeight('');
    setTag('');
    setRegistration('');
    setAge('');
    setBreed('');
    setMother('');
    setFather('');
    setPrice('');
    setName('');
  };
  function isEnableSignIn() {
    return true
  }
  const onChange = (imageList) => {
    setprofile_pic(imageList);
  };
  const token = useSelector(state => state.Reducers.authToken)
  
  function postAnimal() {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('tag_number', `${id}${valueMS}${tag}`);
    formData.append('registration', registration);
    formData.append('support_tag', tag);
    formData.append('gender', valueBS);
    formData.append('species', valueMS);
    if(bought=="No"){
    formData.append('birth_date', dobt);
    }
    formData.append('leased', lease);
    formData.append('mother_supporttag', mother != '' ? mother : '');
    formData.append(
      'mother_tagnumber',
      mother != '' ? `${id}${valueMS}${mother}` : '',
    );
    formData.append('father_supporttag', father != '' ? father : '');
    formData.append(
      'father_tagnumber',
      father != '' ? `${id}${valueMS}${father}` : '',
    );
    formData.append('breed', Breed);
    formData.append(
      'weight',
      unit == true ? weight : Math.round(weight / 0.45359237),
    );
    formData.append(
      'weight_kg',
      unit == false ? weight : Math.round(weight * 0.45359237),
    );
    formData.append(
      'weight_30',
      unit == true ? weight30 : Math.round(weight30 / 0.45359237),
    );
    formData.append(
      'weight_30_kg',
      unit == false ? weight30 : Math.round(weight30 * 0.45359237),
    );
    formData.append(
      'weight_60',
      unit == true ? weight60 : Math.round(weight60 / 0.45359237),
    );
    formData.append(
      'weight_60_kg',
      unit == false ? weight60 : Math.round(weight60 * 0.45359237),
    );
    formData.append(
      'weight_90',
      unit == true ? weight90 : Math.round(weight90 / 0.45359237),
    );
    formData.append(
      'weight_90_kg',
      unit == false ? weight90 : Math.round(weight90 * 0.45359237),
    );
    formData.append('bred', bred=="Yes"?true:false);
    formData.append('age', age);
    formData.append('vaccinated', vaccinated=="Yes"?true:false);
    if(vaccinated=="Yes"){
      formData.append('vaccination_date', vaccinateddate);
    }
  
    formData.append('price', price);
    formData.append('bought', bought=="Yes"?true:false);
    formData.append('status', 'Alive');
    formData.append('animal_image', profile_pic[0]['file']);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    };
    if (isEnableSignIn()) {
      axios.post(baseURL+'/animals/',formData,config)
        .then(response => {
          if (response.status == 201) {
            setLoading(false);
            dispatch(getHerds())
            dispatch(getTags())
            dispatch(getOverview())
            alert("Done")
          }
          else {
            setLoading(false);
            console.log(response);
          }
        })
        .catch(err => {
          setLoading(false);
          console.log(err.data);
        });
    } else {
      setLoading(false);

    }
  }

  function renderForm() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "5px",
      }}>
        <div
          style={{
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            width: "80%",
            borderRadius: SIZES.radius,
            alignItems:"center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.tag}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={tag}
              label={"Tag Number*"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.name}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={name}
              label={"Name*"}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <DropDown
              value={valueMS}
              setValue={setValueMS}
              label={"Species*"}
              // options={checking}
              options={species}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <DropDown
              value={valueBS}
              setValue={setValueBS}
              label={"Gender*"}
              options={gender}
            />
            <DropDown
              value={bought}
              setValue={setBought}
              label={"Purchased*"}
              options={checking}
            />
          </div>
        </div>
        <div
          style={{
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            width: "80%",
            borderRadius: SIZES.radius,
            marginTop: "20px",
          }}
        >
          {
            bought == "Yes" ?
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.money}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={price}
                    label={"Price"}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.age}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={age}
                    label={"Age"}
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={unit ? IMAGES.lbs : IMAGES.scale}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"number"}
                    value={weight}
                    label={"Weight"}
                    onChange={(event) => {
                      setWeight(event.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <DropDown
                    value={bred}
                    setValue={setBred}
                    label={"Bred"}
                    options={checking}
                  />
                  <DropDown
                    value={vaccinated}
                    setValue={setVaccinated}
                    label={"Vaccinated"}
                    options={checking}
                  />
                  {
                    vaccinated=="Yes" ?
                      <InputForm
                        prependComponent={
                          <img
                            src={IMAGES.calender}
                            style={{
                              height: 25,
                              width: 25,
                              margin: 10,
                              alignSelf: "center",
                            }}
                          />
                        }
                        type={"date"}
                        value={vaccinateddate}
                        label={"Date of Vaccination"}
                        onChange={(event) => {
                          const d = moment(event.target.value).format("YYYY-MM-DD")
                          setVaccinateddate(d);
                        }}
                      /> : null
                  }
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.dog}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={Breed}
                    label={"Breed"}
                    onChange={(event) => {
                      setBreed(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.name}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={registration}
                    label={"# Registration"}
                    onChange={(event) => {
                      setRegistration(event.target.value);
                    }}
                  />
                </div>
              </> :
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.calender}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"date"}
                    value={dobt}
                    label={"Date of Birth"}
                    onChange={(event) => {
                      const d = moment(event.target.value).format("YYYY-MM-DD")
                      setDobt(d);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={unit ? IMAGES.lbs : IMAGES.scale}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"number"}
                    value={weight}
                    label={"Weight"}
                    onChange={(event) => {
                      setWeight(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.tag}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={mother}
                    label={"Mother's Tag"}
                    onChange={(event) => {
                      setMother(event.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <InputForm
                    prependComponent={
                      <img
                        src={unit ? IMAGES.lbs : IMAGES.scale}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"number"}
                    value={weight30}
                    label={"30 Days"}
                    onChange={(event) => {
                      setWeight30(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={unit ? IMAGES.lbs : IMAGES.scale}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"number"}
                    value={weight60}
                    label={"60 Days"}
                    onChange={(event) => {
                      setWeight60(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={unit ? IMAGES.lbs : IMAGES.scale}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"number"}
                    value={weight90}
                    label={"90 Days"}
                    onChange={(event) => {
                      setWeight90(event.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.tag}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={father}
                    label={"Father's Tag"}
                    onChange={(event) => {
                      setFather(event.target.value);
                    }}
                  />
                  <DropDown
                    value={vaccinated}
                    setValue={setVaccinated}
                    label={"Vaccinated"}
                    options={checking}
                  />
                  {
                    vaccinated ?
                      <InputForm
                        prependComponent={
                          <img
                            src={IMAGES.calender}
                            style={{
                              height: 25,
                              width: 25,
                              margin: 10,
                              alignSelf: "center",
                            }}
                          />
                        }
                        type={"date"}
                        value={vaccinateddate}
                        label={"Date of Vaccination"}
                        onChange={(event) => {
                          const d = moment(event.target.value).format("YYYY-MM-DD")
                          setVaccinateddate(d);
                        }}
                      /> : null
                  }
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.dog}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={Breed}
                    label={"Breed"}
                    onChange={(event) => {
                      setBreed(event.target.value);
                    }}
                  />
                  <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.name}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={"text"}
                    value={registration}
                    label={"# Registration"}
                    onChange={(event) => {
                      setRegistration(event.target.value);
                    }}
                  />
                </div>
              </>
          }
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header
        leftcomponent={
          <>
            <div style={{
              display: "flex",
              justifyContent: "center",
              height: 40,
              width: 40,
              backgroundColor: COLORS.Primary,
              alignSelf: "center",
              borderRadius: 20
            }}
              onClick={() => {
                navigate(-1)
              }}
            >
              <img src={IMAGES.back} alt={"back"}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: "center",
                }} />
            </div>
          </>
        }
        rightcomponent={
          <div></div>
        }
        title={"Add Animal"} />
      <div style={{
        overflowY: 'scroll',
        height: "85vh",
        paddingInlineStart: 0,
        marginBottom:"42px"
      }}>
        <ImageUploading
          value={profile_pic}
          onChange={onChange}
          maxNumber={69}
          resolutionWidth={300}
          resolutionHeight={300}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
          }) => (
            <div className="upload__image-wrapper">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["dataURL"]} alt="" style={{
                    height: 120,
                    width: 120,
                    borderRadius: 60
                  }} />
                </div>
              ))}
              <button
                style={{
                  backgroundColor: COLORS.Primary,
                  color: COLORS.white,
                  ...FONTS.h3,
                  borderRadius: SIZES.base,
                  border: "none"
                }}
                onClick={onImageUpload}
              >
                Upload
              </button>
              &nbsp;

              <button style={{
                backgroundColor: COLORS.red,
                color: COLORS.white,
                ...FONTS.h3,
                borderRadius: SIZES.base,
                border: "none"
              }} onClick={onImageRemoveAll}>Remove</button>

            </div>
          )}
        </ImageUploading>
        {renderForm()}
        {
          loading ? <Loading /> :

            <TextButton
              label={"Add Animal"}
              icon={IMAGES.add}
              onPress={()=>{
                postAnimal()
                // alert(dobt)
              }}
              buttonContainerStyle={{
                marginTop: "20px"
              }}
            />
        }
      </div>
    </div>
  );
}
