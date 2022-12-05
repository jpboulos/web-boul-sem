import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';

function Party() {
    return (
        <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670193017/ahm_nixxwg.jpg" />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Go party
                </Card.Title>
                <Card.Text>
                    <h5>recommended: Lebanon's best AHM beirut</h5>
                    <h6><a href="https://www.google.com/maps/dir//sud+restobar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x151f3e4058f2ab51:0xfbcfe6da0c548d13?sa=X&hl=en&ved=2ahUKEwiH2PSW3-D7AhWMz4UKHX1PCC0Q9Rd6BAhpEAU" target="_blank" rel="noopener noreferrer">
                        where's the party
                    </a>
                    </h6 ><h6>average budget: 20$ for 1 person</h6>
                    <h6>
                    </h6>
                    <h6> user rating: 4.4</h6>
                    <h6> *drink responsibly, don't text and drive</h6>

                </Card.Text>
                <Popup />
            </Card.Body>
        </Card>
    );
}

export default Party;