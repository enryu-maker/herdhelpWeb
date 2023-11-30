import SimpleImageSlider from "react-simple-image-slider";
import useMediaQuery from "./useMediaQuery";

const images = [
  { url: require("../assets/assets/banner-01.jpeg") },
  { url: require("../assets/assets/banner-02.jpeg") },
  { url: require("../assets/assets/banner-03.jpeg") },
];

export default function Slider() {
  const matches = useMediaQuery("(max-width:820px)");
  const mobile = useMediaQuery("(min-width:460px)");
  return (
      <SimpleImageSlider
        width={mobile ? (matches ? "100%" : "100%") : "100%"}
        height={mobile ? (matches ? 650 : "88.9vh") : 230}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
   />
  );
}
