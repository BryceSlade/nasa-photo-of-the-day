import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from "./components/Title.js"
import Image from "./components/Image.js"
import Description from "./components/Description.js"
import Date from "./components/Date.js"
import Copyright from "./components/Copyright.js"
import styled from 'styled-components';

const StyleHeader = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-around;
  background-color: #87CEEB;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const Styleh1 = styled.h1`
  color : white;
  width: 45%;
  font-family: 'Oswald', sans-serif;
  font-size: 2.6rem;
`;



function App() {

  return (
    <div className="App">
      <StyleHeader>
        <Styleh1> NASA Image of the Day! </Styleh1>
        <Date/>
      </StyleHeader>
      <Title/>
      <Image/>
      <Description/>
      <Date/>
      <footer>
      <p><Copyright/></p>  
      </footer>
    </div>

  );
}

export default App;
