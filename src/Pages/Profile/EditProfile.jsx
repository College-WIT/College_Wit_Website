import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import EditInfo from "../../Components/Profile/EditInfo";
import ScrollButton from "../../Components/scroll";
export default function EditProfile() {
  return (
    <div className="Notes">
      <ResponsiveAppBar />
      <EditInfo />
      <ScrollButton />
      <Footer />
    </div>
  );
}
