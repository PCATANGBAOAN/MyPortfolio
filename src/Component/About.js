import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./about.styles.css";
import Profile from "../test.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import LazyLoad from "react-lazyload";

const About = () => {
    return (
        <div id="About">
      <div className="main-info">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
        
              <Row className="justify-content-center mb-2 mr-2 ">               
              
              <LazyLoad height={200} debounce={300}>
              <Image className="profile" alt="profile" src={Profile}/>
              </LazyLoad>
              </Row>
            </Col>
            <Col xs={12} md={6}>
            <h4 className="pb-3">Full Stack Software Engineer</h4>
              <Row className="my-details rounded">
              
                Hi there! I am <strong>&nbsp;Paul Christian Armando Tangbaoan</strong> A passionate, .Net Enthusiast and a Google Master, 
                born and brought up in Philippines. I am a Full Stack Software Engineer with React.js, .NET Core C#, Express.js, Node.js, and MSSQL as my tech stack.
                In 2014, I successfully completed my colleged with specialization in 'Information of Technology'.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I also help people as a sole developer and lead on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Hit me up!
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="/#" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="/#" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="/#" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default About
