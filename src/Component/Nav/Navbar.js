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

  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)') 
  return (
    <>
      <nav style={{
        paddingInline: mobile ? matches ? 30  : 30 : 0,
        display:"flex",
        justifyContent:'space-between',
        backgroundColor:COLORS.white,
        alignSelf:"center",
        height:60,
        width:"90%",
        maxWidth:"100%",
        ...navStyle
      }}>
        <Link to="/">
          <img
            src={IMAGES.herdhelp}
            alt="logo"
            style={{ 
              height: mobile ? matches ? 60 : 60 : 40, 
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
            // display: "flex",
            // flexFlow: "row",
            // justifyContent:"center",
            alignSelf:"center",
            position:'absolute',
            right:mobile ? '5%' : -5
            
          }}
        >
          <Link to="/" style={{
            color:page === '/' ? COLORS.Primary : 'black',
            // marginLeft:2,
            font: mobile ? FONTS.body2 : FONTS.body3 ,
            textDecoration:'none'

          }}>
            Home
            </Link>
          <Link to="/login" style={{
            color:page === '/login' ? COLORS.Primary : 'black',
            marginLeft:mobile ? 30  : 20,
            font: mobile ? FONTS.body2 : FONTS.body3 ,
            textDecoration:'none',
            marginRight:mobile ? matches ? 0 : 0 : 20,

          }}>
            Login
            </Link>
        </div>
        
      </nav>
    </>
  );
}

export default NavBar;
