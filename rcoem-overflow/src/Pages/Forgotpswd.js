import ResponsiveAppBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Forgotpassword from "../Components/Homepage/Authentication/Forgotpassword";

function Forgotpswd() {
  return (
    <div className="Login">
      <ResponsiveAppBar />
      <Forgotpassword />
      <Footer />
    </div>
  );
}
export default Forgotpswd;
