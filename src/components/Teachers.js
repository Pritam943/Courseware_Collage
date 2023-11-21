import React from "react"
import Form from './Form'
import { useState } from 'react';
export default function Teachers(){

  const shouldShowComponent = true;
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
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // You can perform additional logic, such as sending the file to a server, here.
    } else {
      console.log("No file selected");
    }
    
  };



    return (
        <div className="pagee">
            {/* Teachers */}
            <div className="buttons">   <button className="btnn" onClick={handleButtonClick}>Add Teacher</button>
            <p>  Or</p>
            <input type="file" onChange={handleFileChange} />
            </div>
         
     {/* <ContactForm showComponent={shouldShowComponent} /> */}
     <Form showComponent={isFormVisible} />
        </div>
    )
}