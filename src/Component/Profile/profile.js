import React, { useState } from 'react'
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from '../../Theme/Image';
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import InputForm from "../../Component/InputForm";

export default function Profile() {
  // 
  const [valueMS, setValueMS] = useState("");
  const [tag, setTag] = useState("");
  const [bought, setBought] = useState(false);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
    // 
    function renderHeader(){
        return<NavBarMain/>;
      }
      function renderForm(){
        return(
          <>
          <div>
            <div
            style={{
              display: "flex",
              flexFlow: "row",
            }}
          >
            <div
      style={{
        backgroundColor: COLORS.lightGray2,
        minHeight: 300,
          width: 900,
        padding: 7,
        borderRadius: SIZES.radius,
        // marginTop: 50,
        // marginBottom: 50, 
        margin:20,
      }}>
        <p style={{
                  ...FONTS.largeTitle,
                  alignSelf: "center",}}
                  >My Account</p>
      <div style={{
          display: "flex",
          flexFlow: "row",
      }}>
      <div 
      style={{ margin:"auto", width:250, height:250 , backgroundColor:COLORS.lightGray1, borderRadius:SIZES.radius }}>
       <img src={IMAGES.login}
                    style={{
                      height: 100,
                      width: 100,
                      marginTop: 60,
                      
                    }}/>
        <h4 style={{margin:10,color:COLORS.black,...FONTS.h4}}> Username</h4>

       </div>
       <div
       style={{margin:"auto"}}>
           <div
           style={{ display:"flex" , justifyContent:"space-between" ,margin:10,
           width:450,
           backgroundColor:COLORS.white,
           borderRadius: SIZES.radius,
           padding:5
           }}>
               <h4 style={{margin:10,color:COLORS.darkGray,...FONTS.h2}}>Full Name </h4>
               <h4 style={{margin:10,color:COLORS.black,...FONTS.h3}}>
                 {/* {$fullname} */}
               </h4>
               
           </div>
           <div
           style={{display:"flex",justifyContent:"space-between" ,
           width:450,
           margin:10,
           backgroundColor:COLORS.white,
           borderRadius: SIZES.radius,
           padding:5
           }}>
               <h4 style={{margin:10,color:COLORS.darkGray,...FONTS.h2}}>Username </h4>
               <h4 style={{margin:10 ,color:COLORS.black,...FONTS.h3}}>
                 {/* {$Username} */}
               </h4>
               
           </div>
           <div
           style={{display:"flex",justifyContent:"space-between" ,
           width:450,
           margin:10,
           backgroundColor:COLORS.white,
           borderRadius: SIZES.radius,
           padding:5
           
           }}>
               <h4 style={{margin:10,color:COLORS.darkGray,...FONTS.h2}}>Phone Number</h4>
               <h4 style={{margin:10 ,color:COLORS.black,...FONTS.h3}}>
                 {/* {$number} */}
               </h4>
               
           </div>
           <div
           style={{display:"flex",justifyContent:"space-between" ,
           width:450,
           margin:10,
           backgroundColor:COLORS.white,
           borderRadius: SIZES.radius,
           padding:5
           }}>
               <h4 style={{margin:10,color:COLORS.darkGray,...FONTS.h2}}>Email</h4>
               <h4 style={{margin:10 ,color:COLORS.black,...FONTS.h3}}>
                 {/* {$useremail} */}
               </h4>
               
           </div>
           <div
           style={{display:"flex",
           width:450,
           margin:10,
           backgroundColor:COLORS.white,
           borderRadius: SIZES.radius,
           padding:5
           
           }}>
               <h4 style={{margin:10,color:COLORS.darkGray,...FONTS.h2}}>Farm Name</h4>
               <h4 style={{margin:10 ,color:COLORS.black,...FONTS.h3}}>
                 {/* {$Farmname} */}
               </h4>
               
           </div>

           <div
           style={{display:"flex",
           width:450,
           margin:10,
           backgroundColor:COLORS.white,
           borderRadius: SIZES.radius,
           padding:5
           
           }}>
               <h4 style={{margin:10,color:COLORS.darkGray,...FONTS.h2}}>Address</h4>
               <h4 style={{margin:10 ,color:COLORS.black,...FONTS.h3}}>
                 {/* {$Address} */}
               </h4>
               
           </div>
       </div>
      </div>
      </div>
      </div>
      </div>
      </> )}



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
