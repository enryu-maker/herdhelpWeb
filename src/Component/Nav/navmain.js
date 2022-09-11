import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import "./Navbar.css";
import { useSelector } from "react-redux";
import Sidenav from "./sidenav";
import useMediaQuery from "../useMediaQuery";



function NavBarMain({
  page,
  navStyle
}) {
  const user = useSelector(state => state.Reducers.userData)
  
  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:420px)') 
  return (
    <>
      <div style={{ width: '100%', top: 0 , left:40  , display:mobile ? matches ? 'block' : null : 'none'}}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div>
            
          </div>

          <nav style={{
            display: 'flex',
            paddig: '1% 4%',
            justifyContent: 'space-between',
            width: '100%',
          }}
            className='nav'
          //  className={nav ? 'nav active': 'nav'}
          >

            <div
              style={{
                flex: 1,
                padding: '1%',
                fontFamily: 'arial'
              }}
            >
              <Link to="/" style={{
                color: page === 'herds' ? COLORS.Primary : "black",
                // textShadow:page === 'herds' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                ...FONTS.body2,
                textDecoration: 'none',
              }}>
                Herds
              </Link>
              <Link to="/finance" style={{
                color: page === 'finance' ? COLORS.Primary : "black",
                // textShadow:page === 'finance' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                textDecoration: 'none',
                ...FONTS.body2

              }}>
                Finance
              </Link>
              <Link to="/add" style={{
                color: page === 'add' ? COLORS.Primary : "black",
                // textShadow:page === 'add' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                textDecoration: 'none',
                ...FONTS.body2
              }}>
                Add
              </Link>
              <Link to="/report" style={{
                color: page === 'report' ? COLORS.Primary : "black",
                marginInline: '2%',
                textDecoration: 'none',
                ...FONTS.body2,
              }}>
                Report
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
      
  );
}

export default NavBarMain;
