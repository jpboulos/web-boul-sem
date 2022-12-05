import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup'
function Camp() {
    return (
        <Card style={{  }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670007624/istockphoto-1002768546-612x612_go1qnv.jpg" />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Go camping with your friends
                </Card.Title>
                <Card.Text>
                    <h5>recommended: Falougha lakes</h5>
                    <h6>campsite's <a href="https://www.google.com/maps/dir//falougha+lakes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x151f31ee04bd431b:0xc7d643319d22a6d?sa=X&ved=2ahUKEwja7ruw_uD7AhULz4UKHf77CyEQ9Rd6BAhLEAM" target="_blank" rel="noopener noreferrer">
                        location
                    </a>
                    </h6 ><h6>*equipments needed: tent ,sleeping bag and snacks</h6>
                    <h6>
                    </h6>
                    <h6> *keep the campsite clean and watch out for fire</h6>
                    <h6> *</h6>

                </Card.Text>
                <Popup/>
            </Card.Body>
        </Card>
    );
}

export default Camp;