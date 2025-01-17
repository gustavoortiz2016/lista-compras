import { Form, Button } from 'react-bootstrap';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: React.FC = ({ }) => {
    return (<>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu Usuario o e-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control type='password' placeholder='Ingresa tu contrasenia' />
            </Form.Group>
        </Form>

        <Form>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Check this switch"
            />
        </Form>

        <>
        <Button variant="primary" size="lg" active>
        Validar
      </Button>
        </>
    </>)
}

export default Login