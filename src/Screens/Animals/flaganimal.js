import React ,{ useState }from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import NavBarMain from '../../Component/Nav/navmain'
import { species } from "../../Component/Constants";
import { COLORS, SIZES } from '../../Theme/Theme';

export default function Flaganimal() {

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
        <DropDown
         value={valueMS}
         setValue={setValueMS}
         label={"Tags*"}
         // options={checking}
         options={species}
        />
    </div>
    </>
    </>
  )
}

