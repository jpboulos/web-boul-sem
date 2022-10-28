import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyNavbar() {
    return (
        <Navbar className="mynav" sticky="top">
            <Container>
                <Navbar.Brand href="#home" >Yalla</Navbar.Brand>



                <Nav className="me-auto" justify="true"  >
                    <Nav.Link href="#home" color="" >Home</Nav.Link>
                    <Nav.Link  href="#link">Link</Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Container>
        </Navbar>
        
        )

}
export default MyNavbar