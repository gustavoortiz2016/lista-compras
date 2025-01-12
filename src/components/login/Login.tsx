import { Button, Form } from 'react-bootstrap';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const PLACEHOLDER = "Password"

const Login = () => {
    return (<>
        <div>
            <div className='container'>
                <form className='form-container'>
                    <input className='one' type="text" placeholder="Username" />
                    <input className='two' type="password" placeholder="password" />
                </form>
            </div>
        </div>

    </>)
}

export default Login