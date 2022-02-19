import './styles.css';
//import PokemonTracker from "./tracker.js";
import { PokemonButton, la_bingo_dex } from './components/pokedex.js';

export default function App() {
    return <PokemonButton pokemon={la_bingo_dex[0]} onClickCallback={(pokemon) => console.log(pokemon.name)} />;
    //return <PokemonTracker />;
}
