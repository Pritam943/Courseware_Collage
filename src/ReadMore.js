// ReadMore.js
import React from 'react';
import Course from './Course';
import courses from './courseData';
import { useParams } from 'react-router-dom';

function ReadMore() {
  const { courseCode } = useParams();

  return (
    <div>
      {courses.map((course, index) => {
        if (course.courseCode === courseCode) {
          return <Course key={index} course={course} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ReadMore;
