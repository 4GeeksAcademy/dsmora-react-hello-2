import React, { useState } from "react";
import { Card } from './card';
//create your first component
const Home = () => {

	const [counter, setCounter] = useState(0);
	console.log(counter, 'counter');
	console.log(setCounter, 'setCounter');

	return (
		<div className="container-fluid p-4 text-center">
			<h1>
				Home, contador igual a: {counter}
			</h1>
			<button onClick={() => setCounter(counter + 1)}>
				Increment
			</button>
			<div>
				<Card />
			</div>
		</div>
	);
};

export default Home;
