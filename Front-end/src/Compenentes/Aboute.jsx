import React from "react";
import { Container } from "react-bootstrap";
import about from "../public/about.svg";
export const Aboute = () => {
  return (
    <div>
      <Container className="About">
        <div className="paragraphe2">
          <h1 className="titre">
            LET ME <span style={{ color: "#fec629" }}>INTRODUCE</span> MYSELF
          </h1>
          <p className="para2">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br /> I am fluent in classics like
            <span style={{ color: "#fec629" }}>
              {" "}
              C++, C, Javascript and Python.
            </span>
            <br />
            <br /> My field of Interest's are building new
            <span style={{ color: "#fec629" }}>
              {" "}
              Web Technologies and Products
            </span>{" "}
            and also in areas related to
            <span style={{ color: "#fec629" }}>
              {" "}
              Cyber- <br /> Security.
            </span>
            <br />
            <br /> Whenever possible, I also apply my passion for developing
            products with<span style={{ color: "#fec629" }}>
              {" "}
              Node.js
            </span> and{" "}
            <span style={{ color: "#fec629" }}>
              Modern Javascript
              <br /> Library and Frameworks
            </span>{" "}
            like<span style={{ color: "#fec629" }}> React.js</span> and
            <span style={{ color: "#fec629" }}> Next.js</span>
          </p>
          <a href="/cv" target="_blank" rel="noopener noreferrer">
            <button className="btn-contact">Download Cv</button>
          </a>
        </div>
        <img className="  " src={about} alt="About" />
      </Container>
    </div>
  );
};
