import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';
import { COLORS, FONTS } from "../../Theme/Theme";
import useMediaQuery from '../useMediaQuery';


function Footer() {
  const mobile = useMediaQuery('(min-width:460px)') 
  return (
    <>
      <footer style={{
        backgroundColor: COLORS.lightGray2,
        height: 40,
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: mobile ? 'flex' : 'none',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <img src={IMAGES.herdhelp} style={{
          width: 130,
          paddingLeft: "10px",
        }} />
        <p style={{ ...FONTS.body4, paddingRight: "10px", }}>
          &copy;{new Date().getFullYear()} <a target="_blank"  style={{ textDecoration: 'none', color: COLORS.black }} >Grace and Peace LLC (AL) | All right reserved |</a><Link to={'/terms'} style={{ textDecoration: 'none', color: COLORS.black }} > Terms & Service | Privacy</Link>
        </p>

      </footer></>
  )
}

export default Footer