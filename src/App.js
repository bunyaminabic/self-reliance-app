import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Self Reliance App</h1>
        <h2>Current Score: 2</h2>
        <div className="question-card">
          <h2>Question 1 out of 7</h2>
          <h3>I see myself as a succesful person.</h3>
          <ul>
            <li>never</li>
            <li>rarely</li>
            <li>often</li>
          </ul>
        </div>
        <div className="result">
          <h1>Result</h1>
          <h2> 1 out of self confident </h2>
          <button>Restart Test</button>
        </div>
      </div>
    </div>
  );
}

export default App;
