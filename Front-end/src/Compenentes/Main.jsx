import React from "react";
import Typed from "typed.js";
import { Container } from "react-bootstrap";
import fulio from "../public/logofulio.svg";
import { Link } from "react-router-dom";
export const Main = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "And", "problem Solver"],
      typeSpeed: 180,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <Container className="main">
        <div className="paragraphe">
          <h1 className="developer">
            Hi,There
            <br />
            Iam-Full-Stack- <br />
            <span style={{ color: "#f8f8f8" }} ref={el} />
          </h1>
          <p className="ext">
            I'm Yasser Derbal, a junior full-stack developer focused on building
            interactive web solutions. With a background in HTML, CSS, and
            JavaScript, I'm now exploring React, Node.js, and MongoDB to create
            full-stack applications.
          </p>
          <Link to="/contact">
            <button className="btn-contact">Contact Me</button>
          </Link>
        </div>
        <img className="fulio" src={fulio} />
      </Container>
    </div>
  );
};
