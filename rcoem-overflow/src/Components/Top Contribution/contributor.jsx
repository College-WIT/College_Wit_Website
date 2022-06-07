import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contributor() {
  return (
    <div className="Contributor">
      <ResponsiveAppBar />
      <div> <h2 align="center">Top Contributor page</h2></div>
      <Footer/>
    </div>
  );
}
