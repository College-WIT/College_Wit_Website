import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Postans from "./postanswer";

export default function unanswered() {
  //console.log(props.quest_check);
  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Postans/>
      <Footer/>
    </div>
  );
}