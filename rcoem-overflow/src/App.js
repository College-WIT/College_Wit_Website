import "./index.css";
import Walkaround from "./Components/walkaround"
import ResponsiveAppBar from "./Components/Navbar";
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Walkaround/>
      <Footer/>
    </div>
  );
}
