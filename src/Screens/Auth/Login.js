import React, { useState } from "react";
import InputForm from "../../Component/InputForm";
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import axios from "axios";
import { baseURL } from "../../helpers/helpers";
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavBar from "../../Component/Nav/Navbar";
import utils from "../../utils/Utils";

 


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);
  const [EmailError, setEmailError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [EmailErr, setEmailErr] = React.useState("");
  let navi = useNavigate()



  function isEnableSignIn() {
    return email != "" && password != "";
  }
  async function login() {
    if (isEnableSignIn()) {
      setLoading(true);

      await axios
        .post(
          baseURL + "login/",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data);
            setLoading(false);
            navi("/main")
          } else {
            setLoading(false);
            setEmailErr("User Not Registered");
          }
        })
        .catch((error) => {
          if (error.response) {
            setEmailErr("Invalid Email & Password");
            setLoading(false);
          }
        });
    } else {
      setEmailErr("Invalid Input");
      setLoading(false);
    }
  }


  return (
    <div style={{
      flex:1,
    }}>
    <NavBar
    navStyle={{
    }}
  page={"/login"}
  />

<div style={{
       display:"flex",
        justifyContent:"center",
        alignSelf:"center"
    }}>
    <div
      style={{
        backgroundColor: COLORS.lightGray2,
        minHeight:300,
        width:450,
        padding:20,
        borderRadius: SIZES.radius,
        marginTop:50,
        marginBottom:50,
      }}
    >
        <p style={{
            ...FONTS.largeTitle,
            alignSelf: 'center',
          }}>LOGIN</p>
        <p style={{
            ...FONTS.h2,
            alignSelf: 'center',
          }}>Let's Sign You In</p>
          <p style={{
            ...FONTS.body3,
            alignSelf: 'center',
          }}>
          Login account to continue!</p>
      <p
        style={{
          color: COLORS.red,
          ...FONTS.h3,
        }}
      >
        {EmailErr}
      </p>
      <InputForm
        appendComponent={
          <img
            src={IMAGES.correct}
            style={{
              height: 25,
              width: 25,
              margin: 10,
              alignSelf: "center",
            }}
          />
        }
        type={"email"}
        value={email}
        label={"Email"}
        errorMsg={EmailError}
        placeholder={"Enter your email"}
        onChange={(event) => {
          utils.validateEmail(event.target.value,setEmailError)
          setEmail(event.target.value);
        }}
      />
      <InputForm
        appendComponent={
          <button onClick={()=>{
              setShowPass(!showPass)
          }}
          style={{
              borderWidth:0,
              backgroundColor:COLORS.white,
              borderRadius:SIZES.radius
          }}
          >
            <img
              src={showPass?IMAGES.eye_close:IMAGES.eye}
              style={{
                height: 25,
                width: 25,
                alignSelf: "center",
                margin: 10,
              }}
            />
          </button>
        }
        value={password}
        type={showPass ? "text" : "password"}
        label={"Password"}
        placeholder={"Enter your password"}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      


      <TextButton
        label={"Login"}
        icon={IMAGES.log}
        onPress={() => {
          login();
        }}
        buttonContainerStyle={{
            backgroundColor: isEnableSignIn()
              ? COLORS.Primary
              : COLORS.transparentPrimary2,
            }}
          
      />
        
      <p style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
        Don't have an account?{" "}
        <Link
        to="/register"
          style={{
            backgroundColor: COLORS.lightGray2,
            color: COLORS.Primary,
          }}
        >
          SIGNUP
        </Link>
        <br/>
        <Link
        to="/"
          style={{
            position:'absolute',
            // display:'flex',
            marginTop:'13px',
            backgroundColor: COLORS.lightGray2,
            color: COLORS.Primary,
          }}
        >
         Forget Password
        </Link>
      </p>
    </div>
    </div>
    </div>
  );
}
