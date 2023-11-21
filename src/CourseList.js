// CourseList.js
import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';
import courses from './courseData';

const CourseList = () => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
        />
      ))}
    </div>
  );
};

export default CourseList;
