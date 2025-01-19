import React from 'react'
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'
import _ from 'lodash'
import { BsMoon, BsSun } from 'react-icons/bs'
import useIdiomaContext from '../../../context/idiomaContext.tsx'
import useThemeContext from '../../../context/themeContext.tsx'

const HMenu: React.FC = () => {
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
    </>
  )
}

export default HMenu
