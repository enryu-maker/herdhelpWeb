import React from 'react'
import { IMAGES } from '../Theme/Image'
import { COLORS,SIZES,FONTS } from '../Theme/Theme'

export default function TextButton({
    disabled,
    label,
    labelStyle,
    onPress,
    icon,
    iconStyle,
    buttonContainerStyle,
    loading,
    border=true
}) {
    
  return (
      <>
        <button onClick={onPress}
        disabled={disabled}
        style={{
            display:"inline-flex",
            justifyContent: 'center',
            backgroundColor: COLORS.Primary,
            borderRadius:SIZES.radius,
            borderWidth:0,
            height:50,
            width:220,
            alignSelf:'center',
            ...buttonContainerStyle,
        }}
        >
        {
            icon != false &&
            <div style={{
                margin:10
            }}>
                <img src={icon} style={{height:25,width:25,color:COLORS.white,alignSelf:"flex-start",...iconStyle}}/> 
            </div>
        }
        <p style={{ color: COLORS.black, ...FONTS.h2, ...labelStyle,alignSelf:"center",letterSpacing:1 }}>
        {label}
        </p>
        </button>
    </>
  )
}
