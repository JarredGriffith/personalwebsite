import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar'
import "./NavBar.css"


function NavBar() {
    return (
        <Navbar >
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <div className="NavBarText">
        <Nav className="ml-auto" >
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav> 
        </div>
      </Navbar>
    ); 
}

export default NavBar; 