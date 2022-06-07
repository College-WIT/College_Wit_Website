import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Notes() {
  return (
    <div className="Notes">
      <ResponsiveAppBar />
     <div>Notes / PYQs page</div>
      <Footer/>
    </div>
  );
}
