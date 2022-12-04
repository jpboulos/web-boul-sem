import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CheckExample from './Check';

function Quiz2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="create-btn" onClick={handleShow} >
                Confrim
            </Button>

            < Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Answer the following questions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Label>Would you prefer to go partying(1) or go camping(2) with your friends</Form.Label>

                        <CheckExample />
                        <Form.Label>Would you prefer to go have a drink in a bar(1) or have a dinner in a restaurant(2)</Form.Label>
                        <CheckExample />



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Would you prefer to play cards(1) with your friends or go watch a movie in the cinema(2)</Form.Label>
                            <CheckExample />
                        </Form.Group>
                        <Form.Label>On a sunny day, would you prefer to go enjoy your day at the beach(1) or the mountains (2)</Form.Label>
                        <CheckExample />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-sec" variant="secondary" >
                        Close
                    </Button>
                    <Button className="btn-sec" variant="primary" >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Quiz2;