import React, { useState } from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import InputForm from '../../Component/InputForm'
import NavBarMain from '../../Component/Nav/navmain'
import { COLORS } from '../../Theme/Theme'
import { checking } from "../../Component/Constants";


export default function AddFinance() {
const [bred, setBred] = useState(false);


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
                  value={bred}
                  setValue={setBred}
                  label={"Bred"}
                  options={checking}
                />
                    </div>

    </div>
    </></>
  )
}

