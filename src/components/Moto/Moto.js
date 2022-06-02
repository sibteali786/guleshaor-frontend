import React from "react";
import "./Moto.scss";
import Button from "@mui/material/Button";
import motoAsset1 from "./../../Assets/Moto_Assets/Image.png";
import carousel1 from "./../../Assets/Moto_Assets/Rectangle 5 (2).png";
// carousel imports 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const settings = {
  // dots: true,
      className: "center",
      centerMode: true,
      // centerPadding: "60px",
      speed: 500,
      slidesToShow: 3.05,
};
const Moto = () => {
  return (
    <div className="moto-container">
      <div className="WhoWeAre">
        <div className="span-1">
          <h3>who we are</h3>
          <div className="imageDiv">
            <img src={motoAsset1} alt="our purpose" />
          </div>
        </div>
        <div className="span-2">
          <h4>Our philosophy</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            imperdiet consectetur erat scelerisque. Ac malesuada amet facilisi
            sed enim. Habitant et consequat morbi lectus nibh in facilisis massa
            pretium. Porttitor et sed quis maecenas ultricies vitae fermentum
            habitasse. Turpis quam enim elit mauris volutpat tincidunt tortor,
            ut. Ac lacus montes, purus a leo enim. Natoque et egestas risus enim
            iaculis massa. Odio ornare lacus justo, vitae mattis massa. Lacus
            nec lectus eget leo, aliquet nisi pellentesque arcu malesuada. In
            facilisis varius suscipit at libero aliquam malesuada. Amet hac nibh
            donec feugiat feugiat. Natoque et egestas risus enim iaculis massa.
            Est in est imperdiet.
          </p>
        </div>
        <div className="span-3">

          <p>
          Odio ornare lacus justo, vitae mattis massa. Lacus
            nec lectus eget leo, aliquet nisi pellentesque arcu malesuada. In
            facilisis varius suscipit at libero aliquam malesuada. Amet hac nibh
            donec feugiat feugiat. Natoque et egestas risus enim iaculis massa.
            Est in est imperdiet arcu donec maecenas ac eget. Praesent enim,
            neque placerat quis tristique mauris laoreet etiam ut. Quis et vitae
            magna eu, in in. Aliquam quis nisl nulla lectus aliquam urna. Aenean
            ut faucibus placerat praesent vestibulum fusce ullamcorper. Id sed
            convallis nulla neque in sed. Sit sapien duis at mattis amet nulla
            maecenas eget justo.
          </p>
          <Button variant="contained">Get In Touch</Button>
        </div>
      </div>
      <div className="WhatWeDo">
        <h3>
            what we do
        </h3>
        <h2>
        MAKE, MENTOR & TEACH THE
        LEADERS OF TOMORROW
        </h2>
        <Slider {...settings} style={{padding:'0 0'}}>
          <div>
            <img src={carousel1} alt = "purpose" />
          </div>
          <div>
          <img src={carousel1} alt = "purpose" />
          </div>
          <div>
          <img src={carousel1} alt = "purpose" />
          </div>
          <div>
          <img src={carousel1} alt = "purpose" />
          </div>
          <div>
          <img src={carousel1} alt = "purpose" />
          </div>          
        </Slider>
      </div>
    </div>
  );
};

export default Moto;
