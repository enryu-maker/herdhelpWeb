import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import { checking, gender, species } from "../../Component/Constants";
import axiosIns from '../../helpers/helpers';
import Header from '../../Component/Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function AddMedication() {
  const navigate = useNavigate()
  const [medicationR, setmedicationR] = useState("");
  const [medicine, setmedicine] = useState("");
  const [dosage, setdosage] = useState("");


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
  const [dob, setDob] = useState("");
  const [dobt, setDobt] = useState(null);
  const [vaccinated, setVaccinated] = useState(false);
  const [vaccinateddate, setVaccinateddate] = useState("");
  const [vaccinateddatet, setVaccinateddatet] = useState(null);
  const [bought, setBought] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [animals, setAnimals] = React.useState([]);
  const [id, setId] = React.useState("");
  const [registration, setRegistration] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [validation, setValidation] = React.useState(false);
  const [dataText, setDataText] = React.useState("");
  const [EmailError, setEmailError] = React.useState("");
  const [unit, setUnit] = React.useState(false);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const spec = useSelector(state => state.Reducers.cat)
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
  const data = JSON.stringify({
    name: name,
    tag_number: ` ${id}${valueMS}${tag}`,
    registration: registration,
    support_tag: tag,
    gender: valueBS,
    species: valueMS,
    birth_date: dobt,
    mother_supporttag: mother != "" ? mother : "",
    mother_tagnumber: mother != "" ? `${id}${valueMS}${mother}` : "",
    father_supporttag: father != "" ? father : "",
    father_tagnumber: father != "" ? `${id}${valueMS}${father}` : "",
    breed: Breed,
    weight: unit == true ? weight : Math.round(weight / 0.45359237),
    weight_kg: unit == false ? weight : Math.round(weight * 0.45359237),
    bred: bred,
    age: age,
    vaccinated: vaccinated,
    vaccination_date: vaccinateddatet,
    price: price,
    bought: bought,
    status: 'Alive',
  });
  //
  // axios
  /*
  function addMedical() {
      setLoading(true),
      axiosIns
        .post(
          'medication/',
          {
            tag_number:!cond?`${global.id}${dataS}${dataT}` : `${global.id}${species}${tag}`,
            medication_name: med,
            medication_date: treatt,
            dosage: dos,
            disease: Dis,
            withdrawal: withdraw,
            withdrawal_date: datet!=""? datet:null,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          if (response.status == 201) {
            setLoading(false)
            showMessage({
              message: "Medication Added",
              type: "default",
              backgroundColor: COLORS.Primary,
              color:COLORS.white,
              titleStyle:{
                alignSelf:"center",
                ...FONTS.h3
              },
              animationDuration:250,
              icon:"success",
              style:{
                justifyContent:"center"
              }
            });
            clear()
          } else {
            setLoading(false),
            showMessage({
              message: "Animal Not Added",
              type: "default",
              backgroundColor: COLORS.red,
              color:COLORS.white,
              titleStyle:{
                alignSelf:"center",
                ...FONTS.h3
              },
              animationDuration:250,
              icon:"danger",
              style:{
                justifyContent:"center"
              }
            });
          }
        })
        .catch(err => {
          setLoading(false)
          showMessage({
            message: `${err.response.data.msg}`,
            type: "default",
            backgroundColor: COLORS.red,
            color:COLORS.white,
            titleStyle:{
              alignSelf:"center",
              ...FONTS.h3
            },
            animationDuration:250,
            icon:"danger",
            style:{
              justifyContent:"center"
            }
          });
        });
    }
    React.useEffect(() => {
      setId(global.id);
      setAnimals(global.species);
      let {cond} = route.params
      setCond(cond)
      if (!cond){
        let {tag} = route.params
        setDataT(tag)
        let{species} = route.params
        setDataS(species)
      }
    }, []);
    */
  // 
  // 

  function renderForm() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",

        // height:"70vh"
      }}>
        <div
          style={{
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            // height: 200,
            width: "80%",
            borderRadius: SIZES.radius,
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

            <DropDown
              value={valueMS}
              setValue={setValueMS}
              label={"Species*"}
              // options={checking}
              options={spec}
            />

            <InputForm
              prependComponent={
                <img
                  src={IMAGES.disease}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={medicationR}
              label={"Reason for Medication"}
              onChange={(event) => {
                setmedicationR(event.target.value);
              }}
            />
          </div>

        </div>
        <div
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            // height: 200,
            width: "80%",
            borderRadius: SIZES.radius,
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
                  src={IMAGES.medicines}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={medicine}
              label={"Medicine"}
              onChange={(event) => {
                setmedicine(event.target.value);
              }}
            />
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
              label={"Medication Date"}
              onChange={(event) => {
                setVaccinateddate(event.target.value);
              }}
            />

            <InputForm
              prependComponent={
                <img
                  src={IMAGES.dropper}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={dosage}
              label={"Dosage"}
              onChange={(event) => {
                setdosage(event.target.value);
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
              value={valueBS}
              setValue={setValueBS}
              label={"Withdrawal"}
              // options={checking}
              options={checking}
            />
            {
              valueBS=="Yes"?<InputForm
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
              label={"Withdrawal Date"}
              onChange={(event) => {
                setVaccinateddate(event.target.value);
              }}
            />:null
            }

          </div>
        </div>
        <TextButton
        label={"Add"}
        icon={IMAGES.med}
        onPress={() => alert(bought)}
        buttonContainerStyle={{
          marginTop: "30px",
          // width:250,
        }}
      />
      </div>
    )
  }

  return (
    <>
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
        title={"Add Medication"} />
      
        {renderForm()}
      
      
    </>
  );

}