import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Skill from "./components/pages/Skill";
import Core from "./components/pages/Core";
import Teacher from "./components/pages/Teacher";
import Sidebar from "./components/Sidebar";
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import Profile from "./components/Profile";
import Domain from "./components/pages/Domain";
import Other from "./components/pages/Other";
import Programm from "./components/pages/Programm";
import Homee from "./components/Homee";
import UserProvider from "./context/UserProvider";
import { PrivateRoute } from "./components/pages/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/core" element={<Core />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
          {/* <Route path="" element={<Sidebar/>}/> */}
          <Route path="" element={<Homee />} />
            <Route path="manageCourses" element={<Courses />} />
            <Route path="manageTeachers" element={<Teachers />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          
          <Route path="/other" element={<Other />} />
          <Route path="/programm" element={<Programm />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
