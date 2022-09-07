import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import Contributors from "./contributor";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contributor() {
  return (
    <div className="Contributor">
      <ResponsiveAppBar />
      <Contributors/>
      <Footer/>
    </div>
  );
}