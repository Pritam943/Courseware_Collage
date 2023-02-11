import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BiLogInCircle } from "@react-icons/all-files/bi/BiLogInCircle";
import { AiOutlineBars} from "@react-icons/all-files/ai/AiOutlineBars";

const Navbar = () => {
  return (
    <nav>
    <div class="menu-icon">
       <span class="fas fa-bars"><AiOutlineBars/></span>
    </div>
    <div class="logo">
    <Link to="/login"> <BiLogInCircle/></Link>
    </div>
    <div class="nav-items">
       <li><Link to="/">Home</Link></li>
       <li><a href="/about">About</a></li>
    </div>
    <div class="search-icon">
       <span><BsSearch/></span>
      
    </div>
    <div class="cancel-icon">
       <span class="fas fa-times"></span>
    </div>
    <form action="#">
       <input type="search" class="search-data" placeholder="Search" required/>
       <button type="submit"><BsSearch/></button>
    </form>
 </nav>
  );
};

export default Navbar;
