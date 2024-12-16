import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/img/logo-distribuidora.png';
import '../styles/Navbar.css';

const NavigationBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);  // Llamamos a la función para filtrar los productos
  };

  const handleLogoClick = () => {
    onSearch('');  // Restablecer todos los productos cuando se haga clic en el logo
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" onClick={handleLogoClick} className="navbar-center">
        <div className="brand-container">
          <img 
            src={logo}
            alt="Logo"
            width="50"
            height="40"
            className="d-inline-block align-top"
            style={{ margin: '15px', marginTop: '0px', marginBottom: '0px', borderRadius: '3px' }}
          />
          <span className="brand-text">Distribuidora 'La Estación'</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/cervezas">Cervezas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/vinos">Vinos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/gaseosas">Gaseosas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/combos">Combos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/quienes-somos">Quienes Somos</Nav.Link>
          <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
          <Form inline className="ml-auto" onSubmit={handleSearchSubmit}>
            <FormControl
              type="text"
              placeholder="Buscar"
              className="mr-sm-2"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button variant="outline-success" type="submit">Buscar</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
