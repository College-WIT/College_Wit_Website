import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Questions from './Components/Questions/Question'
import Home from './Components/Homepage/Home'
import Contributor from './Components/Top Contribution/contributors';
import Notes from './Components/notes-pyqs/notes';
import Signin from './Components/Homepage/Authentication/Login'
import Signup from './Components/Homepage/Authentication/Login2'
import Answers from './Components/Questions/answers/Answers'
import Postque from './Components/Questions/postque/postque'
import Answered from './Components/Questions/Answered/answer'
import Unanswered from './Components/Questions/Unanswered/unanswered'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Questions" element={<Questions />} />
        <Route path="Top%20Contributors" element={<Contributor />} />
        <Route path="Notes-PYQs" element={<Notes />} />
        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/answers/:que" element={<Answers />} />
        <Route path="/Post-a-question" element={<Postque />} />
        <Route path="/Answered" element={<Answered/>} />
        <Route path="/Unanswered" element={<Unanswered/>} />

      </Routes>
    </div>
  )
}

export default App