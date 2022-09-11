import React, { useState } from 'react'
import NavBar from '../../Component/Nav/Navbar'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { Link } from 'react-router-dom';
import useMediaQuery from '../../Component/useMediaQuery';





export default function Home() {
  // 
  // const [bought, setBought] = useState(false);
  // 

  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)')


  function Desktop_tab() {
    return (
      <>
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
                ...FONTS.body2,
                fontSize: 20
              }}>
                Herd Help is a farm documentation app that assist you in charting the herds activities.<br></br>
                Documentation from insemination to medical records. Herd help does documentation for cows, sheep, goats, pigs, horses and rabbits.<br></br>
                This allows you to grow a stronger healthier herd.  Identifying profitable and unprofitable animals is the key to seeing profits.
              </h4>

              <div>
                <h3 style={{
                  position: "relative", top: 510, color: COLORS.Primary,
                  ...FONTS.h1,
                }}>Download App From</h3>
                  <img src={IMAGES.appstore} alt={''}
                  style={{ width: 260,height:50 }}
                  onClick={() => {
                    window.open('https://testflight.apple.com/join/LAn2RBih', '_blank');
                  }}
                />
                <img src={IMAGES.playstore} alt={''}
                  onClick={() => {
                    window.open('https://play.google.com/store/apps/details?id=com.herdhelp', '_blank');
                  }}
                  style={{ width: 260,height:50 }}
                  />
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



  return (
    <>
      <NavBar page={'/'} />
      {
        mobile ? matches ? <> <Desktop_tab /> </> : <> <Desktop_tab /> </> :
          <>
            <div style={{ display: 'grid', background: 'linear-gradient(149.42deg, #D3F3D2 6.44%,rgba(5, 255, 0, 0.58) 58.02%, rgba(114, 242, 111, 0.81) 89.24%, rgba(4, 200, 0, 0.46) 136.74%);' }}>
              <div style={{ width: '100%', height: '45vh', display: 'flex' }}>
                <div style={{ width: '100%', display: 'flex', left: 0, position: 'relative' }}>
                  <h2 style={{
                    position: 'absolute',
                    width: 400,
                    color: COLORS.Primary,
                    textAlign: 'left',
                    top: 40,
                    // ...FONTS.body1,
                    fontFamily: 'sans-serif',
                    fontSize: 30,
                    left: 10
                  }}>Herd's<br /> Management Tool
                  </h2>
                  <h5 style={{
                    position: 'relative',
                    width: 350,
                    color: COLORS.black,
                    textAlign: 'left',
                    top: 150,
                    ...FONTS.body2,
                    fontSize: 16,
                    left: 10
                  }}
                  >
                    Herd Help is a farm documentation app that assist you in charting the herds activities.
                    Documentation from insemination to medical records. Herd help does documentation for cows, sheep, goats, pigs, horses and rabbits.
                    This allows you to grow a stronger healthier herd.  Identifying profitable and unprofitable animals is the key to seeing profits.
                  </h5>
                </div>
              </div>


              {/* <h3>Douwnload for Android and Ios</h3> */}

              {/* <button style={{display:'flex' ,justifyContent:'space-around' }}>
              <img src={IMAGES.playstore} alt="" style={{width:30 , height:30 }} />
             <h3 style={{...FONTS.h3}}>Playstore</h3>
            </button>

            <button style={{width: 150 , height:50,display:'flex'}}>
              <img src={IMAGES.appstore} alt="" />
            Appstore
            </button> */}

{/* <div style={{marginTop:100}}>
              {/* <div style={{marginTop:100}}>
<img src={IMAGES.img1} style={{width:300 , backgroundColor:COLORS.Primary , padding:5 , borderRadius:10}} />
<img src={IMAGES.img1} style={{width:300 , backgroundColor:COLORS.Primary , padding:5 , borderRadius:10}} />
</div> */}
              <h3 style={{
                position: 'relative', left: 0, top: 0,
                color: COLORS.Primary,
                ...FONTS.body2,
              }}>Download App From </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', top: 0, paddingInline: 30 }}>
                <img src={IMAGES.appstore} alt={''}
                  style={{ width: 160,height:50 }}
                  onClick={() => {
                    window.open('https://testflight.apple.com/join/LAn2RBih', '_blank');
                  }}
                />
                <img src={IMAGES.playstore} alt={''}
                  onClick={() => {
                    window.open('https://play.google.com/store/apps/details?id=com.herdhelp', '_blank');
                  }}
                  style={{ width: 160,height:50 }}
                  />
              </div>

            </div>
          </>
      }

    </>
  )
}
