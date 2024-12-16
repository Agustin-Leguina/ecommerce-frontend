import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/ContactForm.css'

const ContactPage = () => {
  return (
    <Container className="contact-page">
      <Row>
        <Col md={6}>
          <h2>Contacto:</h2> <br />
          <p>Si tienes alguna consulta o deseas más información, no dudes en ponerte en contacto con nosotros.</p>
          <p><strong>Teléfono:</strong> +54 3493 665321</p>
          <p><strong>Email:</strong> rubenvisetti@gmail.com</p>
          <p><strong>Dirección:</strong> Rafaela 1543</p>
          <p><strong>Localidad:</strong> Sunchales (Santa Fe)</p>
          <p><strong>Horario de atención:</strong> Lunes a Viernes, de 7:00 a 15:00 hs.</p>
        </Col>
        <Col md={6}>
          <h3>Formulario de Contacto:</h3> <br />
          <div className="form-contact">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label> 
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
