import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export const Footer = () => {
  return (
    <div className="Footer" >
      <div className="Footer1">
        <p>Designed And Developed By Yasser Derbal</p>
      </div>
      <div className="Footer2">
        <p>Copyright © 2024</p>
      </div>
      <div className="Footer3">
        <a target="_blank" style={{ color: "white" }} href="https://github.com/yasserderbale">
          <FaGithub className="iconsfooter" />
        </a>
        <a target="_blank" style={{ color: "white" }} href="https://www.facebook.com/hessen.yasser.12">
          <FaFacebookSquare className="iconsfooter" />
        </a>{" "}
        <a target="_blank" style={{ color: "white" }} href="mailto:drbalyasser.gmail.com">
          <SiGmail className="iconsfooter" />
        </a>
      </div>
    </div>
  );
};
