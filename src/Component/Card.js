import React from "react";
import { IMAGES } from "../Theme/Image";
import { COLORS, SIZES, FONTS } from "../Theme/Theme";

export default function Card({
  Tagnumber,
  Name,
  cond,
  Gender,
  Weight,
  img,
  onPress,
  weight_kg,
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: COLORS.lightGray2,
          height: 250,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          flexDirection:"column",
          borderWidth: 0,
        justifyContent: "space-evenly",
          shadowColor: COLORS.Primary,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 2,
          width: 230,
        }}
        onClick={onPress}
      >
          <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} />
          <img src={img} alt={Name} style={{ height: 80, width: 80,alignSelf:"center"}} />
        <div style={{
            display:"flex",
            flexFlow:"row",
            justifyContent:"space-around"

        }}>
            <div style={{
            flexFlow:"column",
        }}>
        <p style={{...FONTS.h4}}>{Tagnumber}</p>
        <p style={{...FONTS.h4}}>{Name}</p>
        <p style={{...FONTS.h4}}>{global.unit?`${Weight} lbs`:`${weight_kg} kg`}</p>
        </div>
        <div style={{
            display:"flex",

            flexFlow:"column"
        }}>
          <img src={Gender=="Male"? IMAGES.male:IMAGES.female} style={{ height: 50, width: 50,marginTop:25}} />
        </div>
        </div>
        


      </button>
    </>
  );
}
