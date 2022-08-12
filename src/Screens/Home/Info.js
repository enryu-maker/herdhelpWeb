import React from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, formatter } from '../../Theme/Theme'
import InfoCard from '../../Component/InfoCard'
import { useNavigate, useLocation } from 'react-router-dom';
import { baseURL } from '../../helpers/helpers';
import { IMAGES } from '../../Theme/Image';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal, getMedical } from '../../Store/actions';
export default function Info({
}) {
  let navigate = useNavigate()
  const { state } = useLocation();
  const { data, cond } = state;
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getAnimal(data.tag_number))
    dispatch(getMedical(data.tag_number))
  }, [])
  const med = useSelector(state => state.Reducers.med)
  const animal = useSelector(state => state.Reducers.animal)
  return (
    <div>
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
        title={"Animal Info"}
        rightcomponent={
          <>
            {
              cond==false ?
                <div></div> :
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
            }
          </>
        }
      />
      <div style={{
        // overflowY: 'scroll',
        paddingInlineStart:0,
        marginBottom:"30px"
      }}>
        {/* Imagecontent */}
        <div style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            height: 120,
            width: 120,
            borderRadius: 60,
          }}>
            {
              cond ?
                <img src={animal?.animal_image != null ? animal?.animal_image : animal?.image} alt={animal?.tag_number}
                  style={{
                    height: 120,
                    width: 120,
                    alignSelf: "center",
                    borderRadius: 60,
                    border: '2px solid rgba(0, 0, 0)',
                  }} /> 
                  :

                <img src={animal?.animal_image != null ? baseURL + animal?.animal_image : baseURL + animal?.image} alt={animal?.tag_number}
                  style={{
                    height: 120,
                    width: 120,
                    alignSelf: "center",
                    borderRadius: 60,
                    border: '2px solid rgba(0, 0, 0)',
                  }} />
            }
          </div>
        </div>
        {/* Middle animal */}

        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          // alignItems: "center"
        }}>
          {/* Firstblock */}
          <div style={{
            width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 10,
            height: animal?.gender=="Female"?300:250,

          }}>
            <InfoCard label={"Name"} value={animal?.name} />
            <InfoCard label={"Gender"} value={animal?.gender} />
            {
            
            animal?.gender=="Female"?
            <InfoCard label={"Bred"} value={animal?.bred ? "Yes" : "No"} />:null
            }
            <InfoCard label={"Tag Number"} value={animal?.support_tag} />
            <InfoCard label={"Weight"} value={animal?.weight} withDivider={false} />
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
                animal.bought ? (
                  <>
                    <InfoCard label={"Type"} value={"Purchased"} />
                    <InfoCard label={"Price"} value={formatter.format(animal?.price)} withDivider={false} />
                  </>
                ) : (
                  <>
                    <InfoCard label={"Type"} value={"Birth"} />
                    <InfoCard label={"30"} value={animal?.weight_30} />
                    <InfoCard label={"60"} value={animal?.weight_60} />
                    <InfoCard label={"90"} value={animal?.weight_90} />
                    <InfoCard label={"Date of Birth"} value={animal?.birth_date} />
                    <InfoCard label={"Mother's Tag"} value={animal?.mother_supporttag} />
                    <InfoCard label={"Father's Tag"} value={animal?.father_supporttag} withDivider={false} />
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
              <InfoCard label={"Registration"} value={animal?.registration} />
              <InfoCard label={"Breed"} value={animal?.breed} withDivider={false} />
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
              }} label={"Vaccinated?"} value={animal?.vaccinated ? "yes" : "No"} withDivider={!animal.vaccinated ? false : true} />
              {animal.vaccinated ?
                <InfoCard label={"Date"} value={animal?.vaccination_date} withDivider={false} />
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
                onClick={() => {
                  navigate("/medhistory", {
                    state: { data: med }
                  })
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
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  color: COLORS.Primary,
                  alignItems: "center"
                }}
                >
                  {
                    med?.length
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
                flexDirection: "row",
                alignItems: "center"
              }}
                onClick={() => {
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
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  color: COLORS.Primary,
                  alignItems: "center"
                }}
                >
                  {
                    animal.children?.length
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* last button */}
        {
          data.flagged?<div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "85px",
            bottom:"75px",
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 15,
            width: 400,
            position:"fixed",
          }}>
            <InfoCard label={"Flagged?"} value={"Yes"} />
            <InfoCard label={"Description"} value={data.flag_desc} />
          </div>:null
        }
        
      </div>
    </div>

  )
}
