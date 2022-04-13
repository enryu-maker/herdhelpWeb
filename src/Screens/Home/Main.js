import React from "react";
import { COLORS, SIZES } from "../../Theme/Theme";
import ButtonCard from "../../Component/ButtonCard";
import { IMAGES } from "../../Theme/Image";
// import axiosIns from '../../helpers/helpers';
// import { Link } from "react-router-dom";
import NavBarMain from "../../Component/Nav/navmain";
export default function Main() {

  //
  /* 
   const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState('');
  const [user, setUser] = React.useState([]);
  async function fetchanimal() {
    let {data} = await axiosIns.get('getcategories/');
    setLoading(true);
    global.species = data;
    return data;
  }
  async function getWeightUnit() {
    global.unit = JSON.parse(await AsyncStorage.getItem('weight'));
    // return data
  }
  async function fetchStatus() {
    let {data} = await axiosIns.get('getstatuses/');
    setLoading(true);
    global.stat = data;
    return data;
  }
  async function loadId() {
    global.id = await AsyncStorage.getItem('id');
  }
  async function getALerts() {
    let {data} = await axiosIns.get('alerts/');
    return data;
  }
  async function checkSubs() {
    let {data} = await axiosIns.get('subscriptions/isactive/');
    return data;
  }
  async function getAnimals(){
    let {data} = await axiosIns.get('animaltags/');
    console.log(data)
    return data
  }
  React.useEffect(() => {
    fetchStatus();
    fetchanimal();
    loadId();
    getALerts().then(data => {
      setUser(data);
    });
    getWeightUnit();
    checkSubs().then(data => {
      global.isActive=data.isactive
      !data.isactive
        ? navigation.navigate('Subscription', {
            msg: 'No Active Subscription Please Purchase the Tier',
            cond: true,
          })
        : null;
    });
    getAnimals().then((data)=>{
      global.tags=data
    })
  }, [show]);
 const username = React.useContext(Username)
*/
  //

  return (
    <div style={{
      flex:1
    }}>
    <NavBarMain page={'home'}/>
    <div style={{
      display:"flex",
      alignSelf:"center",
      justifyContent:"center",
      backgroundColor:COLORS.layout,

    }}>
      <div
        style={{
          marginTop:50,
          backgroundColor: COLORS.lightGray1,
          borderRadius: SIZES.radius,
          marginBottom:80,
           
        }}
      >
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
  );
}
