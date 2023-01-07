import React from "react";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import { IMAGES } from "../../Theme/Image";
import useMediaQuery from "../../Component/useMediaQuery";

export default function Feature({
  title,
  description,
  image,
  image2,
  title2,
  description2,
}) {
  const matches = useMediaQuery("(max-width:820px)");
  const mobile = useMediaQuery("(min-width:460px)");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? (matches ? "row" : "row") : "column",
        justifyContent: "space-between",
        alignSelf: "center",
        width: mobile ? (matches ? "85%" : "85%") : "100%",
        height: "120%",
        alignItems: "baseline",
        margin: "10px auto",
        paddingInline: mobile ? 0 : "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? (matches ? "column" : "column") : "row",
          justifyContent: mobile ? "center" : "left",
          alignItems: mobile ? "center" : "left",
          width: "100%",
          paddingInline: mobile ? 50 : 0,
          width: "90%",
          margin: 5,
        }}
      >
        <img
          src={image}
          alt="feature1"
          style={{
            height: mobile ? (matches ? 200 : 200) : 120,
            width: mobile ? (matches ? 200 : 200) : 120,
            alignSelf: "center",
            justifyContent: "space-around",
            display: "flex",
            borderRadius: SIZES.radius,
          }}
        />
        <div style={{ display: mobile ? (matches ? "flow" : "flow") : "flow" }}>
          {mobile ? (
            <>
              <h3
                style={{
                  color: COLORS.Primary,
                  textAlign: "center",
                  paddingLeft: 0,
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
                  paddingLeft: 0,
                }}
              >
                {description}
              </p>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: COLORS.Primary,
                  textAlign: "left",
                  paddingLeft: 12,
                  ...FONTS.h3,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: COLORS.black,
                  textAlign: "justify",
                  ...FONTS.body5,
                  paddingLeft: 12,
                }}
              >
                {description}
              </p>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? (matches ? "column" : "column") : "row",
          justifyContent: mobile ? "center" : "left",
          alignItems: mobile ? "center" : "left",
          width: "100%",
          // paddingInline: mobile ? 50 : 0,
          width: "90%",
          margin: 5,
        }}
      >
        <img
          src={image2}
          alt="feature1"
          style={{
            height: mobile ? (matches ? 200 : 200) : 120,
            width: mobile ? (matches ? 200 : 200) : 120,
            alignSelf: "center",
            justifyContent: "space-around",
            display: "flex",
            borderRadius: SIZES.radius,
          }}
        />
        <div>
          {mobile ? (
            <>
              <h3
                style={{
                  color: COLORS.Primary,
                  textAlign: "center",
                  paddingLeft: 0,
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
                  paddingLeft: 0,
                }}
              >
                {description2}
              </p>
            </>
          ) : (
            <>
              <h3
                style={{
                  color: COLORS.Primary,
                  textAlign: "left",
                  paddingLeft: 12,
                  ...FONTS.h3,
                }}
              >
                {title2}
              </h3>
              <p
                style={{
                  color: COLORS.black,
                  textAlign: "justify",
                  ...FONTS.body5,
                  paddingLeft: 12,
                }}
              >
                {description2}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
