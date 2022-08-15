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
import useMediaQuery from '../../Component/useMediaQuery';
export default function LoadFinance() {
  const finance = useSelector(state => state.Reducers.finance)
  const matches = useMediaQuery('(min-width:810px)')
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
          // float: "right",

        }}>
          <NavBarMain page={"finance"} />
          
        
            {
              matches ? <>
              <div style={{
                display:'flex',
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
            </div></>
            : <>
            <div style={{ margin:'auto',}}>
            <div style={{
                // position: "sticky",
                margin:'auto',
                // top: '0px',
                // marginTop: "50px",
                // marginLeft:"50px"
              //  right:0,
                width:'60%',
                
                
              }}>
                <AddFinance />
              </div>

              <div style={{
                display: "flex",
                height: "48vh",
                overflowY: 'scroll',
                // width: "43%",
                overflowX: "hidden",
                alignSelf: "center",
                backgroundColor:COLORS.layout,
                
  
  
              }}>
                <ul style={{
                  paddingInlineStart: 0,
                  margin:'auto',
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

              </div>
            </>
            }
            </div>
      </div>
    </>

  )
}

