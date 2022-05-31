import "./index.css";
import ResponsiveAppBar from "./Components/Navbar";
import Footer from './Components/Footer'
import Boxes from './Components/HeroSec.jsx'

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Boxes/>
      <Footer/>
    </div>
  );
}
