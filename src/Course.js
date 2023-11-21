// Course.js
import React from 'react';
import './Course.css';

function Course({ course }) {
  return (
    <div className="course-container">
      <h1 className='heading'>{course.courseName}</h1>
      <h2>Guide</h2>
      <p className='teacher-page'>{course.teacherName}</p>
      <h2>Course Code</h2>
      <p>{course.courseCode}</p>
      <h2>Course Credit</h2>
      <p>Credit: {course.courseCredit}</p>
      <h2 className='heading-2'>Objective</h2>
      <p>Objective: {course.courseObjective}</p>
      <h2>Syllabus</h2>
      <ul>
        {course.courseSyllabus.map((module, i) => (
          <li key={i}>
            Module {module.module}: {module.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
