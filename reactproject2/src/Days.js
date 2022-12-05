import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Days() {
    return (
        <Card style={{color:'black' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670163292/berdawni-early-evening-river-restaurant-zahle-l-7-5-2018-9-49-20-am-l_mdoyjd.jpg" />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Machrou3 of the day: a trip to Zahle
                </Card.Title>
                <Card.Text>
                    <h5>Recommended: Al Bardawni Restaurants</h5>

                    <h6>
                        User rating: 4.3/5
                    </h6>
                    <h6>*Don't forget to stop by at chateau ksara for a tutored wine tasting</h6>

                </Card.Text>
                <Button variant="danger">Suggest to your group</Button>
            </Card.Body>
        </Card>
    );
}

export default Days;