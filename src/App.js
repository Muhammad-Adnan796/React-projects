import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Home />
        <Services />
      </div>
    </BrowserRouter>
  );
}

export default App;
