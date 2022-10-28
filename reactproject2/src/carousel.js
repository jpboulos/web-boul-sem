import Carousel from 'react-bootstrap/Carousel';


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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsc2dexdm/image/upload/v1666962828/laguna-beach-nightlife-1_694f32bf0e9ef81016789076834d1a45_jrrlya.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dsc2dexdm/image/upload/v1666962755/Beach-fire_wsimdz.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;