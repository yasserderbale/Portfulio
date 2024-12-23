import React from "react";
import Typed from "typed.js";
import { Container } from "react-bootstrap";
import fulio from "../public/logofulio.svg";
import { Link } from "react-router-dom";
export const Main = () => {
  const el = React.useRef(null);

  // إعداد Typed.js
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "And", "Problem Solver"],
      typeSpeed: 170,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Container className="main" data-aos="zoom-in" data-aos-duration="9000" data-aos-delay="300">
        <div className="paragraphe" >
          <h1 className="developer" data-aos="flip-left" data-aos-duration="9000" data-aos-delay="300" > 
            Hi There,👋
            <br />
            I am Full-Stack <br />
            <span style={{ color: "#f8f8f8" ,fontSize:"54px"}} ref={el} />
          </h1>
          <p className="ext" data-aos="flip-left"data-aos-duration="9000" data-aos-delay="300"  >
            I'm Yasser Derbal, a junior full-stack developer focused on building
            interactive web solutions. With a background in HTML, CSS, and
            JavaScript, I'm now exploring React, Node.js, and MongoDB to create
            full-stack applications.
          </p>
          <Link to="/contact">
            <button className="btn-contact" data-aos="flip-left"   >
              Contact Me
            </button>
          </Link>
        </div>
        <img className="fulio" src={fulio} data-aos="fade-right" data-aos-delay="1000"/>
      </Container>
    </div>
  );
};
