import {Button,Form,Alert} from 'react-bootstrap';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const PLACEHOLDER = "Password"

const Login = () => {
    return (<>
        <input type="text" value={""} placeholder="User name" style={{ }} /><br />
        <input type="password" value={""} placeholder={PLACEHOLDER} /><br />
        <input className="borde" type="button" value={"Agregar"} />
        <Button variant="outline-light">Light</Button>
        <Button variant="warning">Primary</Button>
        <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Alert variant={"dark"}>
          This is a  alert—check it out!
        </Alert>
    </>)
}

export default Login