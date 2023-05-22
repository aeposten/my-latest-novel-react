import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

import Header from "./components/Header/Header";
import FrontCover from "./components/FrontCover/FrontCover";
import BackCover from "./components/BackCover/BackCover";

import "./App.css";

const API_KEY = import.meta.env.VITE_APP_OPEN_AI_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);

function App() {
  const [idea, setIdea] = useState("");
  const [summary, setSummary] = useState("");
  function handleChange(event) {
    setIdea((prevIdea) => event.target.value);
  }

  async function fetchCompletions() {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${idea}`,
    });
    console.log(response)
    setSummary((prevSummary) => response.data.choices[0].text);
      setIdea((prevIdea) => "");
  }

  return (
    <>
      <Header
        handleChange={handleChange}
        idea={idea}
        handleClick={fetchCompletions}
      />
      <FrontCover />
      <BackCover summary={summary} />
    </>
  );
}

export default App;
