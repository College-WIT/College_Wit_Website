import "./index.css";
import ResponsiveAppBar from "./Components/Navbar";
import Footer from './Components/Footer'
import Walkaround from "./Components/Homepage/walkaround";
import Boxes from './Components/Homepage/HeroSec.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contributors from "./Components/Homepage/ContributorsSection";
import QuestionsPage from "./Components/Questions/QuestionsPage";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Boxes/>
      <Walkaround/>
      <Contributors/>
      <QuestionsPage/>
      <Footer/>
    </div>
  );
}
