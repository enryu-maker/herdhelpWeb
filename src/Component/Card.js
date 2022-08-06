import React from "react";
import { IMAGES } from "../Theme/Image";
import { COLORS, SIZES, FONTS } from "../Theme/Theme";

export default function Card({
  Tagnumber,
  numaninmal,
  Name,
  cond,
  Gender,
  Weight,
  img,
  onPress,
  weight_kg,
  data
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: COLORS.lightGray2,
          height: 250,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          // flexDirection:"column",
          borderWidth: 0,
          justifyContent: "space-evenly",
          shadowColor: COLORS.Primary,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 2,
          width: 250,
          cursor:'pointer'
        }}
        onClick={onPress}
      >
          {/* <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} /> */}
          <img src={img} alt={Name} style={{ height: 100, width: 100,alignSelf:"center"}} />
        <div>
            <div style={{
            textAlign:'center'
        }}>
        <p style={{...FONTS.h3 , margin:20}}>{Name}</p>
        <p style={{...FONTS.h3 , 
        
            width:70,
            height:30,
            backgroundColor:COLORS.white, 
            borderRadius:30 ,
            display: 'block ruby',
            textAlign: 'center',
            display: 'flex',
            margin:'auto',
            marginTop:10,
            padding:'5px 30px',

            alignItems:'center',
            justifyContent:'space-between',

            }}><img src={img} alt={Name} style={{ height: 30, width: 30}}/>X<p>{numaninmal}</p></p>
        {/* <p style={{...FONTS.h4}}>{global.unit?`${Weight} lbs`:`${weight_kg} kg`}</p> */}
        </div>
        <div style={{
            display:"flex",

            flexFlow:"column"
        }}>
          {/* <img src={Gender=="Male"? IMAGES.male:IMAGES.female} style={{ height: 50, width: 50,marginTop:25}} /> */}
        </div>
        </div>
        


      </button>
    </>
  );
}
