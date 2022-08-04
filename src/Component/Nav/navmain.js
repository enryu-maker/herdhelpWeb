import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS } from "../../Theme/Theme";
import "./Navbar.css";




function NavBarMain({
  page,
  navStyle
}) {
  // var {nav , setNavbar} = useState(true);


  // const changeBackground = () => {
  //   if(window.scrollY >= 75 ){
  //     setNavbar=(true)
  //   }else(
  //     setNavbar=(false)
  //   )
  // }
  // window.addEventListener( `scroll`,changeBackground);

  function Sidemenu({ img, label, path }) {
    return (
      <>
        <Link to={path} style={{ textDecoration: 'none', margin: 0, left: 20 }}>
          <button style={{
            width: '100%',
            height: 45,
            display: 'flex',
            left: 40,
            background:'none',
            // backgroundColor: label === 'Logout' ? COLORS.gray2 : 'none',
            border: 'none',
            borderBottom: '1px solid black', 
            cursor: 'pointer'
          }} className='menu'>
            <img src={img}
              alt="logo"
              style={{
                width: 28,
                height: 28,
                marginLeft: 20,
                marginTop: 7,
                display: 'block',
              }} />
            <h3 style={{
              color: label === 'Logout' ? COLORS.red : COLORS.black,
              // color:COLORS.black,
              fontWeight: 300,
              marginLeft: 20,
              fontWeight:500
            }} >{label}</h3></button></Link>
      </>
    )
  }

  // const sidebar = useState(false)
  // let openside = document.getElementById('sidebar')
  // let closeside = document.getElementById('sidebar')
  // function openSidebar(){
  //   openside.style.left = '0%';
  // }
  // function closeSidebar(){
  //   closeside.style.left = '-100px';
  // }

  return (
    <>
      <div style={{ width: '100%', top: 0 }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'none'
            }}
              onClick={() => { document.getElementById("sidebar").style.left = '0%'; }} className='btn-navmain'>
              <img
                src={IMAGES.menuios}
                alt="logo"
                style={{
                  height: 25,
                  width: 25,
                  marginLeft: 30,
                  background: COLORS.Primary,
                  borderRadius: 30,
                  alignSelf: "center",
                  padding: '10px',
                  margin: 10
                }}
              />
            </button>




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
              <Link to="/main" style={{
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
              <Link to="/Setting" style={{
                color: page === 'Setting' ? COLORS.Primary : "black",
                // textShadow:page === 'Setting' ? '0px 0px 18px black' : 'none',
                marginInline: '2%',
                ...FONTS.h3,
                textDecoration: 'none',
              }}>
                Settings
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
                src={IMAGES.login}
                alt="logo"
                style={{
                  height: 43,
                  width: 43,
                  alignSelf: "center",
                  justifyContent: 'center',
                  padding: 10
                }}
              /></button>

            </Link>
          </div>
        </div>
      </div>

      {/*  */}
      <>
        <div style={{ width: '100%', display: 'flex', position: 'fixed', height: 'fit-window', backgroundColor: COLORS.lightGray1 }}></div>
        <div style={{
          position: 'fixed',
          width: 298,
          height: '100%',
          left: '-100%',
          top: 0,
          backgroundColor: COLORS.white,
          textDecorationColor:COLORS.black
        }} id='sidebar'>
          <div style={{ height: 100 }}>
            <img
              src={IMAGES.login}
              alt="logo"
              style={{
                position: 'absolute',
                width: 48,
                height: 48,
                left: 28,
                top: 39,

              }}
            />
            <div style={{
              fontfamily: 'Poppins',
              fontstyle: 'normal',
              lineheight: 26,
              /* identical to box height, or 162% */
              display: 'flex',
              alignitems: 'center',
              textalign: 'center',
              texttransform: 'capitalize',
              // color: '#FFFFFF',
              textAlign: 'left',
              width: 'fit-content'
            }}>
              <h3 style={{
                position: 'absolute',
                width: 65,
                height: 26,
                left: 95,
                top: 25,
                fontSize: 15
              }} >Mr. Jhon</h3>
              <h3 style={{
                position: 'absolute',
                width: 100,
                height: 26,
                left: 95,
                top: 43,
                fontSize: 15
              }} >Robins Farm</h3>
              <h3 style={{
                position: 'absolute',
                width: 65,
                height: 26,
                left: 95,
                top: 60,
                fontSize: 15
              }} >@jhon</h3>
            </div>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              paddig: 'none',
              display: 'flex',
              position: 'absolute', right: 0
            }}
              onClick={() => { document.getElementById("sidebar").style.left = '-100%'; }}
              className='btn-navmain-close' >
              <img
                src={IMAGES.close}
                alt="logo"
                style={{
                  position: 'absolute',
                  width: 33,
                  height: 33,
                  right: 20,
                  top: 19,
                }}
              /></button>
          </div>
          <hr style={{
            border: '1px solid black',
            top: '1%',
            position: 'relative',
            width: '100%',
          }}>
          </hr>


          <Sidemenu
            img={IMAGES.home}
            label={'Home'}
            path={'/main'}
          />
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
          <hr style={{
            border: '1px solid' ,
            top: '1%',
            position: 'relative',
            width: '100%',
          }}>
          </hr>

          <Sidemenu
            img={IMAGES.weight}
            label={'Weight History'}
            path={'/weighthistory'}
          />
          <Sidemenu
            img={IMAGES.parents}
            label={'Parents'}
            path={'/parents'}
          />

          <hr style={{
            border: '1px solid black',
            top: '1%',
            position: 'relative',
            width: '100%',
          }}>
          </hr>

          <div style={{ position: 'absolute', bottom: 40, width: '100%' }}>
            <Sidemenu
              img={IMAGES.logout}
              label={'Logout'}
              path={'/login'}
            />
          </div>
          {/* </div> */}

        </div>
      </>
      {/*  */}
    </>
  );
}

export default NavBarMain;
