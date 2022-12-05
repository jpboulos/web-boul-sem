import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Yalla Machrou3
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Yalla machrou3</Modal.Title>
                </Modal.Header>
                <Modal.Body>Enjoy your Yalla Machrou3 and remember to stay friendly and responsible. We're waiting for your review and don't forget to post your photos on your feed. Have a wonderful machrou3.</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        share
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Add to list
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;



