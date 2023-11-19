

import React from 'react'
import '../style/Teacher.css'
 import Teachercard from '../layout/Teachercard'
export default function Teacher() {
  return (
    <div>
       <div className="Header">
        <div className="Heading">
         <body> <div className="rectangle-heading"><header> <h1>Teachers</h1> </header> </div></body>
            
           
        </div>
        

       </div>
        <div className="Home">
           <div className="home"><body>
            <a href="##">Home &gt; Teacher</a>  
            </body></div> 
    
        </div>
        <div className="cards">
  <Teachercard name="Teacher 1" jobTitle="Mathematics" />
  <Teachercard name="Teacher 2" jobTitle="Science" />
  <Teachercard name="Teacher 3" jobTitle="English" />
  <Teachercard name="Teacher 4" jobTitle="History" />
</div>
        
    </div>
  )
}
