// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CourseList from './CourseList';
import ReadMore from './ReadMore';
import Demo1 from './Demo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Demo1 />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/readmore/:courseCode" element={<ReadMore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;