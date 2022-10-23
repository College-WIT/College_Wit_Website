// import "../../index.css";
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Walkaround from "../../Components/Homepage/walkaround";
import Boxes from "../../Components/Homepage/HeroSec.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Contributors from "../../Components/Homepage/ContributorsSection";
import axios from "axios";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Counter from "../../Components/Homepage/counter";


function Home() {

  return (
    <div className="Home">
      <ResponsiveAppBar />
      <Boxes />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Walkaround />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Contributors />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Counter />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Footer />
    </div>
  );
}
export default Home;
