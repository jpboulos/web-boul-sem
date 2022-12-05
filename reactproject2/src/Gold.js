
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Gold() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="" style={{color:'aliceblue'}} onClick={handleShow}>
                GOLD
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Yalla Gold</Modal.Title>
                </Modal.Header>
                <Modal.Body>Upgrade to Yalla Gold to benefit from several discounts for only 1.99 $.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        upgrade
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Gold;