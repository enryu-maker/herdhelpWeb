import React from "react";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import { IMAGES } from "../../Theme/Image";

export default function Feature({
  title,
  description,
  image,
  image2,
  title2,
  description2,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: "85%",
        height: "120%",
        alignItems: "baseline",
        margin: "10px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingInline: 50,
        }}
      >
        <img
          src={image}
          alt="feature1"
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
            justifyContent: "space-around",
            display: "flex",
            borderRadius: SIZES.radius,
          }}
        />
        <h3
          style={{
            color: COLORS.Primary,
            textAlign: "center",
            ...FONTS.h2,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: COLORS.black,
            textAlign: "center",
            ...FONTS.body3,
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingInline: 50,
        }}
      >
        <img
          src={image2}
          alt="feature1"
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
            justifyContent: "space-around",
            display: "flex",
            borderRadius: SIZES.radius,
          }}
        />
        <h3
          style={{
            color: COLORS.Primary,
            textAlign: "center",
            ...FONTS.h2,
          }}
        >
          {title2}
        </h3>
        <p
          style={{
            color: COLORS.black,
            textAlign: "center",
            ...FONTS.body3,
          }}
        >
          {description2}
        </p>
      </div>
    </div>
  );
}
