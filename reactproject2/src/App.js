
import './App.css';

import { Button, Form, Navbar, Container, Col, Nav, NavDropdown, Card } from 'react-bootstrap'; 
import Footer from './footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
    return (
        <div  style={{
            backgroundImage: 'url("http://giesla.com/wp-content/uploads/2011/02/nightmpls.jpg")',
            
            
        }}>
            <h1>
            
            <Container fluid>
               
                
                
                <Navbar  bg="cover" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" color='#ff34'>Yalla</Navbar.Brand>
                        
                        
                        
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                                
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

                <Container>
                    <Col md>
                    <Form>
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type='email' placeholder='email@gmail.com'></Form.Control>
                        <Form.Control type='password' placeholder="Password"></Form.Control>
                    </Form>
                    </Col>
                </Container>
               
                </Container>
            </h1>

            <body>
                <Footer/>
            </body>
            
        </div>
        
        
        
        
        
       
        
        )
}



export default App;
