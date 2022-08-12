import React, { useState } from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import { COLORS, SIZES } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TextButton from '../../Component/TextButton';
import { getHerds } from '../../Store/actions';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';
export default function Flaganimal() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [Flaggedesp, setFlaggedesp] = useState('');
  const navigate = useNavigate()
  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  const id = localStorage.getItem("id")
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
            alert("Done")
            dispatch(getHerds())
            setLoading(false)
          }
          else {
            setLoading(false)
          }
        })
      } catch (err) {
        console.log(err)
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
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <DropDown
                value={valueMS}
                setValue={setValueMS}
                label={"Species*"}
                options={species}
              />
              <DropDown
                value={valueBS}
                setValue={setValueBS}
                label={"Tags*"}
                options={finder(tags, valueMS)}
              />

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

