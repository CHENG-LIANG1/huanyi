import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import "./nav.css"

function NavigationBar(){

  return(
  <div className="navi">
    <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Navbar.Brand className="logo" href="#home"> 
        Huanyi
      </Navbar.Brand>
      <Navbar.Toggle className="ham" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="links">
          <Nav.Link className="link" bg="dark" href="#features">首页</Nav.Link>
          <Nav.Link className="link" href="#pricing">简介</Nav.Link>
          <Nav.Link className="link" href="#pricing">简介</Nav.Link>
          <Nav.Link className="link" href="#pricing">简介</Nav.Link>
          <Nav.Link className="link" href="#pricing">简介</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
    
    </div>)
}

export default NavigationBar