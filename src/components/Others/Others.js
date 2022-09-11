import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Others() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Here are the some cool Stuff which I designed </strong>
        </h1>
        <p style={{ color: "white" }}>
          Have a look on it Guys!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <strong className="purple"><h1>On the Way..........🚗🚗</h1></strong>
        </Row>
      </Container>
    </Container>
  );
}

export default Others;
