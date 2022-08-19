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
export default function LoadFinance() {
  const finance = useSelector(state => state.Reducers.finance)
  const matches = useMediaQuery('(min-width:810px)')
  const navigate = useNavigate()
  return (
    <>
        <Header leftcomponent={
         <>
           <div style={{
             display: "flex",
             justifyContent: "center",
             height: 40,
             width: 40,
             backgroundColor: COLORS.Primary,
             alignSelf: "center",
             borderRadius: 20
           }}
             onClick={() => {
               navigate(-1)
             }}
           >
             <img src={IMAGES.back} alt={"back"}
               style={{
                 height: 25,
                 width: 25,
                 alignSelf: "center",
               }} />
           </div>
         </>
       } 
       rightcomponent={
        <div></div>
      }
       title={"Finance"} />
      <div style={{
        display: "flex",
        // justifyContent:"center",
        height: "100vh",
        width: "100%"
      }}>
        <div style={{
          margin:'auto'
          
        }}>
          
          
          
        
            {
              matches ? <>
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
              <div style={{ 
                   
                  position:'relative' , 
                  right:10 , 
                  marginTop:0,
                  background:'none' , 
                  cursor:'pointer', 
                  border:'none' , 
                  borderRadius:20 }}>  

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
                // marginLeft:"50px"
                width:400,
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
                marginTop:60
  
  
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

