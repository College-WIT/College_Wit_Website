import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Unanswered from "./unans";

export default function unanswered() {
  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Unanswered/>
      <Footer/>
    </div>
  );
}