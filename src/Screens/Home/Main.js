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
import { getFcat, getFinance, getHerds, getSpecies, getTags, UserData } from '../../Store/actions';
import FlatList from 'flatlist-react';
import Loading from "../../Component/Loading";
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
  }, [])
  const animal = useSelector(state => state.Reducers.herds)
  return (
    <>

      <NavBarMain page={"herds"}/>
      <>
        <ul style={{
            paddingInlineStart:0,
            position:'absolute',
            left:170,
            width:'auto'
        }}>
          <FlatList
            list={animal}
            keyExtractor={item => `${item.id}`}
            // displayGrid
            renderItem={(item,index) => {
              return (
                <>
                <Card
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
        </ul>
        
      </>

    </>



  );
}
