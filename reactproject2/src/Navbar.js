import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Log-modal';
import Search from './SearchBar.js';
import   './testpage.js'
function MyNavbar() {
    const [show, setShow] = useState(false);
    const showApp = () => setShow(true);
    return (
        <Navbar className="mynav" sticky="top">
            <Container>
                <Navbar.Brand href="#home" >Yalla</Navbar.Brand>



                <Nav className="me-auto" justify="true"  >
                    <Nav.Link href="#paid-sub"  >Gold</Nav.Link>
                    <Nav.Link  href="#safety-disc">Safety</Nav.Link>

                    <NavDropdown title="Support" id="basic-nav-dropdown">
                        <NavDropdown.Item href="testpage" >
                            Sponsors
                        </NavDropdown.Item>
                        
                        
                        <NavDropdown.Item href="#team">
                            Our Team
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#values">Our Values</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#Contactus">
                            Contact Us
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Search/>

                    
                </Nav>

            </Container>
            
            <Login />
        </Navbar>
        
        )

}
export default MyNavbar