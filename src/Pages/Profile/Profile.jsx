import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Profileage from "../../Components/Profile/Profilepage";
import ScrollButton from "../../Components/scroll";
export default function Profile() {
  return (
    <div className="Notes">
      <ResponsiveAppBar />
      <Profileage />
      <ScrollButton />
      <Footer />
    </div>
  );
}
