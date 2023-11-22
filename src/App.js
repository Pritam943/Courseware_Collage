import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Domain from "./components/pages/Domain";
import Skill from "./components/pages/Skill";
import Core from "./components/pages/Core";
import Teacher from "./components/pages/Teacher";
import Other from "./components/pages/Other";
import Programm from "./components/pages/Programm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/core" element={<Core />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/other" element={<Other />} />
        <Route path="/programm" element={<Programm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
