import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "../../Components/Questions/Postques";

export default function Questions() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Post />
      <Footer />
    </div>
  );
}
