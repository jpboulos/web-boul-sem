import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Quiz2 from './Quiz.js';
import CheckExample from './Check';
import axios from "axios";

function CrAcc() {
    const [show, setShow] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const handleShowQuiz = () => setShowQuiz(true);
    const handleCloseQuiz = () => setShowQuiz(false);
    

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
            url: "http://localhost:3000/./register",
            data: {
                firstName,
                lastName,
                email,
                password,
            },


        }
        axios(configuration)
        .then((result) => { console.log(result); alert("Account Created") })
        .catch((error) => { console.log(error);alert("Error, Try Again") })
        handleClose()
        handleShowQuiz()
    }


    return (
        <>
            <Button className="create-btn" variant="danger" onClick={handleShow}>
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

                        

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-sec" variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btn-sec" variant="danger" onClick={()=>handleSubmit() }>
                        Next
                    </Button>
                    
                </Modal.Footer>
            </Modal>

            < Modal show={showQuiz} onHide={handleCloseQuiz}>
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
                    <Button className="btn-sec" variant="danger" onClick={handleCloseQuiz } >
                        Close
                    </Button>
                    <Button className="btn-sec" variant="danger" onClick={handleCloseQuiz } >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default CrAcc;