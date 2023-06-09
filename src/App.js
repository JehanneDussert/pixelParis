import "./styles/App.css";
import React from "react";
import Team from "./pages/Team";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Header from "./components/Header";
import Demo from "./pages/Demo";
import { BoxContainer } from "./styles/Atom";

document.body.style.backgroundColor = "black";

function App() {
	return (
		<BoxContainer className="scroller">
			<Header />
			<Home />
			<About />
			<Services />
			<Demo />
			<Team />
		</BoxContainer>
	);
}

export default App;
