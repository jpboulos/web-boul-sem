import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';

function Home() {
    return (
        <Card style={{ }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670200884/friends_fbmdov.webp" />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Home gathering
                </Card.Title>
                <Card.Text>
                    <h5>Enjoy a night-in with your friends</h5>
                    <h6></h6 ><h6>average budget: no cost needed</h6>
                    <h6>
                    </h6>
                    <h6> user rating: 4.2</h6>
                    <h6>*plan your evening with several entertainments: movie marathon, playing cards, cheese and wine, karaoke...</h6>

                </Card.Text>
                <Popup />
            </Card.Body>
        </Card>
    );
}

export default Home;