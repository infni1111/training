import { osi_list } from './components/cours/protocoles/osi.jsx'

import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; // Utiliser Routes au lieu de Switch

import Learn from './components/learn.jsx';
import Micro from './components/micro.jsx';

import "./App.css";

const Home = ()=>{

  const navigate = useNavigate(); // Le hook useNavigate doit être à l'intérieur d'un composant fonctionnel enfant de Router

  function click_on_training() {
    navigate("/training");
  }

  function click_on_micro() {
    navigate("/micro");
  }


  return(

    <div className="div_button">
    
        {/* Utilisation des liens React Router */}
        <button className="btn1" onClick={click_on_training}>Training</button>
        <button className="btn2" onClick={click_on_micro}>Micro</button>

    </div>

    )
}

function App() {
  return (

    <div className = "div_app">

      {
        /* 

            <Router>

            <Routes>

              <Route path = "/" element = {<Home />} />
              <Route path = "/training" element= {<Learn list = {osi_list} title = "Modèle OSI" />} />
              <Route path = "/micro" element = {<Micro />} />
            </Routes>

          </Router>


        */
      }

            infni

    </div>


   
  );
}


export default App












