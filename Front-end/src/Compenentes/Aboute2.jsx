import React from "react";
import imgAbout from "../public/imageAbout.svg";
import { Navbarepricipale } from "./Navbarepricipale";
export const Aboute2 = () => {
  return (
    <div>
      <Navbarepricipale />
      <div className="Aboute2" >
        <div className=" parAbout" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="500">
          <h1 className="titreAbout">Know Who I'M</h1>
          <p className="para2About">
            Hi Everyone, I am{" "}
            <span style={{ color: "#fec629" }}>Yasser Derbal</span> from
            <span style={{ color: "#fec629" }}> Algeria, Alger. </span>
            <br /> I am currently a student of computer science.
            <br /> I have completed my schooling from Algeria  
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
            <br />
            Playing Games
            <br /> Making Content
            <br /> Travelling
          </p>
        </div>
        <img className="imgabout" src={imgAbout} data-aos="zoom-in"/>
      </div>
    </div>
  );
};
