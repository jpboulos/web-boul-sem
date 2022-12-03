import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
       
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
            url: "http://localhost:3000/./login",
            data: {
                email,
                password,
            },


        }
        axios(configuration)
            .then((result) => { console.log(result); setLogin(true); })
            .catch((error) => { console.log(error); error = new Error(); })
        handleClose()
    }

    return (
        <>
            <Button className='log-btn' variant="cover" c onClick={handleShow} >
                Log-in
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={() => handleSubmit()}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                name='email'
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => handleInputChange(e)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlLogPass"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                id="password"
                                type="password"
                                name="password"
                                placeholder="no see me"
                                value={password}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Form.Group>
                        {login ? (
                            <p className="text-success">You Are Logged in Successfully</p>
                        ) : (
                            <p className="text-danger">You Are Not Logged in</p>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-sec" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btn-sec" variant="secondary" onClick={handleSubmit }>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login