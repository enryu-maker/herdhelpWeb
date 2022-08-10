import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import "./Navbar.css";
import { useSelector } from "react-redux";



function NavBarMain({
  page,
  navStyle
}) {
  const user = useSelector(state => state.Reducers.userData)
<<<<<<< HEAD
  console.log(user)
  // function Sidemenu({ img, label, path }) {
  //   return (
  //     <>
  //       <Link to={path} style={{ textDecoration: 'none', margin: 0, left: 20 }}>
  //         <button style={{
  //           width: '100%',
  //           height: 45,
  //           display: 'flex',
  //           flexDirection:"row",
  //           left: 40,
  //           background: 'none',
  //           // backgroundColor: label === 'Logout' ? COLORS.gray2 : 'none',
  //           border: 'none',
  //           cursor: 'pointer',
  //           // justifyContent:"space-around",
  //           alignItems:"center"
  //         }}>
  //           <img src={img}
  //             alt="logo"
  //             style={{
  //               width: 25,
  //               height: 25,
  //             }} />
  //           <p style={{
  //             color: label === 'Logout' ? COLORS.red : COLORS.white,
  //             ...FONTS.h3,
  //             padding: '10px',
=======
  function Sidemenu({ img, label, path }) {
    return (
      <>
        <Link to={path} style={{ textDecoration: 'none', margin: 0, left: 20 }}>
          <button style={{
            width: '100%',
            height: 45,
            display: 'flex',
            flexDirection:"row",
            left: 40,
            background: 'none',
            // backgroundColor: label === 'Logout' ? COLORS.gray2 : 'none',
            border: 'none',
            cursor: 'pointer',
            // justifyContent:"space-around",
            alignItems:"center"
          }}>
            <img src={img}
              alt="logo"
              style={{
                width: 25,
                height: 25,
              }} />
            <p style={{
              color: label === 'Logout' ? COLORS.red : COLORS.white,
              ...FONTS.h3,
              padding: '10px',
>>>>>>> d3b9294 (done)


  //           }}>{label}</p></button></Link>
  //     </>
  //   )
  // }



  return (
    <>
      <div style={{ width: '100%', top: 0 }}>
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
                ...FONTS.h3,
                textDecoration: 'none',
              }}>
                Herds
              </Link>
              <Link to="/finance" style={{
                color: page === 'finance' ? COLORS.Primary : "black",
                // textShadow:page === 'finance' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                textDecoration: 'none',
                ...FONTS.h3

              }}>
                Finance
              </Link>
              <Link to="/add" style={{
                color: page === 'add' ? COLORS.Primary : "black",
                // textShadow:page === 'add' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                textDecoration: 'none',
                ...FONTS.h3
              }}>
                Add
              </Link>
              <Link to="/alerts" style={{
                color: page === 'alerts' ? COLORS.Primary : "black",
                // textShadow:page === 'alerts' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                textDecoration: 'none',
                ...FONTS.h3,
              }}>
                Alerts
              </Link>
              
              {/* <Link to="/logout" style={{
            color:page === 'logout' ? COLORS.red : COLORS.red,
            // textShadow:page === 'logout' ? '0px 0px 18px black' : 'none',
            textDecoration:'none',
            ...FONTS.h3,
            marginInline:'2%'
          }}>
            Logout
            </Link> */}
            </div>
          </nav>
          <div>
            <Link to="/profile">
              <button style={{ border: 'none', background: 'none' }} className='btn-navmain'><img
                src={IMAGES.user}
                alt=""
                style={{
                  height: 43,
                  width: 43,
                  alignSelf: "center",
                  justifyContent: 'center',
                  padding: 10,
                  borderRadius:22
                }}
              /></button>

            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/*  */}
      {/* <>
        <div style={{
          position: 'fixed',
          display: 'flow',
          width: 205,
          height: '100%',
          // left: '0%',
          top: 0,
          backgroundColor: COLORS.Primary,
          textDecorationColor: COLORS.black,
          cursor:"pointer"
          // borderRight:'1px solid black',
          // borderTop:'1px solid black'
        }}
        
        >
        <Link to={'/profile'}>
          <div style={{ height: 100 }}>
            <img
              src={user?.profile_picture}
              alt="logo"
              style={{
                position: 'absolute',
                width: 60,
                height: 60,
                left: 10,
                top: 19,
                borderRadius:30

              }}
            />
            <div style={{
              lineheight: 26,
              display: 'flex',
              alignitems: 'center',
              textalign: 'center',
              texttransform: 'capitalize',
              textAlign: 'left',
              width: 'fit-content'
            }}>
              <p style={{
                position: 'absolute',
                height: 26,
                left: 75,
                top: 5,
                ...FONTS.h3,
                color:COLORS.white
              }} >{user?.fullname}</p>
              <p style={{
                position: 'absolute',
                // width: 100,
                height: 26,
                left: 75,
                top: 24,
                ...FONTS.h3,
                color:COLORS.white
              }} >{user?.farm_name}</p>
              <p style={{
                position: 'absolute',
                // width: 65,
                height: 26,
                left: 75,
                top: 45,
                ...FONTS.h3,
                color:COLORS.white
              }} >@{user?.username}</p>
            </div>
          </div>
          </Link>
          <Sidemenu
            img={IMAGES.file}
            label={'Report'}
            path={'/report'}
          />
          <Sidemenu
            img={IMAGES.subs}
            label={'Subscription'}
            path={'/subscription'}
          />
          {/* <hr style={{
            border: '1px solid black' ,
            top: '1%',
            position: 'relative',
            width: '100%',
          }}>
          </hr> */}

          {/* <Sidemenu
            img={IMAGES.weight}
            label={'Weight History'}
            path={'/weighthistory'}
          />
          <Sidemenu
            img={IMAGES.parents}
            label={'Parents'}
            path={'/parents'}
          /> */}

          {/* <hr style={{
            border: '1px solid black',
            top: '1%',
            position: 'relative',
            width: '100%',
          }}>
          </hr> */}

          {/* <div style={{ position: 'absolute', bottom: 40, width: '100%' }}>
          <Sidemenu
              img={IMAGES.setting}
              label={'Setting'}
              path={'/setting'}
            />
            <Sidemenu
              img={IMAGES.logout}
              label={'Logout'}
              path={'/login'}
            />
          </div>
          {/* </div> 

        </div>
      </>  */}
      {/*  */}
=======
>>>>>>> d3b9294 (done)
    </>
      
  );
}

export default NavBarMain;
