import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfoCard from '../../Component/InfoCard'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import { WeightUnit } from '../../Store/actions'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import useMediaQuery from '../../Component/useMediaQuery';

export default function Setting() {
  const [active, setActive] = React.useState("")
  const [Type, setType] = React.useState([])
  const unit = useSelector(state => state.Reducers.unit)
  const dispatch = useDispatch()
  const setting = [
    {
      label: "Lbs",
      value: true
    },
    {
      label: "Kg",
      value: false
    }
  ]

  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
  return (
    <>
      <div style={{
        display: "flex",
        height: "100vh",
        // width: "100%",

      }}>
        <Sidenav active={'Setting'}/>
        <div style={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          width: "90%",
          // float: "right",
        }}>
          <NavBarMain/>
          <p style={{ ...FONTS.h2, color: COLORS.Primary }}>Setting</p>
        {/* <Header 
        leftcomponent={
          <>
          <div></div>
              {/* <div style={{
                  display: "flex",
                  justifyContent: "center",
                  height: 40,
                  width: 40,
                  backgroundColor: COLORS.Primary,
                  alignSelf: "center",
                  borderRadius: 20
              }}
                  onClick={() => {
                      navigate(-1)
                  }}
              >
                  <img src={IMAGES.back} alt={"back"}
                      style={{
                          height: 25,
                          width: 25,
                          alignSelf: "center",
                      }} />
              </div> */}
          {/* </>
      }
      title={"Setting"}
      rightcomponent={
          <div>
          </div> */}
      {/* }/> */} 
          
          <div style={{
            display:mobile ? matches ? "flex": "flex" : 'grid',
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
            <div style={{
              padding: "20px",
              width: 300,
              // height: 200,
              backgroundColor: COLORS.lightGray2,
              borderRadius: SIZES.padding,
              marginTop: "50px",
              cursor: "pointer"
            }}>
              <InfoCard label={"Weight"} value={"Lbs"} onPress={() => {
                setActive(!active)
                setType(setting)
              }} />
            </div>
            {
              active ?
                <div style={{
                  padding: "20px",
                  width: 300,
                  backgroundColor: COLORS.lightGray2,
                  borderRadius: SIZES.padding,
                  marginLeft: mobile ? "40px" : 0,
                  marginTop: "40px",
                  paddingTop: "0px",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer"
                }}>
                  {
                    Type.map(a => (
                      <InfoCard label={a.label} value={unit === a.value ? "Active" : "Inactive"} onPress={() => {
                        dispatch(WeightUnit(a.value))
                      }} />
                    ))
                  }

                </div> : null
            }
          </div>

        </div>
      </div>

    </>
  )
}

