import React from 'react'
// 
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//
import { Link } from 'react-router-dom'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS  } from '../../Theme/Theme'
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import FlatList from 'flatlist-react'
import { baseURL } from '../../helpers/helpers'
import LineDivider from '../LineDivider'
import Loading from '../Loading'
import { getSpecies, getTags, UserData } from '../../Store/actions'


// import { useAlert } from 'react-alert'
// import { render } from 'react-dom'
import { transitions, positions,types , Provider as AlertProvider } from 'react-alert'

// import Media from 'react-responsive'

import useMediaQuery from '../useMediaQuery'
// 

export default function Modal_side({
    active
  }) {
// 
let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000000c4';
  }

  function closeModal() {
    setIsOpen(false);
  }
// 

const dispatch =useDispatch()
  React.useEffect(()=>{
    dispatch(getSpecies(),getTags(),UserData())
  },[])
  const user = useSelector(state => state.Reducers.userData)
  const overview = useSelector(state => state.Reducers.overview)  
  const options = {
    offset: '30px',
    position: positions.TOP_CENTER,
    timeout: 0,
    transition: transitions.SCALE,
    type: types.SUCCESS,
    
  }
//   const matches = useMediaQuery('(max-width:820px)')



  function Sidemenu({ img, label, path, onPress }) {
    return (
      <>


        <Link to={path} style={{ textDecoration: 'none', margin: 0, left: 20 }}>
          <button style={{
            width: '100%',
            height: 45,
            display: 'flex',
            flexDirection:"row",
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            alignItems:"center",

          }}
          onClick={onPress}
          >
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


            }}>{label}</p>
            {
              active==label?
            
            <img src={IMAGES.sideback}
              alt="logo"
              style={{
                width: 25,
                height: 25,
                marginLeft:195,
                position:"fixed",
                justifyContent:"center"
              }} /> :null}
            </button></Link>
      </>
    )
  }


  return (
    <>
    
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        // contentLabel="Example Modal"
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              padding:'none'
            },
            content: {
              position: 'absolute',
            //   top: '40px',
            //   left: '40px',
            //   right: '800px',
            //   bottom: '40px',
            width:'250px',
              border: '1px solid transparent',
              background: COLORS.Primary,
            //   overflow: 'auto',
            //   WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              
            }
          }}
        >
       <>
       <div style={{
          position: 'fixed',
          height:'100%',
          backgroundColor: COLORS.Primary,
          textDecorationColor: COLORS.black,
          cursor:"pointer",
          position: 'relative' ,
          display: 'flex',
          backgroundColor: COLORS.Primary,
          textDecorationColor: COLORS.black,
          cursor:"pointer",
          width:250  ,
        //   left:'-100%'
        }}
        id='Sidenav'
        >
            
             {/* <button onClick={closeModal}>close</button> */}
             <button style={{  width:50 , 
                  height:50 , 
                  position:'absolute' , 
                  right:0 , 
                  background:'none' , 
                  cursor:'pointer', 
                  border:'1px solid black' , 
                  borderRadius:20 }} 
onClick={closeModal} > <img alt='' src={IMAGES.close} /> </button>
<Link to={'/profile'} style={{width:250, height:100 , position:'absolute' , top:40 }}>
          <div style={{ height: 100,width:207 ,  position: 'absolute', top: 0, display:'flex' , justifyContent:'space-evenly'  }}>
            <img
              src={user?.profile_picture==null?`https://ui-avatars.com/api/?name=${user?.username}`: user?.profile_picture}
              alt={"Pro"}
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
              // lineheight: 26,
              display: 'flex',
              flexDirection:"column",
              alignitems: 'center',
              textalign: 'center',
              texttransform: 'capitalize',
              textAlign: 'left',
              width: 250,
              height:50,
              // backgroundColor :COLORS.layout

              // width: 'fit-content',
            }}>
              <p style={{
                position: 'absolute',
                height: 26,
                left: 85,
                top: 5,
                ...FONTS.h3,
                color:COLORS.white
              }} >{user?.fullname}</p>
              <p style={{
                position: 'absolute',
                // width: 100,
                height: 26,
                left: 85,
                top: 24,
                ...FONTS.h3,
                color:COLORS.white
              }} >{user?.farm_name}</p>
              <p style={{
                position: 'absolute',
                // width: 65,
                height: 26,
                left: 85,
                top: 45,
                ...FONTS.h3,
                color:COLORS.white
              }} >@{user?.username}</p>
            </div>
          </div>
          </Link>


          <div style={{
            flexDirection:"column",
            marginTop:150, 
            paddingLeft:'15px',
          }}>

          {/* <Sidemenu
            img={IMAGES.file}
            label={'Report'}
            path={'/report'}
          /> */}
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
            label={'Weight History'}
            path={'/weighthistory'}
          />
          <Sidemenu
            img={IMAGES.parents}
            label={'Parents'}
            path={'/parents'}
          />
          <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <LineDivider/>
          <Sidemenu
              img={IMAGES.setting}
              label={'Setting'}
              path={'/setting'}
            />
            <Sidemenu
              img={IMAGES.logout}
              label={'Logout'}
              path={'/out'}
              onPress={()=>{
                localStorage.clear()
              }}
            />
          </div>
          <LineDivider/>
        </div>
        </div>
          
       </>
      </Modal>
    
    </>
  )
}

