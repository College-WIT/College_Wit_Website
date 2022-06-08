import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from "react-router";
import Questions from './Components/Questions/Question'
import Home from './Components/Homepage/Home'
import Contributor  from './Components/Top Contribution/contributor';
import Notes from './Components/notes-pyqs/notes';
const App = () => {
  return (
    <div>

      <Routes>
         <Route path="/" element={<Home/>} /> 
         <Route path="Home" element={<Home/>} />
         <Route path="Questions" element={<Questions/>}/>
         <Route path="Top%20Contributors" element={<Contributor/>}/>
         <Route path="Notes-PYQs" element={<Notes/>}/>
      </Routes>
    </div>
  )
}

export default App