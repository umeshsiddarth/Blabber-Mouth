import React from "react"
import './App.css';
import Home from "./screen/home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Chat from "./screen/chat";

function App() {
  
  return (
    <Router>
      <Navigation/>
    </Router>
  );
}

function Navigation(){
  const location = useLocation();
  const background = location.state && location.state.background;
  return(
      <Routes location={background || location}>
            <Route path="/" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
      </Routes>
  )
}

export default App;