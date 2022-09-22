import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Answer from "./Ans";
import { useParams } from "react-router-dom";

export default function Answers() {
  const {que}=useParams();
  const qq=que+'?';
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Answer qq={qq}/>
      <Footer/>
    </div>
  );
}
