import React ,{ useState }from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import NavBarMain from '../../Component/Nav/navmain'
import { species } from "../../Component/Constants";
import { COLORS, SIZES } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';

export default function Flaganimal() {

const [valueMS, setValueMS] = useState("");
const [name, setName] = useState("");return (
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
              value={name}
              label={"Description*"}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
    </div>
  </>
</>
  )
}

