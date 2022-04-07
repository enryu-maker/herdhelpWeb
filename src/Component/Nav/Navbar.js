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
        // display:"flex",
        backgroundColor:COLORS.Primary,
        alignSelf:"center",
        height:75,
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
            alignSelf:"center"
          }}
        >
          <Link to="/" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page=="home"?"underline":"none",
            ...FONTS.h3,


          }}>
            Home
            </Link>
          <Link to="/login" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page=="login"?"underline":"none",
            ...FONTS.h3

          }}>
            Login
            </Link>
          <Link to="/register" style={{
            color: COLORS.white,
            textDecorationLine:page=="register"?"underline":"none",
            ...FONTS.h3,
            marginLeft:20

          }}>
            Register
            </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
