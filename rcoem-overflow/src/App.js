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
import Chemistry from './Components/notes-pyqs/Sems/Semester 1/Chemistry';
import Protected from './Components/Homepage/Authentication/Protected';

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
        <Route path="/Chemistry" element={<Chemistry />} />
      </Routes>
    </div>
  )
}

export default App