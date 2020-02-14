import * as React from 'react';
import { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { HistoryContext } from '../context/historyContext';

interface Iprops{}

const TestDisplay: React.FC<Iprops> = () => {
    const { history } = useContext(HistoryContext);
    console.log('history from testdisplay component', history);

    const srcImg = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsr2CnfzB8gKPvCCLwe3AQTTleO4k2QRq4T7L35lWF7djy8RFy",
    'https://graniteworx.com/wp-content/uploads/2015/01/Absolute-Black-INDIA1-400x400.jpg',
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXukY3/VYS2AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4QPHeQXFYFZG7vzBj7jtyvXkK9g2GCWxvRCvtrPCraKTv6iKs"];
                    
    const carousel = [];
    for(let i = 0; i < history.length; i++) {
    carousel.push(
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={srcImg[i % 4]}
                alt="First slide"
                />
            <Carousel.Caption>
                <p>image A: {`${history[i].imageA}`}</p>
                <p>weight A: {`${history[i].weightA}`}</p>
                <p>image B: {`${history[i].imageB}`}</p>
                <p>address B: {`${history[i].addressB}`}</p>
                <p>version B: {`${history[i].versionB}`}</p>
                
            </Carousel.Caption>
        </Carousel.Item>);
    }
    return(
        <Carousel>
            {carousel}
        </Carousel>
    )
}

export default TestDisplay;