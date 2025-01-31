import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/fonts/fonts.css";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
