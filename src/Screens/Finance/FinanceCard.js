import React from "react";
import useMediaQuery from "../../Component/useMediaQuery";

import { COLORS, SIZES, FONTS, formatter } from "../../Theme/Theme";

export default function Feedcard({
    Feedname,
    FeedQty,
    Feeddate,
    Feedprice,
    onPress
}) {

  const matches = useMediaQuery("(min-width:810px)")
  return (
    <>
      <button
        style={{
          backgroundColor: COLORS.lightGray2,
          height: 145,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          // flexDirection:"column",
          borderWidth: 0,
        //   justifyContent: "space-evenly",
          shadowColor: COLORS.Primary,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 2,
          width: matches ? '70vh' : "45vh",
          alignItems:"center",
          paddingInline:"20px",
          // marginInline:20,
          display:'flex'
        }}
        onClick={onPress}
      >
        <div style={{
            display:"flow",
            width:'100%',

            // flexDirection:"row",
            // justifyContent:"space-evenly",
            // alignSelf:"center",
            // alignItems:"center"

        }}>
        <p style={{
            display:"flex",
            ...FONTS.h2,
            color:COLORS.Primary,
            textAlign:'start'
            // marginLeft:"20px"
            // justifyContent:"flex-start"
        }}>
            {Feedname}
        </p>
        {/*  */}
        <p style={{
            display:"flex",
            ...FONTS.h3,
            color:COLORS.black,
            // marginLeft:"20px"
        }}>
           Qty: {FeedQty}
        </p>
        </div>
        <div style={{
            display:"flow",
            // flexDirection:"row",
            // justifyContent:"space-evenly",
            // alignSelf:"center"
            width:'100%'

        }}>
        
        {/*  */}
        <p style={{
            display:"flex",
            ...FONTS.h3,
            color:COLORS.black,
            marginLeft:"20px"
            // justifyContent:"flex-start"
        }}>
            Date: {Feeddate}
        </p>
        {/*  */}
        <p style={{
            display:"flex",
            ...FONTS.h3,
            color:COLORS.black,
            // justifyContent:"flex-start",
            marginLeft:"20px"
        }}>
           Price: {formatter.format(Feedprice)}
        </p>
        </div>
        
        
      </button>
    </>
  );
}
