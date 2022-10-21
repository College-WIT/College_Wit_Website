import "../../index.css";
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Notespyq from "../../Components/notes-pyqs/notespyqs";
export default function Notes() {
  return (
    <div className="Notes">
      <ResponsiveAppBar />
      <Notespyq />
      <Footer />
    </div>
  );
}
