import React from 'react'
import Header from '../../Component/Header'
import { FONTS, COLORS, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../Component/Loading'
import FlatList from 'flatlist-react'
import useMediaQuery from '../../Component/useMediaQuery'
export default function History() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { data } = state;
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)') 
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
          <div>
            <p style={{
                ...FONTS.h2,
                height: 40,
                width: 100,
                backgroundColor: COLORS.Primary,
                borderRadius: SIZES.base2,
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                color:COLORS.white,
                marginRight: mobile ? -80 : 0,
                marginTop:mobile ? null : 30
              }}>
                <img src={IMAGES.plus} style={{
                  height:20,
                  width:20
                }}/>
                <p style={{
                  ...FONTS.h2
                }}>
                   Med
                </p>
              </p>
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
    </div>
  )
}
