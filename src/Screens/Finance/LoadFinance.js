import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBarMain from "../../Component/Nav/navmain";
import TextButton from '../../Component/TextButton';
import { IMAGES } from '../../Theme/Image';
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import { useSelector, useDispatch } from 'react-redux';
import FlatList from 'flatlist-react';
import Feedcard from './FinanceCard';
import AddFinance from './addFinance';
export default function LoadFinance() {
  const finance = useSelector(state => state.Reducers.finance)
  console.log(finance)
  return (
    <>

      <NavBarMain page={'finance'} />

      <div
        style={{
          display: 'flex',
          flexDirection:"row",
          justifyContent:"space-evenly"
        }}
      >
        {/* <p style={{ ...FONTS.h1, marginLeft: 40 }}>Finance</p>
        <Link to='/addfinance' style={{ display: 'contents' }}>
          <button style={{
            backgroundColor: COLORS.Primary,
            cursor: "pointer",
            border: 'none',
            borderRadius: 16,
            padding: '0px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            right: 30
          }} >
            <img src={IMAGES.plus} alt=""
              style={{
                height: 24,
                width: 26,
                padding: '3px 13px 3px 3px',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                display: 'flex'
              }} />
            <p style={{
              ...FONTS.h4,
              color: COLORS.white
            }}>Finance</p>

          </button></Link>

      </div> */}
      <div  style={{
        display:"flex",
          height: "100vh" ,
          overflowY:'scroll',
          width:"40%",
          overflowX:"hidden",
          // padding:"20px",
          // backgroundColor:COLORS.layout,
          alignSelf:"center",
          marginBottom:"50px"          
      }}>
      <ul>
        <FlatList
          list={finance}
          keyExtractor={item => `${item.id}`}
          displayRow
          renderItem={(item, index) => {
            return (
              <Feedcard
                Feedname={item.category}
                FeedQty={item.quantity}
                Feeddate={item.added_date}
                Feedprice={item.price}
              />
            )
          }
          }
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </ul>
      </div>
      <div style={{
        position:"sticky",
        top:'0px',
        marginTop:"50px"
      }}>
        <AddFinance/>
      </div>
      </div>
    </>

  )
}

