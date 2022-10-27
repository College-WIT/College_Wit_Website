import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Unanswered from "../../Components/Questions/Unans";
import ScrollButton from "../../Components/scroll";

export default function unanswered() {
  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Unanswered />
      <ScrollButton />
      <Footer />
    </div>
  );
}
