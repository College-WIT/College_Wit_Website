import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contributor() {
  return (
    <div className="Contributor">
      <ResponsiveAppBar />
      <div>Top Contributor page</div>
      <Footer/>
    </div>
  );
}
