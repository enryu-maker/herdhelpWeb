import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfoCard from '../../Component/InfoCard'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import { WeightUnit } from '../../Store/actions'
import { IMAGES } from '../../Theme/Image'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'

export default function Setting() {
  const [active, setActive] = React.useState("")
  const [Type, setType] = React.useState([])
  const unit = useSelector(state=>state.Reducers.unit)
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
  return (
    <>
      <div style={{
        display: "flex",
        height: "100vh",
        width: "100%",

      }}>
        <Sidenav active={"Setting"} />
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          float: "right",
        }}>
          <NavBarMain />
          <div style={{
            display: "flex",
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
              cursor:"pointer"
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
                  marginLeft: "40px",
                  marginTop: "40px",
                  paddingTop:"0px",
                  justifyContent:"center",
                  alignItems:"center"
                }}>
                  {
                    Type.map(a => (
                      <InfoCard label={a.label} value={unit == a.value?"Active":"Inactive"} onPress={()=>{
                        dispatch(WeightUnit(a.value))
                      }}/>
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

