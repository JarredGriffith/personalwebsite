import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar'
import "./styles/MainNav.css"


function NavBar() {
    return (
        <Navbar className="nav">
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <div className="NavBarText hide_for_mobile">
        <Nav className="ml-auto" >
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav> 
        </div>
        <div className="Hambuger hide_for_desktop">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Navbar>
    ); 
}

export default NavBar; 