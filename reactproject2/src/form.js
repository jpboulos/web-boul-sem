import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Search from './SearchBar';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Cinema from './Cinema.js';
import Home from "./Home.js";
import Party from "./Party";
import Camp from "./Camp";

function MyForm() {

    const [showCinema, setShowCinema] = useState(false);
    const handleCloseCinema = () => setShowCinema(false);
    const handleShowCinema = () => setShowCinema(true);


    const [showCamp, setShowCamp] = useState(false);
    const handleCloseCamp = () => setShowCamp(false);
    const handleShowCamp = () => setShowCamp(true);

    const [showHome, setShowHome] = useState(false);
    const handleCloseHome= () => setShowHome(false);
    const handleShowHome = () => setShowHome(true);

    const [showParty, setShowParty] = useState(false);
    const handleCloseParty = () => setShowParty(false);
    const handleShowParty = () => setShowParty(true);

    const [budget, setBudget] = useState(null);
    const [fullday, setFullday] = useState(null);
    const [party, setParty] = useState(null);

   
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "budget") {
            setBudget(value);
        }
        



       
        
        

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (budget < 7) { handleShowHome() }
        if (budget == 7) { handleShowCinema() }
        if (budget > 7) {handleShowCamp() }
        
       
       
       
    }
    return (
        <Form className="form-af" onSubmit={() => handleSubmit()} style={{ backgroundImage:"url(https://res.cloudinary.com/druf88abz/image/upload/v1670254845/rm283-nunny-030_1_dapjxf.jpg)"} } >
            <Form.Label style={{ fontWeight:"bold" }} >Yalla, Chou el Machrou3?</Form.Label>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Budget</Form.Label>
                    <Form.Control placeholder="$$$" id="budget" value={budget} onChange={(e) => handleInputChange(e)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Time</Form.Label>
                    <Form.Select id="party" value={party} onChange={(e) => handleInputChange(e)} defaultValue="Choose...">
                        <option>Morning</option>
                        <option>Noon</option>
                        <option>AfterNoon</option>
                        <option value={party }>Night</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Time To Spare</Form.Label>
                    <Form.Select id="fullday"  onChange={ (e)=>handleInputChange(e)} defaultValue="Choose...">
                        <option>3h</option>
                        <option>Half-day</option>
                        <option value={fullday }>Full-day</option>

                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Your Location</Form.Label>
                    <Search />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>People</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Group</option>
                        <option>Alone</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>How Was Your Day</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Chill</option>
                        <option>Busy</option>

                    </Form.Select>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"  label="Transport" />

                
                </Form.Group>
                <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Pet?" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="READY?" />
                </Form.Group>
            </Row>
            

            <Button variant="danger" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            <Modal show={showCinema} onHide={handleCloseCinema}>
                <Modal.Header closeButton></Modal.Header>
                <Cinema />
            </Modal>
            <Modal show={showHome} onHide={handleCloseHome}>
                <Modal.Header closeButton></Modal.Header>
                <Home />
            </Modal>
            <Modal show={showParty} onHide={handleCloseParty}>
                <Modal.Header closeButton></Modal.Header>
                <Party />
            </Modal>
            <Modal show={showCamp} onHide={handleCloseCamp}>
                <Modal.Header closeButton></Modal.Header>
                <Camp/>
            </Modal>
            
        </Form>
             
    );
}

export default MyForm;