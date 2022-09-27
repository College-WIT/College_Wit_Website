import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Postans from "./postanswer";
import { useParams } from "react-router-dom";

export default function unanswered() {
  var ques = localStorage.getItem('recentQuest');
  console.log(ques);
  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Postans qq={ques}/>
      <Footer/>
    </div>
  );
}