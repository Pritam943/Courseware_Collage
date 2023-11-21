import React, { useState } from 'react';
export default function Homee(){
    const [courses, setCourses] = useState([
        { id: 1, name: 'Introduction to Computer Science', code: 'CS101' },
        { id: 2, name: 'Advanced Mathematics', code: 'MATH202' },
        // Add more sample courses as needed
      ]);
    
      const handleAddCourse = () => {
        // Placeholder for adding a new course
        const newCourse = {
          id: courses.length + 1,
          name: 'New Course',
          code: 'NEW101',
        };
        setCourses([...courses, newCourse]);
      };
    
      const handleEditCourse = (id) => {
        // Placeholder for editing a course
        const updatedCourses = courses.map((course) =>
          course.id === id ? { ...course, name: 'Updated Course' } : course
        );
        setCourses(updatedCourses);
      };
    return (
        <div className="pagee">
      <div className="courses-dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Courses Dashboard</h1>
      </header>

      <section className="courses-list">
        <h2>Course List</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              {course.name} - {course.code}
              <button onClick={() => handleEditCourse(course.id)}>Edit</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="add-course">
        <h2>Add New Course</h2>
        <button onClick={handleAddCourse}>Add Course</button>
      </section>
    </div>
        </div>
    )
}