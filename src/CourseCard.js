// CourseCard.js
import React from 'react';
import './CourseCard.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ courseName, teacherName, courseCode }) => {
  const navigate = useNavigate();
  const cardClicked = () => {
    navigate(`/readmore/${courseCode}`);
  }
  return (
    <div className="course-card" onClick={cardClicked}>
      <h1>{courseName}</h1>
      <p>By : {teacherName}</p>
      <p>Subject Code: <b>{courseCode}</b> </p>
    </div>
  );
};

export default CourseCard;
