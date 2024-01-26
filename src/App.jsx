import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import myImage from './images/KALVIUM.png';


function App() {

  return (
    <div>
      <img className="kalvium" src={myImage} alt="Description of the image" />
      <QuestionBox />
    </div>
  );
}

export default App;