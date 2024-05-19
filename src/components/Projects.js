import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center">My Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="path-to-project-image.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Description of project 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="path-to-project-image.jpg" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Description of project 2.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="path-to-project-image.jpg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Description of project 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
