import React from "react";
import { COLORS, SIZES } from "../../Theme/Theme";
import ButtonCard from "../../Component/ButtonCard";
import { IMAGES } from "../../Theme/Image";
import { Link } from "react-router-dom";
import NavBarMain from "../../Component/Nav/navmain";
export default function Main() {
  return (
    <div style={{
      flex:1
    }}>
    <NavBarMain page={'home'}/>
    <div style={{
      display:"flex",
      alignSelf:"center",
      justifyContent:"center",
      backgroundColor:COLORS.layout
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
