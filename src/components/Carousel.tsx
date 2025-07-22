import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious,FcNext } from "react-icons/fc";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";


const NextArrow = ({ onClick }: any) => (
  <div
    onClick={onClick}
    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
  >
    <FcNext className="h-20 w-10  shadow-lg p-1 bg-white rounded" />
  </div>
);

const PrevArrow = ({ onClick }: any) => (
  <div
    onClick={onClick}
    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
  >
    <FcPrevious className="h-20 w-10  shadow-lg p-1 bg-white rounded" />
  </div>
);

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

  return (
    <div className="w-full  mx-auto ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover object-center "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
