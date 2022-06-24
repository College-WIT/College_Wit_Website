import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Answered from "./answered";

export default function Answers() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Answered/>
      <Footer/>
    </div>
  );
}
