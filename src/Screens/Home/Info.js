import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS } from '../../Theme/Theme'
import InfoCard from '../../Component/InfoCard'
export default function Info({
  purchased = false
}) {
  return (
    <div>
      <Header
        leftcomponent={
          <>
            <div style={{
              height: 40,
              width: 40,
              backgroundColor: COLORS.Primary,
              alignSelf: "center",
              borderRadius: 20
            }}>

            </div>
          </>
        }
        title={"Animal Info"}
        rightcomponent={
          <>
            <div style={{
              display: "flex",
              alignSelf: "center",
              marginRight: -100
            }}>
              <p style={{
                ...FONTS.h2,
                color: COLORS.Primary
              }}>
                EDIT
              </p>
              <p style={{
                ...FONTS.h2,
                color: COLORS.Primary,
                marginLeft: 30
              }}>
                STATUS
              </p>
            </div>
          </>
        }
      />

      {/* Imagecontent */}
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px"
      }}>
        <div style={{
          height: 120,
          width: 120,
          backgroundColor: COLORS.lightGray2,
          borderRadius: 60,
        }}>

        </div>
      </div>
      {/* Middle Data */}

      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignSelf: "center",
        // alignItems: "center"
      }}>
        {/* Firstblock */}
        <div style={{
          width: 350,
          backgroundColor: COLORS.lightGray2,
          borderRadius: 25,
          padding: 10,
          height: 300,

        }}>
          <InfoCard label={"Name"} value={"Akif"} />
          <InfoCard label={"Gender"} value={"Male"} />
          <InfoCard label={"Bred"} value={"Yes"} />
          <InfoCard label={"Tag Number"} value={"1432"} />
          <InfoCard label={"Weight"} value={"50"} withDivider={false} />
        </div>
        <div style={{
          
          // height: 300,
          // width: 350,
          backgroundColor: COLORS.white,
          paddingBottom:"30px",
          justifyContent: "space-between"
        }}>
          <div style={{
            // height: 120,
            width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 10,
            paddingBottom: 15
          }}>
            {
              purchased ? (
                <>
                  <InfoCard label={"Type"} value={"Purchased"} />
                  <InfoCard label={"Price"} value={"Male"} withDivider={false} />
                </>
              ) : (
                <>
                  <InfoCard label={"Type"} value={"Birth"} />
                  <InfoCard label={"30"} value={"Male"} />
                  <InfoCard label={"60"} value={"Yes"} />
                  <InfoCard label={"90"} value={"1432"} />
                  <InfoCard label={"Date of Birth"} value={"50"}  />
                  <InfoCard label={"Mother Tag"} value={"50"}/>
                  <InfoCard label={"Father Tag"} value={"50"} withDivider={false} />
                  </>
              )
            }
          </div>
          
        </div>
        <div style={{
          // height: 300,
          width: 350,
          backgroundColor: COLORS.white,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          paddingBottom:"30px",

          // padding: 20,

        }}>
          <div style={{
            // height: 120,
            // width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            paddingBottom: 15,
            padding: 15,
            marginBottom:10
          }}>
            <InfoCard label={"Registration"} value={"yes"} />
            <InfoCard label={"Breed"} value={"Male"} withDivider={false} />
          </div>
          <div style={{
            // height: 120,
            // width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 15,
            paddingBottom: 15
          }}>

            <InfoCard label={"Vaccinated?"} value={"yes"} />
            <InfoCard label={"Date"} value={"Male"} withDivider={false} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignSelf: "center",
            height: 120,
          }}>
            <div style={{
              display: "flex",
              height: 50,
              width: 350,
              backgroundColor: COLORS.Primary,
              borderRadius: 12,
              justifyContent: "center"
            }}>
              <p style={{
                ...FONTS.h2,
                alignSelf: "center",
                color: COLORS.white
              }}>
                Medical History
              </p>
            </div>
            <div style={{
              height: 50,
              width: 350,
              backgroundColor: COLORS.Primary,
              borderRadius: 12,
              justifyContent: "center",
              display: "flex",

            }}>
              <p style={{
                ...FONTS.h2,
                alignSelf: "center",
                color: COLORS.white
              }}>
                Babies
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* last button */}
      <div style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "25px"
      }}>
      </div>
    </div>

  )
}
