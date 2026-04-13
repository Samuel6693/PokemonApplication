import PokemonApplication from './Components/PokemonApplication.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Pokedex Explorer</h1>
      <p className='app-description'>
        Search and discover all the 151 Pokémon!
      </p>
      <PokemonApplication />
    </div>
  );
}

export default App;
