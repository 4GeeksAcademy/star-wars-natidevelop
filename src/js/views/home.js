import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import People from "./people";
import Planets from "./planet";

export const Home = () => (
	<div className="text-center mt-5 text-black text-opacity-50">
		<h1><em></em></h1>
		<People />
		<Planets />
	</div>
);
