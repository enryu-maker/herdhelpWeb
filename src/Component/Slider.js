import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: require("../assets/banner-01.jpg") },
  { url: require("../assets/banner-02.jpg") },
  //   { url: "images/3.jpg" },
  //   { url: "images/4.jpg" },
  //   { url: "images/5.jpg" },
  //   { url: "images/6.jpg" },
  //   { url: "images/7.jpg" },
];

export default function Slider() {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.7}
      />
    </div>
  );
}
