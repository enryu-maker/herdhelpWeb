import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import TextButton from "../../Component/TextButton";
// import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import TextButton from '../../Component/TextButton';
import { IMAGES } from '../../Theme/Image';
// import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
// import DropDown from "../../Component/DropDown/DropDown";
// import {species } from "../../Component/Constants";


export default function LoadFinance() {
  // 
// const [valueMS, setValueMS] = useState("");
// const [tag, setTag] = useState("");
// const [bought, setBought] = useState(false);
// const options = ["one", "two", "three"];
// const defaultOption = options[0];
  // 
function Feedcard({Feedname, FeedQty, Feeddate, Feedprice}){

  return(
    <div style={{width:"45%" , 
                  height:125,
                  paddingInline:30,
                  display:"flex" , 
                  justifyContent:"space-between", 
                  alignItems:"center", 
                  backgroundColor:COLORS.lightGray1,
                  borderRadius:16,
                  margin:10}}>
  <div style={{display:'flow',height:150}}>
      <p style={{
        // position:'absolute',
      width:54,
      fontSize:22,
      color:COLORS.black,
    }}>{Feedname}</p>
    <p style={{
      width:94,
      fontSize:18,
      color:COLORS.Primary,
    }}>Qty: { FeedQty } Ton</p>
    <p style={{
      width:70,
      fontSize:14,
      color:COLORS.black,
    }}>{Feeddate}</p>
    </div>
    <div>
    <p style={{
      fontSize:16,
      display:'flex',
      textAlign:"center",
      color:COLORS.Primary,
    }}>${Feedprice}</p></div>
    </div>)
}
  
    return (
      <>
      <NavBarMain page={'finance'}/>
<div style={{padding:10}}>
      <div
        style={{
          justifyContent:'space-between',
          alignItems:'center',
          display:'flex',
        }}
      >
        <p style={{...FONTS.h2 ,marginLeft:40 }}>Finance</p>
        <Link to='/addfinance' style={{display:'contents'}}>
        <button style={{backgroundColor:COLORS.Primary , 
                        cursor:"pointer",
                        border:'none', 
                        borderRadius:16 , 
                        padding:'0px 30px',
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        position:'absolute',
                        right:30}} >
            <img src={IMAGES.plus} alt=""
                  style={{height: 24, 
                          width: 26,
                          padding:'3px 13px 3px 3px',
                          justifyContent:'center',
                          alignItems:'center',
                          position:'relative',
                          display:'flex'
                          }}/>
            <p style={{...FONTS.h4 ,
                      color:COLORS.white  }}>Finance</p>
                          
        </button></Link>
        
      </div>
              <div style={{position:"none",}}>
              <div style={{display:'flex'}}>
              <Feedcard 
              Feedname={'Feed'}
              FeedQty={'2'}
              Feeddate={"2022-05-25"}
              Feedprice={'1200.00'}/>
              <Feedcard 
              Feedname={'Feed'}
              FeedQty={'2'}
              Feeddate={"2022-05-25"}
              Feedprice={'1200.00'}/>
              </div>
              <div style={{display:'flex'}}>
              <Feedcard 
              Feedname={'Feed'}
              FeedQty={'2'}
              Feeddate={"2022-05-25"}
              Feedprice={'1200.00'}/>
              <Feedcard 
              Feedname={'Feed'}
              FeedQty={'2'}
              Feeddate={"2022-05-25"}
              Feedprice={'1200.00'}/>
              </div>
              </div>
      </div>
      </>
      
    )
  }
  
