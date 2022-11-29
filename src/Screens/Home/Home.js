import React, { useState, Component } from "react";
import NavBar from "../../Component/Nav/Navbar";
import { COLORS, FONTS, SIZES } from "../../Theme/Theme";
import TextButton from "../../Component/TextButton";
import { IMAGES } from "../../Theme/Image";
import { Link } from "react-router-dom";
import useMediaQuery from "../../Component/useMediaQuery";
import FlatList from "flatlist-react";
import ReactPlayer from "react-player/lazy";
import axiosIns from "../../helpers/helpers";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useAlert } from "react-alert";
import Slider from "../../Component/Slider";
import Feature from "./Feature";

export default function Home() {
  const alert = useAlert();
  const matches = useMediaQuery("(max-width:820px)");
  const mobile = useMediaQuery("(min-width:460px)");
  const [videos, setVideo] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const getVideos = async () => {
    setLoading(true);
    await axiosIns
      .get("/gettutorials")
      .then((Response) => {
        if (Response.status == 200) {
          setVideo(Response.data);
          setLoading(false);
        } else {
          alert.error("SOmething went Wrong");
          setLoading(false);
        }
      })
      .catch((e) => {
        alert.error("SOmething went Wrong");
        setLoading(false);
      });
  };
  React.useEffect(() => {
    getVideos();
  }, []);

  function Desktop_tab() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>HerdHelp :: Herd Managament App</title>
          <meta name="description" content="Herd Help is a farm documentation app that assist you in charting the herds activities.
Documentation from insemination to medical records. Herd help does documentation for cows, sheep, goats, pigs, horses and rabbits.
This allows you to grow a stronger healthier herd. Identifying profitable and unprofitable animals is the key to seeing profits." />
        </Helmet>
        <div style={{ backgroundColor: COLORS.white }}>
          <Slider />
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              alignSelf: "center",
              width: "100%",
              // height: 600,
            }}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
              <h3
                style={{
                  alignSelf: "flex-start",
                  color: COLORS.Primary,
                  textAlign: "left",
                  paddingInline: 50,
                  ...FONTS.largeTitle,
                }}
              >
                HerdHelp Features
              </h3>
              <Feature
                title={"Herd's Weight"}
                image={IMAGES.weight}
                description={"Track your herd's weight and growth"}
                title2={"Herd's Health"}
                image2={IMAGES.health}
                description2={"HerdHelp allows you to keep track of your herd's health. You can keep track of your herd's medical records, vaccinations, and treatments."}
              />
              <Feature
                title2={"Herd's Babies"}
                image2={IMAGES.babies}
                description2={"Keep track of your herd's babies"}
                title={"Set Alerts for your herd"}
                image={IMAGES.alert}
                description={"HerdHelp allows you to set alerts for your herd. You can set alerts for your herd's health, weight, and babies."}
              />
              <Feature
                title={"Control your Expenses"}
                image={IMAGES.finance}
                description={"Keep track of your herd's expenses"}
                image2={IMAGES.profit}
                title2={"Identify Profitable Animals"}
                description2={"HerdHelp allows you to identify your herd's profitable animals."}
              />

            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
            <h3
              style={{
                alignSelf: "flex-start",
                color: COLORS.Primary,
                textAlign: "left",
                paddingInline: 50,
                ...FONTS.largeTitle,
              }}
            >
              About Us
            </h3>
            <div

              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}>
            <p
              style={{
                color: COLORS.black,
                textAlign: "left",
                ...FONTS.body3,
                width:"40%",
              }}
            >
             My friend and I are both Christians and farmers in South Alabama. We both grew up here and both grew up raising cows. He still has cows and I mainly raise goats now. My background is computer software and technology and recently he has been taking programming classes. So you can tell how the two of us creating an APP to manage your livestock happened. We both understand technology and both understand animal husbandry. I decided to grow my goat herd to a larger scale and I needed the tools to do that in an organized manner. So here we are.
              As business people, we know what we need to see a profit. With goats and sheep it’s kidding rates and with cows its weight gains. And with any animal that we raise we need healthy animals. If you track all your data you will have the tools to tell you which animals to cull and which animals are out producing the others. We hope that it helps you as much as it helps our farms.
            </p>
            <img
                src={IMAGES.about}
                alt="feature1"
                style={{
                height: 350,
                width: 350,
                borderRadius: SIZES.radius,
                }}
            />
            </div>
          </div>

        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingBottom: 50,
          }}>
          <h3
            style={{
              alignSelf: "flex-start",
              color: COLORS.Primary,
              textAlign: "left",
              paddingInline: 50,
              ...FONTS.largeTitle,
            }}
          >
            Tutorial videos
          </h3>
          <ul style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
          }}>

            <FlatList
              list={videos}
              keyExtractor={(item) => `${item.id}`}
              renderItem={(item, index) => {
                return (
                  <div
                    style={{
                      margin: 5,
                      // width: "80%",
                      alignSelf: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        ...FONTS.h3,
                        color: COLORS.Primary,
                        alignSelf: "center",
                      }}
                    >
                      {item.title}
                    </p>
                    <ReactPlayer
                      height={250}
                      width={400}

                      url={item.link} />
                  </div>
                );
              }}
              renderWhenEmpty={() => <div></div>}
            />
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar page={"/"} />
      {mobile ? (
        matches ? (
          <>
            {" "}
            <Desktop_tab />{" "}
          </>
        ) : (
          <>
            {" "}
            <Desktop_tab />{" "}
          </>
        )
      ) : (
        <>
          <div
            style={{
              display: "grid",
              background: "linear-gradient(149.42deg, #D3F3D2 6.44%,rgba(5, 255, 0, 0.58) 58.02%, rgba(114, 242, 111, 0.81) 89.24%, rgba(4, 200, 0, 0.46) 136.74%);",
            }}
          >
            <div style={{ width: "100%", height: "45vh", display: "flex" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  left: 0,
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    position: "absolute",
                    width: 400,
                    color: COLORS.Primary,
                    textAlign: "left",
                    top: 40,
                    // ...FONTS.body1,
                    fontFamily: "sans-serif",
                    fontSize: 30,
                    left: 10,
                  }}
                >
                  Herd's
                  <br /> Management Tool
                </h2>
                <h5
                  style={{
                    position: "relative",
                    width: 350,
                    color: COLORS.black,
                    textAlign: "left",
                    top: 150,
                    ...FONTS.body2,
                    fontSize: 16,
                    left: 10,
                  }}
                >
                  Herd Help is a farm documentation app that assist you in
                  charting the herds activities. Documentation from insemination
                  to medical records. Herd help does documentation for cows,
                  sheep, goats, pigs, horses and rabbits. This allows you to
                  grow a stronger healthier herd. Identifying profitable and
                  unprofitable animals is the key to seeing profits.
                </h5>
              </div>
            </div>
            <div style={{ paddingInline: 25 }}>
              <h3
                style={{
                  position: "relative",
                  left: 0,
                  top: 60,
                  color: COLORS.Primary,
                  ...FONTS.body2,
                }}
              >
                Download App From{" "}
              </h3>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  top: 60,
                }}
              >
                <img
                  src={IMAGES.appstore}
                  alt={""}
                  style={{ width: 160, height: 50 }}
                  onClick={() => {
                    window.open(
                      "https://testflight.apple.com/join/LAn2RBih",
                      "_blank"
                    );
                  }}
                />
                <img
                  src={IMAGES.playstore}
                  alt={""}
                  onClick={() => {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.herdhelp",
                      "_blank"
                    );
                  }}
                  style={{ width: 160, height: 50 }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
