import React,{ useState } from 'react'
import NavBarMain from '../../Component/Nav/navmain'
import { species } from "../../Component/Constants";
import { COLORS, SIZES } from '../../Theme/Theme';

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

        <Select
            components={animatedComponents}
            isMulti
            name="Tags"
            options={species}
            className="basic-multi-select"
            classNamePrefix="Tags"
      />
    </div>
    
    </>
    </>
  )
}

