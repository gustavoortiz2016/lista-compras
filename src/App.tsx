import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router'
import _ from 'lodash'
import HMenu from './components/pages/layout/HMenu'
import useIdiomaContext from './context/idiomaContext.tsx'

const App: React.FC = () => {
  const { data: idiomaData } = useIdiomaContext()
  return (
    <>
      <HMenu />

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
