import "../../index.css";
import ResponsiveAppBar from "../Navbar";
import Footer from '../Footer'
import Walkaround from "./walkaround";
import Boxes from './HeroSec.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contributors from "./ContributorsSection";



function Home() {
  return (
    <div className="Home">
     <ResponsiveAppBar/>
      <Boxes/>
      <Walkaround/>
      <Contributors/>
      <Footer/>
    </div>
  
  );
}
export default Home;