import ResponsiveAppBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contributorform from "../Components/Homepage/Authentication/Contributorform";

function Contribute() {
  // const { width, height } = useWindowSize();
  return (
    <div className="Login">
      <ResponsiveAppBar />
      <Contributorform />
      <Footer />
    </div>
  );
}
export default Contribute;
