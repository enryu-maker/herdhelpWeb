import React, {useState} from 'react'
import Header from '../../Component/Header'
import { COLORS, FONTS, formatter, SIZES } from '../../Theme/Theme'
import InfoCard from '../../Component/InfoCard'
import { useNavigate, useLocation } from 'react-router-dom';
import { baseURL } from '../../helpers/helpers';
import { IMAGES } from '../../Theme/Image';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal, getMedical } from '../../Store/actions';
import ImageUploading from 'react-images-uploading';
import AlertCard from '../../Component/AlertCard';
import axios from 'axios';
import { useAlert } from 'react-alert';
import Loading from '../../Component/Loading';
import useMediaQuery from '../../Component/useMediaQuery';
import { checking, Statusad } from "../../Component/Constants";
import DropDown from '../../Component/DropDown/DropDown';
import InputForm from '../../Component/InputForm';

import Modal from 'react-modal';

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
  const alert = useAlert()
  const med = useSelector(state => state.Reducers.med)
  const animal = useSelector(state => state.Reducers.animal)
  const token = useSelector(state => state.Reducers.authToken)

  const unit = useSelector(state => state.Reducers.unit)
  const [profile_pic, setprofile_pic] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [valueS, setValueS] = useState("");
  const [valueF, setValueF] = useState("");

  const onChange = (imageList) => {
    setprofile_pic(imageList);
  };
  const updateProfile=()=>{
    setLoading(true)
    const formData = new FormData();
    formData.append('animal_image', profile_pic.length===0? [] : profile_pic[0]['file']);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    };
    axios.patch(baseURL + `/animals/${animal?.tag_number}`, formData, config)
        .then(response => {
          if (response.status == 200) {
            setLoading(false);
            dispatch(getAnimal(data.tag_number))
            alert.success(<AlertCard msg={"Profile Pic Sucessfully"} type={true} />)
          }
          else {
            alert.error(<AlertCard msg={"Internal server error"} type={false} />)
            setLoading(false);
          }
        })
        .catch(err => {
          setLoading(false);
          alert.error(<AlertCard msg={err} type={false} />)
        });
  }
  const matches = useMediaQuery('(max-width:810px)')
  const mobile = useMediaQuery('(min-width:400px)') 
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

// 

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
              cond == false ?
                <div></div> :
                <div style={{
                  display: mobile ? matches ? "flex" : 'flex' : 'grid', 
                  alignSelf: "center",
                  marginRight: mobile ? matches ? -100 : -100 : 0,
                  marginLeft:mobile ? matches ? 0 : 0 : -30
                }}>
                  <button style={{
                    ...FONTS.h2,
                    color: COLORS.Primary,
                    border:'none',
                    background:'none',
                    cursor:'pointer',
                    width:100,
                    height:50,
                    textAlign:'end'
                  }}>
                    EDIT
                  </button>
                  <button style={{
                    ...FONTS.h2,
                    color: COLORS.Primary,
                    marginLeft: mobile ? matches ? 30 : 30 :0 ,
                    border:'none',
                    background:'none',
                    cursor:'pointer',
                    width:100,
                    height:50,
                    textAlign:'end'
                  }}
                  // onClick={()=>{
                  //   document.getElementById("Status").style.display = 'block'
                  // }}
                  onClick={openModal}
                  >
                    STATUS
                  </button>

                </div>
            }
          </>
        }
      />
      <div style={{
        // overflowY: 'scroll',
        paddingInlineStart: 0,
        marginBottom: "30px"
      }}>
        {/* Imagecontent */}
        <div style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px",
          flexDirection:"column"
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
                <img src={profile_pic.length==0?animal?.animal_image != null ? animal?.animal_image : animal?.image:profile_pic[0]['dataURL']} alt={animal?.tag_number}
                  style={{
                    height: 120,
                    width: 120,
                    alignSelf: "center",
                    borderRadius: 60,
                    border: '2px solid rgba(0, 0, 0)',
                  }} />
                :
                <img src={profile_pic.length==0?animal?.animal_image != null ? baseURL + animal?.animal_image : baseURL + animal?.image:profile_pic[0]['dataURL']} alt={animal?.tag_number}
                  style={{
                    height: 120,
                    width: 120,
                    alignSelf: "center",
                    borderRadius: 60,
                    border: '2px solid rgba(0, 0, 0)',
                  }} />
            }
            
          </div>
          <ImageUploading
              value={profile_pic}
              onChange={onChange}
              maxNumber={69}
              resolutionWidth={300}
              resolutionHeight={300}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
              }) => (
                <div className="upload__image-wrapper">
                  {
                    loading?<Loading/>:
                    <>
                    
              {
                profile_pic.length==0?
                  <button
                    style={{
                      backgroundColor: COLORS.yellow,
                      color: COLORS.black,
                      ...FONTS.h3,
                      borderRadius: SIZES.base,
                      border: "none"
                    }}
                    onClick={onImageUpload}
                  >
                    EDIT
                  </button>:
                  <>
                  <button style={{
                    backgroundColor:COLORS.Primary,
                    color: COLORS.white,
                    ...FONTS.h3,
                    borderRadius: SIZES.base,
                    border: "none"
                  }} onClick={updateProfile}>Update</button>
                  &nbsp;
                  <button style={{
                    backgroundColor: COLORS.red,
                    color: COLORS.white,
                    ...FONTS.h3,
                    borderRadius: SIZES.base,
                    border: "none"
                  }} onClick={onImageRemoveAll}>Remove</button>
                  </>
                }
                  
                  
                  </>
                  }
                </div>
              )}
            </ImageUploading>
        </div>
        {/* Middle animal */}

        <div style={{
          display: matches ? "grid" : "flex",
          justifyContent: "space-evenly",
          // alignItems: "center"
        }}>
          {/* Firstblock */}
          <div style={{
            width: 350,
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: 10,
            height: animal?.gender == "Female" ? 300 : 250,

          }}>
            <InfoCard label={"Name"} value={animal?.name} />
            <InfoCard label={"Gender"} value={animal?.gender_name} />
            {

              animal?.gender == "Female" ?
                <InfoCard label={"Bred"} value={animal?.bred ? "Yes" : "No"} /> : null
            }
            <InfoCard label={"Tag Number"} value={animal?.support_tag} />
            <InfoCard label={"Weight"} value={unit ? `${animal?.weight} Lbs` : `${animal?.weight_kg} Kg`} withDivider={false} />
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
              paddingBottom: 15,
              marginTop:  matches ? 15 : null,
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
            width: matches ? null : 350,
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
              marginBottom: matches ? 20 :10 ,
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
              marginTop: matches ? 20 : null,
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
          data.flagged ? <div style={{
            display: matches ? 'inline-grid' : "flex" ,
            flexDirection: "column",
            marginLeft: matches ? 0 : "85px",
            bottom: "75px",
            backgroundColor: COLORS.lightGray2,
            borderRadius: 25,
            padding: matches ? 0 : 15,
            // width: 400,
            position: matches ? 'relative' : "fixed",
            top:matches ? -10 : null,
          }}>
            <InfoCard label={"Flagged?"} value={"Yes"} />
            <InfoCard label={"Description"} value={data.flag_desc} />
          </div> : null
        }

{/*  */}
<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
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
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              // margin : mobile ? matches ? -40 : null : -40,
              // display :  mobile ? matches ? 'block' : 'none' : 'block'
            },
            content: {
              position: 'fixed',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              // width:  mobile ? matches ? '100%' : '100%' : '100%',
              border: '1px solid transparent',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              // background: COLORS.Primary,
              // overflow: 'auto',
              // WebkitOverflowScrolling: 'touch',
              borderRadius: '0 4px 4px 0',
              outline: 'none',
              height:530
              
            }
          }}
        >
        <div style={{
                      width:mobile ? matches ? 400  : 400  : 320, 
                      height:500 , 
                      background:COLORS.lightGray2 , 
                      // position:'fixed', 
                      top: matches ? 80 : 10 , 
                      margin: '10px 0px', 
                      display:'flow',
                      // right:mobile ? matches ? 100 : 100 : 10,
                      borderRadius:SIZES.radius }}  
                      // id={'Status'}
                      >
          <>
          <div style={{
            display: "flex",
            justifyContent: "center",
            height: 40,
            width: 40,
            backgroundColor: COLORS.Primary,
            alignSelf: "center",
            borderRadius: 20,
            margin:10,
            top:10,
            position:'relative'
          }}
            // onClick={() => {
            //   document.getElementById("Status").style.display = 'none'
            // }}
            onClick={closeModal}
          >
            <img src={IMAGES.close2} alt={"back"}
              style={{
                height: 25,
                width: 25,
                alignSelf: "center",
              }} />
          </div>
          </>
          <>
          <p style={{...FONTS.h2,
                    color: COLORS.Primary,
                    display:'flex',
                    justifyContent:'center'}}>
            Status
          </p>
          </>
          
          
          <div style={{padding:20,}}>
          <DropDown
              value={valueS}
              onPress={(y)=>{
                setValueS(y.label)
              }}
              label={"Status* "}
              // options={checking}
              options={Statusad}
            />

          <DropDown
              value={valueF}
              onPress={(x)=>{
                setValueF(x.label)
              }}
              label={"Flagged* "}
              // options={checking}
              options={checking}
              
            />
            <>
            <InputForm
                    prependComponent={
                      <img
                        src={IMAGES.plus1}
                        style={{
                          height: 25,
                          width: 25,
                          margin: 10,
                          alignSelf: "center",
                        }}
                      />
                    }
                    type={Text}
                    value={'Fence Problem'}
                    label={"Description"}
                    // onChange={(event) => {
                    //   setWeight30(event.target.value);
                    // }}
                  />
            </>
          </div>
        </div>
        </Modal>

      </div>
    </div>

  )
}
