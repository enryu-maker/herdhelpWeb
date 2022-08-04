import React from "react";

import { COLORS, SIZES, FONTS } from "../../Theme/Theme";

export default function Feedcard({
    Feedname,
    FeedQty,
    Feeddate,
    Feedprice,
    onPress
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: COLORS.lightGray2,
          height: 100,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          flexDirection:"column",
          borderWidth: 0,
        //   justifyContent: "space-evenly",
          shadowColor: COLORS.Primary,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 2,
        //   width: "35%",
          alignItems:"center",
          padding:"20px",
          marginInline:20
        }}
        onClick={onPress}
      >
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            // alignSelf:"center",
            alignItems:"center"

        }}>
        <p style={{
            display:"flex",
            ...FONTS.h2,
            color:COLORS.Primary,
            // marginLeft:"20px"
            // justifyContent:"flex-start"
        }}>
            {Feedname}
        </p>
        <p style={{
            display:"flex",
            ...FONTS.h3,
            color:COLORS.black,
            marginLeft:"20px"
            // justifyContent:"flex-start"
        }}>
            Date: {Feeddate}
        </p>
        </div>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignSelf:"center"

        }}>
        <p style={{
            display:"flex",
            ...FONTS.h3,
            color:COLORS.black,
            // marginLeft:"20px"
        }}>
           Qty: {FeedQty}
        </p>
        <p style={{
            display:"flex",
            ...FONTS.h3,
            color:COLORS.black,
            // justifyContent:"flex-start",
            marginLeft:"20px"
        }}>
           Price: ${Feedprice}
        </p>
        </div>
        
        
      </button>
    </>
  );
}
