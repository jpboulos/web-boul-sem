import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function AuthCard() {
    return (

        <>
            <Card>
                <Card.Img  variant="top" src="https://res.cloudinary.com/dsc2dexdm/image/upload/v1666962913/FamilyCamping-2021-GettyImages-948512452-2_qz965s.jpg" />
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