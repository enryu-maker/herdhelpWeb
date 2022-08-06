import React from 'react'
import { IMAGES } from '../Theme/Image'
import { COLORS, SIZES } from '../Theme/Theme'

export default function AnimalCard({
    idnumber,
    img,
    name,
    weight,
    onPress1,
    onPress2
}) {
  return (
    <>
    <>
    <div style={{ 
                  backgroundColor: COLORS.lightGray2,
                  margin: SIZES.padding,
                  borderRadius: SIZES.radius,
                //   display:'flow',
                //   flexDirection:"column",
                  borderWidth: 0,
                  justifyContent: "space-evenly",
                  shadowColor: COLORS.Primary,
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 2,
                  width:600,
                  height:130,
                  boxShadow:'0px 3px 13px 4px rgba(0,0,0,0.2)'}}>
                    <div style={{width:550, height:110 , display:'flex' , justifyContent:'space-between'}}>
    <img src={img} style={{width:90 , height:90 , marginLeft:30 , marginTop:20  }} />
    <div style={{width :200, maxHeight:110 , textAlign:'left' ,  margin:'auto' , marginTop:7}}>
      <h3 style={{fontSize:18, fontWeight:400 , lineHeight:1.5}}>{idnumber} <br/>
        {name}<br/>
        {weight}lbs
      </h3>
    </div>
    <div style={{width:50 , height:80 , display:'flow', marginTop:20}}>
      <button style={{background:'none' , cursor:'pointer' , border:'none' , height:30}} onClick={onPress1}>
        <img src={IMAGES.right} style={{width:30  , height:30}}/>
      </button>

    <button style={{background:'none' , cursor:'pointer' , border:'none' , height:30, marginTop:10 }} onClick={onPress2}>
    <img src={IMAGES.setImg} style={{width:30  , height:30}}/></button>
    </div>
    </div>

    </div>
    </>
    </>
  )
}

