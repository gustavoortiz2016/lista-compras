import {Button,Form} from 'react-bootstrap';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const PLACEHOLDER = "Password"

const Login = () => {
    return (<>
    <form className='container'>
        <table className="center"> 
            <tr>
                <td>
                    <input className='one' type="text" value="E-mail/User" />
                </td>
            </tr>
            <tr>
                <td>
                    <input className='two' type="password" value="passwor" />
                </td>
            </tr>
        </table>
    </form>
    
    </>)
}

export default Login