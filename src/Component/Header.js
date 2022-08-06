import React from 'react'
import {FONTS} from '../Theme/Theme'
export default function Header({
    leftcomponent,
    rightcomponent,
    title,
    titlestyle
}) {
  return (
    <div style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly"
    }}>
      {
      leftcomponent
      }
      <p style={{
        ...FONTS.h1,
        titlestyle
      }}>
        {
          title
        }
      </p>
      {
        rightcomponent
      }
    </div>
  )
}
