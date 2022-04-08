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
      flex:1
    }}>
      <NavBar page={"home"}/>
    <div style={{display:"flex"}}>
      <div style={{width:400}}>
        
      </div>
      <div style={{width:500 , height:650 , borderRadius:SIZES.radius, backgroundColor: COLORS.lightGray2 ,
      padding:30}}>
      <h1 style={{...FONTS.largeTitle,margin:'auto'}}>Herd Help</h1>

          <p style={{...FONTS.body1}}> Herd help give solution of managing herds</p>
              <h3 className='h3-text'>Available on Playstore and Appstore</h3>
              <p className='p-text'>   Download the App now
          </p>

          <div className='buttons'>
          <TextButton
          label={" DOWNLOAD for IOS"}
          // icon={IMAGES.add}
          onPress={() => alert(bought)}
          buttonContainerStyle={{
            marginBottom:50
          }}
        />
          <TextButton
          label={" DOWNLOAD for ANDROID"}
          // icon={IMAGES.add}
          onPress={() => alert(bought)}
          buttonContainerStyle={{
            marginBottom:50
          }}
        />
          </div>
      </div>
      
    </div>
    
    </div>
    
    </>  
  )
}
