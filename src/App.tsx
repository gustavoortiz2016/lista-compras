import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Container, Navbar, Nav, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppContext } from './context/appContext';

function App() {

  const { data : idiomaData, loading, error, setIdioma } = useAppContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleSetIdioma = (idioma: string) => {
    setIdioma(idioma);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">{_.get(idiomaData, 'nombreApp', '')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/maestroproductos">
                Productos
              </Nav.Link>
            </Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {_.get(idiomaData, 'listaIdiomas.titulo', '')}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {_.get(idiomaData, 'listaIdiomas.lista', []).map((item) => (
                  <Dropdown.Item key={_.get(item,'codigo','')} onClick={() => handleSetIdioma(_.get(item,'codigo',''))}>
                    {_.get(item,'nombre','')}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h1>{_.get(idiomaData,'bienvenido','')}</h1>
            <p>{_.get(idiomaData,'descripcion','')}</p>
            <Button variant="primary" as={NavLink} to="/login">
              {_.get(idiomaData,'login.boton','')}
            </Button> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;