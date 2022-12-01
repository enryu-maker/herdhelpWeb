import React, { useState } from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import { COLORS, SIZES, FONTS } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TextButton from '../../Component/TextButton';
import { getHerds } from '../../Store/actions';
import makeAnimated from 'react-select/animated';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';
import { useAlert } from 'react-alert';
import Select from 'react-select';
import AlertCard from '../../Component/AlertCard';
import useMediaQuery from '../../Component/useMediaQuery';
export default function Flaganimal() {
  const dispatch = useDispatch()
  const animatedComponents = makeAnimated();
  const alert = useAlert()
  const [loading, setLoading] = useState(false);
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [Flaggedesp, setFlaggedesp] = useState('');
  const navigate = useNavigate()
  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  const id = localStorage.getItem("id")
  const matches = useMediaQuery('(min-width:820px)')
  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }
  async function updateBred() {
    if (valueBS != "", Flaggedesp != '') {
      setLoading(true)
      try {
        await axiosIns.patch(`animals/${id}${valueMS}${valueBS}`, {
          flagged: true,
          flag_desc: Flaggedesp
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((Response) => {
          if (Response.status == 200) {
            alert.success(<AlertCard msg={"Flag Added Sucessfully"} type={true} />)
            dispatch(getHerds())
            setLoading(false)
          }
          else {
            alert.error(<AlertCard msg={"Internal server error"} type={false} />)
            setLoading(false)
          }
        })
      } catch (err) {
        alert.error(<AlertCard msg={err.msg} type={false} />)
        setLoading(false)
      }
    }
    else {
      alert.error(<AlertCard msg={"Invalid Input"} type={false} />)
      setLoading(false)
    }
  }
  return (
    <>
      <>
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
            <div></div>
          }
          title={"Flag Animal"} />
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}>
          <div style={{
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,

            width: "80%",
            borderRadius: SIZES.radius,
          }}>
            <div
              style={{
                display: matches ? "flex" : 'grid',
                justifyContent: matches ? "space-evenly" : 'space-around'

              }}
            >
              <DropDown
                value={valueMS}
                onPress={(x) => {
                  setValueMS(x.label)
                }}
                label={"Species*"}
                // options={checking}
                options={species}
              />

              <div style={{
                justifyContent: "center",
                alignSelf: "center",
                display: "flex",
                flexFlow: "column",
              }}>
                <div
                  style={{
                    width: 284,
                    justifyContent: "space-between",
                    display: "flex",
                    flexFlow: "row",
                    alignSelf: "center",
                    height: 20,
                    
                  }}
                >
                  <text style={{ color: COLORS.black, ...FONTS.body4,marginBottom:60 }}>Tags*</text>
                </div>

                <div style={{
                  width: 284,
                  alignSelf: "center",
                  marginBottom: 22,
                  ...FONTS.h3
                }}>
                  <Select
                    components={animatedComponents}
                    isMulti
                    name="Tags"
                    options={finder(tags, valueMS)}
                    className="basic-multi-select"
                    classNamePrefix="Tags"
                    onChange={(e) => {
                      setValueBS(e)
                    }}
                  />
                </div>


              </div>

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
                type={"text"}
                value={Flaggedesp}
                label={"Description"}
                onChange={(event) => {
                  setFlaggedesp(event.target.value);
                }}
              />
            </div>

          </div>
        </div>
        {
          loading ? <Loading /> :
            <TextButton
              label={"Flag"}
              icon={IMAGES.update}
              onPress={() => { updateBred() }}
              buttonContainerStyle={{
                marginTop: "30px",
              }}
            />
        }
      </>
    </>
  )
}

