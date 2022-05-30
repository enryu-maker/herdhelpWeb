import React from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS } from '../../Theme/Theme'

export default function Setting() {
  return (
   <>
   <NavBarMain/>
   <div style={{display:'block ruby'}}>
        <div style={{width:"80%" , 
    height:80, 
    borderRadius:16,
    position:'absolute',
    paddingInline:30,
    backgroundColor:COLORS.layout,
    position:'relative',
    margin:10}}>
        <div style={{display:"inline-flex" , 
                justifyContent:'space-around',
                // textAlign:'center',
                alignItems:'center',}}>
            <p style={{ ...FONTS.h2 , fontWeight:300,left:20 , position:'absolute'}}>Weight</p>
            <p>LBS</p>
            <button style={{background:'none', border:'none'}}><img style={{right:20 , bottom:"30%" , width:20, position:'absolute'}} 
            src={IMAGES.rightone}/></button>
        </div>
        </div>
   </div>
   </>
  )
}

