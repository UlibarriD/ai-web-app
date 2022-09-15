import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Result from './Result'

function Carrousel() {
return (
	<div>
	<Carousel>
		<Carousel.Item interval={5000}>
		<Result/>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<Result/>
		</Carousel.Item>
        <Carousel.Item interval={5000}>
		<Result/>
		</Carousel.Item>
	</Carousel>
	</div>
);
}

export default Carrousel;