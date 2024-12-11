import {
  testimonials,
  brands,
  aboutSliderImagesArray,
} from "../../utils/Constant";
import TestimonialCard from "../Card/TestimonialCard/TestimonialCard";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { ourWork } from "../../utils/Constant";
export default function CustomSlider({
  mask,
  slidesToShow,
  sliderName,
  swipeToSlide,
  slideSpeed,
  pauseOnHover,
  breakpointSlidesToShow,
  slideLoop = true,
  sliderAutoPlay = true,
  sliderArrows = false,
}) {
  const slider_Name = sliderName.split("_")[0];
  const slider_Id = sliderName.split("_")[1];

  const project = ourWork.works.all.find((project) => {
    return project.projectId === sliderName.split("_")[1];
  });

  let settings = {
    dots: false,
    infinite: slideLoop,
    autoplay: sliderAutoPlay,
    arrows: project?.images.length <= slidesToShow ? false : sliderArrows,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: slideSpeed,
    slidesToShow: slidesToShow,
    swipeToSlide: swipeToSlide,
    pauseOnHover: pauseOnHover,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: breakpointSlidesToShow.lg,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: breakpointSlidesToShow.md,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: breakpointSlidesToShow.sm,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className={`${mask ? "maskbrandSlider_after-mask" : ""}`}
    >
      {slider_Name === "testimonialSlider" &&
        testimonials.map((e, index) => {
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
      {slider_Name === "brandSlider" &&
        brands.slice(0, 8).map((e, index) => {
          return (
            <div key={index} className="p-2">
              <img
                loading="eager"
                className="w-[150px] h-[120px] object-contain"
                src={e.brandImage}
                alt={`${e.brandImage}`}
              />
            </div>
          );
        })}
      {slider_Name === "aboutSlider" &&
        aboutSliderImagesArray.map((e, index) => {
          return (
            <div key={index} className="p-2 ">
              <img
                src={e}
                alt="picture"
                className="bg-cover bg-center h-[30vh] w-full"
              />
            </div>
          );
        })}
      {slider_Id &&
        slider_Id === project.projectId &&
        project.images.map((e, index) => {
          return (
            <div key={index} className="p-2 ">
              <img
                src={e}
                alt="picture"
                className=" bg-cover bg-center h-[30vh] w-full"
              />
            </div>
          );
        })}
    </Slider>
  );
}

CustomSlider.propTypes = {
  mask: PropTypes.bool,
  slidesToShow: PropTypes.number,
  sliderName: PropTypes.string,
  swipeToSlide: PropTypes.bool,
  slideSpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  slideLoop: PropTypes.bool,
  sliderAutoPlay: PropTypes.bool,
  sliderArrows: PropTypes.bool,
  breakpointSlidesToShow: PropTypes.object.isRequired,
};
