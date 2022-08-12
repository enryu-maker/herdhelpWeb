import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import { checking} from "../../Component/Constants";
import axiosIns from '../../helpers/helpers';
import Header from '../../Component/Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMedical } from '../../Store/actions';
import Loading from '../../Component/Loading';
export default function AddMedication() {
  const navigate = useNavigate()
  const [medicationR, setmedicationR] = useState("");
  const [medicine, setmedicine] = useState("");
  const [dosage, setdosage] = useState("");
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [vaccinateddate, setVaccinateddate] = useState("");
  const [withdrawal_date, setwithdrawal_date] = useState(null);
  const [withdrawal, setwithdrawal] = useState(null);
  const [bought, setBought] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const id = localStorage.getItem("id")
  const dispatch = useDispatch()
  const spec = useSelector(state => state.Reducers.cat)
  const tags = useSelector(state=>state.Reducers.tags)
  const cond = true
  const tag_number = true
  const clear = () => {
    setmedicationR("");
    setwithdrawal("");
    setdosage("");
    setValueMS("");
    setValueMS("");
  };
  function addmedical(){
    setLoading(true)
    axiosIns.post('/medication/',
    {
      tag_number:!cond?`${tag_number}` : `${id}${valueMS}${valueBS}`,
      medication_name: medicine,
      medication_date: vaccinateddate,
      dosage: dosage,
      disease: medicationR,
      withdrawal: withdrawal=="Yes"?true:false,
      withdrawal_date: withdrawal_date!=""? withdrawal_date:null
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    if (response.status == 201) {
      setLoading(false)
      alert("done")
      clear()
    } else {
      setLoading(false)
    }
  })
  .catch(err => {
    setLoading(false)
  });
  }
  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }
  function renderForm() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
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
                <DropDown
                value={valueMS}
                setValue={setValueMS}
                label={"Species*"}
                // options={checking}
                options={spec}
              />
  
              <DropDown
                value={valueBS}
                setValue={setValueBS}
                label={"Tags*"}
                // options={checking}
                options={finder(tags,valueMS)}
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
              value={withdrawal}
              setValue={setwithdrawal}
              label={"Withdrawal"}
              options={checking}
            />
            {
              withdrawal=="Yes"?<InputForm
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
              value={withdrawal_date}
              label={"Withdrawal Date"}
              onChange={(event) => {
                setwithdrawal_date(event.target.value);
              }}
            />:null
            }

          </div>
        </div>
        {
          loading?<Loading/>:
        
        <TextButton
        label={"Add"}
        icon={IMAGES.med}
        onPress={() => addmedical()}
        buttonContainerStyle={{
          marginTop: "30px",
        }}
      />
  }
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