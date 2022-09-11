import React from 'react'
import NavBarMain from '../Nav/navmain'
import Sidenav from '../Nav/sidenav'
import Header from '../Header'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import InfoCard from '../InfoCard'
import { useDispatch, useSelector } from 'react-redux'
import ImageUploading from 'react-images-uploading';
import InputForm from '../InputForm'
import { IMAGES } from '../../Theme/Image'
import { UserData } from '../../Store/actions'
import Modal from 'react-modal';
import useMediaQuery from '../useMediaQuery'
import TextButton from '../TextButton'


export default function Profile() {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(UserData())
  },[])
  const [active, setActive] = React.useState(false)
  const [name, setName] = React.useState("")

  const [profile_pic, setprofile_pic] = React.useState([]);
  const user = useSelector(state => state.Reducers.userData)
  const onChange = (imageList) => {
    setprofile_pic(imageList);
  };
// 
const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)')  
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
// 

  return (
    <>
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      <Sidenav />
      <div style={{
        width: mobile ? matches ? "100%" : "90%" : "100%",
        float: "right",
      }}>
        <NavBarMain />
        <Header
          leftcomponent={
            <>
           <div>

           </div>
            </>
          }
          title={"Profile Section"}
          rightcomponent={
            <>
              <p style={{
                backgroundColor: COLORS.Primary,
                color: COLORS.white,
                padding: "5px",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                ...FONTS.h2,
                borderRadius: SIZES.base2,
                marginRight:!active? -70:0,
                cursor: "pointer"
              }}
                onClick={openModal}
              >
                EDIT
              </p>
            </>
          }
        />
        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          overflowY: 'scroll',
          height: "70vh",
          marginBottom: "80px"
        }}>
          <div>
            <img
              src={user?.profile_picture==null?`https://ui-avatars.com/api/?name=${user?.username}`: user?.profile_picture}
              alt={"Pro"}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50
              }}
            />
            <div style={{
              width: mobile ? matches ?  550 : 550 : 390,
              // height:400,
              backgroundColor: COLORS.lightGray2,
              borderRadius: 25,
              padding: 10,
              paddingTop: '0px'
            }}>
              <InfoCard label={"Full Name"} value={user.fullname}/>
              <InfoCard label={"Username"} value={user.username} />
              <InfoCard label={"Phone Number"} value={user.phone} />
              <InfoCard label={"Email"} value={user.email} withDivider={false} />

            </div>
            <div style={{
              // width: 350,
              backgroundColor: COLORS.lightGray2,
              borderRadius: 25,
              padding: 10,
              paddingTop: '0px',
              marginTop: "10px"
            }}>
              <InfoCard label={"Farm Name"} value={user.farm_name} />
              <InfoCard label={"Address"} value={user.address} withDivider={false} />
            </div>
          </div>
        </div>
      </div>
    
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
           margin : mobile ? null : -40,
           display :  'grid',
           justifyContent:'center',
          //  width:mobile ? matches ? '100%' : '100%' : '100%',
          
         },
         content: {
           position: 'absolute',
         //   top: '40px',
         //   left: '40px',
         //   right: '800px',
         //   bottom: '40px',
         width:  mobile ? matches ? '100%': '90%' : '80%',
        // width:200,
        // margin:20,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
           border: '1px solid transparent',
           background: COLORS.layout,
         //   overflow: 'auto',
         //   WebkitOverflowScrolling: 'touch',
           borderRadius: 20,
           outline: 'none',
           display:'grid',
           justifyContent:'center',
           marginLeft:mobile ? matches ? '-10vh' : null : null,
           padding:-20
           
           
         }
       }}
     >
      {/* <InputForm/> */}

<div style={{backgroundColor:COLORS.layout ,
              width:mobile ? matches ? '50vh' : '50vh' : '40vh' ,
              borderRadius:SIZES.radius, 
              display:'grid', 
              padding:30,
              justifyItems:'center' }} >
<p style={{ ...FONTS.h2, color: COLORS.Primary }}>Edit Account</p>

<InputForm
              type={"Text"}
              value={user.fullname}
              // value={name}
              label={"Full Name"}
              // onChange={}
            />
<InputForm
              type={"Phone Number"}
              value={user.phone}
              // value={name}
              label={"Phone Number"}
              // onChange={}
            />

<InputForm
              type={"Text"}
              value={user.farm_name}
              // value={name}
              label={"Farm Name"}
              // onChange={}
            />
<InputForm
              type={"Text"}
              value={user.address}
              // value={name}
              label={"Address"}
              // onChange={}
            />
<TextButton 
icon={IMAGES.update}
label={"Save"}
onPress={closeModal}/>
</div>

     </Modal>
     </div>
     </>
  )
}