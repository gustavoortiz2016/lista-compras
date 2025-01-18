import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Dropdown,
  Card,
} from 'react-bootstrap'
import { BsMoon, BsSun } from 'react-icons/bs'
import { NavLink } from 'react-router'
import _ from 'lodash'
import useIdiomaContext from './context/idiomaContext'
import useThemeContext from './context/themeContext'
import './App.css' // Importa el archivo CSS

const App: React.FC = () => {
  const { data: idiomaData, setIdioma } = useIdiomaContext()
  const { theme, setTheme } = useThemeContext()
  const handleSetIdioma = (idioma: string) => {
    setIdioma(idioma)
  }

  return (
    <>
      <Navbar bg={theme} variant={theme} expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            {_.get(idiomaData, 'nombreApp', '')}
          </Navbar.Brand>
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
                  <Dropdown.Item
                    key={_.get(item, 'codigo', '')}
                    onClick={() => handleSetIdioma(_.get(item, 'codigo', ''))}
                  >
                    {_.get(item, 'nombre', '')}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button
              variant="outline-secondary"
              className="ms-2 d-flex align-items-center justify-content-center"
              onClick={() =>
                setTheme(_.isEqual(theme, 'dark') ? 'light' : 'dark')
              }
            >
              {_.isEqual(theme, 'dark') && <BsMoon />}
              {_.isEqual(theme, 'light') && <BsSun />}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h1>{_.get(idiomaData, 'bienvenido', '')}</h1>
            <p>{_.get(idiomaData, 'descripcion', '')}</p>
            <Button variant="primary" as={NavLink} to="/login">
              Comenzar
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Control de Productos</Card.Title>
                <Card.Text>
                  Agrega y organiza los productos que necesitas comprar.
                </Card.Text>
                <Button variant="primary" as={NavLink} to="/maestroproductos">
                  Ver Productos
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Presupuesto</Card.Title>
                <Card.Text>
                  Actualiza los precios de los productos y mantén un control del
                  presupuesto.
                </Card.Text>
                <Button variant="primary" as={NavLink} to="/presupuesto">
                  Ver Presupuesto
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Reportes</Card.Title>
                <Card.Text>
                  Obtén reportes detallados de tus hábitos de consumo y gastos.
                </Card.Text>
                <Button variant="primary" as={NavLink} to="/reportes">
                  Ver Reportes
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
