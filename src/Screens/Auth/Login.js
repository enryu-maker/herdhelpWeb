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
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Header from "../Home/components/Header";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showqr, setShowqr] = React.useState(false);
  const [count, setCount] = useState(0);
  const [saveMe, setSaveMe] = React.useState(false);
  const [EmailError, setEmailError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [EmailErr, setEmailErr] = React.useState("");
  const [qrURL, setqrUrl] = React.useState("");
  const [valUrl, setvalUrl] = React.useState("");
  const auth = useSelector(state => state.Reducers.authToken)
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
  async function getQr() {
    let data = await axios.get(baseURL + "/getqr")
    return (data.data)
  }
  function valQr(link) {
    axios.get(link).then((Response) => {
      if (Response.status === 200) {
        dispatch(Login_Function(Response.data.access))
        dispatch(storeID(Response.data.userid))
        navi("/")
        window.location.reload(false);
      }
      else {
        console.log("Issue")
      }
    }).catch((e) => {
      console.log(e)
    })


  }
  React.useEffect(() => {
    getQr().then(data => {
      setqrUrl(data.qr_link)
      setvalUrl(data.validate_link)
    })
  }, [])
  if (valUrl != "" && auth === null) {
    console.log(!loading && valUrl != "" && auth === null)
    setInterval(() => {
      valQr(valUrl)
    }, 5000)
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignSelf: "center"
    }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HerdHelp :: Login</title>
        <meta name="description" content="Herd Help is a farm documentation app that assist you in charting the herds activities.
Documentation from insemination to medical records. Herd help does documentation for cows, sheep, goats, pigs, horses and rabbits.
This allows you to grow a stronger healthier herd. Identifying profitable and unprofitable animals is the key to seeing profits." />
      </Helmet>
      <Header />

      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignSelf: "center",
        marginTop: 100,
      }}>
        <div
          style={{
            display:"flex",
            flexDirection:"row",
            minHeight: 300,
            marginTop: 100,
            width: "88%",
            borderRadius: SIZES.radius,
            marginBottom: 50,
            justifyContent:"space-evenly",
            alignItems:"center"
          }}
        >
          <div>
          <p style={{
            ...FONTS.largeTitle,
            textAlign:"center",
          }}
          >LOGIN</p>
          <p style={{
            ...FONTS.h2,
            textAlign:"center",
          }}>Let's Sign You In</p>
          <p style={{
            ...FONTS.body3,
            textAlign:"center",
            marginBlock:10
          }}>
            Scan the QR From <b>HerdHelp</b>  Mobile to continue!</p>
          {
            loading ? <Loading /> :
              <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>

                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={qrURL}
                  viewBox={`0 0 256 256`}
                  fgColor={COLORS.black}
                />
                <p style={{
                  ...FONTS.h2,
                  width:"100%",
                  textAlign:"center",
                  // alignSelf: 'center',
                  color: COLORS.Primary,
                  marginBlock:10,
                }}>
                  Scan Me
                </p>

              </div>
          }
          </div>

          <img
            src={IMAGES.scangif}
            style={{
              width: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
