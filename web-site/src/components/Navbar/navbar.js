import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar'


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </Navbar>
    ); 
}

export default NavBar; 