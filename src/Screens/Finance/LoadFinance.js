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
import Sidenav from '../../Component/Nav/sidenav';
export default function LoadFinance() {
  const finance = useSelector(state => state.Reducers.finance)
  return (
    <>
      <div style={{
        display: "flex",
        // justifyContent:"center",
        height: "100vh",
        width: "100%"
      }}>
        <Sidenav />
        <div style={{
          width: "90%",
          float: "right",

        }}>
          <NavBarMain page={"finance"} />
          <div
            style={{
              display: 'flex',
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              // height: "100vh",
            }}
          >
            <div style={{
              display: "flex",
              height: "85vh",
              overflowY: 'scroll',
              width: "43%",
              overflowX: "hidden",
              alignSelf: "center",


            }}>
              <ul style={{
                paddingInlineStart: 0,

                // height: "100vh"
              }}>
                <FlatList
                  list={finance}
                  keyExtractor={item => `${item.id}`}
                  displayRow
                  renderItem={(item, index) => {
                    return (
                      <Feedcard
                      key={item.id} 
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
              position: "sticky",
              top: '0px',
              marginTop: "50px",
              // marginLeft:"50px"
            }}>
              <AddFinance />
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

