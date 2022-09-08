import React from 'react'
import { Link } from 'react-router-dom';
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from '../../Theme/Image';
import { COLORS, FONTS, SIZES } from '../../Theme/Theme';
import './report.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baseURL } from '../../helpers/helpers';
import FlatList from 'flatlist-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getReports } from '../../Store/actions';
import Sidenav from '../../Component/Nav/sidenav';
import Loading from '../../Component/Loading';
import Header from '../../Component/Header';
import useMediaQuery from '../../Component/useMediaQuery';


export default function Report() {
  const access = useSelector(state => state.Reducers.authToken)
  let navigate = useNavigate()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getReports(access))
  }, []);
  const reports = useSelector(state => state.Reducers.reports)

  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:400px)') 

  function Altcards({
    altname,
    img,
    onPress,
    Path,
  }) {
    return (
      <>
        <button
          style={{
            backgroundColor: 'rgb(227,227,227)',
            height: mobile ? matches ? 250 : 250 : 160,
            margin: mobile ? matches ? SIZES.padding : SIZES.padding : 10,
            borderRadius: SIZES.radius,
            cursor: "pointer",
            borderWidth: 0,
            justifyContent: "space-evenly",
            boxShadow: '0px 0px 15px -4px #888181',
            elevation: 2,
            width: mobile ? matches ? 230 : 230 : 150,
          }}
          onClick={onPress}
        >
          {/* <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} /> */}
          <img src={img} alt={''} style={{ height:mobile ? matches ? 80 : 80 : 45, 
                                          width: mobile ? matches ? 80 : 80 : 45, 
                                          alignSelf: "center" }} />
          <div style={{
            textAlign: 'center'
          }}>
            <p style={{ ...FONTS.h3, margin: 20 }}>{altname}</p>
          </div>



        </button>

      </>
    )
  }


  return (
    <>
      <div style={{
        display: "flex",
        height:"100vh",
        width:"100%",
        // justifyContent:"center"
      }}>
        <Sidenav active={"Report"}/>
        <div style={{
          width:mobile ? matches ? '90%' : '90%' : '100%',
          float:"right",
        }}>
          <NavBarMain page={"report"}/>
          {
            mobile ? matches? null : null : 
            <>
            <p style={{...FONTS.h2 , color: COLORS.Primary}}>Report</p>
            </>
          }
          {/* <Header
          title={"Reports Section"}
         
        /> */}
        <ul style={{
          overflowY: 'scroll',
          height: mobile ? matches ? "80vh" : "80vh" : '100%',
          paddingInlineStart: 0,
          marginInlineStart:"0px",
          marginBlockStart:"0px",
          marginTop: mobile ? matches ? 0: 0: 25
        }}>
          <FlatList
            list={reports}
            keyExtractor={item => `${item.id}`}
            renderItem={(item, index) => {
              return (
                <>
                  <Altcards
                    key={item.id}
                    img={item.image}
                    altname={item.name}
                    onPress={() => {
                      navigate('/reportop', {
                        state: { api: item.api, label: item.name }
                      })
                    }}
                  />
                </>
              )

            }
            }
            renderWhenEmpty={() => (<Loading/> )}

          />
        </ul>
        </div>
      </div>

    </>
  )
}

