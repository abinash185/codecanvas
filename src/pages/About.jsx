import "../styles/About.css";

import AboutCard from "../components/Card/AboutCard/AboutCard";
import { Link } from "react-router-dom";
import CustomSlider from "../components/Slider/CustomSlider";
import Contact from "./Contact";
import ServicesCard from "../components/Card/ServicesCard/ServicesCard";

export default function About() {
  const aboutCard = [
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-1.png",
      description: "We help you share your ideas with the world.",
    },
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-2.png",
      description: "We help you share your ideas with the world.",
    },
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-3.png",
      description: "We help you share your ideas with the world.",
    },
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-4.png",
      description: "We help you share your ideas with the world.",
    },
  ];

  return (
    <div className="aboutContainer">
      <article>
        <h1>CodeCanvas</h1>
        <p>
        We’re more than just a development company; we’re your partners
        in digital transformation. Our expertise lies in turning ideas into
        powerful digital experiences. With a deep understanding of your vision 
        and audience, we design and build websites and apps that truly connect.
        From concept to launch, we’re committed to helping you achieve success in
        the digital world. Let CodeCanvas Innovations be the driving force behind your brand’s growth.
        </p>
      </article>
      <article>
        <h1>Create, Code, Connect.</h1>
        <p>
        At CodeCanvas Innovations, we believe in the power of a well-executed
        digital strategy. Our process begins with a thoughtful blueprint, understanding
        your vision, audience, and goals. Next, we build cutting-edge websites and apps,
        crafting seamless user experiences through innovative technologies. Finally,
        we create strong connections between your digital platform and your users, ensuring 
        long-term engagement and success. With every project, we focus on delivering not just
        functionality, but a digital presence that resonates and drives growth.
        </p>
        <span>
          <Link to="/services">
            <svg
              width="60px"
              height="60px"
              className="roundArrow"
              viewBox="0 0 91 91"
              id="Layer_1"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <style type="text/css"> </style>
                <g>
                  <path
                    className="st0"
                    d="M81.9,10.2c-14,3.4-27.9,1.2-41.7-2c-3.1-0.7-5.5,4-2.3,5.4c6.6,3,13.1,5.2,19.8,6.4 c-11.1,5.2-21,12.7-25.5,23.9c-18.7,0.7-29.9,15-28,33.7c0.3,2.7,4.4,2.9,4.3,0c-0.1-10,6.6-21.6,16.4-24.3c1.5-0.4,3.2-0.7,5-0.9 c-1,8,0.9,15.8,6.7,21.9c5.7,6,13.5,5.5,19.9,0.3c6.7-5.6,5.9-13.8,1.3-20.6c-3.7-5.5-9-8.1-14.8-9.3c1.9-2.8,4.2-5.3,7.1-7.3 c6.2-4.4,13.4-7.6,20.7-10.2c-3.4,7.2-6,14.9-5.8,21.8c0.2,6.5,9.6,6.4,10,0c0.7-11,6.3-22.9,12.1-32.1 C89.4,13.5,85.7,9.3,81.9,10.2z M53.2,61.6c1.7,5.4-3.7,12.2-9.8,8.9c-5.7-3.1-5.4-12.5-4-18c1.8,0.2,3.6,0.6,5.1,1.1 C48.1,54.9,52,57.8,53.2,61.6z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </span>
      </article>
      <div className=" ">
        <CustomSlider
          sliderName="aboutSlider"
          slidesToShow={6}
          mask={false}
          swipeToSlide={true}
          pauseOnHover={true}
          slideSpeed={4000}
          breakpointSlidesToShow={{ lg: 3, md: 2, sm: 2 }}
        />
      </div>

      <article>
        <h1>CLIENT ECSTASY</h1>
        <h2>
          We make the customers orgasm when we lay out our ideas and creatives
          in front of them.
        </h2>
        <p>
          At Social Panga, we are driven by a strong innate desire to delight
          the customer to an extent that they want to give us virtual hugs. BTW,
          we live for occasional fatty foods, intoxicating liquids, and jalebis
          (yes, we&apos;re a bunch of nice kids!)
        </p>
      </article>
      <article>
        {aboutCard.map((e, index) => {
          return (
            <AboutCard
              key={index}
              picture={e.picture}
              description={e.description}
            />
          );
        })}
      </article>

      <div className="contact">
        <Contact/>
      </div>

      <div>
        <ServicesCard/>
      </div>
     
    </div>
  );
}
