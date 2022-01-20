import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function AppTestRender() {
  const [currentRandomNumber, setRandomNumber] = useState(0);


  useEffect(() => {
    fetch('/api/random').then(res => res.json()).then(data => {
      setRandomNumber(data.number);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
              <div>
                <h1>THIS IS PAGE 2</h1>
              </div>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
                </a>
              <p>The current time is {currentRandomNumber}.</p>

      </header>
    </div>
  );
}

export default AppTestRender;
