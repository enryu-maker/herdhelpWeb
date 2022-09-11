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
import Modal from 'react-modal';
import DropDown from '../../Component/DropDown/DropDown'
import InputForm from '../../Component/InputForm'
export default function LoadFinance() {
  const finance = useSelector(state => state.Reducers.finance)
  // const matches = useMediaQuery('(min-width:820px)')
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:420px)')
  const navigate = useNavigate()
  // 
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  // 
  const [Qty, setQty] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [valueMS, setValueMS] = useState("");
  const species = useSelector(state => state.Reducers.fcat)
  // const token = useSelector(state => state.Reducers.authToken)

  // const clean = () => {
  //   setQty(''), setPrice('');
  // };
  const data = JSON.stringify({
    price: price,
    category: valueMS,
    quantity: Qty,
  });
  const dispatch = useDispatch()


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
            height: "90vh",
            width: "100%"
          }}>
            <div style={{
              margin: 'auto'

            }}>

              {mobile ?
                matches ?
                  <>
                    <div style={{

                      position: 'relative',
                      // right:10 , 
                      marginTop: 0,
                      background: 'none',
                      cursor: 'pointer',
                      border: 'none',
                      borderRadius: 20,
                      marginLeft: 60,
                      top: 20
                    }}>

                      <TextButton label={"Add Finance"}
                        icon={IMAGES.add}
                        onPress={() => {
                          document.getElementById('Addfinance').style.display = "block"
                        }}
                      />
                    </div>
                    <div style={{
                      position: 'relative',
                      // top: '0px',
                      marginTop: "80px",
                      // marginLeft:"130px",
                      width: mobile ? matches ? 400 : 400 : 350,
                      margin: 'auto',
                      display: 'none'
                    }} id='Addfinance'>
                      <AddFinance />
                    </div>


                    <div style={{ margin: 'auto', display: 'flow' }}>


                      <div style={{
                        position: 'relative',
                        display: "flex",
                        height: "auto",
                        overflowY: 'scroll',
                        // width: "43%",
                        overflowX: "hidden",
                        alignSelf: "center",
                        backgroundColor: COLORS.layout,
                        marginTop: 60,
                        marginLeft: 80


                      }}>
                        <ul style={{
                          paddingInlineStart: 0,
                          margin: 'auto',
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
                      display: 'flex',
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      // width: "175vh",
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
                        top: 0,
                        position: 'relative'

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
                        position: 'relative',
                        right: 60
                      }}>
                        <AddFinance />
                      </div>
                    </div></>

                :
                <>

                  <p style={{ ...FONTS.h2, color: COLORS.Primary }}>Finance</p>


                  <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    // contentLabel="Example Modal"
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        margin: -40,
                        // display : 'block'
                      },
                      content: {
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        right: '40px',
                        bottom: '40px',
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        border: '1px solid transparent',
                        // background: COLORS.Primary,
                        //   overflow: 'auto',
                        // WebkitOverflowScrolling: 'touch',
                        borderRadius: '0 4px 4px 0',
                        outline: 'none',

                      }
                    }}
                  >
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignSelf: "center",
                      width: '68%',
                      backgroundColor: COLORS.lightGray2,
                      padding: "20px",
                      marginTop: 60,
                      borderRadius: 10,
                    }}>
                      <div style={{
                        display: 'grid',
                        justifyItems: 'center'
                      }}>
                        <p style={{ ...FONTS.h2, color: COLORS.Primary }}>Add Finance</p>
                        <DropDown
                          value={valueMS}
                          setValue={setValueMS}
                          label={"Category*"}
                          options={species}
                        />
                        {
                          console.log("c=>",valueMS)
                        }

                        <InputForm
                          prependComponent={
                            <img
                              src={IMAGES.tag}
                              style={{
                                height: 25,
                                width: 25,
                                margin: 10,
                                alignSelf: "center",
                              }}
                            />
                          }
                          type={"text"}
                          value={Qty}
                          label={"Quantity"}
                          onChange={(event) => {
                            setQty(event.target.value);
                          }}
                        />
                        <InputForm
                          prependComponent={
                            <img
                              src={IMAGES.money}
                              style={{
                                height: 25,
                                width: 25,
                                margin: 10,
                                alignSelf: "center",
                              }}
                            />
                          }
                          type={"text"}
                          value={price}
                          label={"Price"}
                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}
                        />
                        <TextButton
                          label={"Add Finance"}
                          icon={IMAGES.update}
                          onPress={closeModal}
                        />
                      </div>

                    </div>
                  </Modal>



                  <div style={{ margin: 0, display: 'flow' }}>


                    <div style={{
                      position: 'relative',
                      display: "flex",
                      height: "auto",
                      overflowY: 'scroll',
                      // width: "43%",
                      overflowX: "hidden",
                      alignSelf: "center",
                      backgroundColor: COLORS.layout,
                      marginTop: 50,
                      marginLeft: 0


                    }}>
                      <ul style={{
                        paddingInlineStart: 0,
                        margin: 'auto',
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
                  <div style={{

                    position: 'fixed',
                    // right:10 , 
                    marginTop: 0,
                    background: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: 20,
                    // marginLeft:60,
                    bottom: 10,
                    right: '25%'
                  }}>

                    <TextButton label={"Add Finance"}
                      icon={IMAGES.add}
                      onPress={openModal}
                    />
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

