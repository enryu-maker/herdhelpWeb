import React, { useState } from "react";
import InputForm from "../../Component/InputForm";
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import axios from "axios";
import { baseURL } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import NavBar from "../../Component/Nav/Navbar";
import utils from "../../utils/Utils";
export default function Signup() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [showPass, setShowPass] = React.useState(false);
    const [EmailError, setEmailError] = React.useState('');
    const [EmailErr, setEmailErr] = React.useState('');
    const [PassErr, setPassErr] = React.useState('');
    const [UserErr, setUserErr] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [validation, setValidation] = React.useState(false);
    const [dataText, setDataText] = React.useState('');
  const Data = {
    'username': username,
    'password': password,
    'email': email,
  };

  function isEnableSignIn() {
    return email != '' && password != '' && username != '';
  }
  async function signup() {
    if (isEnableSignIn) {
      setLoading(true);
      await axios
        .post(
          baseURL + 'register/',
          {
            username: username,
            password: password,
            email: email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          if (response.status === 201) {
            setLoading(false);
            setValidation(true);
            setShow(true);
            setDataText('User created');
            setEmailError('User created');
            setInterval(() => {
              setShow(false);
            }, 3000);
            // navigation.navigate('Login');
          } else {
            setLoading(false);
            setValidation(false);
            setShow(true);
            setDataText('User Registered');
          }
        })
        .catch(error => {
          if (error.response) {
            setLoading(false);
            setShow(true);
            setValidation(false);
            setDataText('User Registered');
            setEmailError('Invalid Input');
          }
        });
    } else {
      setValidation(false);
      setShow(true);
      setLoading(false);
      setDataText('User Registered');
      setEmailError('Invalid Input');
    }
  }
  return (
      <div style={{
        flex:1,
      }}>
      <NavBar
      navStyle={{
      }}
    page={"register"}
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
        alignSelf:"center",
        justifyContent:"center",
        marginBottom:50

      }}
    >
        <p style={{
            ...FONTS.largeTitle,
            alignSelf: 'center',
          }}>SIGNUP</p>
        <p style={{
            ...FONTS.h2,
            alignSelf: 'center',
          }}>Getting Started</p>
          <p style={{
            ...FONTS.body3,
            alignSelf: 'center',
          }}>
          Create an account to continue!</p>
      <p
        style={{
          color: COLORS.red,
          ...FONTS.h3,
        }}
      >
        {EmailError}
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
        placeholder={"Enter your email"}
        errorMsg={EmailError}
        onChange={(event) => {
            utils.validateEmail(event.target.value,setEmailErr)
          setEmail(event.target.value);
        }}
      />
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
        type={"text"}
        errorMsg={UserErr}
        value={username}
        label={"Username"}
        placeholder={"Enter your username"}
        onChange={(event) => {
            utils.validateUser(event.target.value,setUserErr)
          setUsername(event.target.value);
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
        errorMsg={PassErr}
        type={showPass ? "text" : "password"}
        label={"Password"}
        placeholder={"Enter your password"}
        onChange={(event) => {
            utils.validatePassword(event.target.value,setPassErr)
          setPassword(event.target.value);
        }}
      />
      <TextButton
        label={"Signup"}
        icon={IMAGES.sign}
        onPress={() => {
          signup();
        }}
        disabled={!isEnableSignIn()}
        buttonContainerStyle={{
            backgroundColor: isEnableSignIn()
              ? COLORS.Primary
              : COLORS.transparentPrimary2,
        }}
      />
      <p style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
        Already have an account?{" "}
        <Link
        to="/login"
          style={{
            backgroundColor: COLORS.lightGray2,
            color: COLORS.Primary,
          }}
        >
          LOGIN
        </Link>
      </p>
    </div>
    </div>
    </div>
  );
}
