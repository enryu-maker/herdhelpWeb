import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import useMediaQuery from "../useMediaQuery";
import "./Navbar.css";

function NavBar({
  page,
  navStyle
}) {

  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:400px)') 
  return (
    <>
      <nav style={{
        paddingInline: mobile ? matches ? 30  : 30 : 0,
        display:"flex",
        justifyContent:'space-between',
        backgroundColor:COLORS.white,
        alignSelf:"center",
        height:60,
        maxWidth:"100%",
        ...navStyle
      }}>
        <Link to="/">
          <img
            src={IMAGES.herdhelp}
            alt="logo"
            style={{ height: mobile ? matches ? 60 : 60 : 40, 
              width: mobile ? matches ? 200 : 200 : 125,
              margin:mobile ? matches ? 0 : 0 : '10%',
              alignSelf:"center",
              justifyContent:'space-around',
              display:'flex'
            }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent:"center",
            alignSelf:"center",
            
          }}
        >
          <Link to="/" style={{
            color:page === '/' ? COLORS.Primary : 'black',
            marginLeft:2,
            ...FONTS.h3,
            textDecoration:'none'

          }}>
            Home
            </Link>
          <Link to="/login" style={{
            color:page === '/login' ? COLORS.Primary : 'black',
            marginLeft:20,
            ...FONTS.h3,
            textDecoration:'none'
          }}>
            Login
            </Link>
          <Link to="/signup" style={{
              color:page === '/signup' ? COLORS.Primary : 'black',
            ...FONTS.h3,
            marginLeft:20,
            textDecoration:'none'
          }}>
            Register
            </Link>
        </div>
        
      </nav>
    </>
  );
}

export default NavBar;
