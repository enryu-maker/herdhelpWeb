import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import Header from '../../Component/Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';
export default function Weight() {
  // 
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");

  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const species = useSelector(state => state.Reducers.cat)
  const tags = useSelector(state => state.Reducers.tags)
  const unit = useSelector(state => state.Reducers.unit)
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
  async function updateWeight() {
    if (valueBS != "", weight != 0) {
      setLoading(true)
      try {
        await axiosIns.patch(`animals/${id}${valueMS}${valueBS}`, {
          'weight': unit == true ? weight : Math.round(weight / 0.45359237),
          'weight_kg': unit == false ? weight : Math.round(weight * 0.45359237),
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((Response) => {
          if (Response.status == 200) {
            alert("Done")
            setLoading(false)
          }
          else {
            setLoading(false)
          }
        })
      } catch (err) {
        setLoading(false)
      }
    }
    else {
      setLoading(false)
    }
  }




  function renderForm() {
    return (

      <div
        style={{
          paddingTop: "20px",
          backgroundColor: COLORS.lightGray2,
          marginTop: "50px",
          width: "80%",
          borderRadius: SIZES.radius,
        }}
      >
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

          <DropDown
            value={valueBS}
            setValue={setValueBS}
            label={"Tags*"}
            // options={checking}
            options={finder(tags, valueMS)}
          />

          <InputForm
            prependComponent={
              <img
                src={unit ? IMAGES.lbs : IMAGES.scale}
                alt=""
                style={{
                  height: 25,
                  width: 25,
                  margin: 10,
                  alignSelf: "center",
                }}
              />
            }
            type={"number"}
            value={weight}
            label={"Weight"}
            onChange={(event) => {
              setWeight(event.target.value);
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        // flex: 1,
      }}
    >
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
        title={"Update Weight"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {renderForm()}
      </div>
      {
        loading ?
          <Loading /> :
          <TextButton
            label={"Update"}
            icon={IMAGES.update}
            onPress={() => {
              updateWeight()
            }}
            buttonContainerStyle={{
              marginTop: "30px",
            }}
          />
      }
    </div>
  )
}
