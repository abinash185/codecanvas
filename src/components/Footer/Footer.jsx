import vistaarLogo from "../../assets/images/Vistaar_Webx_black.png";
import codeCanvasLogo from "../../assets/images/codecanvas.png"
import { Link } from "react-router-dom";
import footerImage from "../../assets/images/footerImg.png";
import { socialLinks } from "../../utils/Constant";

import "./Footer.css";
import { useState, useEffect } from "react";

export default function Footer() {
  const slides = ["New", " Innovative", "Remarkable", "Extraordinary", "Revolutionary"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <footer>
      <article>
        <h1>
          <span>Let’s build</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="58"
              fill="none"
              strokeWidth="0.5"
              viewBox="0 0 14 13"
              className="Footer_arrow__kw0yI"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
        </h1>

        <h1>
          <span>something </span>
          <span className="textWrapper">
            {slides.map((slide, index) => (
              <span
                key={index}
                className={`slide ${index === currentSlide ? "showing" : ""}`}
              >
                {slide}
              </span>
            ))}
          </span>
        </h1>
      </article>

      <section>
        <div className="footerMain ">
          <ul>
            <li>
              <strong>Speak to us</strong>
            </li>
            <li>+91 735-502-7827</li>
            <li>hello@codecanvas.com</li>
            <li>
              Address Here
            </li>
          </ul>
          <ul>
            <li>
              <strong>Company</strong>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="footerLast">
        <div className="footerImgContainer">
          <img src={footerImage} alt="Illustration" />
        </div>
        <span>
          <img src={codeCanvasLogo} alt="" />
        </span>
        <span>© 2024 CodeCanvas . All rights reserved.</span>
        <span>
          <Link to="/privacyPolicy">Privacy Policy</Link>
        </span>
        <span className="iconsBox">
          <ul>
            {socialLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.socialLink} target="_">
                    <img src={link.socialImage} alt="X Icon" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </span>
      </div>
    </footer>
  );
}
