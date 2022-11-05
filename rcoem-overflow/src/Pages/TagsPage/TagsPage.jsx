import * as React from 'react';
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TagsFunc from "./TagsFunc";
import ScrollButton from "../../Components/scroll";
import { useLocation } from 'react-router-dom';


export default function Answers() {
  let location = useLocation();
  //console.log(location);
  const tag=location.state.tag;
  return (
    <div className="Answers">
      <ResponsiveAppBar />
      <TagsFunc tag={tag} />
      <ScrollButton />
      <Footer />
    </div>
  );
}
