import React, { useState, useEffect } from "react";
import Learn from './components/learn.jsx'


import Micro from './components/micro.jsx'

import {osi_list} from './components/cours/protocoles/osi.jsx'


import "./App.css";


function App() {
 
  return (
    <div className="div_app">
     

        { /*       <Learn title = "Introduction au modèle OSI" list = {osi_list} />
        */
        }


        <Micro />

    </div>
  );
}

export default App;
