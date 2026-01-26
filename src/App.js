import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Weather defaultCity="New York" />
      <footer>
        Coded by <a href="https://github.com/Katmitsu">Katy Ciutac</a> and is
        open-sourced on{" "}
        <a href="https://github.com/Katmitsu/weather-react-app">Github </a>
        and hosted on{" "}
        <a href="https://sparkly-frangollo-a06dec.netlify.app/"> Netlify.</a>
      </footer>
    </div>
  );
}

export default App;
