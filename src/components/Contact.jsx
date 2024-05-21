import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
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
        <Form.Group controlId="formMessage">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
      <div className="social-links">
        <a href="https://github.com/MahadA456" className="social-icon"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/yourusername" className="social-icon"><i className="fab fa-linkedin"></i></a>
      </div>
    </section>
  );
}

export default Contact;
