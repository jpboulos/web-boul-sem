import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function CrAcc() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }

    }

    const handleSubmit = () => {
        const configuration = {
            method: "post",

            data: {
                firstName,
                lastName,
                email,
                password,
            },


        }
        axios(configuration)
        .then((result) => { console.log(result); })
        .catch((error) => { console.log(error); })
    }


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
                    <Form onSubmit={()=>handleSubmit() }>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            id="firstName"
                            type="text"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => handleInputChange(e) }

                            autoFocus />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            id="lastName"
                            type="text"
                            value={lastName }
                            placeholder="Doe"
                            onChange={(e) => handleInputChange(e)}

                            autoFocus />



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                id="email"
                                type="text"
                                value={email}
                                placeholder="name@example.com"
                                onChange={(e) => handleInputChange(e)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="you can't see me"

                            autoFocus />

                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="you can't see me"

                            autoFocus />

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-sec" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btn-sec" variant="primary" onClick={()=>handleSubmit() }>
                        Confirm 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CrAcc;