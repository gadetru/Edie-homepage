import React from "react";
import'./app.scss'
import { Navbar } from "./components/navbar/Navbar";
import { Presentation } from "./components/presentation/Presentation";
import { Offer } from "./components/offer/Offer";
import { Team } from "./components/team/Team";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Presentation/>
    <Offer/>
    <Team/> 
    <Footer/>
    </>
  )
}

export default App;
