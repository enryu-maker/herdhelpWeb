import React from 'react'
import InfoCard from '../../Component/InfoCard'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'

export default function Setting() {
  return (
    <>
      <div style={{
        display: "flex",
        // justifyContent:"center",
        height: "100vh",
        width: "100%",

      }}>
        <Sidenav />
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          float: "right",
        }}>
          <NavBarMain />
          <div style={{
            padding:"20px",
            width: 300,
            // height: 200,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.padding,
            marginTop:"50px"
          }}>
            <InfoCard label={"Weight"} value={"Lbs"}/>
          </div>

        </div>
      </div>

    </>
  )
}

