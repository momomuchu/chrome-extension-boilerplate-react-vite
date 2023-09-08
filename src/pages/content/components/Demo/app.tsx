import React from "react";
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import StartProject from "./pages/StartProject/StartProject";
import Course from "./pages/Course/Course";
import Start from "./pages/Start/Start";


const App = () => (
  <Router >
    <Routes >
      <Route path="*" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/startcourse" element={<Start />} />
    </Routes>
  </Router>
);

export default App;
