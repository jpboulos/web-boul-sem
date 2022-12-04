import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Days() {
    return (
        <Card style={{
            color: "black",
            textAlign: 'center'
        }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/druf88abz/image/upload/v1670163292/berdawni-early-evening-river-restaurant-zahle-l-7-5-2018-9-49-20-am-l_mdoyjd.jpg" />
            <Card.Body>
                <Card.Title>Machrou3 of the day</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>trip to Zahle</ListGroup.Item>
                <ListGroup.Item>recommended: Al Berdawni restaurant</ListGroup.Item>
                <ListGroup.Item>User rating: 4.3/5</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">suggest to your group</Card.Link>
                <Card.Link href="#">more info</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Days;