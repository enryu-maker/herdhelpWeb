import React, { useState } from "react";
// import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
// import ButtonCard from "../../Component/ButtonCard";
// import { IMAGES } from "../../Theme/Image";
// import axiosIns from '../../helpers/helpers';
import './Home.css'
import { baseURL } from "../../helpers/helpers";
// import { Link, Router } from "react-router-dom";
// import { Routes,Route } from "react-router-dom";
import NavBarMain from "../../Component/Nav/navmain";
import Card from "../../Component/Card";
import { IMAGES } from "../../Theme/Image";
import { useSelector, useDispatch } from 'react-redux';
import { getFcat, getFinance, getHerds, getSpecies } from '../../Store/actions';
import FlatList from 'flatlist-react';
export default function Main() {
  const dispatch = useDispatch()
  const access = useSelector(state => state.Reducers.authToken)
  React.useEffect(() => {
    dispatch(getHerds(access))
    dispatch(getFinance(access))
    dispatch(getSpecies(access))
    dispatch(getFcat(access))
  }, [])
  const animal = useSelector(state => state.Reducers.herds)
  return (
    <>

      <NavBarMain page={"herds"}/>
      <>
        <ul>
          <FlatList
            list={animal}
            keyExtractor={item => `${item.id}`}
            // displayGrid
            renderItem={(item,index) => {
              return (
                <>
                <Card
                  img={baseURL + item.data[0]?.image}
                  Name={`My ${item.label}`}
                  numaninmal={`${item.data?.length}`}
                  data={item.data}
                />
                </>
              )

            }
            }
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </ul>
        {/* <div>
          <Card
            img={IMAGES.cow}
            Name={'My Cow'}
            numaninmal={'5'}
          />
          <Card
            img={IMAGES.goat}
            Name={'My Goat'}
            numaninmal={'5'}
          />
          <Card
            img={IMAGES.dog}
            Name={'My Dog'}
            numaninmal={'5'}
          />
          <Card
            img={IMAGES.sheep}
            Name={'My Sheep'}
            numaninmal={'5'}
          />
        </div>


        <div>
          <Card
            img={IMAGES.horse}
            Name={'My Horse'}
            numaninmal={'5'}
          />
          <Card
            img={IMAGES.pig}
            Name={'My Pig'}
            numaninmal={'5'}
          />
          <Card
            img={IMAGES.rabbit}
            Name={'My Rabbit'}
            numaninmal={'5'}
          />
        </div> */}
      </>

    </>



  );
}
