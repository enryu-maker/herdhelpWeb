import React, { useState } from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import Sidenav from '../../Component/Nav/sidenav'
import DropDown from '../../Component/DropDown/DropDown'
import { COLORS, SIZES } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import TextButton from '../../Component/TextButton';
export default function WeightHistory() {
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()
  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      <Sidenav active={"Weight History"}/>
      <div style={{
        width: "90%",
        float: "right",
        display: "flex",
          flexDirection: "column",
          alignItems: "center",
      }}>
        <NavBarMain/>
        <Header title={"Weight History"}/>
        <div style={{
            paddingTop: "20px",
            backgroundColor: COLORS.lightGray2,
            alignSelf:"center",
            width: "80%",
            borderRadius: SIZES.radius,
            justifyContent:"center"
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
          <DropDown
            value={valueBS}
            setValue={setValueBS}
            label={"Tags*"}
            // options={checking}
            options={finder(tags,valueMS)}
          />
          </div>
          </div>
          <TextButton
        label={"History"}
        icon={IMAGES.weight}
        onPress={() => alert("hi")}
        buttonContainerStyle={{
          marginTop: "30px",
        }}
      />
      </div>
    </div>
  )
}
