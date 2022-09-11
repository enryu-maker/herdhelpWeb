import React from "react";
import { COLORS, SIZES, FONTS } from "../Theme/Theme";
import useMediaQuery from "./useMediaQuery";
export default function InputForm({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = "",
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg,
  maxLength,
  keytype = "",
  onPressIn,
  type,
}) {


  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:420px)') 
  return (
    <>
      <div
        style={{
          ...containerStyle,
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          flexFlow: "column",
          marginBottom: 30,
          borderWidth: 0,
          borderBottomWidth: 12,
        }}
      >
        <div
          style={{
            width: 284,
            justifyContent: "space-between",
            display: "flex",
            flexFlow: "row",
            alignSelf: "center",
            height: 20,
          }}
        >
          {
            mobile ? matches ? <text style={{ color: COLORS.black, ...FONTS.body4 }}>{label}</text> : 
            <text style={{ color: COLORS.black, ...FONTS.body4 }}>{label}</text>: 
            <text style={{ color: COLORS.black, ...FONTS.body5 }}>{label}</text>
          }
          <text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</text>
        </div>
        <div
          style={{
            display: "inline-flex",
            flexFlow: "row",
            height: 50,
            paddingHorizontal: SIZES.padding,
            marginTop: 5,
            // borderRadius: SIZES.radius,
            // backgroundColor: COLORS.white,
            width: 280,
            alignSelf: "center",
            ...inputContainerStyle,
          }}>

          {prependComponent}
          <input
            style={{
              flex: 1,
              ...inputStyle,
              width: "100%",
              // backgroundColor: COLORS.white,
              borderRadius: 'none',
              background: 'none',
              borderTop: 'none',
              borderInline: 'none',
              borderBottom: '0.9px solid #009A48',
              height: 45,
              alignSelf: "center",
              paddingLeft: 20,
              ...FONTS.h3,
              outline:"none"

              // outline: "none",
            }}
            value={value}
            placeholder={placeholder}
            color={COLORS.black}
            type={type}
            onChange={onChange}
          />
          {appendComponent}
        </div>
      </div>
    </>
  );
}
