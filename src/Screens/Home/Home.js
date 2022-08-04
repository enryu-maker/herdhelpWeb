import React, { useState } from 'react'
import NavBar from '../../Component/Nav/Navbar'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { Link } from 'react-router-dom';





export default function Home() {
  // 
  // const [bought, setBought] = useState(false);
  // 






  return (
    <>
      <NavBar page={'/'} />
      <div style={{ backgroundColor: COLORS.white, }}>
        <div style={{
          display: 'inline-flex',
          justifyContent: 'space-between',
          alignSelf: 'center',

          width: '100%',
          height: 600,
        }}>
          <div style={{
            // backgroundColor:COLORS.lightGray1, 
            width: '40%',
            height: '60%',
            position: 'absolute',
            left: 100
          }}>
            <h3 style={{
              position: 'absolute',
              width: 400,
              color: COLORS.Primary,
              textAlign: 'left',
              top: 80,
              fontSize: 40,
              ...FONTS.largeTitle
            }}>Herd's Management Tool
            </h3>
            <h4 style={{
              position: 'absolute',
              width: 500,
              color: COLORS.black,
              textAlign: 'left',
              top: 250,
              ...FONTS.h2,
              fontSize: 20
            }}>Herdhelp is an online herd Management<br /> tool used for management of animals it is an overall solution to your farm problems
            </h4>

            <div>
              <h3 style={{
                position: 'absolute', top: 400, color: COLORS.black,
                ...FONTS.h2,
              }}>Download From</h3>
              <button style={{
                position: 'absolute',
                top: 500,
                left: 0,
                border: 'none',
                background: COLORS.Primary,
                borderRadius: 20,
                width: 277,
                height: 62,
                fontSize: 18,
                cursor: 'pointer',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center', gap: 10,
                ...FONTS.h2,
              }}>
                <img src={IMAGES.appstore} alt={''}
                  style={{ width: 40 }} />
                App Store</button>
              <button style={{
                position: 'absolute',
                top: 500,
                left: 300,
                border: 'none',
                background: COLORS.Primary,
                // background:'rgba(255,255,255,0.08)', 
                borderRadius: 20,
                width: 277,
                height: 62,
                fontSize: 18,
                cursor: 'pointer',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center', gap: 10,
                ...FONTS.h2,
              }}><img src={IMAGES.playstore} alt={''}
                style={{ width: 35 }} />Play Store</button>
            </div>
          </div>
          <div style={{
            // backgroundColor:COLORS.lightGray1, 
            width: '40%',
            height: '100%',
            right: 0,
            position: 'absolute',
            right: 0,
          }}>
            <div style={{
              width: "100%",
              height: 800,
              display: 'inline-flex',
              top: 100,
              // right:150,
            }}>
              <img src={IMAGES.img1}
                style={{
                  width: 250,
                  height: 500,
                  position: 'absolute',
                  top: 30,
                  backgroundColor: COLORS.layout,
                  borderRadius: 20,
                  border: '1px solid transparent',
                }} />
              <img src={IMAGES.img2}
                style={{
                  width: 250,
                  height: 500,
                  left: 190,
                  top: 70,
                  border: '1px solid transparent',
                  position: 'absolute',
                  backgroundColor: COLORS.lightGray1,
                  borderRadius: 20,
                }} />
            </div>
          </div>
        </div>

        {/*  */}

      </div>
    </>
  )
}
