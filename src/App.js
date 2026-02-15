import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="main">Welcome to My React App</h1>

      <Weather defaultCity="New York" />
      <footer>
        Coded by{" "}
        <a
          href="https://github.com/Katmitsu"
          target="blank"
          rel="noopener noreferrer"
        >
          Katy Ciutac
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/Katmitsu/forecast-react-app"
          target="blank"
          rel="noopener noreferrer"
        >
          Github{" "}
        </a>
        and hosted on{" "}
        <a
          href="https://sparkly-frangollo-a06dec.netlify.app/"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify.
        </a>
      </footer>
    </div>
  );
}

export default App;
