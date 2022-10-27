// import "../../index.css";
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Walkaround from "../../Components/Homepage/walkaround";
import Boxes from "../../Components/Homepage/HeroSec.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Counter from "../../Components/Homepage/counter";
import ScrollButton from "../../Components/scroll";

function Home() {
  return (
    <div className="Home">
      <ResponsiveAppBar />
      <Boxes />
      <Counter />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Walkaround />
      {/* <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid> */}
      {/* <Contributors /> */}
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <ScrollButton />
      <Footer />
    </div>
  );
}
export default Home;
