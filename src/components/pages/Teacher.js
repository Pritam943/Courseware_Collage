

import React from 'react'
import '../style/Teacher.css'
 import Teachercard from '../layout/Teachercard'
 import logot from '../images/logot.png'
export default function Teacher() {
  return (
    <div>
       <div className="Headert">
        <div className="Headingt">
         <body> <div className="rectangle-heading"><div><img className="logot_imgt" src={logot} alt={logot} /> </div><header> <h1>Teachers</h1> </header> </div></body>
            
           
        </div>
        

       </div>
        <div className="Homet">
           <div className="homet"><body>
            <a href="##" id='tanchor'>Home &gt; Teacher</a>  
            </body></div> 
    
        </div>
        <div className="cardst">
  <Teachercard name="A Avinash" jobTitle="A.Avinash working as Assistant
   Professor, Dept of CSE, Centurion University of Technology and Management, 
   Andhra Pradesh . Interested to work on Machine learning,Natural 
   Language Processing,Problem Solving Methodologies , and ChatBot.  " />
  <Teachercard name="AASIF MAJEED LONE" jobTitle="I am an Assistant Professor of Radiology
   with a Master's Degree in Medical Imaging Technology ,Working as A.P in CUTM-AP  from last six months ,
    i have completed my masters in Radio imaging technology 
  from SGT University Gurugram Haryana Delhi NCR in 2022 ." />
  <Teachercard name="Abinash Rath" jobTitle="I have received my B. Tech in Electrical Engineering 
  from Government College of Engineering Keonjhar, India and M. Tech in Power Electronics Control and
   Drives from VSSUT, Burla, India.
  include power electronic converters, shunt […]" />
  <Teachercard name="Ajitav Acharya" jobTitle="Ajitav Acharya is
   working as a faculty at at at Centurion University of Technology and Management, Bhubaneswar.
     He is currently pursuing his Ph.D. at Utkal University. He has completed his MBA  from Siksha ‘O’ 
  Anusandhan University, MCom and Bcom […]" />
  <Teachercard name="Amit Sharma" jobTitle="I am an Assistant Professor working in Department of
   Radiology, CUTM-AP, Vizianagaram from December 2022 to till date. I have done M.sc in 
   Radiology and Imaging Technology from SGT University ,Delhi in 2022 .

" />
  <Teachercard name="Anita Patra" jobTitle="  Professor in Management and an enthusiast learner with teaching
   and research experience of 20 years. Research interests and publications in the area of Rural entrepreneurship, Banking, Women entrepreneurship. 
   Have been a part of many training and research projects.   " />
  <Teachercard name="Aryalopa Malla" jobTitle="M.Tech Computer Science and Engineering <Expertise: 
  Data Science and Machine Learning>" />
  <Teachercard name="Asha Rani Dalai" jobTitle="Miss Asha Rani Dalai has received her M.Sc
   (Computer Science ) Presently she
    is working as an Assistant Professor ,Department of Information and Technology ,School of
     Applied Science Centurion University of Technology and Management
   Bolangir campus ,Odisha,India.  " />
  <Teachercard name="Aswini Kumar" jobTitle="M.Aswini kumar working as Assistant Professor, Dept of CSE, Centurion University of Technology 
  and Management, Andhra Pradesh. Interested to work on Machine learning, Natural Language Processing. Programming Skill: 
" />
  <Teachercard name="BHAGYESWARI BEHERA" jobTitle="Have specialization in Biochemistry and Molecular biology. Qualified GATE and NET. 
  Research interest in Biochemistry, Microbiology and taxonomy. Teaching expertise in subject Cell biology, molecular biology, Biochemistry, Genetics, 
  Plant physiology and metabolism." />
  <Teachercard name="Biswaranjan Mishra
" jobTitle="Quantum mechanics,wave optics,classcal mechanics, Nuclear physics" />
  <Teachercard name="Chandrasekhar Sahu" jobTitle="Assistant professor, Department of Biochemistry and Plant Physiology, MS Swaminathan School
   of Agriculture, Centurion University of Technology and Management, Paralakhemundi Campus, Odisha, India" />
</div>
        
    </div>
  )
}
