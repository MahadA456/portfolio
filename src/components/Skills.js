import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="text-center">My Skills</h2>
        <Row>
          <Col md={6}>
            <h5>JavaScript</h5>
            <ProgressBar now={80} label={`${80}%`} />
          </Col>
          <Col md={6}>
            <h5>React</h5>
            <ProgressBar now={70} label={`${70}%`} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h5>HTML & CSS</h5>
            <ProgressBar now={90} label={`${90}%`} />
          </Col>
          <Col md={6}>
            <h5>Node.js</h5>
            <ProgressBar now={60} label={`${60}%`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
