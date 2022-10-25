import ResponsiveAppBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Signin from "../Components/Homepage/Authentication/Signin";

function Login() {
  return (
    <div className="Login">
      <ResponsiveAppBar />
      <Signin />
      <Footer />
    </div>
  );
}
export default Login;
