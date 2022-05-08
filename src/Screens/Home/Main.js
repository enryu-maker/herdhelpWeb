import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import ButtonCard from "../../Component/ButtonCard";
import { IMAGES } from "../../Theme/Image";
import axiosIns from '../../helpers/helpers';
import './Home.css'
import { Link, Router } from "react-router-dom";
import { Routes,Route } from "react-router-dom";

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
    {/* 
    <div style={{
      flex:1,
      
      justifyContent:"center",
    }}>
     <NavBarMain page={'home'}/>
    <div style={{
      display:"flex",
      justifyContent:"center",
     marginBottom:50,
    }} className='mainbg'>
      <div
        style={{// marginTop:20,
          background: COLORS.layout  , //"#f5f1e8"
          backgroundImage : "linear-gradient(315deg, #f9d39d6b 60%, #f5f1e8 0%)",
          borderRadius: SIZES.radius,
          // marginBottom:50,
          margin:'40px auto ',
          padding:20,
          width:"fit-content",
          minHeight:530,
          boxShadow:"5px -5px 30px 2px rgba(30, 60, 0 ,0.4)",
          display: "flex",
          flexFlow: "row",}}>
        <div style={{minWidth:300 , 
            minHeight:500 ,
            backgroundColor:COLORS.lightGray1,
            borderRadius:SIZES.radius, 
            padding:20,margin:"auto",
            } }>
              
              <p style={{}}><img src={IMAGES.login} alt='' style={{width:50 , margin:"0px 10px"}} />User name</p>
              <hr style={{width:200 }} />
              <div style={{width:300  }}> 
              <p>email</p>
              <p>Total No. Animal = <output>60</output></p>
              <p>No. Cow= <output>10</output></p>
              <p>No. Goat = <output>10</output></p>
              <p>No. Horse = <output>10</output></p>
              <p>No. Pig = <output>10</output></p>
              <p>No. Rabbit = <output>10</output></p>
              <p>No. Sheep = <output>10</output></p>
              </div>
            </div>  <div>
          <div
            style={{
            display: "flex",
            flexFlow: "row",
          }}>
          <ButtonCard 
            label={'My Herds'}
            link={'/herds'}
            img={IMAGES.heart} 
          />
          <ButtonCard 
            label={'Add Animals'}
            link={'/animals'}
            img={IMAGES.add}
          />
          <ButtonCard 
            label={'Add Medication'}
            link={'/medication'}
            img={IMAGES.med}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
          }}
        >
          <ButtonCard 
            label={'Update Weight'}
            img={IMAGES.weight}
            link={'/weight'}
          />
          <ButtonCard 
            label={'Finance'}
            link={'/finance'}
            img={IMAGES.money}
          />
          <ButtonCard 
            label={'Alerts'}
            link={'/alerts'}
            img={IMAGES.bell}   
          />
        </div>
        </div>
      </div>
    </div> 
    </div>*/}
    
    <div style={{
      // flex:0,
      display:"contents",
      justifyContent:"space-between"
      // justifyContent:"center",
    }}>
      
    <div style={{width:'20%' ,
                 margin:'0px 10px', 
                 height:550, 
                 backgroundColor: "#e8f0f7" , 
                 borderRadius:SIZES.radius}}>
       <div style={{margin:"10px 0 0 0" , display:"flex"}}> 
       <img src={IMAGES.login}
                    style={{
                      height: 60,
                      width: 60,
                      margin: ' 30px 0 0 30px',
                      display:'block'
                    }}/>
                    <div style={{margin:20 }} >  
        <h4 style={{color:COLORS.black,...FONTS.h5}}> Username</h4>
        <h4 style={{color:COLORS.black,...FONTS.h5}}> Phone number</h4>
        </div>
        </div>
        <hr style={{width:240}}/>
       <div style={{textAlign:"left" , display:"grid" , gap:'30px' , padding:"0px 20px"}}>
         <Link to={'/main'} style={{color:"#37bcd6",
            marginLeft:20,
            color:COLORS.Primary,
            textDecorationLine:page==="home"?"underline":"none",
            ...FONTS.h3,}}>Home</Link>
             <Link to={'/main'} style={{color:"#37bcd6",
            marginLeft:20,
            color:COLORS.Primary,
            textDecorationLine:page==="profile"?"underline":"none",
            ...FONTS.h3,}}>Profile</Link>
             <Link to={'/main'} style={{color:"#37bcd6",
            marginLeft:20,
            color:COLORS.Primary,
            textDecorationLine:page==="report"?"underline":"none",            ...FONTS.h3,}}>Report</Link>
             <Link to={'/main'} style={{color:"#37bcd6",
            marginLeft:20,
            color:COLORS.Primary,
            textDecorationLine:page==="history"?"underline":"none",
            ...FONTS.h3,}}>Weight History</Link>
             <Link to={'/main'} style={{color:"#37bcd6",
            marginLeft:20,
            color:COLORS.Primary,
            textDecorationLine:page==="parents"?"underline":"none",
            ...FONTS.h3,}}>Parents</Link>
             <Link to={'none'} style={{color:"#37bcd6",
            marginLeft:20,
            color:COLORS.Primary,
            ...FONTS.h3,}} 
            // onClick={logout}
            >Logout</Link>
       </div>
       <hr style={{width:240 , marginTop:30}}/>
       <div>
         <img src={IMAGES.logo}  style={{ width:60}}/>
       </div>
    </div>
    <div style={{width:'15%', 
                  margin:'0px 10px' ,
                   height:'550px' , 
                   overflow:'auto',
                   backgroundColor:"rgba(204, 167, 167, 0.801)" , 
                   borderRadius:SIZES.radius,
                   }}>
                     <div>
                     <ButtonCard 
            label={'My Herds'}
            link={'/herds'}
            img={IMAGES.heart} 
          />
          <ButtonCard 
            label={'Add Animals'}
            link={'/animals'}
            img={IMAGES.add}
          />
          <ButtonCard 
            label={'Add Medication'}
            link={'/medication'}
            img={IMAGES.med}
          />
          <ButtonCard 
            label={'Update Weight'}
            img={IMAGES.weight}
            link={'/weight'}
          />
          <ButtonCard 
            label={'Finance'}
            link={'/finance'}
            img={IMAGES.money}
          />
          <ButtonCard 
            label={'Alerts'}
            link={'/alerts'}
            img={IMAGES.bell}   
          />
                     </div>
    
    </div>
    <div style={{width:'60%' , margin:'0px 10px', height:550, backgroundColor:"#e8f0f4" , borderRadius:SIZES.radius}}>
       
    </div>
    </div>

    </>


  );
}
