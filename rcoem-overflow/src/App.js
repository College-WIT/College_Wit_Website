import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Questions from "./Pages/Questions/Question";
import Home from "./Pages/HomePage/Home";
import Contributor from "./Pages/Top Contributors/contributors";
import Notes from "./Pages/Notes-pyqs/Notes";
import Signin from "./Pages/Login";
import Signup from "./Pages/Register";
import Answers from "./Pages/Questions/Answers";
import Postque from "./Pages/Questions/Postque";
import Unanswered from "./Pages/Questions/Unanswered";
import Postans from "./Pages/Questions/Postans";
import Trends from "./Pages/Questions/Trends";
import Semester_1 from "./Components/notes-pyqs/Sems/Semester 1/Semester-1";
import Semester_2 from "./Components/notes-pyqs/Sems/Semester 2/Semester_2";
import Semester_3 from "./Components/notes-pyqs/Sems/Semester 3/Semester_3";
import Semester_4 from "./Components/notes-pyqs/Sems/Semester 4/Semester_4";
import Semester_5 from "./Components/notes-pyqs/Sems/Semester 5/Semester_5";
import Semester_6 from "./Components/notes-pyqs/Sems/Semester 6/Semester_6";
import Semester_7 from "./Components/notes-pyqs/Sems/Semester 7/Semester_7";
import Semester_8 from "./Components/notes-pyqs/Sems/Semester 8/Semester_8";
import Chemistry from "./Components/notes-pyqs/Sems/Semester 1/Chemistry";
import Protected from "./Components/Homepage/Authentication/Protected";
import Profile from "./Pages/Profile/Profile";
import Contribute from "./Pages/Contributor";
import Forgotpswd from "./Pages/Forgotpswd";
import Otp from "./Pages/Otp";
import Tags from "./Pages/TagsPage/Tags";
import OperatingSystem from "./Components/notes-pyqs/Sems/Semester 4/OperatingSystem";
import OOPS from "./Components/notes-pyqs/Sems/Semester 4/OOPS";
import SPDD from "./Components/notes-pyqs/Sems/Semester 4/SPDD";
import FLAT from "./Components/notes-pyqs/Sems/Semester 4/FLAT";
import DMGT from "./Components/notes-pyqs/Sems/Semester 4/DMGT";

import axios from "axios";
import TagsPage from "./Pages/TagsPage/TagsPage";


const App = () => {

  // var getSearchData = async () => {
  //   await axios
  //   .get("https://rcoem-overflow-backend.herokuapp.com/view_search_questions")
  //   .then((response) => {
  //     console.log(response.data);
  //     const strJSON = JSON.stringify(response.data);
  //     localStorage.setItem("SearchData", strJSON);
  //   })
  //   .catch((error) => {
  //     console.log(error.data);
  //   });
  // }

  // useEffect(() => {
  //   getSearchData();
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Questions" element={<Questions />} />
        <Route path="Top%20Contributors" element={<Contributor />} />
        <Route path="Notes-PYQs" element={<Protected Component={Notes} />} />
        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="/answers/:que"
          element={<Protected Component={Answers} />}
        />
        <Route path="/Post-a-question" element={<Postque />} />
        <Route path="/Answered" element={<Questions />} />
        <Route path="/Unanswered" element={<Unanswered />} />
        <Route path="/Trending" element={<Trends />} />
        <Route
          path="/Post-an-answer/:que"
          element={<Protected Component={Postans} />}
        />
        <Route path="/Semester_1" element={<Semester_1 />} />
        <Route path="/Semester_2" element={<Semester_2 />} />
        <Route path="/Semester_3" element={<Semester_3 />} />
        <Route path="/Semester_4" element={<Semester_4 />} />
        <Route path="/Semester_5" element={<Semester_5 />} />
        <Route path="/Semester_6" element={<Semester_6 />} />
        <Route path="/Semester_7" element={<Semester_7 />} />
        <Route path="/Semester_8" element={<Semester_8 />} />
        <Route path="/Chemistry" element={<Chemistry />} />
        <Route path="/Operating_Systems" element={<OperatingSystem />} />
        <Route path="/Object_Oriented_Programming" element={<OOPS />} />
        <Route path="/System_Programming_and_Device_Drivers" element={<SPDD />} />
        <Route path="/Formal_Languages_&_Automata_Th" element={<FLAT />} />
        <Route path="/Discrete_Maths_and_Graph_Theory" element={<DMGT />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/be-a-contributor" element={<Contribute />} />
        <Route path="/forgotpassword" element={<Forgotpswd />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/tags/:tags" element={<TagsPage />} />
        {/* <Route path="/tags" element={<TagsPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
