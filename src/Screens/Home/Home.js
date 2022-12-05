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
          <meta
            name="description"
            content="Herd Help is a farm documentation app that assist you in charting the herds activities.
Documentation from insemination to medical records. Herd help does documentation for cows, sheep, goats, pigs, horses and rabbits.
This allows you to grow a stronger healthier herd. Identifying profitable and unprofitable animals is the key to seeing profits."
          />
        </Helmet>
        <div style={{ backgroundColor: COLORS.white, marginTop: 50 }}>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                width: "100%",
                alignSelf: "center",
              }}
            >
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
                title={"herd Weight"}
                image={IMAGES.weight1}
                description={"Track your herd weight and growth"}
                title2={"herd Health"}
                image2={IMAGES.health}
                description2={
                  "HerdHelp allows you to keep track of your herd health. You can keep track of your herd medical records, vaccinations, and treatments."
                }
              />
              <Feature
                title2={"Birthing"}
                image2={IMAGES.babies}
                description2={"Keep track of your herd babies and births"}
                title={"Set Alerts for your herd"}
                image={IMAGES.alert}
                description={
                  "HerdHelp allows you to set alerts for your herd. You can set alerts for your herd health, weight, and babies."
                }
              />
              <Feature
                title={"Control your Expenses"}
                image={IMAGES.finance}
                description={"Keep track of your herd expenses"}
                image2={IMAGES.profit}
                title2={"Identify Profitable Animals"}
                description2={
                  "HerdHelp allows you to identify your herd profitable animals."
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
              width: "100%",
            }}
          >
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
              }}
            >
              <p
                style={{
                  color: COLORS.black,
                  textAlign: "left",
                  ...FONTS.body3,
                  width: "40%",
                }}
              >
                My friend and I are both Christians and farmers in South
                Alabama. We both grew up here and both grew up raising cows. He
                still has cows and I mainly raise goats now. My background is
                computer software and technology and recently he has been taking
                programming classes. So you can tell how the two of us creating
                an APP to manage your livestock happened. We both understand
                technology and both understand animal husbandry. I decided to
                grow my goat herd to a larger scale and I needed the tools to do
                that in an organized manner. So here we are. As business people,
                we know what we need to see a profit. With goats and sheep it’s
                kidding rates and with cows its weight gains. And with any
                animal that we raise we need healthy animals. If you track all
                your data you will have the tools to tell you which animals to
                cull and which animals are out producing the others. We hope
                that it helps you as much as it helps our farms.
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
          }}
        >
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
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
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
                    <ReactPlayer height={250} width={400} url={item.link} />
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
          <>
            <div style={{ backgroundColor: COLORS.white, marginTop: 50 }}>
              <Slider />
              <div
                style={{
                  display: "flow",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  width: "100%",
                  // height: 600,
                }}
              >
                <h3
                  style={{
                    alignSelf: "flex-start",
                    color: COLORS.Primary,
                    textAlign: "left",
                    paddingInline: 10,
                    ...FONTS.h1,
                  }}
                >
                  HerdHelp Features
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    alignSelf: "center",
                  }}
                >
                  <Feature
                    title={"herd Weight"}
                    image={IMAGES.weight}
                    description={"Track your herd weight and growth"}
                    title2={"herd Health"}
                    image2={IMAGES.health}
                    description2={
                      "HerdHelp allows you to keep track of your herd health. You can keep track of your herd medical records, vaccinations, and treatments."
                    }
                  />
                  <Feature
                    title2={"Birthing"}
                    image2={IMAGES.babies}
                    description2={"Keep track of your herd babies and births"}
                    title={"Set Alerts for your herd"}
                    image={IMAGES.alert}
                    description={
                      "HerdHelp allows you to set alerts for your herd. You can set alerts for your herd health, weight, and babies."
                    }
                  />
                  <Feature
                    title={"Control your Expenses"}
                    image={IMAGES.finance}
                    description={"Keep track of your herd expenses"}
                    image2={IMAGES.profit}
                    title2={"Identify Profitable Animals"}
                    description2={
                      "HerdHelp allows you to identify your herd profitable animals."
                    }
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  // alignItems: "center",
                  width: "100%",
                }}
              >
                <hr style={{ width: "90%" }} />
                <h3
                  style={{
                    alignSelf: "flex-start",
                    color: COLORS.Primary,
                    textAlign: "left",
                    paddingInline: 50,
                    ...FONTS.h1,
                  }}
                >
                  About Us
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <img
                    src={IMAGES.about}
                    alt="feature1"
                    style={{
                      height: 230,
                      width: 230,
                      borderRadius: SIZES.radius,
                    }}
                  />
                  <p
                    style={{
                      color: COLORS.black,
                      textAlign: "justify",
                      ...FONTS.body4,
                      width: "80%",
                      paddingInline: 10,
                    }}
                  >
                    My friend and I are both Christians and farmers in South
                    Alabama. We both grew up here and both grew up raising cows.
                    He still has cows and I mainly raise goats now. My
                    background is computer software and technology and recently
                    he has been taking programming classes. So you can tell how
                    the two of us creating an APP to manage your livestock
                    happened. We both understand technology and both understand
                    animal husbandry. I decided to grow my goat herd to a larger
                    scale and I needed the tools to do that in an organized
                    manner. So here we are. As business people, we know what we
                    need to see a profit. With goats and sheep it’s kidding
                    rates and with cows its weight gains. And with any animal
                    that we raise we need healthy animals. If you track all your
                    data you will have the tools to tell you which animals to
                    cull and which animals are out producing the others. We hope
                    that it helps you as much as it helps our farms.
                  </p>
                </div>
              </div>
            </div>
          </>
          <hr style={{ width: "90%" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              paddingBottom: 20,
            }}
          >
            <h3
              style={{
                alignSelf: "flex-start",
                color: COLORS.Primary,
                textAlign: "left",
                paddingInline: 50,
                ...FONTS.h1,
              }}
            >
              Tutorial videos
            </h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexWrap: "wrap",
                padding: 0,
                marginTop: 0,
              }}
            >
              <FlatList
                list={videos}
                keyExtractor={(item) => `${item.id}`}
                renderItem={(item, index) => {
                  return (
                    <div
                      style={{
                        margin: 0,
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
                        width={"fit-windows"}
                        url={item.link}
                      />
                    </div>
                  );
                }}
                renderWhenEmpty={() => <div></div>}
              />
            </ul>
          </div>
        </>
      )}
    </>
  );
}
