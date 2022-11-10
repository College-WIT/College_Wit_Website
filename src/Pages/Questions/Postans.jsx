import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Postans from "../../Components/Questions/Postanswer";
import ScrollButton from "../../Components/scroll";
import { useLocation } from "react-router-dom";

export default function Unanswered() {
  const location = useLocation();
  console.log(location);

  var ques=location.state.propQue;
  console.log(ques);


  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Postans qq={ques} />
      <ScrollButton />
      <Footer />
    </div>
  );
}
