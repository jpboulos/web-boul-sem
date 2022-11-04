import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CrAcc() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="create-btn"  onClick={handleShow}>
               Create Account
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="firstname"
                            placeholder="John"

                            autoFocus />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="lastname"
                            placeholder="Doe"

                            autoFocus />



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            placeholder="you can't see me"

                            autoFocus />

                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="confirm-password"
                            placeholder="you can't see me"

                            autoFocus />

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CrAcc;