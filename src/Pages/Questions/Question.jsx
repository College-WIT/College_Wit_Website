import "../../index.css";
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionsPage from "../../Components/Questions/QuestionsPage";
import ScrollButton from "../../Components/scroll";

export default function Questions() {
  return (
    <div className="Questions">
      <ResponsiveAppBar />
      <QuestionsPage />
      <ScrollButton />
      <Footer />
    </div>
  );
}
