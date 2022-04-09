import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import "./Navbar.css";

function NavBarMain({
  page,
  navStyle
}) {
  return (
    <>
      <nav style={{
        display:"flex",
        backgroundColor:COLORS.Primary,
        alignSelf:"center",
        height:75,
        maxWidth:"100%",
        ...navStyle
      }}>
        <Link to="/main">
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
          <Link to="/main" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page==="home"?"underline":"none",
            ...FONTS.h3,
          }}>
            Home
            </Link>
          <Link to="/profile" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page==="profile"?"underline":"none",
            ...FONTS.h3

          }}>
            Profile
            </Link>
            <Link to="/report" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page==="report"?"underline":"none",
            ...FONTS.h3

          }}>
            Report
            </Link>
            <Link to="/history" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page==="history"?"underline":"none",
            ...FONTS.h3

          }}>
            WeightHistory
            </Link>
            <Link to="/Parents" style={{
            color: COLORS.white,
            marginLeft:20,
            textDecorationLine:page==="parents"?"underline":"none",
            ...FONTS.h3

          }}>
            Parents
            </Link>
          <Link to="/" style={{
            color: COLORS.white,
            textDecorationLine:"none",
            ...FONTS.h3,
            marginLeft:20

          }}>
            Logout
            </Link>
        </div>
      </nav>

    </>
  );
}

export default NavBarMain;
