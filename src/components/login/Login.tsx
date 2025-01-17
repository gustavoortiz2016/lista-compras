import { Button, Form ,Alert} from 'react-bootstrap';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const PLACEHOLDER = "Password"

interface ILoginProps {
    username:string
    password?:string
    valido?:boolean
    handleLogin: () => void
}

const Login:React.FC<ILoginProps>= ({username, password, valido,handleLogin}) => {
    return (<>
        <div>
            <div className='container'>
                <form className='form-container'>
                <Form.Control type="email" placeholder="nombre de usuario" defaultValue={username} />
                <Form.Control type="password" defaultValue={password} />
                <Button variant="primary">Primary</Button>
                <Alert variant={"warning"}>
          This is a alert—check it out!
        </Alert>
                </form>
            </div>
        </div>

    </>)
}

export default Login