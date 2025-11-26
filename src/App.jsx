import { useState } from 'react';
import PokemonApplication from './Components/PokemonApplication';
import './App.css';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="app">
      <h1 className="app-title">Welcome to Your Pokemon App!</h1>

      {!isStarted ? (
        <button className="primary-button" onClick={handleStart}>
          Start Pokemon App
        </button>
      ) : (
        <PokemonApplication />
      )}
    </div>
  );
}

export default App;
