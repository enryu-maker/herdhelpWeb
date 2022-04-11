import React, { useState } from "react";
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import { checking, gender , species } from "../../Component/Constants";
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
    mother_supporttag:mother!=""?mother:"",
    mother_tagnumber:mother!=""?`${id}${valueMS}${mother}`:"" ,
    father_supporttag:father!=""?father:"",
    father_tagnumber:father!=""? `${id}${valueMS}${father}`:"" ,
    breed: Breed,
    weight: unit==true?weight: Math.round(weight/0.45359237),
    weight_kg:unit==false?weight: Math.round(weight*0.45359237),
    bred: bred,
    age: age,
    vaccinated: vaccinated,
    vaccination_date: vaccinateddatet,
    price: price,
    bought: bought,
    status: 'Alive',
  });
  // async function postAnimal() {
  //   setLoading(true);
  //   if(isEnableSignIn())
  //   {await axiosIns
  //     .post('animals/', data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then(response => {
  //       if (response.status == 201) {
  //         clear();
  //         setLoading(false);
  //         setValidation(true);
  //         setShow(true);
  //         setDataText('Animal added');
  //       }
  //     })
  //     .catch(
  //       err => {
  //       setEmailError("No subscription found, please purchase a subscription for access to animals")
  //       setLoading(false)
  //       setValidation(false)
  //       setShow(false)}
  //     );}
  //   else{
  //     setEmailError("Required Fields cannot be empty")
  //     setLoading(false)
  //   }
  // }
  React.useEffect(() => {
    setId(global.id);
    setAnimals(global.species);
    setUnit(global.unit)
  }, []);
  function renderHeader() {
    return <NavBarMain />;
  }
  function renderForm() {
    return (
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
          Add Animal
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
          </div>
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
            
            {/*  */}
            <DropDown
              value={valueBS}
              setValue={setValueBS}
              label={"Gender*"}
              options={gender}
            />
          </div>
        </div>

        <DropDown
          value={bought}
          setValue={setBought}
          label={"Purchased*"}
          options={checking}
        />
        {bought ? (
          <>
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
                      src={IMAGES.weight}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={"text"}
                  value={weight}
                  label={"Weight"}
                  onChange={(event) => {
                    setWeight(event.target.value);
                  }}
                />
                <DropDown
                  value={bred}
                  setValue={setBred}
                  label={"Bred"}
                  options={checking}
                />
              </div>

              <div
                style={{
                  margin: 20,
                }}
              >
                <DropDown
                  value={vaccinated}
                  setValue={setVaccinated}
                  label={"Vaccinated"}
                  options={checking}
                />
                {
                  vaccinated? 
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
                    setVaccinateddate(event.target.value);
                  }}
                />:null
                }
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
                  label={"Registration"}
                  onChange={(event) => {
                    setRegistration(event.target.value);
                  }}
                />

              </div>
            </div>
          </>
        ) : (
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
                    setDobt(event.target.value);
                  }}
                />
                <InputForm
                  prependComponent={
                    <img
                      src={IMAGES.weight}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={"text"}
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
                  label={"Mother Tag"}
                  onChange={(event) => {
                    setMother(event.target.value);
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
                  value={father}
                  label={"Father Tag"}
                  onChange={(event) => {
                    setFather(event.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  margin: 20,
                }}
              >
                <DropDown
                  value={vaccinated}
                  setValue={setVaccinated}
                  label={"Vaccinated"}
                  options={checking}
                />
                {
                  vaccinated? 
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
                    setVaccinateddate(event.target.value);
                  }}
                />:null
                }
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
                  label={"Registration"}
                  onChange={(event) => {
                    setRegistration(event.target.value);
                  }}
                />

              </div>
            </div>
        ) 
        
        }
      </div>
    );
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
        label={"Add Animal"}
        icon={IMAGES.add}
        onPress={() => alert(bought)}
        buttonContainerStyle={{
          marginBottom:50
        }}
      />
    </div>
  );
}
