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
import Header from '../../Component/Header';
import useMediaQuery from '../../Component/useMediaQuery';
import { useNavigate } from "react-router-dom";
import Sidenav from '../../Component/Nav/sidenav';
export default function LoadFinance() {
  const finance = useSelector(state => state.Reducers.finance)
  // const matches = useMediaQuery('(min-width:820px)')
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)') 
  const navigate = useNavigate()
  return (
    <>
        <div style={{
          display: "flex",
          height: "100vh",
          width: "100%"
        }}>
        <Sidenav active={'Finance'} />

        <div style={{
          width: mobile ? matches ? '100%' : "80%" : '100%',
          // float: "right"
        }}>
          <NavBarMain page={'finance'} />
      <div style={{
        // display: "flex",
        // justifyContent:"center",
        height: "100vh",
        width: "90%"
      }}>
        <div style={{
          margin:'auto'
          
        }}>

            {mobile ? 
              matches ? 
              <>
              <div style={{ 
                   
                  position:'relative' , 
                  // right:10 , 
                  marginTop:0,
                  background:'none' , 
                  cursor:'pointer', 
                  border:'none' , 
                  borderRadius:20,
                  marginLeft:60,
                  top:20 }}>  

                  <TextButton label={"Add Finance"}
            icon={IMAGES.add}
            onPress={()=>{
              document.getElementById('Addfinance').style.display = "block"
            }}
            />
            </div>
            <div style={{
                position: 'relative',
                // top: '0px',
                marginTop: "80px",
                // marginLeft:"130px",
              width:mobile ? matches ? 400 : 400 : 350,
              margin:'auto',
              display:'none'
              }} id='Addfinance'>
                <AddFinance />
              </div>
            
              
            <div style={{ margin:'auto',display:'flow'}}>
            

              <div style={{
                position:'relative',
                display: "flex",
                height: "auto",
                overflowY: 'scroll',
                // width: "43%",
                overflowX: "hidden",
                alignSelf: "center",
                backgroundColor:COLORS.layout,
                marginTop:60,
                marginLeft:80
  
  
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
                    renderWhenEmpty={() => <div></div>}
                  />
                </ul>
              </div>

              </div>
            </>
            :
            <>
            <div style={{
              display:'flex',
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "175vh",
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
              top:0,
              position:'relative'

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
              top: 50,
              marginTop: "0px",
              position:'relative',
              right:60
            }}>
              <AddFinance />
            </div>
          </div></>
            
          :
          <>
          <h3 style={{...FONTS.h2}}>Finance</h3>
              <div style={{ 
                   
                  position:'relative' , 
                  // right:10 , 
                  marginTop:0,
                  background:'none' , 
                  cursor:'pointer', 
                  border:'none' , 
                  borderRadius:20,
                  // marginLeft:60,
                  top:30 }}>  

                  <TextButton label={"Add Finance"}
            icon={IMAGES.add}
            onPress={()=>{
              document.getElementById('Addfinance').style.display = "block"
            }}
            />
            </div>
            <div style={{
                position: 'relative',
                // top: '0px',
                marginTop: "50px",
                marginLeft:"40px",
              width:mobile ? matches ? 400 : 400 : 350,
              margin:'auto',
              display:'none'
              }} id='Addfinance'>
                <AddFinance />
              </div>
            
              
            <div style={{ margin:'auto',display:'flow'}}>
            

              <div style={{
                position:'relative',
                display: "flex",
                height: "auto",
                overflowY: 'scroll',
                // width: "43%",
                overflowX: "hidden",
                alignSelf: "center",
                backgroundColor:COLORS.layout,
                marginTop:100,
                marginLeft:10
  
  
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
                    renderWhenEmpty={() => <div></div>}
                  />
                </ul>
              </div>

              </div>
            </>
          
          }
            </div>
      </div>
      </div>
      </div>
    </>

  )
}

