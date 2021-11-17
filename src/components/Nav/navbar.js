import React, {useState} from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./nav.css"

function NavigationBar(){

  return(
  <div className="navi" >

    <Navbar collapseOnSelect expand="lg"  variant="dark" >
      <Navbar.Brand className="logo" href="#home"> 
        Huanyi
      </Navbar.Brand>
      <Navbar.Toggle className="ham" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="links">
          <NavLink className="link"  to="/"  >首页</NavLink>
          <NavLink className="link"  to="/timeline">时间线</NavLink>
          <NavLink className="link"  to="/d">other</NavLink>
        </div>

      </Navbar.Collapse>
    </Navbar>
    
    </div>)
}

export default NavigationBar