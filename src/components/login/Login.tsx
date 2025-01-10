const PLACEHOLDER = "Password XD"

const Login = ()=>{
    return(<>
   <input type="text" value={""} placeholder="User name" style={{"color":"red"}} /><br /> 
   <input type="password" value={""} placeholder={PLACEHOLDER} /><br /> 
    
    </>)
}

export default Login