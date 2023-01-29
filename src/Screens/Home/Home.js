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
                title2={"Control your Expenses"}
                image2={IMAGES.finance}
                description2={"Herd Help Livestock Management Software has specific places to track your expenses by category. This gives you the ability to see where you are spending your money. For example feed, fencing, medications, etc. Understanding your expenses will make life easier! Our livestock management documentation software should help you manage each piece of your farm program better."}
                image={IMAGES.profit}
                title={"Identify Profitable Animals"}
                description={
                  "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed. She produced zero profit in those two years. In our app we have a place to flag certain animals so these scenarios do not take place. When I am raising goats, I am looking for twins from each animal every year. With the goat management software, I can see twins, plus I can see how often I am dealing with parasite pressure. The same would apply to sheep. If I am using our sheep management software to show me which animals gave me only singles and had constant health issues, then I know which sheep to cull, or if I need to change my buck because it's a global issue. If I am looking at each aspect of what my farm produces income from, then I am going to identify profits and losses. It’s as simple as good livestock record keeping."
                }
              />
              <Feature
                title={"Herd Weight"}
                image={IMAGES.weight1}
                description={"Herd Help Livestock Management Software will help you track birth weights and daily gains. We don’t care which animals you raise, whether it’s goats, cattle, sheep, pigs, horses, or rabbits, you will see better livestock come from your farm if you know and understand how to increase weights. This is why it was important for us to create an app that not only is for goat records keeping, but also does your cattle record keeping and everything in between. Even our efforts raising rabbits on our farm is better understood when we properly keep better rabbit records."}
                title2={"Herd Health"}
                image2={IMAGES.health}
                description2={
                  "Herd Help Livestock Management Software will help you by properly tracking each medication that you administer. It has a simple feature that allows you to treat and document actions on individual animals or on every goat in your herd with one easy step. No one wants to document that you gave Cydectin to each animal. We made it as simple as choosing each animal from the drop down and press add."
                }
              />
              <Feature
                title2={"Birthing"}
                image2={IMAGES.babies}
                description={"Herd Help Livestock Management Software has a key feature that allows you to set reminders. If you document that goat number 150 gets bred on Oct 2, you can then set a reminder to alert you in 145 days to start watching for your babies. This is where proper livestock records keeping will play a big part in better farm management."}
                title={"Set Alerts for your Herd"}
                image={IMAGES.alert}
                description2={
                  "Herd Help Livestock Management Software will assist you in understanding every aspect of your birthing. Proper livestock documentation will show you when your kidding will start taking place and track year over year the amount of babies each animal has. Soon, you will notice which animals give you healthier, more predictive babies. All the tools that you need for livestock records keeping on one simple device!"
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
                My friend and I needed a livestock software program for our farms so that we could accurately track our animals, their health, and profitability. We tried other apps, software programs, and spreadsheets, to help with the record keeping but we couldn’t find a livestock management app that was easy to use and fit our needs. So, we created a piece of software that would track any animals that we might bring to our farm, whether it be cattle, sheep, goats, rabbits, pigs, or horses. The app was created to work on Android or Iphone cellular devices as well as on your laptop. We needed a product that was available while in the field and a larger version to see for reporting back at home. The cattle management software was created for my buddy who primarily raises cows. I needed goat management software for my goats and sheep management software in case my neighbor needed help. But, we have also been known to keep other animals on the farm occasionally. We added in pig management, rabbit management, and horse management tools to make it a complete farm software program. Why create a cattle app when you raise goats, cattle, sheep, pigs, rabbits, and horses? Well, when you think about a homestead, you realize that most small farms will at one point have all of these animals and each of them needs a record keeping software program to help get them through tough decisions.
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
                  Download Now!
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "100%",
                    alignSelf: "center"
                  }}
                >
                  <div>
                    <img
                      src={IMAGES.play}
                      alt={""}
                      onClick={() => {
                        window.open(
                          "https://play.google.com/store/apps/details?id=com.herdhelp",
                          "_blank"
                        );
                      }}
                      style={{
                        height: 100,
                        width: 120,
                      }}
                    />
                    <h3
                      style={{
                        alignSelf: "flex-start",
                        color: COLORS.Primary,
                        textAlign: "left",
                        paddingInline: 10,
                        ...FONTS.h3,
                        letterSpacing: 1,
                      }}
                    >
                      Playstore
                    </h3>

                  </div>
                  <div>
                    <img
                      src={IMAGES.app}
                      alt={""}
                      onClick={() => {
                        window.open(
                          "https://apps.apple.com/in/app/herdhelp/id1627766617",
                          "_blank"
                        );
                      }}
                      style={{
                        height: 100,
                        width: 100,
                      }}
                    /><h3
                      style={{
                        alignSelf: "flex-start",
                        color: COLORS.Primary,
                        textAlign: "left",
                        paddingInline: 10,
                        ...FONTS.h3,
                        letterSpacing: 1,
                      }}
                    >
                      Appstore
                    </h3>
                  </div>

                </div>
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
                    alignItems: mobile ? "center" : "left",
                    width: "100%",
                    alignSelf: mobile ? "center" : "left",
                  }}
                >
                  <Feature
                    title2={"Control your Expenses"}
                    image2={IMAGES.finance}
                    description2={"Herd Help Livestock Management Software has specific places to track your expenses by category. This gives you the ability to see where you are spending your money. For example feed, fencing, medications, etc. Understanding your expenses will make life easier! Our livestock management documentation software should help you manage each piece of your farm program better."}
                    image={IMAGES.profit}
                    title={"Identify Profitable Animals"}
                    description={
                      "When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed. She produced zero profit in those two years. In our app we have a place to flag certain animals so these scenarios do not take place. When I am raising goats, I am looking for twins from each animal every year. With the goat management software, I can see twins, plus I can see how often I am dealing with parasite pressure. The same would apply to sheep. If I am using our sheep management software to show me which animals gave me only singles and had constant health issues, then I know which sheep to cull, or if I need to change my buck because it's a global issue. If I am looking at each aspect of what my farm produces income from, then I am going to identify profits and losses. It’s as simple as good livestock record keeping."
                    }
                  />
                  <Feature
                    title={"Herd Weight"}
                    image={IMAGES.weight1}
                    description={"Herd Help Livestock Management Software will help you track birth weights and daily gains. We don’t care which animals you raise, whether it’s goats, cattle, sheep, pigs, horses, or rabbits, you will see better livestock come from your farm if you know and understand how to increase weights. This is why it was important for us to create an app that not only is for goat records keeping, but also does your cattle record keeping and everything in between. Even our efforts raising rabbits on our farm is better understood when we properly keep better rabbit records."}
                    title2={"Herd Health"}
                    image2={IMAGES.health}
                    description2={
                      "Herd Help Livestock Management Software will help you by properly tracking each medication that you administer. It has a simple feature that allows you to treat and document actions on individual animals or on every goat in your herd with one easy step. No one wants to document that you gave Cydectin to each animal. We made it as simple as choosing each animal from the drop down and press add."
                    }
                  />
                  <Feature
                    title2={"Birthing"}
                    image2={IMAGES.babies}
                    description={"Herd Help Livestock Management Software has a key feature that allows you to set reminders. If you document that goat number 150 gets bred on Oct 2, you can then set a reminder to alert you in 145 days to start watching for your babies. This is where proper livestock records keeping will play a big part in better farm management."}
                    title={"Set Alerts for your Herd"}
                    image={IMAGES.alert}
                    description2={
                      "Herd Help Livestock Management Software will assist you in understanding every aspect of your birthing. Proper livestock documentation will show you when your kidding will start taking place and track year over year the amount of babies each animal has. Soon, you will notice which animals give you healthier, more predictive babies. All the tools that you need for livestock records keeping on one simple device!"
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
                    My friend and I needed a livestock software program for our farms so that we could accurately track our animals, their health, and profitability. We tried other apps, software programs, and spreadsheets, to help with the record keeping but we couldn’t find a livestock management app that was easy to use and fit our needs. So, we created a piece of software that would track any animals that we might bring to our farm, whether it be cattle, sheep, goats, rabbits, pigs, or horses. The app was created to work on Android or Iphone cellular devices as well as on your laptop. We needed a product that was available while in the field and a larger version to see for reporting back at home. The cattle management software was created for my buddy who primarily raises cows. I needed goat management software for my goats and sheep management software in case my neighbor needed help. But, we have also been known to keep other animals on the farm occasionally. We added in pig management, rabbit management, and horse management tools to make it a complete farm software program. Why create a cattle app when you raise goats, cattle, sheep, pigs, rabbits, and horses? Well, when you think about a homestead, you realize that most small farms will at one point have all of these animals and each of them needs a record keeping software program to help get them through tough decisions.
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
