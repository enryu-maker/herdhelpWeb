import React, { useState } from "react";
import TextButton from "../../Component/TextButton";
import InputForm from "../../Component/InputForm";
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import DropDown from "../../Component/DropDown/DropDown";
import { checking, gender , species } from "../../Component/Constants";

export default  function Subscription() {

const [tire_1 , setTire] = useState(true) ;

    function renderHeader() {
        return <NavBarMain />;
      }
      function renderForm() {
        
        return (
            <div
            style={{
                backgroundColor: COLORS.lightGray2,
                minHeight: 300,
                //   width:450,
                padding: "0 20px",
                borderRadius: SIZES.radius,
                marginTop: 0,
                marginBottom: 10,
            }}
            >
                <p style={{color:COLORS.red}}>NO Active Subscription , Please Purchase the Tire</p>
              <div>
            <p
              style={{
                ...FONTS.largeTitle,
                alignSelf: "center",
              }}
            >
              Subscription
            </p>
            <p>Find Which One Is best For You</p>
            </div>

            <div style={{display:'flex', flexDirection:"column",width:'100%'}}>
                <div style={{
                width:950,
                            Height:50, 
                            backgroundColor:COLORS.white,
                            margin:'5px 10px',
                            padding:'0 40px',
                            display:'flex',
                            justifyContent:"space-between",
                            borderRadius:SIZES.radius
                            }}>
                    <p  style={{
                ...FONTS.body1,
                alignSelf: "left",
              }}> Tier 1 </p>
                    <h3>$9.99 / month</h3>
                    <h4>Animal Limit : 50</h4>
                    
                    
                    <button value={tire_1} style={{ width:70,...FONTS.body2,margin:'auto 0' , height:40, border:"none" , background:COLORS.Primary , borderRadius:SIZES.radius, cursor:"pointer"}}
                    >BUY</button>
                    {/* {tire_1 ? 
                      <h3>1 x 9.99 </h3> :   <h3>helo</h3>
                } */}
                    
                </div>
                <div style={{
                width:950,
                            Height:50, 
                            backgroundColor:COLORS.white,
                            margin:'5px 10px',
                            padding:'0 40px',
                            display:'flex',
                            justifyContent:"space-between",
                            borderRadius:SIZES.radius
                            }}>
                    <p  style={{
                ...FONTS.body1,
                alignSelf: "left",
              }}> Tier 2 </p>
                    <h3>$19.99 / month</h3>
                    <h4>Animal Limit : 100</h4>
                    
                    
                    <button value={tire_1} style={{ width:70,...FONTS.body2,margin:'auto 0' , height:40, border:"none" , background:COLORS.Primary , borderRadius:SIZES.radius, cursor:"pointer"}}
                    >BUY</button>
                    {/* {tire_1 ? 
                      <h3>1 x 9.99 </h3> :   <h3>helo</h3>
                } */}
                    
                </div>
                <div style={{
                width:950,
                            Height:50, 
                            backgroundColor:COLORS.white,
                            margin:'5px 10px',
                            padding:'0 40px',
                            display:'flex',
                            justifyContent:"space-between",
                            borderRadius:SIZES.radius
                            }}>
                    <p  style={{
                ...FONTS.body1,
                alignSelf: "left",
              }}> Tier 3 </p>
                    <h3>$29.99 / month</h3>
                    <h4>Animal Limit : 200</h4>
                    
                    
                    <button value={tire_1} style={{ width:70,...FONTS.body2,margin:'auto 0' , height:40, border:"none" , background:COLORS.Primary , borderRadius:SIZES.radius, cursor:"pointer"}}
                    >BUY</button>
                    {/* {tire_1 ? 
                      <h3>1 x 9.99 </h3> :   <h3>helo</h3>
                } */}
                    
                </div>
                <div style={{
                width:950,
                            Height:50, 
                            backgroundColor:COLORS.white,
                            margin:'5px 10px',
                            padding:'0 40px',
                            display:'flex',
                            justifyContent:"space-between",
                            borderRadius:SIZES.radius
                            }}>
                    <p  style={{
                ...FONTS.body1,
                alignSelf: "left",
              }}> Tier 4 </p>
                    <h3>$49.99 / month</h3>
                    <h4>Animal Limit : 500</h4>
                    
                    
                    <button value={tire_1} style={{ width:70, ...FONTS.body2,margin:'auto 0' , height:40, border:"none" , background:COLORS.Primary , borderRadius:SIZES.radius, cursor:"pointer"}}
                    >BUY</button>
                    {/* {tire_1 ? 
                      <h3>1 x 9.99 </h3> :   <h3>helo</h3>
                } */}
                    
                </div>
                <div style={{
                width:950,
                            Height:50, 
                            backgroundColor:COLORS.white,
                            margin:'5px 10px',
                            padding:'0 40px',
                            display:'flex',
                            justifyContent:"space-between",
                            borderRadius:SIZES.radius
                            }}>
                    <p  style={{
                ...FONTS.body1,
                alignSelf: "left",
              }}> Tier 5 </p>
                    <h3>$99.99 / month</h3>
                    <h4>Animal Limit : 1000</h4>
                    
                    
                    <button value={tire_1} style={{ width:70,...FONTS.body2,margin:'auto 0' , height:40, border:"none" , background:COLORS.Primary , borderRadius:SIZES.radius, cursor:"pointer"}}
                    >BUY</button>
                    {/* {tire_1 ? 
                      <h3>1 x 9.99 </h3> :   <h3>helo</h3>
                } */}
                    
                </div>
            </div>
            </div>)}









  return (
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

