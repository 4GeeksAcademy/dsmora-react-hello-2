import React from "react";
import { NavBar } from "./navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import airForce from "../../img/air-force.png"
import { Card } from './card';

const products = [
	{
		title: "Zapatillas",
		description: "Zapatillas adidas",
		image: rigoImage,
		stock: 0
	},
	{
		title: "Camiseta",
		description: "Camiseta adidas",
		image: airForce,
		stock: 2
	},
	{
		title: "Zapatillas",
		description: "Zapatillas Nike",
		image: rigoImage,
		stock: 2
	},
	{
		title: "Zapatillas",
		description: "Zapatillas Lacoste",
		image: airForce,
		stock: 0
	}
];

//create your first component
const Home = () => {

	const productsWithStock = products.filter(item => item.stock > 0);
	// operador ternario



	return (
		<>
			<NavBar />
			<div className="container-fluid d-flex p-4">
				{
					productsWithStock.map((item, index) => (
						<Card key={`${item.name}-${index}`} title={item.title} description={item.description} image={item.image} stock={item.stock} />
					))
				}
			</div>
		</>
	);
};

export default Home;
