import './styles.css';
import { la_bingo_dex, types_gen6 } from './components/pokedex.js';
import { BingoTracker } from './components/bingo-tracker.js';

export default function App() {
    return <BingoTracker pokedex={la_bingo_dex.slice(0, 20)} types={types_gen6} />;
}
