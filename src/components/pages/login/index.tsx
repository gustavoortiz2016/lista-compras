import { Col, Container, Row } from "react-bootstrap"
import ContentLogin from "../../login/ContentLogin"

const PageLogin = () => {
    return (<>

        <Container>
            <Row>
                <Col>
                    <h1>
                        Lista de Compras App
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <ContentLogin />
                </Col>
            </Row>

        </Container>

    </>)
}

export default PageLogin 