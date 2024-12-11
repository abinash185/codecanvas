import React from 'react'
import "./ServicesCard.css"
import uiux from "../../../assets/images/uiux.svg";
import Website from "../../../assets/images/website.svg";
import Mobile from "../../../assets/images/mobileapps.svg";

const ServicesCard = () => {
  return (
  <div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
      <img
  src={uiux}
  alt="UI/UX"
  style={{
    width: "60%",
    maxWidth: "400px",
    height: "auto",
    display: "block",
    margin: "0 auto" 
  }}
/>        
        <h4>UI/UX Design</h4>
        <p>Creating visually appealing, intuitive designs that enhance user experience and align with your brand’s identity.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="box">
      <div className="content">
      <img
  src={Website}
  alt="Website"
  style={{
    width: "60%",
    maxWidth: "400px",
    height: "auto",
    display: "block",
    margin: "0 auto" 
  }}
/>      
        
        <h4>Website Development</h4>
        <p>Building responsive, high-quality websites for optimal performance and engaging user experiences.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="box">
      <div className="content">
      <img
  src={Mobile}
  alt="Mobile"
  style={{
    width: "60%",
    maxWidth: "400px",
    height: "auto",
    display: "block",
    margin: "0 auto" 
  }}
/>      
        <h4>App Development</h4>
        <p>Building high-performance, user-friendly apps that connect brands with audiences across all platforms.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div> 
</div>
  )
}

export default ServicesCard