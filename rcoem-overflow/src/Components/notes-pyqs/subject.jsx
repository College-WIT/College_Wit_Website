import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Notespyq from './notespyqs';
export default function Notes() {
  return (
    <div className="Notes">
      <ResponsiveAppBar />
      <Notespyq />
      <Footer />
    </div>
  );
}
