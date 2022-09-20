import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Postans from "./posta";

export default function unanswered(props) {
  //console.log(props.quest);
  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Postans/>
      <Footer/>
    </div>
  );
}