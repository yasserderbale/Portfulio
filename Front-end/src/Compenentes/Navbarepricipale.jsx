import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import logo from "../public/logo.png";
import { Link } from "react-router-dom";
export const Navbarepricipale = () => {
  const opnemenu = () => {
    const buton = document.getElementById("listes");
    if (buton.style.display == "flex") {
      buton.style.display = "none";
    } else {
      buton.style.display = "flex";
    }
  };
  const [navBackground, setNavBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 966) {
        setNavBackground(window.scrollY > 50); // غيّر القيمة حسب الحاجة
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },navBackground);
  return (
    <div
      className="nav"
      style={{
        backgroundColor: navBackground ? "#2d25106e" : "transparent", // حدد اللون هنا
        transition: "background-color 0.3s ease",
      }}
    >
      <img className="logo" src={logo} />
      <MdOutlineMenu
        onClick={() => {
          opnemenu();
        }}
        className="menubare"
      >
        Click
      </MdOutlineMenu>
      <ul id="listes">
        <Link className="link" to="/">
          <li>Homme
          <div className="content"></div>
            </li>  
          
        </Link>
        <Link className="link" to="/Aboute">
          <li>About
          <div className="content"></div>
          </li>
          
        </Link>
        <Link className="link" to="/Skills">
          <li>Skills
          <div className="content"></div>
          </li>
          
        </Link>
        <Link className="link" to="/contact">
          <li>Contact
          <div className="content"></div>
          </li>
          
        </Link>
        <Link className="link" to="/Projects">
          <li>Projects
          <div className="content"></div>
          </li>
          
        </Link>
      </ul>
    </div>
  );
};
