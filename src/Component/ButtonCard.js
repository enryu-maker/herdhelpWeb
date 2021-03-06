import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../Theme/Image";
import { COLORS, SIZES, FONTS } from "../Theme/Theme";

export default function ButtonCard({
  img,
  imgStyle,
  link='',
  container,
  label,
  labelStyle,
  alt
}) {
  return (
    <>
      <Link
        style={{
          backgroundColor: COLORS.Primary,
          height: 100,  // 200
          padding:10,
          margin: SIZES.padding+10,
          borderRadius: SIZES.radius,
          display:"flex",
          flexDirection:"column",
          borderWidth: 0,
          justifyContent: "space-evenly",
          shadowColor: COLORS.Primary,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 2,
          width: 125, // 200
          textDecorationLine:"none",
          ...container,
          // boxShadow:"10px -4px 15px 7px  #93b8b3",
        }}
        className='buttoncard'
        to={link} 
      >
          
          <img src={img} alt={alt} style={{
              width:30, // 80
              height:30, // 80
              alignSelf:"center",
              margin:10,
              // marginTop:50,
              // ...imgStyle
          }}/>
          <p style={{
              ...FONTS.h3,
              alignSelf:"center",
              color:COLORS.white,
              ...labelStyle,
          }}>{label}</p>
          
      </Link>
    </>
  );
}
