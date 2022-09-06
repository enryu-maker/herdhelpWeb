import React, { useState } from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, formatter, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image';
import { useNavigate, useLocation } from 'react-router-dom';
import InputForm from '../../Component/InputForm';
import { checking, Statusad } from "../../Component/Constants";
import DropDown from '../../Component/DropDown/DropDown';
import useMediaQuery from '../../Component/useMediaQuery';


export default function Status() {
  let navigate = useNavigate()
  const [status , setStatus] = useState()
  const [valueMS, setValueMS] = useState("");
  const matches = useMediaQuery('(min-width:810px)')


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
            <img src={IMAGES.close2} alt={"back"}
              style={{
                height: 25,
                width: 25,
                alignSelf: "center",
              }} />
          </div>
        </>
      }
    title={'Status'}
    rightcomponent={
        <>
        <div>

        </div>
        </>
    }
    />
{/*  */}
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
    <DropDown
              value={valueMS}
              onPress={(y)=>{
                setValueMS(y.label)
              }}
              label={"Status* "}
              // options={checking}
              options={Statusad}
            />
    {/*  */}
    <DropDown
              value={valueMS}
              onPress={(x)=>{
                setValueMS(x.label)
              }}
              label={"Flagged* "}
              // options={checking}
              options={checking}
            />
    {/*  */}
   </div>
   </div>
   </div>
   </>
  )
}
