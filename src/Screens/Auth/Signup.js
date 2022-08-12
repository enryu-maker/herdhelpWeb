import React, { useState } from "react";
import InputForm from "../../Component/InputForm";
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import axios from "axios";
import { baseURL } from "../../helpers/helpers";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Component/Nav/Navbar";
import utils from "../../utils/Utils";
import Loading from "../../Component/Loading";
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
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const Data = {
    'username': username,
    'password': password,
    'email': email,
  };
  let navigate = useNavigate()

  function isEnableSignIn() {
    return email != '' && password != '' && username != '' && first != "" && last != "";
  }
  
  async function signup() {
    if (isEnableSignIn) {
      setLoading(true);
      await axios
        .post(
          baseURL + '/register/',
          {
            username: username,
            password: password,
            email: email,
            first_name: first,
            last_name: last,
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
            navigate('/login')
          } else {
            setLoading(false);
          }
        })
        .catch(error => {
          if (error.response) {
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
    }
  }
  return (
    <div style={{
      // flex:1,
    }}>
      <NavBar
        navStyle={{
        }}
        page={"/register"}
      />
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center"
      }}>
        <div
          style={{

            // backgroundColor: COLORS.lightGray2,
            width: 650,
            padding: 20,
            borderRadius: SIZES.radius,
            alignSelf: "center",
            justifyContent: "center",
            // marginBottom:50

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
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
            <InputForm
              appendComponent={
                <img
                  src={IMAGES.correct}
                  style={{
                    height: 25,
                    width: 25,
                    // margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"email"}
              value={email}
              label={"Email*"}
              placeholder={"Enter your email"}
              errorMsg={EmailError}
              onChange={(event) => {
                utils.validateEmail(event.target.value, setEmailErr)
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
                    // margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              errorMsg={UserErr}
              value={username}
              label={"Username*"}
              placeholder={"Enter your username"}
              onChange={(event) => {
                utils.validateUser(event.target.value, setUserErr)
                setUsername(event.target.value);
              }}
            />
          </div>
          {/*  */}
          {/* first name */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
            <InputForm
              appendComponent={
                <img
                  src={IMAGES.correct}
                  style={{
                    height: 25,
                    width: 25,
                    // margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              // errorMsg={UserErr}
              value={first}
              label={"First name*"}
              placeholder={"Enter your First name"}
              onChange={(e) => {
                setFirst(e.target.value);

              }}
            />

            {/* last name */}

            <InputForm
              appendComponent={
                <img
                  src={IMAGES.correct}
                  style={{
                    height: 25,
                    width: 25,
                    // margin: 10,
                    alignSelf: "center",
                  }}
                />
              }
              type={"text"}
              // errorMsg={UserErr}
              value={last}
              label={"last Name*"}
              placeholder={"Enter your Last name"}
              onChange={e => {
                setLast(e.target.value);
              }}
            />
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}>
            {/*  */}
            <InputForm
              appendComponent={
                <button onClick={() => {
                  setShowPass(!showPass)
                }}
                  style={{
                    borderWidth: 0,
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius
                  }}
                >
                  <img
                    src={showPass ? IMAGES.eye_close : IMAGES.eye}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: "center",
                      // margin: 10,
                    }}
                  />
                </button>
              }
              value={password}
              errorMsg={PassErr}
              type={showPass ? "text" : "password"}
              label={"Password*"}
              placeholder={"Enter your password"}
              onChange={(event) => {
                utils.validatePassword(event.target.value, setPassErr)
                setPassword(event.target.value);
              }}
            />

          </div>
          {
            loading ? <Loading /> :

              <TextButton

                label={"Signup"}
                icon={IMAGES.sign}
                onPress={()=>{
                  signup()
                }}
                disabled={!isEnableSignIn()}
                buttonContainerStyle={{
                  backgroundColor: isEnableSignIn()
                    ? COLORS.Primary
                    : COLORS.transparentPrimary2,
                }}
              />
          }
          <p style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
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
