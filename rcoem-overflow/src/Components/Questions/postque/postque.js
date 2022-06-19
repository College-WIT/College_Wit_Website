import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./postques";

export default function Answers() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Post/>
      <Footer/>
    </div>
  );
}
