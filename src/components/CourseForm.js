// ContactForm.js

import React, { useState } from 'react';

const CourseForm = ({ showComponent }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission, e.g., send data to a server
    console.log('Form submitted:', formData);
  };
  if (showComponent) {
    return (
        <form className='formm'onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Description:
            <textarea
              name="text"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <button type="submit">Submit</button>
        </form>
      );
  } else {
    return <div></div>;
  }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       <br />

//       <label>
//         Code:
//         <input
//           type="text"
//           name="code"
//           value={formData.code}
//           onChange={handleChange}
//         />
//       </label>
//       <br />

//       <label>
//         description:
//         <textarea
//           name="text"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
};

export default CourseForm;
