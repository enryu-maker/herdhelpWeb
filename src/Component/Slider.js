import SimpleImageSlider from "react-simple-image-slider";
import useMediaQuery from "./useMediaQuery";

const images = [
  { url: require("../assets/banner-01.jpg") },
  { url: require("../assets/banner-02.jpg") },
  { url: require("../assets/banner-03.jpg") },

  //   { url: "images/3.jpg" },
  //   { url: "images/4.jpg" },
  //   { url: "images/5.jpg" },
  //   { url: "images/6.jpg" },
  //   { url: "images/7.jpg" },
];

export default function Slider() {
  const matches = useMediaQuery("(max-width:820px)");
  const mobile = useMediaQuery("(min-width:460px)");
  return (
    <div>
      <SimpleImageSlider
        width={mobile ? (matches ? "100%" : "100%") : "100%"}
        height={mobile ? (matches ? 650 : "88.9vh") : 230}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
  );
}
