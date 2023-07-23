import React from "react";
import "./style.css";
import {AiOutlineSearch} from 'react-icons/ai'
export default function Header() {
  return (
    <div>
      <header className="header-main">
        <div className="head-left">
          <h1>EDYODA</h1>
          <select id="course">
            <option value="volvo">Course</option>
            <option value="saab">option 1</option>
            <option value="opel">option 2</option>
          </select>
          <select id="program">
            <option value="volvo">Program</option>
            <option value="saab">option 1</option>
            <option value="opel">option 2</option>
          </select>
        </div>
        <div className="head-right">
            <button className="search"><AiOutlineSearch/></button>
            <button className="login">Log in</button>
            <button className="signup">Sign Up</button>
            
        </div>
      </header>
    </div>
  );
}
