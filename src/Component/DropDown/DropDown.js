import React from 'react'
import Select from 'react-select';
import './Drop.css'
import { COLORS,SIZES,FONTS } from '../../Theme/Theme';
export default function DropDown({
  label,
  options,
  defaultOption,
  inputContainerStyle,
  prepandcomponent,
  containerStyle,
  onPress,
  value,
  setValue
}) {
  return (
    <div
        style={{
          ...containerStyle,
          justifyContent: "center",
          alignSelf: "center",
          display:"flex",
          flexFlow:"column",
          marginBottom:30
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
          <text style={{ color: COLORS.black, ...FONTS.body4 }}>{label}</text>
        </div>
    <div 
      style={{
        display: "flex",
        flexFlow:"row",
        height: 50,
        paddingHorizontal: SIZES.padding,
        marginTop: 5,
        border:'none',
        borderRadius: SIZES.radius,
        // backgroundColor: COLORS.white,
        width: 280,
        border:'none',
        alignSelf: "center",
        // ...inputContainerStyle,
    }}>
      {
        prepandcomponent
      }
      <div style={{
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        ...FONTS.h3
      }}>

      
      <Select
      styles={{
        ...FONTS.h3
      }}
      value={value}
      onChange={event=>{
        setValue(event.value)
      }}
      placeholder={value}
      options={options}
      />
      </div>
        

    </div>
    </div>
  )
}
