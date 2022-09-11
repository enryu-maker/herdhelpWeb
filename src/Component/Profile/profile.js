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
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      <Sidenav />
      <div style={{
        width: "90%",
        float: "right",
      }}>
        <NavBarMain />
        <Header
          leftcomponent={
            <>
            {
              active?<p style={{
                backgroundColor: COLORS.Primary,
                color: COLORS.white,
                padding: "5px",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                ...FONTS.h2,
                borderRadius: SIZES.base2,
                cursor: "pointer"
              }}
                onClick={() => {
                  setActive(!active)
                }}
              >
                Done
              </p>:<div></div>
            }
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
                onClick={() => {
                  setActive(!active)
                }}
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
              // width: 350,
              backgroundColor: COLORS.lightGray2,
              borderRadius: 25,
              padding: 10,
              paddingTop: '0px'
            }}>
              <InfoCard label={"Full Name"} value={user.fullname} />
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
    </div>
  )
}