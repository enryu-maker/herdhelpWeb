import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';
import { COLORS, FONTS } from "../../Theme/Theme";


function Footer() {
  return (
    <>
      <footer style={{
        backgroundColor: COLORS.lightGray2,
        height: 40,
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <img src={IMAGES.herdhelp} style={{
          width: 130,
          paddingLeft: "10px",
        }} />
        <p style={{ ...FONTS.body4, paddingRight: "10px", }}>
          &copy;{new Date().getFullYear()} <a href="https://nerdtech.in" target="_blank"  style={{ textDecoration: 'none', color: COLORS.black }} >NerdTech | All right reserved |</a><Link to={'/terms-and-condition'} style={{ textDecoration: 'none', color: COLORS.black }} > Terms of Service | Privacy</Link>
        </p>

      </footer></>
  )
}

export default Footer