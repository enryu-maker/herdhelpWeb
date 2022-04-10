import React,{useState} from 'react'
import TextButton from '../../Component/TextButton'
import InputForm from '../../Component/InputForm'
import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import { COLORS,SIZES, FONTS} from '../../Theme/Theme'
export default function Herds() {
    const [bought, setBought] = useState(false);

    function renderHeader(){
        return<NavBarMain/>;
      }
     
      function renderForm(){
        return(
        <div style={{width:'100%',
            height:500,
            backgroundColor:COLORS.lightGray2,
            margin:20,
            padding:20,
            borderRadius:SIZES.radius
        }} > herds</div>
            )}  




return(
    <div
    style={{
      flex: 1,
    }}
  >
    {renderHeader()}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      {renderForm()}
    </div>
  </div>
)
}
