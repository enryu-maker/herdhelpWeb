import React ,{useState} from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, formatter, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image';
import { useNavigate, useLocation } from 'react-router-dom';
import TextButton from '../../Component/TextButton';
import InputForm from '../../Component/InputForm';
import DropDown from '../../Component/DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { checking } from "../../Component/Constants";
import moment from 'moment';
import useMediaQuery from '../../Component/useMediaQuery';
import { getAnimal, getMedical } from '../../Store/actions';
import { useAlert } from 'react-alert';
import axios from 'axios';
import { baseURL } from '../../helpers/helpers';
import AlertCard from '../../Component/AlertCard';



export default function Edit() {
    let navigate = useNavigate()
    // const { state } = useLocation();
    // const { data, cond } = state;
    const [name, setName] = useState("");
    const [valueMS, setValueMS] = useState("");
    const species = useSelector(state => state.Reducers.cat)
    const [valueBS, setValueBS] = useState("");
    const [valueBST, setValueBST] = useState("");
    const gender = useSelector(state => state.Reducers.gender)
    const [bought, setBought] = useState('');
    const [dobt, setDobt] = useState(null);
    const [price, setPrice] = useState(0);
    const [weight, setWeight] = useState(0);
    const unit = useSelector(state => state.Reducers.unit)
    const [vaccinated, setVaccinated] = useState(false);
    const [Breed, setBreed] = useState("");
    const [registration, setRegistration] = React.useState("");

    // const { state } = useLocation();
    // const { data, cond } = state;
    // const dispatch = useDispatch()
    // React.useEffect(() => {
    //   dispatch(getAnimal(data.tag_number))
    //   dispatch(getMedical(data.tag_number))
    // }, [])
    // const alert = useAlert()
    // const med = useSelector(state => state.Reducers.med)
    // const animal = useSelector(state => state.Reducers.animal)
    // const token = useSelector(state => state.Reducers.authToken)
  
   
    // const [profile_pic, setprofile_pic] = React.useState([]);
    // const [loading, setLoading] = React.useState(false);
    // const [valueS, setValueS] = useState("");
    // const [valueF, setValueF] = useState("");
  
    // const onChange = (imageList) => {
    //   setprofile_pic(imageList);
    // };
    // const updateProfile=()=>{
    //   setLoading(true)
    //   const formData = new FormData();
    //   formData.append('animal_image', profile_pic.length===0? [] : profile_pic[0]['file']);
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-type": "multipart/form-data",
    //     },
    //   };
    //   axios.patch(baseURL + `/animals/${animal?.tag_number}`, formData, config)
    //       .then(response => {
    //         if (response.status == 200) {
    //           setLoading(false);
    //           dispatch(getAnimal(data.tag_number))
    //           alert.success(<AlertCard msg={"Profile Pic Sucessfully"} type={true} />)
    //         }
    //         else {
    //           alert.error(<AlertCard msg={"Internal server error"} type={false} />)
    //           setLoading(false);
    //         }
    //       })
    //       .catch(err => {
    //         setLoading(false);
    //         alert.error(<AlertCard msg={err} type={false} />)
    //       });
    // }
//
const matches = useMediaQuery('(min-width:820px)')

// 
function finder(list, value) {
  var dataValue;
  list?.map(a => {
    if (value == a.label) {
      dataValue = a.data;
    }
  });
  return dataValue;
}
// 


    return (
    <>
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
    title={'Edit'}
    rightcomponent={
        <>
        <div style={{width:30}}>

        </div>
        </>
    }
    />
    </div>

    <div style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "5px", 
        
        marginBottom:50}}>
    <div style={{ paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            width: "80%",
            borderRadius: SIZES.radius,
            alignItems: "center"}}>

<div
     style={{
            display: matches ? "flex" : 'grid',
             justifyContent: matches ? "space-evenly" : 'space-around'
             }}
                >
    {/*  */}
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
              value={name}
              label={"Name*"}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />


    {/*  */}
    <DropDown
              value={valueMS}
              onPress={(x)=>{
                setValueMS(x.label)
              }}
              label={"Species*"}
              // options={checking}
              options={species}
            />

            </div>
    {/*  */}
    <div
     style={{
            display: matches ? "flex" : 'grid',
             justifyContent: matches ? "space-evenly" : 'space-around'
             }}
                >
    <DropDown
              value={valueBST}
              onPress={(x)=>{
                setValueBST(x.label)
                setValueBS(x.type)
              }}
              label={"Gender*"}
              options={finder(gender,valueMS)}
            />
    {/*  */}
    <DropDown
              value={bought}
              onPress={(x)=>{
                setBought(x.label)
              }}
              label={"Purchased*"}
              options={checking}
            />
    </div>
    {/*  */}
    <div
     style={{
            display: matches ? "flex" : 'grid',
             justifyContent: matches ? "space-evenly" : 'space-around'
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
    {/*  */}
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
                    label={"Date of Purchased"}
                    onChange={(event) => {
                      const d = moment(event.target.value).format("YYYY-MM-DD")
                      setDobt(d);
                    }}
                  />
      </div>
    {/*  */}
    <div
     style={{
            display: matches ? "flex" : 'grid',
             justifyContent: matches ? "space-evenly" : 'space-around'
             }}
                >
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
                    value={''}
                    label={"Age"}
                    onChange={(event) => {
                      // setAge(event.target.value);
                    }}
                  />

    {/*  */}
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
    {/*  */}
    <div
     style={{
            display: matches ? "flex" : 'grid',
             justifyContent: matches ? "space-evenly" : 'space-around'
             }}
                >
    <DropDown
                    value={vaccinated}
                    onPress={(x)=>{
                      setVaccinated(x.label)
                    }}
                    label={"Vaccinated"}
                    options={checking}
                  />
    {/*  */}
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
        </div>
    {/*  */}
    
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
    {/*  */}
    </div>
    
    <TextButton
              label={"Add Animal"}
              icon={IMAGES.add}
            
              buttonContainerStyle={{
                marginTop: "20px"
              }}
            />
    </div>
    
    </>
  )
}

