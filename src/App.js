import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Weather />
      <footer>
        Coded by <a href="https://github.com/Katmitsu">Katy Ciutac, </a>{" "}
        open-sourced on{" "}
        <a href="https://github.com/Katmitsu/weather-react-app">Github </a>
        and hosted on{" "}
        <a href="https://bespoke-marshmallow-032f5b.netlify.app/"> Netlify.</a>
      </footer>
    </div>
  );
}

export default App;
