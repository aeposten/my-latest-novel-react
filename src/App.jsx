import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

import Header from "./components/Header/Header";
import FrontCover from "./components/FrontCover/FrontCover";
import BackCover from "./components/BackCover/BackCover";

import "./App.css";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";

const API_KEY = import.meta.env.VITE_APP_OPEN_AI_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);

function App() {
  const [idea, setIdea] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Reading the pitch for your novel!");
  const [loading, setLoading] = useState(false);
  const [blurb, setBlurb] = useState("")

  function handleChange(event) {
    setIdea((prevIdea) => event.target.value);
  }

  async function fetchLoadingResponse(idea) {
    setLoading((prevLoading) => !prevLoading)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a short message to enthusiastically say "${idea}" sounds interesting and that you are working on the blurb and cover illustration at this very moment. Mention one aspect of the sentence.`,
      max_tokens: 60
    });

    setLoadingMessage((prevLoadingMessage) => response.data.choices[0].text);
    fetchBlurb(idea)
      setIdea((prevIdea) => "");
  }

  async function fetchBlurb() {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate an engaging, professional and marketable novel plot based on the following idea: ${idea}`,
      max_tokens: 600,
    });
    setLoading((prevLoading) => !prevLoading)
    setBlurb((prevBlurb) => response.data.choices[0].text)
  }
  return (
    <>
      <Header
        handleChange={handleChange}
        idea={idea}
        handleClick={fetchLoadingResponse}
      />
     {loading ? <LoadingMessage loadingMessage={loadingMessage} /> :
      <>
      <FrontCover />
      <BackCover blurb={blurb}/>
      </> }
    </>
  );
}

export default App;
