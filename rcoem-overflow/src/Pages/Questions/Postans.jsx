import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Postans from "../../Components/Questions/Postanswer";

export default function unanswered() {
  var ques = localStorage.getItem("recentQuest");
  console.log(ques);
  return (
    <div className="unanswered">
      <ResponsiveAppBar />
      <Postans qq={ques} />
      <Footer />
    </div>
  );
}
