import React from "react";
import homeDesktop from "../starter-code/assets/home/homeDesktop.jpg";
import "../css components/Home.css";

function Home() {
	const bgImage = {
		backgroundImage: `url(${homeDesktop})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div className="Home">
			<div className="background" style={bgImage}></div>
		</div>
	);
}

export default Home;
