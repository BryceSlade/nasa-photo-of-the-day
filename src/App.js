import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from "./components/Title.js"
import Image from "./components/Image.js"
import Description from "./components/Description.js"
import Date from "./components/Date.js"
import Copyright from "./components/Copyright.js"

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Title/>
      <Image/>
      <Description/>
      {/* <Date/> */}
      <footer>
        {/* <Copyright/> */}
      </footer>
    </div>

  );
}

export default App;
