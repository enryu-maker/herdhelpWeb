import React from "react";
import { COLORS, SIZES } from "../../Theme/Theme";
import ButtonCard from "../../Component/ButtonCard";
import { IMAGES } from "../../Theme/Image";
// import axiosIns from '../../helpers/helpers';
// import { Link } from "react-router-dom";
import NavBarMain from "../../Component/Nav/navmain";
import './Home.css'

export default function Main() {

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
//  const username = React.useContext(Username)

  //







  return (
    <div style={{
      flex:1,
      
      justifyContent:"center",
    }}>
    <NavBarMain page={'home'}/>
    <div style={{
      display:"flex",
      justifyContent:"center",
      background:"rgb(195, 231, 154, 0.596)",
     marginBottom:50,
 


    }}>
      <div
        style={{
          // marginTop:20,
          background: COLORS.layout  , //"#f5f1e8"
          backgroundImage : "linear-gradient(315deg, #f9d39d6b 60%, #f5f1e8 0%)",
          borderRadius: SIZES.radius,
          // marginBottom:50,
          margin:'40px auto ',
          padding:20,
           width:"fit-content",
           minHeight:530,
           boxShadow:"10px -5px 50px 0.1px black",
           display: "flex",
          flexFlow: "row",
        }}
      >
       
          {/* <div style={{minWidth:300 , 
            minHeight:500 ,
            backgroundColor:COLORS.lightGray1,
            borderRadius:SIZES.radius, 
            padding:20,margin:"auto",
            } }>
              
              <p style={{}}><img src={IMAGES.login} alt='' style={{width:50 , margin:"0px 10px"}} />User name</p>
              <hr style={{width:200 }} />
              <div style={{width:300  }}> */}
              {/* <p>email</p> */}
              {/* <p>Total No. Animal = <output>60</output></p>
              <p>No. Cow = <output>10</output></p>
              <p>No. Goat = <output>10</output></p>
              <p>No. Horse = <output>10</output></p>
              <p>No. Pig = <output>10</output></p>
              <p>No. Rabbit = <output>10</output></p>
              <p>No. Sheep = <output>10</output></p>
              </div>
            </div> */}
       
        <div>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
          }}
        >
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
    </div>
  );
}
