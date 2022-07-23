import React, { useState } from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import InputForm from '../../Component/InputForm'
import NavBarMain from '../../Component/Nav/navmain'
import { COLORS } from '../../Theme/Theme'
import { species } from "../../Component/Constants";
import { IMAGES } from "../../Theme/Image";


export default function AddFinance() {
const [bred, setBred] = useState(false);
const [tag, setTag] = useState("");
const [valueMS, setValueMS] = useState("");

  return (
    <>
    <NavBarMain/>
    <>
    <div style={{ display: "flex",
          justifyContent: "center",
          alignSelf: "center",}}>
        <div style={{backgroundColor:COLORS.lightGray1,
                    borderRadius:10,
                    paddingTop:30,
                    paddingInline:50}}>
                        
                        <DropDown
              value={valueMS}
              setValue={setValueMS}
              label={"Species*"}
              // options={checking}
              options={species}
            />

<InputForm
              prependComponent={
                <img
                  src={IMAGES.tag}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={tag}
              label={"Quantity"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
            />
            <InputForm
              prependComponent={
                <img
                  src={IMAGES.money}
                  style={{
                    height: 25,
                    width: 25,
                    margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              value={tag}
              label={"Price"}
              onChange={(event) => {
                setTag(event.target.value);
              }}
            />
                    </div>

    </div>
    </></>
  )
}

