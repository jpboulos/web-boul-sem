import { Form , Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyForm() {
    return (
        <div>
            <Col md>
                <Form>
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type='email' placeholder='email@gmail.com'></Form.Control>
                    <Form.Control type='password' placeholder="Password"></Form.Control>
                </Form>
            </Col>
        </div>
        )
}
export default MyForm