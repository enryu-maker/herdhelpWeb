import React, { useState } from 'react'
import './profile.css'
import NavBarMain from "../../Component/Nav/navmain";
import { IMAGES } from '../../Theme/Image';
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import InputForm from "../../Component/InputForm";
import TextButton from "../../Component/TextButton";
import { Link } from 'react-router-dom';

export default function Profile() {
  // 
  const [valueMS, setValueMS] = useState("");
  const [tag, setTag] = useState("");
  const [bought, setBought] = useState(false);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
    // 
// const [edit_profile , setProfile] = useState(false);
// const edit_pannel = ()=> setProfile(!edit_profile) 


const [show , setShow] = useState(false)
//const [sidebar , setSidebar] = useState(false);

// const showSidebar = ()=> setSidebar(!sidebar)


    function renderHeader(){
        return<NavBarMain/>;
      }
      function renderForm(){
        return(
          <>
          <div style={{width:"100%", height:"auto" , display:"flex"}}>




            <div
            style={{
              display: "flex",
              flexFlow: "row",
            }} className='profile-form'
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
        <div style={{display:"flex"
      , justifyContent:"space-between",alignItems:"center" , width:800 , margin:"auto"}}>
        <p style={{
                  ...FONTS.largeTitle,
                  alignSelf: "center",}}
                  >My Account</p>

<TextButton
className='edit_profile'
        label={"Edit"}
        icon={IMAGES.right}
        onPress={()=> setShow(true)}
      />
        {/* <Link to={'/profile-edit'} className='edit_profile' onClick={()=> setShow(true)} >Edit <img src={IMAGES.down} style={{width:20}}/></Link>  */}
        </div>
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
     
     <div className='edit_form'> {
  show?<div style={{
    width:300,
    backgroundColor: COLORS.lightGray2,
          minHeight: 300,
          padding:10,
          // paddingLeft: 10,
          // paddingRight:10,
          // paddingBottom:10,
          borderRadius: SIZES.radius,
          margin:'20px 50px -10px',
  }} className='edit_form' >
    <p
            style={{
              ...FONTS.largeTitle,
              alignSelf: "center",
            }}
          >
            Edit  Account
          </p>
    <InputForm
        type={Text}
        label={"Full Name"}
        />
    <InputForm
        type={Number}
        label={"Phone Number"}
        />
    <InputForm
        type={Text}
        label={"Farm Name"}
        />
    <InputForm
        type={Text}
        label={"Address"}
        />
        <TextButton
        label={"Save"}
        icon={IMAGES.update}
        onPress={()=> setShow(false)}
      />
        
  </div>
  :null
}</div>




      </div>
      
      
      </> 
)}



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
