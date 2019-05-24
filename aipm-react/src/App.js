import React from "react";
import AppRouter from "./router/AppRouter";
import "./styles/App.css";

// IN THIS FILE :
// a. site wide styles
// b. site wide settings such Redux, etc.

function App() {
  return (
    <div className="App">
      <AppRouter />
      <img src="./assets/logo.svg" />
    </div>
  );
}

export default App;
