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
import { getFcat, getFinance, getHerds, getOverview, getSpecies, getSubs, getTags, UserData } from '../../Store/actions';
import FlatList from 'flatlist-react';
import Loading from "../../Component/Loading";
import Sidenav from "../../Component/Nav/sidenav";
import { COLORS } from "../../Theme/Theme";
export default function Main() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const access = useSelector(state => state.Reducers.authToken)
  React.useEffect(() => {
    dispatch(getHerds(access))
    dispatch(getFinance(access))
    dispatch(getSpecies(access))
    dispatch(getFcat(access))
    dispatch(getTags())
    dispatch(UserData())
    dispatch(getSubs())
    dispatch(getOverview())
  }, [])
  const animal = useSelector(state => state.Reducers.herds)
  return (
    <>
      <div style={{
        display:"flex",
        // justifyContent:"center",
        height:"100vh",
        width:"100%",
        // justifyContent:"center"
      }}>
        <Sidenav/>
        <div style={{
          width:"90%",
          float:"right"
        }}>
        <NavBarMain page={"herds"}/>
      
        <div style={{
              overflowY: 'scroll',
            height:"90vh",
            paddingInlineStart:0,
            // padding:0
        }}>
          <FlatList
            list={animal}
            keyExtractor={item => `${item.id}`}
            // displayGrid
            renderItem={(item,index) => {
              return (
                <>
                <Card
                key={item.id} 
                  img={baseURL + item.data[0]?.image}
                  Name={item.label!="Sheep"?`My ${item.label}s`:`My ${item.label}`}
                  numaninmal={`${item.data?.length}`}
                  data={item.data}
                 onPress={()=>{
                  navigate("/animal",{
                    state:{data:item}
                })
                 }}
                />
                </>
              )

            }
            }
            renderWhenEmpty={() => (<Loading/> )}
          />
        </div>
        </div>
      </div>
      
        
    

    </>



  );
}
