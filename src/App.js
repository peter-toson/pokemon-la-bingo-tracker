import './styles.css';
//import PokemonTracker from "./tracker.js";
import { PokedexButtons, la_bingo_dex } from './components/pokedex.js';

export default function App() {
    //return <PokemonTracker />;
    //return <PokemonButton pokemon={la_bingo_dex[0]} onClickCallback={(pokemon) => console.log(pokemon.name)} />;
    return <PokedexButtons pokedex={la_bingo_dex} onClickCallback={(pokemon) => console.log(pokemon)} />;
}
