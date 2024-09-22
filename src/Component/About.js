import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./about.styles.css";
import Profile2 from "../assets/img/profile/profile2.jpg";
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
                  <Image className="profile" alt="profile" src={Profile2} />
                </LazyLoad>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="pb-3">Full Stack Software Engineer</h4>
              <Row className="my-details rounded">
                Hello! I’m Paul, property of charm soriano also a dedicated .NET enthusiast and a self-proclaimed Google master from the Philippines. As a Full Stack Software Engineer, I work with a tech stack that includes React.js, .NET Core, C#, Express.js, Node.js, and MSSQL. I graduated in 2014 with a degree in Information Technology.
                My focus when working with clients is to deliver an exceptional experience by providing top-notch quality and service. Additionally, I mentor aspiring developers, guiding them on their path to becoming professional programmers.
                I’m passionate about exploring new technologies, understanding the problems they address, and discovering how I can leverage them to create better and more scalable products.
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
