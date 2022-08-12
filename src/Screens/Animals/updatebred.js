import React, { useState } from 'react'
import { COLORS, SIZES, FONTS } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import TextButton from '../../Component/TextButton';
import DropDown from '../../Component/DropDown/DropDown'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getHerds, getTags } from '../../Store/actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosIns from '../../helpers/helpers';
export default function Updatebred() {
  const animatedComponents = makeAnimated();
  const [valueMS, setValueMS] = useState("");
  const [loading, setLoading] = useState(false);

  const [tag, setTag] = useState([]);
  const navigate = useNavigate()
  const [dobt, setDobt] = useState(null);

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getTags())
  }, [])

  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  const id = localStorage.getItem("id")
  function finder(list, value) {
    var dataValue;
    var final_data = [];
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
        dataValue.map(a => {
          if (a.gender === "Female") {
            final_data.push(a)
          }
        })
      }
    });
    return final_data;
  }
  function axiosRequest(tag) {
    var ls = []
    tag.map((a, index) => {
      const v = `animals/${id}${valueMS}${a.value}`
      ls.push(v)
    })
    return (ls)
  }
  axiosRequest(tag)
  async function updateBred() {
    var final_list = axiosRequest(tag)
    if (tag != "", dobt != '') {
      setLoading(true)
      try {
        await Promise.all(final_list.map((endpoint) => axiosIns.patch(endpoint, {
          'bred': true,
          'bred_date': dobt
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }))).then(axios.spread((Response) => {
          if (Response.status == 200) {
            dispatch(getHerds())
            alert("done")
            setLoading(false)
          }
          else {
            setLoading(false)
          }
        }))
      } catch (err) {
        console.log(err.data)
        setLoading(false)
      }
    }
    else {
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
          title={"Update Bred"} />
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
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <DropDown
                value={valueMS}
                setValue={setValueMS}
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
                  <text style={{ color: COLORS.gray, ...FONTS.body4 }}>Tags</text>
                </div>

                <div style={{
                  width: 284,
                  alignSelf: "center",
                  marginBottom: 20,
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
                      setTag(e)
                    }}
                  />
                </div>


              </div>
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
                value={dobt}
                label={"Date Bred"}
                onChange={(event) => {
                  setDobt(event.target.value);
                }}
              />

            </div>
          </div>

        </div>
        <TextButton
          label={"Update Bred"}
          icon={IMAGES.update}
          onPress={() => {
            updateBred()
          }}
          buttonContainerStyle={{
            marginTop: "30px",
          }}
        />
      </>
    </>
  )
}

