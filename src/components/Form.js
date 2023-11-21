// ContactForm.js

import React, { useState } from 'react';

const Form = ({ showComponent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
        <form className='formm' onSubmit={handleSubmit}>
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
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
    
          <label>
            Description:
            <textarea
              name="message"
              value={formData.message}
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
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <br />

//       <label>
//         Message:
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   );
};

export default Form;
