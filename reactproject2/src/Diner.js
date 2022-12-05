import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';

function Diner() {
    return (
        <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670182810/restobar_sfh383.jpg" />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Dinner in beyrouth
                </Card.Title>
                <Card.Text>
                    <h5>recommended: Sud restobar Naccache</h5>
                    <h6>
                    </h6>
                    <h6>check their <a href="https://qrstuff.s3.eu-west-1.amazonaws.com/file/20221203/182934/828a05948552dd5e/SUD%20MENU.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIE5CBLNMAXNAMVJA%2F20221204%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20221204T194827Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=e564c9624f859ecb04505e08f7a8c963ddff344f6433e727a1536d6ef374cfef" target="_blank" rel="noopener noreferrer">
                        Menu
                    </a> and <a href="https://www.google.com/maps/dir//sud+restobar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x151f3e4058f2ab51:0xfbcfe6da0c548d13?sa=X&hl=en&ved=2ahUKEwiH2PSW3-D7AhWMz4UKHX1PCC0Q9Rd6BAhpEAU" target="_blank" rel="noopener noreferrer">
                            Location
                        </a>
                    </h6>
                    <h6> average budget: 15$ for 2 person  </h6>
                    <h6> user rating:4.2</h6>

                </Card.Text>
                <Popup />
            </Card.Body>
        </Card>
    );
}

export default Diner;
