import React from 'react'
import { SidebarData  } from './SidebarData'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import Acnt from '@mui/icons-material/AccountCircle';
import ManageT from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import dp from '../dp3.png'
import { Link } from 'react-router-dom';

export default function Sidebar(){

return(

<div className='sidebar'>
    
     {/* {window.location.pathname='/Home'}  */}
     <div className='profileBar'>
      <img className='dp' src={dp}/>
      <p className='profilePara' style={{fontSize:'22px',marginLeft:'18px'}}>Admin</p>
     </div>
         <ul className='sidebarList'>
           {SidebarData.map((obj)=>{
            return <li className='row'
            id={window.location.pathname==obj.link ? "active":""}
             onClick={()=>{
                window.location.pathname=obj.link
            }}>  <div id='icon'>{obj.icon}</div> 
            <div id='title'>{obj.title}</div>
             </li>
           })

           }

           
         </ul>
    </div>


)


}