import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'


interface Iprops{

}

export default class TestDisplay extends React.Component<Iprops, any>{
    public render(): JSX.Element{
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='https://graniteworx.com/wp-content/uploads/2015/01/Absolute-Black-INDIA1-400x400.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Test: Alpha</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4QPHeQXFYFZG7vzBj7jtyvXkK9g2GCWxvRCvtrPCraKTv6iKs"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Test: Beta</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXukY3/VYS2AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Test: Omega</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsr2CnfzB8gKPvCCLwe3AQTTleO4k2QRq4T7L35lWF7djy8RFy"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Test: Gamma</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

