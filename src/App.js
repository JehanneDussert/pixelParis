import "./styles/App.css";
import React from "react";
import Team from "./pages/Team"
import Home from "./pages/Home"
import About from "./pages/About"
import { DivContainer, BoxContainer } from "./styles/Atom";

document.body.style.backgroundColor = "black";

function App() {
  return (
    <BoxContainer class="scroller">
      <Home/>
      <About/>
      <Team/>
      {/* <Footer/> */}
    </BoxContainer>
    // </div>
  );
}

export default App;