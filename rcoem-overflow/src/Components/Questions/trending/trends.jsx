import '../../../index.css';
import ResponsiveAppBar from "../../Navbar";
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './trend';

export default function Questions() {
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <Trending/>
      <Footer/>
    </div>
  );
}
