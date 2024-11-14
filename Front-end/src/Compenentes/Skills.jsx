import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiCanva, SiMysql, SiPostman } from "react-icons/si";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5 } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import { Navbarepricipale } from "./Navbarepricipale";
export const Skills = () => {
  return (
    <div>
      <Navbarepricipale />
      <Container className="skillscontainer">
        <Row className="text-center  justify-content-center">
          <Row>
            <Col>
              <h1 className="Skillset">
                Professional<span style={{ color: "#fec629" }}> Skillest</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <CgCPlusPlus className="tech-icons" />
            </Col>
            <Col>
              <DiJavascript1 className="tech-icons" />
            </Col>
            <Col>
              <DiNodejs className="tech-icons" />
            </Col>
            <Col>
              <DiMongodb className="tech-icons" />
            </Col>
            <Col>
              <DiGit className="tech-icons" />
            </Col>
          </Row>
          <Row>
            <Col>
              <DiJava className="tech-icons" />
            </Col>
            <Col>
              <DiReact className="tech-icons" />
            </Col>
            <Col>
              <SiMysql className="tech-icons" />
            </Col>
            <Col>
              <FaCss3 className="tech-icons" />
            </Col>
            <Col>
              <FaHtml5 className="tech-icons" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <FaBootstrap className="tech-icons" />
            </Col>
            <Col>
              <FaGithub className="tech-icons" />
            </Col>
          </Row>
          <Row>
            <h1 className="tools">
              <span style={{ color: "#fec629" }}>Tools</span> I use
            </h1>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <VscVscode className="tech-icons" />
            </Col>
            <Col>
              <SiPostman className="tech-icons" />
            </Col>
            <Col>
              <SiCanva className="tech-icons" />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
