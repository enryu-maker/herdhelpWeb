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
import { useDispatch } from 'react-redux'
import { storeID } from "../../Store/actions";
import { Login_Function } from "../../Store/actions";
import Loading from "../../Component/Loading";
import QRCode from "react-qr-code";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);
  const [EmailError, setEmailError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [EmailErr, setEmailErr] = React.useState("");
  let navi = useNavigate()
  const dispatch = useDispatch()
  function isEnableSignIn() {
    return email != "" && password != "";
  }
  async function login() {
    if (isEnableSignIn()) {
      setLoading(true);

      await axios
        .post(
          baseURL + "/login/",
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
            dispatch(storeID(response.data.userid))
            dispatch(Login_Function(response.data.access))
            setLoading(false);
            navi("/in")

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
      flex: 1,
    }}>
      <NavBar
        navStyle={{
        }}
        page={"/login"}
      />

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center"
      }}>
        <div
          style={{
            // backgroundColor: COLORS.lightGray2,
            minHeight: 300,
            width: "90%",
            borderRadius: SIZES.radius,
            // marginTop: 50,
            marginBottom: 50,
          }}
        >
          
          <p style={{
            ...FONTS.largeTitle,
            alignSelf: 'center',
          }}
          onClick={()=>{
            setShow(!show)
          }}
          >LOGIN</p>
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
          <div style={{ height: "auto", margin: "0 auto", maxWidth:  200, width: "100%" }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"www.nerdtech.com"}
              viewBox={`0 0 256 256`}
            />
          </div>
          {
            show?
            <>
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
            label={"Email*"}
            errorMsg={EmailError}
            placeholder={"Enter your email"}
            onChange={(event) => {
              utils.validateEmail(event.target.value, setEmailError)
              setEmail(event.target.value);
            }}
          />
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
                    margin: 3,
                  }}
                />
              </button>
            }
            value={password}
            type={showPass ? "text" : "password"}
            label={"Password*"}
            placeholder={"Enter your password"}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />


          {
            loading ?
              <Loading /> :
              <TextButton
                label={"Login"}
                icon={IMAGES.log}
                onPress={() => {
                  login()
                }}
                buttonContainerStyle={{
                  backgroundColor: isEnableSignIn()
                    ? COLORS.Primary
                    : COLORS.transparentPrimary2,
                }}

              />
          }
          </>:null
}
        </div>
      </div>
    </div>
  );
}
