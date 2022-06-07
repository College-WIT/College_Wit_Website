import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsPage from "./QuestionsPage";

export default function Questions() {
  return (
    <div className="Questions">
      <ResponsiveAppBar />
      <QuestionsPage/>
      <Footer/>
    </div>
  );
}
