import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Features from "./components/Features";
import DreamWeb from "./components/DreamWeb";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import WorkProcess from "./components/WorkProcess";
import WhatSaid from "./components/WhatSaid";
import GetStarted from "./components/GetStarted";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import SocialContact from "./components/SocialContact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Nav />
        <Home />
        <Services />
        <Features/>
        <DreamWeb/>
        <Pricing/>
        <Team/>
        <WorkProcess/>
        <WhatSaid/>
        <GetStarted/>
        <Blog/>
        <Contact/>
        <SocialContact/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
