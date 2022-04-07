import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import {species } from "../../Component/Constants";


export default function LoadFinance() {
  // 
const [valueMS, setValueMS] = useState("");
const [tag, setTag] = useState("");
const [bought, setBought] = useState(false);
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
                  >Finance Details</p>
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
  Add Finance
  </p>
        <div>
        <div>
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
                label={"Quantity*"}
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
                value={tag}
                label={"Price*"}
                onChange={(event) => {
                  setTag(event.target.value);
                }}
              />
              </div>
            </div>
  
        
        <div>
        <TextButton
          label={"Finance"}
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
  
