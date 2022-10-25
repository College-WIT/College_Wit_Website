import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Questions from './Pages/Questions/Question'
import Home from "./Pages/HomePage/Home";
import Contributor from './Pages/Top Contributors/contributors';
import Notes from './Pages/Notes-pyqs/Notes';
import Signin from './Components/Homepage/Authentication/Login'
import Signup from './Components/Homepage/Authentication/Login2'
import Answers from './Pages/Questions/Answers'
import Postque from './Pages/Questions/Postque'
import Unanswered from './Pages/Questions/Unanswered'
import Postans from './Pages/Questions/Postans'
import Trends from './Pages/Questions/Trends'
import Semester_1 from './Components/notes-pyqs/Sems/Semester 1/Semester-1';
import Semester_2 from './Components/notes-pyqs/Sems/Semester 2/Semester_2';
import Semester_3 from './Components/notes-pyqs/Sems/Semester 3/Semester_3';
import Semester_4 from './Components/notes-pyqs/Sems/Semester 4/Semester_4';
import Semester_5 from './Components/notes-pyqs/Sems/Semester 5/Semester_5';
import Semester_6 from './Components/notes-pyqs/Sems/Semester 6/Semester_6';
import Semester_7 from './Components/notes-pyqs/Sems/Semester 7/Semester_7';
import Semester_8 from './Components/notes-pyqs/Sems/Semester 8/Semester_8';
import Chemistry from './Components/notes-pyqs/Sems/Semester 1/Chemistry';
import Protected from './Components/Homepage/Authentication/Protected';
import Profile from './Pages/Profile/Profile';


const App = () => {

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
        <Route path="/answers/:que" element={<Protected Component={Answers} />} />
        <Route path="/Post-a-question" element={<Postque />} />
        <Route path="/Answered" element={<Questions />} />
        <Route path="/Unanswered" element={<Unanswered />} />
        <Route path="/Trending" element={<Trends />} />
        <Route path="/Post-an-answer/:que" element={<Protected Component={Postans} />} />
        <Route path="/Semester_1" element={<Semester_1 />} />
        <Route path="/Semester_2" element={<Semester_2 />} />
        <Route path="/Semester_3" element={<Semester_3 />} />
        <Route path="/Semester_4" element={<Semester_4 />} />
        <Route path="/Semester_5" element={<Semester_5 />} />
        <Route path="/Semester_6" element={<Semester_6 />} />
        <Route path="/Semester_7" element={<Semester_7 />} />
        <Route path="/Semester_8" element={<Semester_8 />} />
        <Route path="/Chemistry" element={<Chemistry />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App