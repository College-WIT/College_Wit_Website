import React from "react";
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
// import Semester_1 from "./Components/notes-pyqs/Sems/Semester 1/Semester-1";
// import Semester_2 from "./Components/notes-pyqs/Sems/Semester 2/Semester_2";
import Semester_3 from "./Components/notes-pyqs/Sems/Semester 3/Semester_3";
import Semester_4 from "./Components/notes-pyqs/Sems/Semester 4/Semester_4";
import Semester_5 from "./Components/notes-pyqs/Sems/Semester 5/Semester_5";
import Semester_6 from "./Components/notes-pyqs/Sems/Semester 6/Semester_6";
import Semester_7 from "./Components/notes-pyqs/Sems/Semester 7/Semester_7";
import Semester_8 from "./Components/notes-pyqs/Sems/Semester 8/Semester_8";
import Protected from "./Components/Homepage/Authentication/Protected";
import Profile from "./Pages/Profile/Profile";
import Contribute from "./Pages/Contributor";
import Forgotpswd from "./Pages/Forgotpswd";
import Otp from "./Pages/Otp";
import OS from "./Components/notes-pyqs/Sems/Semester 4/OS";
import OOPS from "./Components/notes-pyqs/Sems/Semester 4/OOPS";
import SPDD from "./Components/notes-pyqs/Sems/Semester 4/SPDD";
import FLAT from "./Components/notes-pyqs/Sems/Semester 4/FLAT";
import DMGT from "./Components/notes-pyqs/Sems/Semester 4/DMGT";

import CG from "./Components/notes-pyqs/Sems/Semester 5/CG";
import CN from "./Components/notes-pyqs/Sems/Semester 5/CN";
import DAA from "./Components/notes-pyqs/Sems/Semester 5/DAA";
import DBMS from "./Components/notes-pyqs/Sems/Semester 5/DBMS";
import DP from "./Components/notes-pyqs/Sems/Semester 5/DP";

import AI from './Components/notes-pyqs/Sems/Semester 6/AI'
import CD from './Components/notes-pyqs/Sems/Semester 6/CD'
import SE from './Components/notes-pyqs/Sems/Semester 6/SE'
import DWBI from './Components/notes-pyqs/Sems/Semester 6/DWBI'

import DS from "./Components/notes-pyqs/Sems/Semester 8/DS";
import IS from "./Components/notes-pyqs/Sems/Semester 8/IS";
import WIBD from "./Components/notes-pyqs/Sems/Semester 8/WIBD";
import GCC from "./Components/notes-pyqs/Sems/Semester 8/GCC";

import TagsPage from "./Pages/TagsPage/TagsPage";
import FDLCA from "./Components/notes-pyqs/Sems/Semester 3/FDLCA";
import DSA from "./Components/notes-pyqs/Sems/Semester 3/DSA";
import M3 from "./Components/notes-pyqs/Sems/Semester 3/M3";
import BC from "./Components/notes-pyqs/Sems/Semester 3/BC";
import CLE from "./Components/notes-pyqs/Sems/Semester 3/CLE";
import Placement from "./Components/notes-pyqs/Sems/Placement/Placement";
import ComingSoon from "./Components/notes-pyqs/Sems/comingSoon";
import Error from "./Pages/Error";
import EditProfile from "./Pages/Profile/EditProfile";

import CC from "./Components/notes-pyqs/Sems/Semester 7/CC";
import BIO from "./Components/notes-pyqs/Sems/Semester 7/BIO";
import ML from "./Components/notes-pyqs/Sems/Semester 7/ML";
import DVA from "./Components/notes-pyqs/Sems/Semester 7/DVA";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Questions" element={<Questions />} />
        <Route path="Contributors" element={<Contributor />} />
        <Route path="Resources" element={<Protected Component={Notes} />} />
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
        <Route path="/tags/:tag" element={<TagsPage />} />
        <Route path="/Semester_3" element={<Protected Component={Semester_3} />} />
        <Route path="/Semester_4" element={<Protected Component={Semester_4} />} />
        <Route path="/Semester_5" element={<Protected Component={Semester_5} />} />
        <Route path="/Semester_6" element={<Protected Component={Semester_6} />} />
        <Route path="/Semester_7" element={<Protected Component={Semester_7} />} />
        <Route path="/Semester_8" element={<Protected Component={Semester_8} />} />
        
        {/* THIRD SEMESTER */}
        <Route
          path="/Fundamentals_of_Digital_Logic_and_Computer_Arch"
          element={<Protected Component={FDLCA} />}
        />
        <Route path="/Data_Structures_&_Algorithms" element={<Protected Component={DSA} />} />
        <Route path="/Linear_Algebra_and_Statistics" element={<Protected Component={M3} />} />
        <Route path="/Business_Communication" element={<Protected Component={BC} />} />
        <Route path="/Cyber_Laws_&_Ethics" element={<Protected Component={CLE} />} />
        {/* FOURTH SEMESTER */}
        <Route path="/Operating_Systems" element={<Protected Component={OS} />} />
        <Route path="/Object_Oriented_Programming" element={<Protected Component={OOPS} />} />
        <Route
          path="/System_Programming_and_Device_Drivers"
          element={<Protected Component={SPDD} />}
        />
        <Route path="/Formal_Languages_&_Automata_Th" element={<Protected Component={FLAT} />} />
        <Route path="/Discrete_Maths_and_Graph_Theory" element={<Protected Component={DMGT} />} />
        {/* FIFTH SEMESTER */}
        <Route path="/Computer_Graphics" element={<Protected Component={CG} />} />
        <Route path="/Computer_Networks" element={<Protected Component={CN} />} />
        <Route path="/Design_&_Analysis_of_Algorithms" element={<Protected Component={DAA} />} />
        <Route path="/Database_Management_Systems" element={<Protected Component={DBMS} />} />
        <Route path="/Design_Patterns" element={<Protected Component={DP} />} />
        {/* SIXTH SEMESTER */}
        <Route path="/Artificial_Intelligence" element={<Protected Component={AI} />} />
        <Route path="/Complier_Design" element={<Protected Component={CD} />} />
        <Route path="/Software_Engineering" element={<Protected Component={SE} />} />
        <Route path="/Database_Warehousing" element={<Protected Component={DWBI} />} />
        {/* SEVENTH SEMESTER */}
        <Route path="/Cloud_Computing" element={<Protected Component={CC} />} />
        <Route path="/Bio_Informatics" element={<Protected Component={BIO} />} />
        <Route path="/Machine_Learning" element={<Protected Component={ML} />} />
        <Route path="/Data_Visualization_&_Analytics" element={<Protected Component={DVA} />} />
        {/* EIGHT SEMESTER */}
        <Route path="/Distributed_System" element={<Protected Component={DS} />} />
        <Route path="/Web_Intelligence_&_Big_Data" element={<Protected Component={WIBD} />} />
        <Route path="/Information_Security" element={<Protected Component={IS} />} />
        <Route path="/Grid_Computing" element={<Protected Component={GCC} />} />


        <Route path="/Placement" element={<Protected Component={Placement} />} />
        <Route path="/comingSoon" element={<Protected Component={ComingSoon} />} />
        {/* ---------- Profile Routes ------------ */}

        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/be-a-contributor" element={<Contribute />} />
        <Route path="/forgotpassword" element={<Forgotpswd />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/Profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
