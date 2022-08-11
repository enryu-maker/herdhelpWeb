import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBarMain from '../Nav/navmain'
import Sidenav from '../Nav/sidenav'
import { useNavigate } from 'react-router-dom'
import FlatList from 'flatlist-react'
import Loading from '../Loading'
import { COLORS, FONTS, formatter, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import Header from '../Header'
import { getSubs, UserData } from '../../Store/actions'
export default function Subscription() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getSubs())
    dispatch(UserData())
  },[])
  const sub = useSelector(state => state.Reducers.subs)

  function SubCard({ label, price, onPress, description, count }) {
    return (
      <>
        <button
          style={{
            backgroundColor: COLORS.lightGray2,
            height: 250,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            // flexDirection:"column",
            borderWidth: 0,
            justifyContent: "space-evenly",
            shadowColor: COLORS.Primary,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation: 2,
            width: 230,
            cursor: 'pointer',
            boxShadow: '0px 0px 15px -4px #888181',
            alignItems:"center"
          }}
          onClick={onPress}
        >
          <p 
          style={{ 
            ...FONTS.body3,
            position:"fixed",
            marginTop:-30,
            marginLeft:47,
            backgroundColor:COLORS.Primary,
            color:COLORS.white,
            padding:5,
            borderRadius:SIZES.base
            }}>{"Monthly Plan"}</p>
          <p style={{ ...FONTS.h2, margin: 20 }}>{label}</p>
          <p style={{ ...FONTS.h2, margin: 20 }}>{formatter.format(price)}</p>
          <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:COLORS.white,
            alignSelf:"center",
            height:30,
            borderRadius:15
          }}>
            <img src={IMAGES.cow} style={{
              height:30,
              width:30,
              padding:"5px"
            }}/>
          <p style={{ ...FONTS.h3,
              padding:"5px"
          
          }}>X</p>
          <p style={{ ...FONTS.h3,
              padding:"5px"
        
          }}>{count}</p>
          </div>
          <p style={{ ...FONTS.body4, margin: 20 }}>{description}</p>


        </button>
      </>
    )
  }
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      <Sidenav active={"Subscription"}/>
      <div style={{
        width: "90%",
        float: "right",
      }}>
        <NavBarMain />
        
        <Header title={"Choose Your Subscription Plan"}/>
        <ul style={{
          paddingInlineStart: 0,
        }}>
          <FlatList
            list={sub}
            keyExtractor={item => `${item.id}`}
            // displayGrid
            renderItem={(item, index) => {
              return (
                <>
                  {

                    item.label == "Free Tier" ? null :
                      <SubCard label={item.label} price={item.price} description={item.description} count={item.count} />
                  }
                </>
              )

            }
            }
            renderWhenEmpty={() => (<Loading />)}
          />
        </ul>
      </div>

    </div>
  )
}
