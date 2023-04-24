//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlay } from "@fortawesome/free-solid-svg-icons";
//import { BsMusicNoteBeamed } from "react-icons/bs";

import { HiMusicNote } from "react-icons/hi";
//import { FaBars, FaTimes } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";


const Header = () => {
 
return (
    <Navbar bg="black" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'white'}}>

                < HiMusicNote /> Album Score
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/album list" style={{"color":'white'}}>Album List</NavLink>      
                </Nav>
                <Button variant="outline-info"  className="me-2">
                <NavLink to="/recommendations" style={{ textDecoration: 'none', color: 'white' }}>Recommendations</NavLink>
            </Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header


