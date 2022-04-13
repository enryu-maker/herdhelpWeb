import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import {species } from "../../Component/Constants";
//import axiosIns from '../../helpers/helpers';


export default function Weight() {
// 
const [valueMS, setValueMS] = useState("");
const [tag, setTag] = useState("");
const [bought, setBought] = useState(false);
const options = ["one", "two", "three"];
const defaultOption = options[0];
//
/*async function updateWeight(){
    if (tag!="",weight!=0){
      setLoading(true)
      try{
        await axiosIns.patch(`animals/${id}${species}${tag}`,{
          'weight': unit==true?weight: Math.round(weight/0.45359237),
          'weight_kg':unit==false?weight: Math.round(weight*0.45359237),
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((Response)=>{
          if (Response.status==200){
            setLoading(false)
            showMessage({
              message: "Weight Updated",
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
          }
          else{
          setLoading(false)
          showMessage({
            message: `Animal with tag ${tag} not found here`,
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
      }catch(err){
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
      }
    }
    else{
      setLoading(false)
      showMessage({
        message: `Please Enter valid Data`,
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
  }


  //
  
 */ 
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
                  alt=""
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
                  alt=""
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
