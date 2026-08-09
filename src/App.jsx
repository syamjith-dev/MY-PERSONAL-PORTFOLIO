import React, { useState } from "react";
import './App.css'
import Hero from './components/Hero'
import Intro from "./components/Intro";

const App = () => {

  const [introFinished, setIntroFinished] = useState(false);


  return (
    <div>
      {!introFinished && (
        <Intro
          onComplete={() => setIntroFinished(true)}
        />
      )}
      <Hero />
    </div>
  )
}

export default App
