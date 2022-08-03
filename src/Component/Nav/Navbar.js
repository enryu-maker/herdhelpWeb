import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import "./Navbar.css";

function NavBar({
  page,
  navStyle
}) {
  return (
    <>
      <nav style={{
        paddingInline:30,
        display:"flex",justifyContent:'space-between',
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
            style={{ height: 60, 
              width: 200,
              alignSelf:"center"
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
          <Link to="/register" style={{
              color:page === '/register' ? COLORS.Primary : 'black',
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
