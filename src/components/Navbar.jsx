import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../styles/Navbar.css'; 

//barra de navegacion

const NavigationBar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Distribuidora La Estación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/cervezas">Cervezas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/vinos">Vinos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/gaseosas">Gaseosas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/combos">Combos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/quienes-somos">Quienes Somos</Nav.Link>
          <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success" >Buscar</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
