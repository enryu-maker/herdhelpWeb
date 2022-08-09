import React ,{ useState }from 'react'
import DropDown from '../../Component/DropDown/DropDown'
import NavBarMain from '../../Component/Nav/navmain'
import { species } from "../../Component/Constants";
import { COLORS, SIZES } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import InputForm from '../../Component/InputForm';
import Header from '../../Component/Header';
import { useNavigate } from "react-router-dom";

export default function Flaganimal() {

const [valueMS, setValueMS] = useState("");
const [name, setName] = useState("");
const navigate = useNavigate()

return (
<>
  <>
  <Header 
      leftcomponent={
        <>
          <div style={{
            display:"flex",
            justifyContent:"center",
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
      title={"Flag Animal"}/>
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
              label={"Description"}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
    </div>
  </>
</>
  )
}

