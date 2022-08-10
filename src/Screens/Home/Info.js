import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, formatter } from '../../Theme/Theme'
import InfoCard from '../../Component/InfoCard'
import { useNavigate, useLocation } from 'react-router-dom';
import { baseURL } from '../../helpers/helpers';
import { IMAGES } from '../../Theme/Image';
import { useDispatch,useSelector } from 'react-redux';
import { getMedical } from '../../Store/actions';
export default function Info({
  purchased = false
}) {
  let navigate = useNavigate()
  const { state } = useLocation();
  const { data } = state;
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getMedical(data.tag_number))
  },[])
  const med = useSelector(state=>state.Reducers.med)
  return (
    <div>
      <Header
        leftcomponent={
          <>
            <div style={{
              display:"flex",
              justifyContent:"center",
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
          display:"flex",
        justifyContent: "center",
          height: 120,
          width: 120,
          // backgroundColor: COLORS.lightGray2,
          borderRadius: 60,
        }}>
          <img src={data.animal_image != null ? baseURL + data.animal_image : baseURL + data.image} alt={data.tag_number}
            style={{
              height: 120,
              width: 120,
              alignSelf: "center",
          borderRadius: 60,
          border: '2px solid rgba(0, 0, 0)',


            }} />
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
          <InfoCard label={"Name"} value={data.name} />
          <InfoCard label={"Gender"} value={data.gender} />
          <InfoCard label={"Bred"} value={data.bred ? "Yes" : "No"} />
          <InfoCard label={"Tag Number"} value={data.support_tag} />
          <InfoCard label={"Weight"} value={data.weight} withDivider={false} />
        </div>
        <div style={{
          backgroundColor: COLORS.white,
          paddingBottom: "30px",
          justifyContent: "space-between"
        }}>
          <div style={{
            width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 10,
            paddingBottom: 15
          }}>
            {
              data.bought ? (
                <>
                  <InfoCard label={"Type"} value={"Purchased"} />
                  <InfoCard label={"Price"} value={formatter.format(data.price)} withDivider={false} />
                </>
              ) : (
                <>
                  <InfoCard label={"Type"} value={"Birth"} />
                  <InfoCard label={"30"} value={data.weight_30} />
                  <InfoCard label={"60"} value={data.weight_60} />
                  <InfoCard label={"90"} value={data.weight_90} />
                  <InfoCard label={"Date of Birth"} value={data.birth_date} />
                  <InfoCard label={"Mother's Tag"} value={data.mother_supporttag} />
                  <InfoCard label={"Father's Tag"} value={data.father_supporttag} withDivider={false} />
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
          paddingBottom: "30px",

          // padding: 20,

        }}>
          <div style={{
            // height: 120,
            // width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            paddingBottom: 15,
            padding: 15,
            marginBottom: 10
          }}>
            <InfoCard label={"Registration"} value={data.registration} />
            <InfoCard label={"Breed"} value={data.breed} withDivider={false} />
          </div>
          <div style={{
            // height: 120,
            // width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 15,
            // paddingBottom: 15
          }}>

            <InfoCard infostyle={{
              paddingTop: 5
            }} label={"Vaccinated?"} value={data.vaccinated ? "yes" : "No"} withDivider={!data.vaccinated ? false : true} />
            {data.vaccinated ?
              <InfoCard label={"Date"} value={data.vaccination_date} withDivider={false} />
              : null
            }
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
              justifyContent: "center",
            justifyContent: "space-evenly",
            }}
            onClick={()=>{
              navigate("/medhistory")
            }}
            >
              <img src={IMAGES.back} alt={"back"}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: "center",
                }} />
              <p style={{
                ...FONTS.h2,
                alignSelf: "center",
                color: COLORS.white
              }}>
                Medical History
              </p>
              <p style={{
                ...FONTS.h2,
                height: 30,
                width: 30,
                backgroundColor: COLORS.white,
                borderRadius: 15,
               display:"flex",
                alignSelf: "center",
                justifyContent: "center",
                color:COLORS.Primary
              }}
              >
                {
                  med.length
                }
              </p>
            </div>
            <div style={{
              height: 50,
              width: 350,
              backgroundColor: COLORS.Primary,
              borderRadius: 12,
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection:"row"
            }}
            onClick={()=>{
              navigate("/children")
            }}
            >
              <img src={IMAGES.back} alt={"back"}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: "center",
                }} />

              <p style={{
                ...FONTS.h2,
                alignSelf: "center",
                color: COLORS.white
              }}>
                Babies
              </p>
              <p style={{
                ...FONTS.h2,
                height: 30,
                width: 30,
                backgroundColor: COLORS.white,
                borderRadius: 15,
               display:"flex",
                alignSelf: "center",
                justifyContent: "center",
                color:COLORS.Primary
              }}
              >
                {
                  data.children.length
                }
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
