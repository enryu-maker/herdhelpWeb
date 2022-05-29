import React from 'react'
import { Link } from 'react-router-dom'

import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'

export default function add() {

function Cards({
        Name,
       img,
        onPress,
        Path,
      }) {
        return (
          <>
          <Link to={Path}>
            <button
              style={{
                backgroundColor:COLORS.lightGray2,
                height: 250,
                margin: SIZES.padding,
                borderRadius: SIZES.radius,
                // flexDirection:"column",
                borderWidth: 0,
                justifyContent: "space-evenly",
                shadowColor: COLORS.Primary,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 2,
                width: 230,
              }}
              onClick={onPress}
            >
                {/* <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} /> */}
                <img src={img} alt={Name} style={{ height: 80, width: 80,alignSelf:"center"}} />
              <div>
                  <div style={{
                  textAlign:'center'
              }}>
              <p style={{...FONTS.h4 , margin:20}}>{Name}</p>
              {/* <p style={{...FONTS.h4}}>{global.unit?`${Weight} lbs`:`${weight_kg} kg`}</p> */}
              </div>
              <div style={{
                  display:"flex",
                  flexFlow:"column"
              }}>
                {/* <img src={Gender=="Male"? IMAGES.male:IMAGES.female} style={{ height: 50, width: 50,marginTop:25}} /> */}
              </div>
              </div>
              
      
      
            </button></Link>
          </>)}

  return (
    <>
    <NavBarMain/>
    <div>
        <Cards
        img={IMAGES.add}
        Name={'Add Animals'}
        Path={'/animals'}
        />
        <Cards
        img={IMAGES.medicines}
        Name={'Add Medication'}
        Path={'/medication'}
        />
        <Cards
        img={IMAGES.weight}
        Name={'Update Weight'}
        Path={'/weight'}
        />
    </div>
    </>
  )
}

