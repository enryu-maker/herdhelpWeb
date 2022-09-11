import React from 'react'
import {FONTS} from '../Theme/Theme'
import useMediaQuery from './useMediaQuery'
export default function Header({
    leftcomponent,
    rightcomponent,
    title,
    titlestyle
}) {
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)') 

  return (
    <div style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      width:"100%",
    }}>
      {
      leftcomponent
      }
      <p style={{
        width: mobile ? null : 200 ,
        font : mobile ? FONTS.h1 : FONTS.h2 ,
        titlestyle,
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
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
