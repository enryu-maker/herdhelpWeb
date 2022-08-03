import React from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS } from '../../Theme/Theme'

export default function Setting() {
  return (
   <>
   <NavBarMain page={'Setting'}/>
   <div style={{display:'block ruby'}}>
        <div style={{width:"80%" , 
    height:80, 
    borderRadius:16,
    // position:'absolute',
    paddingInline:30,
    backgroundColor:COLORS.lightGray1,
    // position:'relative',
    margin:10}}>
        <div style={{width:"100%",
          display:"flex" , 
                justifyContent:'space-around',
                // textAlign:'center',
                alignItems:'center',}}>
            <p style={{ ...FONTS.h2 , fontWeight:300}}>Weight</p>
            <p>LBS</p>
            <button style={{background:'none', border:'none' , cursor:"pointer" , right:30}}><img style={{right:'10%' ,top:110, width:20,}} 
            src={IMAGES.rightone}/></button>
        </div>
        </div>
   </div>
   </>
  )
}

