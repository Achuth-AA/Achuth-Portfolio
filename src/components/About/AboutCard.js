import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Achuth Dintakurthi</span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />I am a 2023 Graduating Guy in Computer Science from Kalasalingam University
            <br />
            <br />
            Apart from development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Adventorous Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying Puranas
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Be a jack of all trades but master in "1" !{" "}
          </p>
          <footer className="blockquote-footer">AD.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
