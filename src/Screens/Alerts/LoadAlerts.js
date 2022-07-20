import React, { useState } from 'react'
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import {species } from "../../Component/Constants";
import { Link } from 'react-router-dom';
// import Card from '../../Component/Card';

export default function LoadAlerts() {
  // 
const [valueMS, setValueMS] = useState("");
const [tag, setTag] = useState("");
const [bought, setBought] = useState(false);
const options = ["one", "two", "three"];
const defaultOption = options[0];


//
/* const [alert, setAlerts] = React.useState([]);
  const [species, setSpcies] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function loadFinance() {
    let {data} = await axiosIns.get('alerts/');
    setLoading(true);
    return data;
  }
  React.useEffect(() => {
    setId(global.id);
    setSpcies(global.species);
    loadFinance().then(data => {
      setAlerts(data);
      // console.log(data)
    });
  }, [alert]);
  function delAlert(id){
    axiosIns.delete(`alerts/${id}`).then(()=>{alert("Alert deleted sucessfully")})
   } */

// 

// const [cow , dog , pig ] = useState("")



  return (
    <>
    <>
    <NavBarMain 
    page={"alerts"}/>
    </>
    
    <div
      style={{
        // flex: 1,
      }}
    ><p>Add Alert</p>



      
    </div>
    </>
  )
}
