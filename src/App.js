import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
	return (
		<div className="App">
			<Nav />
			<Home />
			<Destination />
			<Crew />
			<Technology />
		</div>
	);
}

export default App;
