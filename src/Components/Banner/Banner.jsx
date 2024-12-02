import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/pcGeekBanner1.webp";
import banner2 from "../../assets/banner/pcGeekBanner2.webp";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>{/* <img src="assets/3.jpeg" /> */}</div>
    </Carousel>
  );
};

export default Banner;
