import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Answer from "../../Components/Questions/Ans";
import { useParams } from "react-router-dom";
import ScrollButton from "../../Components/scroll";
export default function Answers() {
  const { que } = useParams();
  const qq = que + "?";
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Answer qq={qq} />
      <ScrollButton />
      <Footer />
    </div>
  );
}
