import * as React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import ResponsiveAppBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TagsFunc from "./TagsFunc";
import { useParams } from "react-router-dom";
import ScrollButton from "../../Components/scroll";
import { useLocation } from 'react-router-dom';
import axios from 'axios'


export default function Answers() {
  let location = useLocation();
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
