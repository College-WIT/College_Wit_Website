import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PostQuestions from "../../Components/Questions/PostQuestions";
import ScrollButton from "../../Components/scroll";
export default function Questions() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <PostQuestions />
      <ScrollButton />
      <Footer />
    </div>
  );
}
