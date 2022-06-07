import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Notes() {
  return (
    <div className="Notes">
      <ResponsiveAppBar />

     <div> <h2 align="center">Notes / PYQs page</h2></div>
      <Footer/>
    </div>
  );
}
