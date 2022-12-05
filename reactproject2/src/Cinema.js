
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';

function Cinema() {
    return (
        <Card style={{  }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670196806/cinema_bvnmn0.jpg" />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Go to the cinema
                </Card.Title>
                <Card.Text>
                    <h5>Recommended: Grand Cinemas ABC</h5>
                    <h6>movie: <a href="https://lb.grandcinemasme.com/en/" target="_blank" rel="noopener noreferrer">
                        now showing
                    </a>
                    </h6 ><h6>average budget: 10$ for 2 person</h6>
                    <h6>
                    </h6>
                    <h6> user rating: 4.1</h6>


                </Card.Text>
                <Popup />
            </Card.Body>
        </Card>
    );
}

export default Cinema;
