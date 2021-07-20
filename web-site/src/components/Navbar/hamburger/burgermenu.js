import React from 'react'; 
import Nav from 'react-bootstrap/esm/Nav';
import { bubble as Burger } from "react-burger-menu";
import './styles.css'

const Menu = (props)=> {
    return (
        <Burger {...props}>
        <div>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Projects">Projects</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        </div>
        </Burger>
    )
}

export default Menu; 
