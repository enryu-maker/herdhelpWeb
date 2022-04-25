import React, { useState } from 'react'
import NavBar from '../../Component/Nav/Navbar'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";




export default function Home() {
// 
const [bought, setBought] = useState(false);
// 


  return (
    <>
    <div style={{
      flex:1,
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <NavBar page={"home"}/>
    <div style={{display:"flex" ,
    //  backgroundColor:COLORS.layout
     }}>
      
      <div style={{width:650 , height:500 , borderRadius:SIZES.radius, 
      backgroundColor: COLORS.lightGray2 ,
        // backgroundColor:"#eae7dc" ,
      borderRadius:SIZES.radius ,
      padding:30 , justifyContent:"center", alignItems:"center" , margin:20  , paddingTop:10 }}>
      <div style={{display:"flex", flexDirection:"column" ,
      //  justifyContent:"center" ,alignItems:"center", 
      textAlign:"left" ,paddingLeft:30}}>
      <h1 style={{...FONTS.largeTitle}}>Herd Help</h1>

          <p style={{...FONTS.body2, marginTop:30 ,textAlign:"left" }}> Driven by cutting edge technology, we source fresh produce from farmers and wholesaler, pass it through multiple QC and Disinfection stages and deliver it at your doorstep, in Multan.</p>
              <h3 style={{...FONTS.h3}} ></h3>
              <hr style={{width:450, border:'0.5px solid black' , textAlign:'center'}}/>
              <p style={{...FONTS.body2 , textAlign:"center"}} > Available on Playstore and Appstore<br/>  Download the App now
          </p>

          <div className='buttons'>
          <TextButton
          label={" DOWNLOAD for IOS"}
          // icon={IMAGES.add}
          onPress={() => alert(bought)}
          buttonContainerStyle={{
            marginBottom:50,
            margin:10
          }}
        />
          <TextButton
          label={" DOWNLOAD for ANDROID"}
          // icon={IMAGES.add}
          onPress={() => alert(bought)}
          buttonContainerStyle={{
            marginBottom:50,margin:10
          }}
        />
          </div>
      </div>
      </div>
      <div style={{width:550 ,borderRadius:SIZES.radius, 
        backgroundColor: COLORS.lightGray2 , 
        margin:20}}>
        
      </div>
    </div>
    
    </div>
    
    </>  
  )
}
