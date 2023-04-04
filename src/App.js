import "./styles/App.css";
import React from "react";
import Team from "./pages/Team";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import { BoxContainer } from "./styles/Atom";

document.body.style.backgroundColor = "black";

function App() {
	return (
		<BoxContainer class="scroller">
			<Header />
			<Home />
			<About />
			<Team />
		</BoxContainer>
	);
}

export default App;
