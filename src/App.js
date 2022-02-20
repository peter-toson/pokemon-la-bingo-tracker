import './styles.css';
//import PokemonTracker from "./tracker.js";
import { la_bingo_dex, types_gen6 } from './components/pokedex.js';
import { BingoTracker } from './components/bingo-tracker.js';

export default function App() {
    //return <PokemonTracker />;
    //return <PokemonButton pokemon={la_bingo_dex[0]} onClickCallback={(pokemon) => console.log(pokemon.name)} />;
    return <BingoTracker pokedex={la_bingo_dex} types={types_gen6} />;
}
