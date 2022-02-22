import './styles.css';
import { la_bingo_dex, types_gen6 } from './components/pokedex.js';
import { BingoTracker } from './components/bingo-tracker.js';

import { PicturedexLA } from './components/picturedex.js';

export default function App() {
    return (
        <>
            <PicturedexLA />
            <BingoTracker pokedex={la_bingo_dex} types={types_gen6} />
        </>
    );
}
