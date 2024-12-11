import { useState } from "react";
import "../styles/Home.css";
import Accordion from "../components/Accordian/Customaccordion";
import aboutUs from "../assets/images/About.svg";
import { useNavigate } from "react-router-dom";
import whyUs from "../assets/images/WhyUss.svg";
import ChooseUsCard from "../components/Card/ChooseUsCard/ChooseUsCard";
import BlogCard from "../components/Card/BlogCard/BlogCard";
import { blogs, whyUsContent } from "../utils/Constant";
import CustomSlider from "../components/Slider/CustomSlider";
import Faq from "./Faq";
import ServicesCard from "../components/Card/ServicesCard/ServicesCard"

export default function Home() {
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const navigate = useNavigate();
  const [bannerOnHover, setBannerOnHover] = useState(0);

  const handleAccordionChange = (accordionId) => {
    setExpandedAccordion(accordionId);
  };

  const parseCustomDate = (dateStr) => {
    // Remove ordinal suffixes
    const cleanDateStr = dateStr.replace(/(\d+)(th|st|nd|rd)/, "$1");
    // Convert to Date object
    return new Date(cleanDateStr);
  };

  const getLatestBlogs = () => {
    return blogs.sort((a, b) => {
      // Use parsed dates for comparison
      return parseCustomDate(b.date) - parseCustomDate(a.date);
    });
  };

  const latestBlogs = getLatestBlogs().slice(0, 4);

  return (
    <>
      <main className="mainContainer">
        <section className={`heroSection heroBanner${bannerOnHover}`}>
          <div className="wrapper">
            <article>
              <span
                onMouseEnter={() => {
                  setBannerOnHover(1);
                }}
                onMouseLeave={() => {
                  setBannerOnHover(0);
                }}
              >
                DESIGN
              </span>
              <br />
              <span
                onMouseOver={() => {
                  setBannerOnHover(2);
                }}
                onMouseLeave={() => {
                  setBannerOnHover(0);
                }}
              >
                 DEVELOP
              </span>
              <br />
              <span
                onMouseOver={() => {
                  setBannerOnHover(3);
                }}
                onMouseLeave={() => {
                  setBannerOnHover(0);
                }}
              >
                DELIVER
              </span>
            </article>

            <div>
              <p>
              Your competitors are thriving with modern digital solutions.
              Elevate your brand with our innovative website and app development
              services to drive more customers and conversions.
              </p>
            </div>
            {/* <button className="contactBtn ">Contact Us</button> */}
          </div>
        </section>

        <div className="brandSliderContainer">
          <div className="overlay"></div>

          <CustomSlider
            slidesToShow={7}
            mask={true}
            sliderName="brandSlider"
            slideSpeed={4000}
            pauseOnHover={false}
            swipeToSlide={false}
            breakpointSlidesToShow={{ lg: 4, md: 3, sm: 2 }}
          />
        </div>
        <section className="aboutSection">
          <figure>
            <img src={aboutUs} alt="Abstract" />
          </figure>
          <article>
            <h1>About Us</h1>
            <p>
            At CodeCanvas Innovations, we transform digital visions into reality
            through cutting-edge website and app development. Our process begins
            with crafting sleek, user-centric Figma designs, ensuring your website’s 
            look and feel aligns with your goals. From there, we build powerful, scalable
            sites using top-tier technologies like React.js, Node.js, MongoDB, Shopify, 
            WordPress, PHP, and Next.js. For apps, we specialize in React Native and Flutter, 
            creating high-performance mobile experiences for both iOS and Android. Whether
            it's websites or apps, we deliver seamless, innovative solutions that help your business
            grow and excel in the competitive digital world.
            </p>
            <div>
              <button className="aboutBtn" onClick={() => navigate("/about")}>
                Know More
              </button>
            </div>
          </article>
        </section>
        

        <div className="services">
          <h1>Our Services</h1>
          <div >
          
          </div>
          <ServicesCard/>
        </div>


        <section className="whyUsContainer">
          <article>
            <h1>Why Choose Us ?</h1>
            <p>
            At CodeCanvas Innovations, we deliver custom digital solutions
            using the latest technologies. Our seamless design-to-development
            process ensures exceptional user experiences and scalable, high-performing
            websites and apps.
            </p>
            <div className="chooseUsCardsBox">
              {whyUsContent.map((card, index) => {
                return (
                  <ChooseUsCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    picture={card.picture}
                  />
                );
              })}
            </div>
          </article>
          <figure>
            <img src={whyUs} alt="" />
          </figure>
        </section>

        <section className="qouteBox">
          {/* <img src={quoteBackground} alt="Quotation Mark" /> */}
          <figure>
            <blockquote>
            I don't believe in taking right decisions. I take decisions and then make them right.
            </blockquote>
            <figcaption>&mdash; Ratan Tata</figcaption>
          </figure>
        </section>
        {/* <section className="bg-[var(--theme-red)] py-10">
          <div className="card">
            <div className="quote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 330 307"
                height="80"
                width="80"
              >
                <path
                  fill="currentColor"
                  d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
                ></path>
              </svg>
            </div>
            <div className="body-text">
              A brand for a company is like a reputation for a person. You earn
              reputation by trying to do hard things well.
            </div>
            <div className="author">- Jeff Bezos</div>
          </div>
        </section> */}
        {/* ---------------------------------------------------------------BLOG SECTION ---------------------------------------------------------------------------------------- */}
        {/* <section className="blogSectionContainer">
          <h1 className="blogSectionHeading" onClick={() => navigate("/blogs")}>
            Our Blogs
          </h1>
          <div className="blogSection">
            {latestBlogs.map((blog, index) => {
              return <BlogCard key={index} blog={blog} />;
            })}
          </div>
          <div>
            <button onClick={() => navigate("/blogs")}>For more &rarr;</button>
          </div>
        </section> */}

        <section className="accordionSection">
          <div>
            <h1 className="md:pr-[5%]">
            CRAFTING IMMERSIVE{" "}
              <span
                className={`${expandedAccordion === 1 ? "text-red-500" : ""} ${
                  expandedAccordion === 4 ? "text-red-500" : ""
                } `}
              >
                DIGITAL EXPERIENCE
              </span>
              , <br />
              <span
                className={`${
                  expandedAccordion === 2 ? "text-green-500" : ""
                } ${expandedAccordion === 4 ? "text-green-500" : ""}`}
              >
                CUSTOM WEBSITE{" "}
              </span>
              AND{" "}
              <span
                className={`${expandedAccordion === 3 ? "text-blue-500" : ""} ${
                  expandedAccordion === 4 ? "text-blue-500" : ""
                }`}
              >
                INNOVATIVE APPS
              </span>
            </h1>
          </div>
          <div>
            <Accordion onAccordionChange={handleAccordionChange} />
          </div>
        </section>
        <section>
          <CustomSlider
            slidesToShow={4}
            pauseOnHover={true}
            breakpointSlidesToShow={{ lg: 2, md: 2, sm: 1 }}
            mask={false}
            slideSpeed={10000}
            swipeToSlide={true}
            sliderName="testimonialSlider"
          />
        </section>
        <div className="homefaq">
          <Faq/>
        </div>
      </main>
    </>
  );
}
