import React from 'react'
import { Link } from 'react-router-dom';
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from '../../Theme/Image';
import { COLORS, FONTS, SIZES } from '../../Theme/Theme';
import './report.css'






export default function Report() {

     
function Altcards({
  altname,
  img,
  // onPress,
  Path,
}) {
  return (
    <>
    <Link to={Path}>
      <button
        style={{
          backgroundColor:'rgb(227,227,227)',
          height: 250,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          cursor:"pointer",
          // flexDirection:"column",
          borderWidth: 0,
          // boxShadow:'0px 0px 11px -3px black',
          justifyContent: "space-evenly",
          boxShadow: '0px 0px 15px -4px #888181',
          elevation: 2,
          width: 230,
        }}
        // onClick={''}
      >
          {/* <img src={IMAGES.rightone} style={{ height: 20, width: 20,alignSelf:"center",marginLeft:200,marginTop:10 }} /> */}
          <img src={img} alt={''} style={{ height: 80, width: 80,alignSelf:"center"}} />
        <div>
            <div style={{
            textAlign:'center'
        }}>
        <p style={{...FONTS.h3 , margin:20}}>{altname}</p>
        {/* <p style={{...FONTS.h4}}>{global.unit?`${Weight} lbs`:`${weight_kg} kg`}</p> */}
        </div>
        <div style={{
            display:"flex",
            flexFlow:"column"
        }}>
          {/* <img src={Gender=="Male"? IMAGES.male:IMAGES.female} style={{ height: 50, width: 50,marginTop:25}} /> */}
        </div>
        </div>
        


      </button></Link>

    </>
)}


return (
  <>
  <NavBarMain page={'/report'}/>
    <div
      style={{
        flex: 1,
      }}
    >
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
{/*  */}
<Altcards
img={IMAGES.male1}
altname={"Male Animal"}
Path={'/male'} />

<Altcards
img={IMAGES.female1}
altname={"Female Animal"}
Path={'/female'} />

<Altcards
img={IMAGES.right}
altname={"Birth Animal"}
Path={'/birthanimal'} />

<Altcards
img={IMAGES.paid}
altname={"Purchesed Animal"}
Path={'/purchesedanimal'} />
{/*  */}      </div>


<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
{/*  */}
<Altcards
img={IMAGES.male1}
altname={"Male Animal"}
Path={'/male'} />

<Altcards
img={IMAGES.female1}
altname={"Female Animal"}
Path={'/female'} />

<Altcards
img={IMAGES.right}
altname={"Birth Animal"}
Path={'/birthanimal'} />

<Altcards
img={IMAGES.paid}
altname={"Purchesed Animal"}
Path={'/purchesedanimal'} />
{/*  */}      </div>
    </div>
    </>
)
}

