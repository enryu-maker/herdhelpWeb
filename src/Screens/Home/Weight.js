import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import { checking, gender , species } from "../../Component/Constants";

export default function Weight() {
// 
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
// 
function renderHeader(){
  return<NavBarMain/>;
}

function renderForm(){
  return(
        
    <div
            style={{
                backgroundColor: COLORS.lightGray2,
                minHeight: 300,
                //   width:450,
                padding: 20,
                borderRadius: SIZES.radius,
                marginTop: 50,
                marginBottom: 50, 
            }}
            >
                <p
                style={{
                ...FONTS.largeTitle,
                alignSelf: "center",
          }}
        >
          Update Weight
        </p>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
          }}
        >
          <div
            style={{
              margin: 20,
            }}
          >
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
              margin: 20,
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
            </div>
            </div>
            <div
            style={{
              margin: 2,
            }}
          >
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.scale}
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
              label={"Weight"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
            />
            </div>
            </div>
  )
}

  return (
     <div
      style={{
        flex: 1,
      }}
    >
      {renderHeader()}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {renderForm()}
      </div>
      <TextButton
        label={"Update Weight"}
        icon={IMAGES.add}
        onPress={() => alert(bought)}
        buttonContainerStyle={{
          marginBottom:50
        }}
      />
    </div>
  )
}
