import React, { useState } from "react";
// import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
// import ButtonCard from "../../Component/ButtonCard";
// import { IMAGES } from "../../Theme/Image";
// import axiosIns from '../../helpers/helpers';
import './Home.css'
// import { Link, Router } from "react-router-dom";
// import { Routes,Route } from "react-router-dom";
import NavBarMain from "../../Component/Nav/navmain";
// import Sidenav from "../../Component/Nav/sidenav"

export default function Main({
  page,
  navStyle
}) {

  //
  
//    const [loading, setLoading] = React.useState(false);
//   const [show, setShow] = React.useState('');
//   const [user, setUser] = React.useState([]);
//   async function fetchanimal() {
//     let {data} = await axiosIns.get('getcategories/');
//     setLoading(true);
//     global.species = data;
//     return data;
//   }
//   async function getWeightUnit() {
//     global.unit = JSON.parse(await AsyncStorage.getItem('weight'));
//     // return data
//   }
//   async function fetchStatus() {
//     let {data} = await axiosIns.get('getstatuses/');
//     setLoading(true);
//     global.stat = data;
//     return data;
//   }
//   async function loadId() {
//     global.id = await AsyncStorage.getItem('id');
//   }
//   async function getALerts() {
//     let {data} = await axiosIns.get('alerts/');
//     return data;
//   }
//   async function checkSubs() {
//     let {data} = await axiosIns.get('subscriptions/isactive/');
//     return data;
//   }
//   async function getAnimals(){
//     let {data} = await axiosIns.get('animaltags/');
//     console.log(data)
//     return data
//   }
//   React.useEffect(() => {
//     fetchStatus();
//     fetchanimal();
//     loadId();
//     getALerts().then(data => {
//       setUser(data);
//     });
//     getWeightUnit();
//     checkSubs().then(data => {
//       global.isActive=data.isactive
//       !data.isactive
//         ? navigation.navigate('Subscription', {
//             msg: 'No Active Subscription Please Purchase the Tier',
//             cond: true,
//           })
//         : null;
//     });
//     getAnimals().then((data)=>{
//       global.tags=data
//     })
//   }, [show]);
//  const username = React.useContext(username)

  

//
// 



// 




  return (
<>
<div style={{width:'100%'}}>
    <div style={{display:'flex' , width:'100%'}}>
      <NavBarMain/>
      </div>
      </div>
       {/* <Sidenav/> */}
    
</>



  );
}
