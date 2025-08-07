import React, { useState, useEffect } from "react";
import Learn from './components/learn.jsx'


import {osi_list} from './components/cours/protocoles/osi.jsx'


import "./App.css";


function App() {
  const text =
    "je m'appelle infni aomine et j'adore les virus ou les malwares en général";

  return (
    <div className="div_app">
     

        <Learn title = "Introduction au modèle OSI" list = {osi_list} />



    </div>
  );
}

export default App;
