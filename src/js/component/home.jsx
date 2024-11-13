import React, { useState } from "react";
//create your first component
const Home = () => {

	const [counter, setCounter] = useState(0);
	return (
		<div className="container-fluid p-4 text-center">
			<h1>
				Home, contador igual a: {counter}
			</h1>
			<button onClick={() => setCounter(counter + 1)}>
				Increment
			</button>
		</div>
	);
};

export default Home;
