import "./index.css";
import ResponsiveAppBar from "./Components/Navbar";
import Footer from './Components/Footer'
import Walkaround from "./Components/walkaround";
import Boxes from './Components/HeroSec.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contributors from "./Components/ContributorsSection";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Boxes/>
      <Walkaround/>
      <Contributors/>
      <Footer/>
    </div>
  );
}
