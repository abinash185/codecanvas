import Slider from "react-slick";
import TestimonialCard from "../Card/TestimonialCard/TestimonialCard";
import { testimonials } from "../../utils/Constant";

export default function MySlider() {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0, // Continuous sliding
    cssEase: "linear",
    speed: 10000, // 15 seconds for a smoother continuous effect
    slidesToShow: 4,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const color = ["#c00000", "#f0bd01", "#fef08a", "#5eead4"];

  return (
    <>
      <Slider
        {...settings}
        // className={`${mask ? "maskbrandSlider_after-mask" : ""}`}
      >
        {testimonials.map((e, index) => {
          return (
            <div key={index} className="p-2">
              <TestimonialCard
                // title={e.title}
                description={e.description}
                fullName={e.fullName}
                company={e.company}
                designation={e.designation}
                picture={e.picture}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
