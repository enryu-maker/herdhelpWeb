import React, { useState } from "react";
// import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
// import ButtonCard from "../../Component/ButtonCard";
// import { IMAGES } from "../../Theme/Image";
// import axiosIns from '../../helpers/helpers';
import './Home.css'
import { baseURL } from "../../helpers/helpers";
import { useNavigate, useLocation } from 'react-router-dom';

// import { Link, Router } from "react-router-dom";
// import { Routes,Route } from "react-router-dom";
import NavBarMain from "../../Component/Nav/navmain";
import Card from "../../Component/Card";
import { IMAGES } from "../../Theme/Image";
import { useSelector, useDispatch } from 'react-redux';
import { getAlerts, getFcat, getFinance, getGender, getHerds, getOverview, getSpecies, getSubs, getTags, UserData } from '../../Store/actions';
import FlatList from 'flatlist-react';
import Loading from "../../Component/Loading";
import Sidenav from "../../Component/Nav/sidenav";
import { COLORS, FONTS } from "../../Theme/Theme";
import useMediaQuery from "../../Component/useMediaQuery";
import LineDivider from "../../Component/LineDivider";
export default function Main() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const access = useSelector(state => state.Reducers.authToken)
  React.useEffect(() => {
    dispatch(getHerds())
    dispatch(getFinance())
    dispatch(getSpecies())
    dispatch(getFcat())
    dispatch(getTags())
    dispatch(UserData())
    dispatch(getSubs())
    dispatch(getOverview())
    dispatch(getGender())
    dispatch(getAlerts())

  }, [])
  const animal = useSelector(state => state.Reducers.herds)
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  return (
    <>
      <div style={{
        display: "flex",
        // justifyContent:"center",
        height: "100vh",
        width: "100%",
        // justifyContent:"center"
      }}>
        <Sidenav active={'Herds'} />
        <div style={{
          width: mobile ? matches ? "100%" : '80%' : "100%",
          float: "right",
        }}>
          <NavBarMain page={"herds"} />
          {
            mobile ? null :
              <>
                <p style={{ ...FONTS.h2, color: COLORS.Primary }}>Herds</p>
              </>
          }


          <div style={{
            overflowY: 'scroll',
            height: "90vh",
            paddingInlineStart: 0,
            marginBottom: "50px",
            marginTop: mobile ? matches ? 0 : 0 : 50,
            backgroundColor: mobile ? matches ? null : null : COLORS.white
          }}>
            <FlatList
              list={animal}
              keyExtractor={item => `${item.id}`}
              // displayGrid
              renderItem={(item, index) => {
                return (
                  <>
                    <Card
                      key={item.id}
                      img={baseURL + item.data[0]?.image}
                      Name={item.label != "Sheep" ? `My ${item.label}s` : `My ${item.label}`}
                      numaninmal={`${item.data?.length}`}
                      data={item.data}
                      onPress={() => {
                        navigate("/animal", {
                          state: { data: item }
                        })
                      }}
                    />
                  </>
                )

              }
              
              }
              renderWhenEmpty={() => <div></div>}
            />
          </div>
        </div>
      </div>




    </>



  );
}
