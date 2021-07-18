import React from 'react'; 
import Nav from 'react-bootstrap/esm/Nav';

const Menu = ()=> {
    return (
        <div>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Projects">Projects</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        </div>
    )
}

export default Menu; 
