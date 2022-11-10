import ResponsiveAppBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Forgotpswd from "../Components/Homepage/Authentication/2Forgotpswd";

function Otp() {
  return (
    <div className="Login">
      <ResponsiveAppBar />
      <Forgotpswd />
      <Footer />
    </div>
  );
}
export default Otp;
