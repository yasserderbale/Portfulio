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
      strings: ["Full-stack-Developer", "And", "Problem Solver"],
      typeSpeed: 160,
      backSpeed: 48,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Container
        className="main"
        data-aos="zoom-in"
        data-aos-duration="9000"
        data-aos-delay="300"
      >
        <div className="paragraphe">
          <h1
            className="developer"
            data-aos="flip-left"
            data-aos-duration="9000"
            data-aos-delay="300"
          >
            Hi There
            <br />
            I`M <span style={{ color: "#f8f8f8" }}>Yasser Derbal</span> <br />
            <br />
            <span style={{ color: "#f8f8f8", fontSize: "46px" }} ref={el} />
          </h1>

          <Link to="/contact">
            <button className="btn-contact" data-aos="flip-left">
              Contact Me
            </button>
          </Link>
        </div>
        <img
          className="fulio"
          src={fulio}
          data-aos="fade-right"
          data-aos-delay="1000"
        />
      </Container>
    </div>
  );
};
