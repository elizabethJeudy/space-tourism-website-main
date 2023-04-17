import React from "react";
import homeDesktop from "../starter-code/assets/home/homeDesktop.jpg";
import "../css components/Home.css";
import Nav from "./Nav";
/*
const bgImage = {
	backgroundImage: `url(${homeDesktop})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
}
*/

function Home() {
	return (
		<div style={{ backgroundImage: `url(${homeDesktop})` }}>
			<Nav />
		</div>
	);
}

export default Home;
