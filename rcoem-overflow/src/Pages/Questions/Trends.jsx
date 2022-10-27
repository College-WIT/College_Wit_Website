import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Trending from "../../Components/Questions/Trend";
import ScrollButton from "../../Components/scroll";
export default function Questions() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Trending />
      <ScrollButton />
      <Footer />
    </div>
  );
}
