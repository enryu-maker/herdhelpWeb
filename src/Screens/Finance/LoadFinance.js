import React, { useState } from 'react'
// import TextButton from "../../Component/TextButton";
// import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from '../../Theme/Image';
// import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
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
  <div style={{width:600 , 
    height:120, 
    borderRadius:16,
    position:'absolute',
    paddingInline:30,
    backgroundColor:COLORS.layout,
    position:'relative',
    margin:10}}>
      <p style={{position:'absolute',
      width:54,
      height:26,
      fontSize:22,
      display:'flex',
      alignItems:'center',
      textAlign:'center',
      color:COLORS.black,
      // top:227
    }}>{Feedname}</p>
    <p style={{position:'absolute',
      width:94,
      height:26,
      fontSize:18,
      top:35,
      display:'flex',
      alignItems:'center',
      textAlign:'center',
      color:COLORS.Primary,
    }}>Qty: { FeedQty } Ton</p>
    <p style={{position:'absolute',
      width:120,
      height:26,
      fontSize:14,
      top:70,
      display:'flex',
      alignItems:'center',
      textAlign:'center',
      color:COLORS.black,
    }}>{Feeddate}</p>
    <p style={{position:'absolute',
      width:80,
      height:26,
      right:5,
      fontSize:16,
      top:35,
      display:'flex',
      alignItems:'center',
      textAlign:'center',
      color:COLORS.Primary,
    }}>${Feedprice}</p>
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
        <p style={{...FONTS.h2 ,position:'relative', left:30  }}>Finance</p>
        <button style={{backgroundColor:COLORS.Primary , 
                        border:'none', 
                        borderRadius:16 , 
                        padding:'0px 30px',
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        position:'absolute',
                        right:30}} >
            <img src={IMAGES.plus} 
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
                          
        </button>
               <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
         
        </div>
      </div>

      <div>

      </div>
              <div style={{display:'inline-flex'}}>
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
              <div style={{display:'inline-flex'}}>
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
      </>
      
    )
  }
  
