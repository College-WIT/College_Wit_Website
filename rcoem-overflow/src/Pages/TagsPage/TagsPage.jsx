import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Tags from "./Tags";
import { useParams } from "react-router-dom";
import ScrollButton from "../../Components/scroll";
import { useLocation } from 'react-router-dom';
export default function Answers() {
  let location = useLocation();
  const tag=location.state.tag;
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Tags tag={tag} />
      <ScrollButton />
      <Footer />
    </div>
  );
}
