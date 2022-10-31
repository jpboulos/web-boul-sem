import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function AuthCard() {
    return (

        <>
            <Card>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/3214373.jpg" />
                <Card.Body>
                    <Card.Text>
                        <row>
                            <Button className="btn-auth" variant='primary'>Create Account</Button>
                            <Button className="btn-auth"variant='primary'>Login</Button>
                        </row>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}
export default AuthCard