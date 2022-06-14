import "../../../index.css";
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import Signin from './Signin'



function Login() {
  return (
    <div className="Login">
     <ResponsiveAppBar/>
      <Signin/>
      <Footer/>
    </div>
  
  );
}
export default Login;


  