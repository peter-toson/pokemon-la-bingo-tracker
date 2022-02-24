import './styles.css';
import { types_gen6 } from './components/pokedex.js';
import { la_dex_no_legends } from './components/picturedex.js';
import { BingoTracker } from './components/bingo-tracker.js';

export default function App() {
    return (
        <>
            <BingoTracker pokedex={la_dex_no_legends.slice(0, 20)} types={types_gen6} />
        </>
    );
}
