import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_OPEN_AI_KEY;

function App() {
  console.log(API_KEY)
  return (
    <>
      <Header />

    </>
  );
}

export default App;
