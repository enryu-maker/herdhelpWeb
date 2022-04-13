import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import {species } from "../../Component/Constants";

export default function LoadAlerts() {
  // 
const [valueMS, setValueMS] = useState("");
const [tag, setTag] = useState("");
const [bought, setBought] = useState(false);
const options = ["one", "two", "three"];
const defaultOption = options[0];


//
/* const [alert, setAlerts] = React.useState([]);
  const [species, setSpcies] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function loadFinance() {
    let {data} = await axiosIns.get('alerts/');
    setLoading(true);
    return data;
  }
  React.useEffect(() => {
    setId(global.id);
    setSpcies(global.species);
    loadFinance().then(data => {
      setAlerts(data);
      // console.log(data)
    });
  }, [alert]);
  function delAlert(id){
    axiosIns.delete(`alerts/${id}`).then(()=>{alert("Alert deleted sucessfully")})
   } */

// 
function renderHeader(){
  return<NavBarMain/>;
}

function renderForm(){
  return(
    <div
          style={{
            display: "flex",
            flexFlow: "row",
          }}
        >
          <div
    style={{
      backgroundColor: COLORS.lightGray2,
      minHeight: 300,
        width:590,
      padding: 20,
      borderRadius: SIZES.radius,
      // marginTop: 50,
      // marginBottom: 50, 
      margin:20,
    }}>
      <p style={{
                ...FONTS.largeTitle,
                alignSelf: "center",}}
                >Alerts</p>
    </div>

    <div
    style={{
      backgroundColor: COLORS.lightGray2,
      minHeight: 300,
      //   width:450,
      padding: 20,
      borderRadius: SIZES.radius,
      // marginTop: 50,
      // marginBottom: 50,
      margin:20, 
  }}
    > <p
    style={{
    ...FONTS.largeTitle,
    alignSelf: "center",
}}
>
Add Alert
</p>
      <div>
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
                  src={IMAGES.aler}
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
              label={"Issue?*"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
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
                  src={IMAGES.mark}
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
              label={"What need to be Done?*"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
            />
            </div>
          </div>
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
                  // value={vaccinateddate}
                  label={"Date of Alert*"}
                  // onChange={(event) => {
                    // setVaccinateddate(event.target.value);
                  // }}
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
                      src={IMAGES.clock}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={'Time'}
                  // value={vaccinateddate}
                  label={"Time of Alert*"}
                  // onChange={(event) => {
                    // setVaccinateddate(event.target.value);
                  // }}
                />
            </div>
          </div>
      <div>
      <TextButton
        label={"Add Alerts"}
        icon={IMAGES.add}
        onPress={() => alert(bought)}
        buttonContainerStyle={{
          marginBottom:50
        }}
      />
      </div>
      </div>
    </div>
        </div>
  )}

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
    </div>
  )
}
