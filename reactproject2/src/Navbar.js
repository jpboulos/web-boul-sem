import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyNavbar() {
    return (
        <Navbar className="mynav" sticky="top">
            <Container>
                <Navbar.Brand href="#home" >Yalla</Navbar.Brand>



                <Nav className="me-auto" justify="true"  >
                    <Nav.Link href="#paid-sub" color="" >Gold</Nav.Link>
                    <Nav.Link  href="#safety-disc">Safety</Nav.Link>

                    <NavDropdown title="Support" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sponsors</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Our Team
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Our Values</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Contact Us
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Container>
        </Navbar>
        
        )

}
export default MyNavbar