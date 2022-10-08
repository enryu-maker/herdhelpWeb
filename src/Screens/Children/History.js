import React, { useState } from 'react'
import Header from '../../Component/Header'
import { FONTS, COLORS, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../Component/Loading'
import FlatList from 'flatlist-react'
import useMediaQuery from '../../Component/useMediaQuery'
import InputForm from "../../Component/InputForm";
import DropDown from "../../Component/DropDown/DropDown";
import { checking } from "../../Component/Constants";
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import axiosIns from '../../helpers/helpers'
import AddMedication from '../Animals/AddMedication'
import TextButton from '../../Component/TextButton'
import { getMedical } from '../../Store/actions'
import { useAlert } from 'react-alert'

import moment from 'moment'
export default function History() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { data } = state;
  const med = useSelector(state => state.Reducers.med)
  const [medicine, setmedicine] = useState("");
  const [medicationR, setmedicationR] = useState("");
  const [dosage, setdosage] = useState("");
  const [vaccinateddate, setVaccinateddate] = useState("");
  const [withdrawal_date, setwithdrawal_date] = useState(null);
  const [loading, setLoading] = useState(null);
  const [withdrawal, setwithdrawal] = useState(null);
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')
  //
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000000c4';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch()
  const alert = useAlert()
  
  function addmedical() {
    setLoading(true)
    axiosIns.post('/medication/',
    {
      tag_number: data[0].tag_number,
      medication_name: medicine,
      medication_date: vaccinateddate,
      dosage: dosage,
      disease: medicationR,
      withdrawal: withdrawal == "Yes" ? true : false,
      withdrawal_date: withdrawal_date != "" ? withdrawal_date : null
    }
    ).then(response => {
      if (response.status === 201) {
        dispatch(getMedical(data.tag_number))
        setLoading(false)
        alert.success("Medication Added Successfully")
      } else {
        alert.error("Internal Server Error")
        setLoading(false)
      }
    })
      .catch(err => {
        console.log(err)
        alert.error("Internal Server Error")
        setLoading(false)
      });
  }


  function MedCard({
    problem,
    solution,
    date,
    dosage,
    withdrawal,
    withdrawal_date
  }) {
    return (
      <div style={{
        display: "flex",
        backgroundColor: COLORS.lightGray2,
        // height: 150,
        margin: SIZES.padding,
        borderRadius: SIZES.radius,
        flexDirection: "column",
        justifyContent: "flex-start",
        borderWidth: 0,
        shadowColor: COLORS.Primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 2,
        width: mobile ? 350 : '40vh',
        cursor: 'pointer',
        boxShadow: '0px 0px 15px -4px #888181',
      }}>
        <p style={{
          ...FONTS.h3,
          color: COLORS.Primary,
          float: "left",
          // marginBlockStart:"0px",
          // marginBlockEnd:"0px"
        }}>
          {`Problem: ${problem}`}
        </p>
        <p style={{
          ...FONTS.h3,
          paddingBottom: "0px",
          marginBlockStart: "0px"
        }}>
          {`Solution: ${solution}`}
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}>
          <p style={{
            ...FONTS.h3,
            color: COLORS.Primary,
            float: "left",
            marginBlockStart: "0px",
            // marginBlockEnd:"0px"
          }}>
            {`Dosage: ${dosage}`}
          </p>
          <p style={{
            ...FONTS.h3,
            paddingBottom: "0px",
            marginBlockStart: "0px"
          }}>{date}</p>
        </div>
        {
          withdrawal ? <p style={{
            ...FONTS.h3,
            color: COLORS.Primary,
            float: "left",
            marginBlockStart: "0px",
            // marginBlockEnd:"0px"
          }}>
            {`Withdrawl Date: ${withdrawal_date}`}
          </p> : null
        }

      </div>
    )
  }
  return (
    <div style={{
      height: "100vh",
    }}>
      <Header
        leftcomponent={
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{
              ...FONTS.h2,
              height: 40,
              width: 100,
              backgroundColor: COLORS.Primary,
              borderRadius: SIZES.base2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: COLORS.white,
              marginRight: mobile ? -80 : 0,
              marginTop: mobile ? null : 30,
              border: 'none',
              cursor: 'pointer'
            }}
              // onClick={() => navigate('./addmedhist') }
              onClick={openModal}
            >
              <img src={IMAGES.plus} style={{
                height: 20,
                width: 20
              }} />
              <p style={{
                ...FONTS.h2
              }}>
                Med
              </p>
            </button>
          </div>
        }
        title={"Medical History"}
        titlestyle={{
          // marginRight:160
        }}
      />
      <div style={{
        display: mobile ? matches ? "flex" : "flex" : 'grid',
        justifyContent: "center",
        overflowY: 'scroll',
        paddingInlineStart: 0,
      }}>
        <FlatList
          list={data}
          keyExtractor={item => `${item.id}`}
          // displayGrid
          renderItem={(item, index) => {
            return (
              <>
                <MedCard problem={item.disease} solution={item.medication_name} dosage={item.dosage} date={item.medication_date} />
              </>
            )

          }
          }
          renderWhenEmpty={() => (<></>)}
        />
      </div>
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          appElement={null}
          ariaHideApp={false}
          contentLabel="Example Modal"
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              // margin: mobile ? matches ? -40 : null : -40,
              // display: mobile ? matches ? 'block' : 'none' : 'block'
            },
            content: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              // width: mobile ? matches ? '100%' : null : '100%',
              // border: '1px solid transparent',
              height: '100vh',
              background: COLORS.white,
              //   overflow: 'auto',
              //   WebkitOverflowScrolling: 'touch',
              // borderRadius: '0 4px 4px 0',
              outline: 'none',
              padding: 0

            }
          }}
        >
          <Header style={{ marginTop: 0 }}
            leftcomponent={
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
                  onClick={closeModal}
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
            title={"Add Medication"}
            titlestyle={{
              // marginRight:160
            }}
          />
          <div style={{
            display: matches ? 'grid' : 'grid',
            justifyContent: matches ? "space-evenly" : 'space-around'
          }}>
            {/* <p style={{...FONTS.h2 , color: COLORS.Primary}}>Add Medication</p> */}
            <div style={{ backgroundColor: COLORS.layout, padding: 32, borderRadius: SIZES.radius }}>
              <div
                style={{
                  display: matches ? 'grid' : 'grid',
                  justifyContent: matches ? "space-evenly" : 'space-around'
                }}
              >
                <InputForm
                  prependComponent={
                    <img
                      src={IMAGES.disease}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={"text"}
                  value={medicationR}
                  label={"Reason for Medication"}
                  onChange={(event) => {
                    setmedicationR(event.target.value);
                  }}
                />

                <InputForm
                  prependComponent={
                    <img
                      src={IMAGES.medicines}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={"text"}
                  value={medicine}
                  label={"Medicine"}
                  onChange={(event) => {
                    setmedicine(event.target.value);
                  }}
                />
                <InputForm
                  prependComponent={
                    <img
                      src={IMAGES.calender}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={"date"}
                  value={vaccinateddate}
                  label={"Medication Date"}
                  onChange={(event) => {
                    setVaccinateddate(moment(event.target.value).format("YYYY-MM-DD"));
                  }}
                />

                <InputForm
                  prependComponent={
                    <img
                      src={IMAGES.dropper}
                      style={{
                        height: 25,
                        width: 25,
                        margin: 10,
                        alignSelf: "center",
                      }}
                    />
                  }
                  type={"text"}
                  value={dosage}
                  label={"Dosage"}
                  onChange={(event) => {
                    setdosage(event.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly"
                }}
              >
                <DropDown
                  value={withdrawal}
                  onPress={(x) => {
                    setwithdrawal(x.value)
                  }}
                  label={"Withdrawal"}
                  options={checking}
                />
                {
                  withdrawal == "Yes" ?
                    <InputForm
                      prependComponent={
                        <img
                          src={IMAGES.calender}
                          style={{
                            height: 25,
                            width: 25,
                            margin: 10,
                            alignSelf: "center",
                          }}
                        />
                      }
                      type={"date"}
                      value={withdrawal_date}
                      label={"Withdrawal Date"}
                      onChange={(event) => {
                        setwithdrawal_date(event.target.value);
                      }}
                    /> : null
                }
                

              </div>
              {
                  loading ? 
                  <Loading /> :
                    <TextButton
                      label={"Add"}
                      icon={IMAGES.med}
                      onPress={() => 
                        addmedical()
                      }
                    />
                }
            </div>
          </div>
        </Modal>
      </>

    </div>
  )
}
