import "../../index.css";
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Contributors from "../../Components/Top Contribution/contributor";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollButton from "../../Components/scroll";
export default function Contributor() {
  return (
    <div className="Contributor">
      <ResponsiveAppBar />
      <Contributors />
      <ScrollButton />
      <Footer />
    </div>
  );
}
