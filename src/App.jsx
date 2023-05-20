import { useState } from "react";
import Header from "./components/Header/Header";
import FrontCover from "./components/FrontCover/FrontCover";
import BackCover from "./components/BackCover/BackCover";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_OPEN_AI_KEY;

function App() {
  const [idea, setIdea] = useState("")

  function handleChange(event) {
    setIdea((prevIdea) => event.target.value)
    console.log(idea)
  }

  return (
    <>
      <Header handleChange={handleChange} idea={idea}/>
      <FrontCover />
      <BackCover />
    </>
  );
}

export default App;
