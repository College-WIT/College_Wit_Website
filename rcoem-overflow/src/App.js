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
// import Semester_6 from "./Components/notes-pyqs/Sems/Semester 6/Semester_6";
// import Semester_7 from "./Components/notes-pyqs/Sems/Semester 7/Semester_7";
// import Semester_8 from "./Components/notes-pyqs/Sems/Semester 8/Semester_8";
import Chemistry from "./Components/notes-pyqs/Sems/Semester 1/Chemistry";
import Protected from "./Components/Homepage/Authentication/Protected";
import Profile from "./Pages/Profile/Profile";
import Contribute from "./Pages/Contributor";
import Forgotpswd from "./Pages/Forgotpswd";
import Otp from "./Pages/Otp";
import OperatingSystem from "./Components/notes-pyqs/Sems/Semester 4/OperatingSystem";
import OOPS from "./Components/notes-pyqs/Sems/Semester 4/OOPS";
import SPDD from "./Components/notes-pyqs/Sems/Semester 4/SPDD";
import FLAT from "./Components/notes-pyqs/Sems/Semester 4/FLAT";
import DMGT from "./Components/notes-pyqs/Sems/Semester 4/DMGT";

import CG from "./Components/notes-pyqs/Sems/Semester 5/CG";
import CN from "./Components/notes-pyqs/Sems/Semester 5/CN";
import DAA from "./Components/notes-pyqs/Sems/Semester 5/DAA";
import DBMS from "./Components/notes-pyqs/Sems/Semester 5/DBMS";
import DP from "./Components/notes-pyqs/Sems/Semester 5/DP";
import MAP from "./Components/notes-pyqs/Sems/Semester 5/MAP";

import DPD from "./Components/notes-pyqs/Sems/Semester 8/DPD";
import NLP from "./Components/notes-pyqs/Sems/Semester 8/NLP";
import DS from "./Components/notes-pyqs/Sems/Semester 8/DS";
import IS from "./Components/notes-pyqs/Sems/Semester 8/IS";
import WIBD from "./Components/notes-pyqs/Sems/Semester 8/WIBD";

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
          path="/Post-an-answer"
          element={<Protected Component={Postans} />}
        />
        <Route path="/tags/:tag" element={<TagsPage />} />
        <Route path="/Semester_1" element={<ComingSoon />} />
        <Route path="/Semester_2" element={<ComingSoon />} />
        <Route path="/Semester_3" element={<Semester_3 />} />
        <Route path="/Semester_4" element={<Semester_4 />} />
        <Route path="/Semester_5" element={<Semester_5 />} />
        <Route path="/Semester_6" element={<ComingSoon />} />
        <Route path="/Semester_7" element={<ComingSoon />} />
        <Route path="/Semester_8" element={<ComingSoon />} />
        <Route path="/Chemistry" element={<Chemistry />} />
        {/* THIRD SEMESTER */}
        <Route
          path="/Fundamentals_of_Digital_Logic_and_Computer_Arch"
          element={<FDLCA />}
        />
        <Route path="/Data_Structures_&_Algorithms" element={<DSA />} />
        <Route path="/Linear_Algebra_and_Statistics" element={<M3 />} />
        <Route path="/Business_Communication" element={<BC />} />
        <Route path="/Cyber_Laws_&_Ethics" element={<CLE />} />
        {/* FOURTH SEMESTER */}
        <Route path="/Operating_Systems" element={<OperatingSystem />} />
        <Route path="/Object_Oriented_Programming" element={<OOPS />} />
        <Route
          path="/System_Programming_and_Device_Drivers"
          element={<SPDD />}
        />
        <Route path="/Formal_Languages_&_Automata_Th" element={<FLAT />} />
        <Route path="/Discrete_Maths_and_Graph_Theory" element={<DMGT />} />
        {/* FIFTH SEMESTER */}
        <Route path="/Computer_Graphics" element={<CG />} />
        <Route path="/Computer_Networks" element={<CN />} />
        <Route path="/Design_&_Analysis_of_Algorithms" element={<DAA />} />
        <Route path="/Database_Management_Systems" element={<DBMS />} />
        <Route path="/Design_Patterns" element={<DP />} />
        <Route path="/Mobile_Application_Programming" element={<MAP />} />
        {/* EIGHT SEMESTER */}
        <Route path="/Natural_Language_Processing" element={<NLP />} />
        <Route path="/Distributed_&_Parallel_Databases" element={<DPD />} />
        <Route path="/Distributed_System" element={<DS />} />
        <Route path="/Web_Intelligence_&_Big_Data" element={<WIBD />} />
        <Route path="/Information_Security" element={<IS />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
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
