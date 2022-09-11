import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Contribution to <strong className="purple"> Developer Community </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://media.istockphoto.com/photos/live-chat-picture-id513300668?b=1&k=20&m=513300668&s=170667a&w=0&h=7Ua_ILJ4AofR3MnUz8ApeilwfJc9V08NtjI6MsPh0vk="}
              isBlog={false}
              title="Chat With AA"
              description="Personal Chat Application Just Like a Whatsapp Clone. I Implemented this in order to practise my Web Development Skills."
              // ghLink="/"
              demoLink="https://chatwithachuth.firebaseapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.dataquest.io/wp-content/uploads/2019/05/what-is-data-science-1.jpg"}
              isBlog={false}
              title="AA Studioz"
              description="Theme : Data Scientists no need to code.. Still in Progress More details will be uploaded soon "
              ghLink="/"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZfqbIDvCDyTOHi0KiYxjox-IKpZ2-kr_h7bVSs1UUelA0YwfGsI1YSkxZHaVjqcZYXA&usqp=CAU"}
              isBlog={false}
              title="Simple Chat Bot"
              description="Objective : Developed a simple chatbot with 2 hidden layer feed forward neural networks with own entities means own data "
              ghLink="https://github.com/Achuth-AA/Chatbot"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/nhjxygyi-1559831904.jpg?crop=1.00xw:1.00xh;0,0&resize=900:*"}
              isBlog={false}
              title="Rain Prediction Web App "
              description="As part of Hackathon we build an end to end application of Rani prediction system and we deployed in heroku and here we used the American Weather Benchmark Dataset and we implemented the CI/CD pipelines also using the github actions ."
              ghLink="https://github.com/Achuth-AA/"
              demoLink="http://rainopenai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://i0.wp.com/vinodsblog.com/wp-content/uploads/2018/10/CNN-2.png?resize=1300%2C479&ssl=1"}
              isBlog={false}
              title="Skin Cancer Classification Using CNN's"
              description="We Wrote a research paper on the topic Skin cancer classification using CNN's ."
              ghLink="/"
              demoLink="https://ieeexplore.ieee.org/document/9377155" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
