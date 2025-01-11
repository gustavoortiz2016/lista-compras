import "./style.css"
const PLACEHOLDER = "Password"

const Login = () => {
    return (<>
        <input type="text" value={""} placeholder="User name" style={{ }} /><br />
        <input type="password" value={""} placeholder={PLACEHOLDER} /><br />
        <input className="borde" type="button" value={"Agregar"} />
    </>)
}

export default Login