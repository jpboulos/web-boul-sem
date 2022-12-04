import Carousel from 'react-bootstrap/Carousel';
import Login from './Log-modal';
import CrAcc from "./CrAcc";


function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsc2dexdm/image/upload/v1666962913/FamilyCamping-2021-GettyImages-948512452-2_qz965s.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <CrAcc/>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsc2dexdm/image/upload/v1666962828/laguna-beach-nightlife-1_694f32bf0e9ef81016789076834d1a45_jrrlya.jpg"
                    alt="Second slide"
                    fluid

                />

                <Carousel.Caption>
                    <CrAcc/>
                    
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsc2dexdm/image/upload/v1666962755/Beach-fire_wsimdz.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <CrAcc/>
                    
                </Carousel.Caption>
                
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;