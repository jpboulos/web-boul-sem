import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import Search from './SearchBar.js'


import Mobile from './Mobile';
import Days from './Days';
const Group = () => {
    return (
        <CardGroup>
            <Card border='danger' text='light'>
                <Days />
            </Card>
            <Card style={{} }>
                <Mobile />
                
            </Card>

        </CardGroup>
    )

}

export default Group;