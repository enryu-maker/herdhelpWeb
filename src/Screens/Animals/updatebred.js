import React,{ useState } from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import { species } from "../../Component/Constants";
import { COLORS, SIZES , FONTS} from '../../Theme/Theme';

import DropDown from '../../Component/DropDown/DropDown'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


export default  function Updatebred() {
    const animatedComponents = makeAnimated();
    const [valueMS, setValueMS] = useState("");
  return (
    <>
    <NavBarMain/>

    <>

    <div style={{minHeight:200,
          backgroundColor:COLORS.lightGray1,
          borderRadius: SIZES.radius,
          maxWidth:'400px',
          padding:20, margin:'auto'}}>
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
          display:"flex",
          flexFlow:"column",
          marginBottom:30}}>
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
            width:284,
            alignSelf: "center",}}>
        <Select
            components={animatedComponents}
            isMulti
            name="Tags"
            options={species}
            className="basic-multi-select"
            classNamePrefix="Tags"
      /></div>
    </div>
    </div>
    
    </>
    </>
  )
}

