import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Answer from "./Ans";

export default function Answers() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Answer/>
      <Footer/>
    </div>
  );
}
