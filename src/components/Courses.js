import React from 'react'
import CourseData from './CourseData'
import CourseForm from './CourseForm'
import { useState } from 'react';
export default function Courses() {

  const shouldShowComponent = false;
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // You can perform additional logic, such as sending the file to a server, here.
    } else {
      console.log("No file selected");
    }
  };
  const handleButtonClick = () => {
    if(isFormVisible){
        setFormVisible(false);
    }else{
        setFormVisible(true);
    }
    
  };
  // let isFormVisible=false;
  // const shouldShowComponent = true;
  return (
    <div className='pagee'>
       <div className="buttons">   <button className="btnn" onClick={handleButtonClick}>Add Course</button>
            <p>  Or</p>
            <input type="file" onChange={handleFileChange} /></div>
     {/* <ContactForm showComponent={shouldShowComponent} /> */}
     <CourseForm showComponent={isFormVisible} />
     
    
   


    </div>
  )
}

