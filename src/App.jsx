import { useState } from 'react'
import PokemonApplication from './Components/PokemonApplication';
import './App.css'

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <>
      <h1>Welcome to Your Pokemon App!</h1>
      {!isStarted ? (
        <button onClick={handleStart}>Start Pokemon App</button>
      ) : (
        <PokemonApplication/>
      )}
  
    </>
  )
}

export default App
