import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS  } from '../../Theme/Theme'
import './Navbar.css'
import { useSelector } from "react-redux";

export default function Sidenav() {
  const user = useSelector(state => state.Reducers.userData)


  function Sidemenu({ img, label, path }) {
    return (
      <>
        <Link to={path} style={{ textDecoration: 'none', margin: 0, left: 20 }}>
          <button style={{
            width: '100%',
            height: 45,
            display: 'flex',
            flexDirection:"row",
<<<<<<< HEAD
            left: 40,
=======
            // left: 40,
>>>>>>> d3b9294 (done)
            background: 'none',
            // backgroundColor: label === 'Logout' ? COLORS.gray2 : 'none',
            border: 'none',
            cursor: 'pointer',
            // justifyContent:"space-around",
<<<<<<< HEAD
            alignItems:"center"
          }}>
            {/* <img src={img}
=======
            alignItems:"center",
            paddingLeft:"10px"
          }}>
            <img src={img}
>>>>>>> d3b9294 (done)
              alt="logo"
              style={{
                width: 25,
                height: 25,
<<<<<<< HEAD
              }} /> */}
=======
              }} />
>>>>>>> d3b9294 (done)
            <p style={{
              color: label === 'Logout' ? COLORS.red : COLORS.white,
              ...FONTS.h3,
              padding: '10px',


            }}>{label}</p></button></Link>
      </>
    )
  }
<<<<<<< HEAD

=======
>>>>>>> d3b9294 (done)






  return (
    <>
        <div style={{
<<<<<<< HEAD
          position: 'fixed',
          // display: 'flow',
          width: 205,
          height: '100%',
          // left: '0%',
          top: 0,
          backgroundColor: COLORS.Primary,
          textDecorationColor: COLORS.black,
          cursor:"pointer"
          // borderRight:'1px solid black',
          // borderTop:'1px solid black'
=======
          position:"sticky",
          display: 'flex',
          // justifyContent:"flex-start",
          backgroundColor: COLORS.Primary,
          textDecorationColor: COLORS.black,
          cursor:"pointer",
          paddingInlineEnd:"40px"
          // width:"22%"
>>>>>>> d3b9294 (done)
        }}
        
        >
        <Link to={'/profile'}>
<<<<<<< HEAD
          <div style={{ height: 100 }}>
=======
          <div style={{ height: 100,width:0 }}>
>>>>>>> d3b9294 (done)
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
<<<<<<< HEAD
=======
              flexDirection:"column",
>>>>>>> d3b9294 (done)
              alignitems: 'center',
              textalign: 'center',
              texttransform: 'capitalize',
              textAlign: 'left',
<<<<<<< HEAD
              width: 'fit-content'
=======
              // width: 'fit-content',
              // marginLeft:'30px'
>>>>>>> d3b9294 (done)
            }}>
              <p style={{
                position: 'absolute',
                height: 26,
<<<<<<< HEAD
                left: 75,
=======
                left: 85,
>>>>>>> d3b9294 (done)
                top: 5,
                ...FONTS.h3,
                color:COLORS.white
              }} >{user?.fullname}</p>
              <p style={{
                position: 'absolute',
                // width: 100,
                height: 26,
<<<<<<< HEAD
                left: 75,
=======
                left: 85,
>>>>>>> d3b9294 (done)
                top: 24,
                ...FONTS.h3,
                color:COLORS.white
              }} >{user?.farm_name}</p>
              <p style={{
                position: 'absolute',
                // width: 65,
                height: 26,
<<<<<<< HEAD
                left: 75,
=======
                left: 85,
>>>>>>> d3b9294 (done)
                top: 45,
                ...FONTS.h3,
                color:COLORS.white
              }} >@{user?.username}</p>
            </div>
          </div>
          </Link>
<<<<<<< HEAD
=======
          <div style={{
            flexDirection:"column",
            marginTop:100
          }}>
>>>>>>> d3b9294 (done)
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

          <Sidemenu
            img={IMAGES.weight}
            label={'Weight/History'}
            path={'/weighthistory'}
          />
          <Sidemenu
            img={IMAGES.parents}
            label={'Parents'}
            path={'/parents'}
          />

          {/* <hr style={{
            border: '1px solid black',
            top: '1%',
            position: 'relative',
            width: '100%',
          }}>
          </hr> */}
<<<<<<< HEAD

=======
          </div>
>>>>>>> d3b9294 (done)
          <div style={{ position: 'absolute', bottom: 40, width: '100%' }}>
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
          {/* </div> */}

        </div>
<<<<<<< HEAD
        {/*  */}
      </>
    
=======
      </>

>>>>>>> d3b9294 (done)
  )
}

