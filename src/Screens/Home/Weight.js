import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import {species } from "../../Component/Constants";
//import axiosIns from '../../helpers/helpers';
import Header from '../../Component/Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Weight() {
// 
const [valueMS, setValueMS] = useState("");
const [valueBS, setValueBS] = useState("");

const [tag, setTag] = useState("");
const [bought, setBought] = useState(false);
const options = ["one", "two", "three"];
const navigate = useNavigate()
const defaultOption = options[0];
const tags = useSelector(state=>state.Reducers.tags)
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


function renderForm(){
  return(
        
    <div
          style={{
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            marginTop: "50px",
            width: "80%",
            borderRadius: SIZES.radius,
          }}
        >
        <div
          style={{
            display: "flex",
            justifyContent:"space-evenly"
          }}
        >
          
            <DropDown
              value={valueMS}
              setValue={setValueMS}
              label={"Species*"}
              // options={checking}
              options={species}
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
        // flex: 1,
      }}
    >
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
        title={"Update Weight"} />
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
        label={"Update"}
        icon={IMAGES.update}
        onPress={() => alert(bought)}
        buttonContainerStyle={{
          marginTop: "30px",
        }}
      />
    </div>
  )
}
