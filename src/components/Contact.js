import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center">Contact Me</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="social-icons text-center">
          <a href="https://facebook.com"><FaFacebook size="2em" /></a>
          <a href="https://twitter.com"><FaTwitter size="2em" /></a>
          <a href="https://linkedin.com"><FaLinkedin size="2em" /></a>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
