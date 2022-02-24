import React from 'react';
import { PicturedexLA, Copyright } from './picturedex.js';
import { TrackedPokemonStatisticsTable } from './tracker-statistics.js';
import { BingoGoals } from './bingo-goals.js';

const tracking_methods = ['catch', 'evolve', 'KO'];

function IsAlphaCheckbox(props) {
    let enabled = false;
    let checked = false;
    let callback = null;
    if (props.tracked_mon != null && props.tracked_mon.isAlpha != null && props.onChangeCallback != null) {
        enabled = true;
        checked = props.tracked_mon.isAlpha;
        callback = (event) => props.onChangeCallback(event, props.tracked_mon);
    }
    return (
        <div className="IsAlphaCheckbox">
            <input
                id="checkbox_isAlpha"
                type="checkbox"
                name="isAlpha"
                checked={checked}
                onChange={callback}
                disabled={!enabled}
            />
            <label htmlFor="checkbox_isAlpha">Alpha</label>
        </div>
    );
}

function MethodRadioButtons(props) {
    let enabled = false;
    let callback = null;
    if (props.tracked_mon != null && props.tracked_mon.method != null && props.onChangeCallback != null) {
        enabled = true;
        callback = (event) => props.onChangeCallback(event, props.tracked_mon);
    }
    return (
        <div className="MethodRadioButtons">
            {tracking_methods.map((method) => (
                <div className="SingleMethodRadioButton" key={method + '_radio'}>
                    <input
                        id={method + '_radio'}
                        type="radio"
                        name="method"
                        value={method}
                        checked={enabled && props.tracked_mon.method === method}
                        onChange={callback}
                        disabled={!enabled}
                    />
                    <label htmlFor={method + '_radio'}>{method}</label>
                </div>
            ))}
        </div>
    );
}

function TrackedPokemon(props) {
    let name = '(edit last Pokemon)';
    let callback = null;
    if (props.tracked_mon != null && props.tracked_mon.pokemon != null) {
        name = props.tracked_mon.pokemon.name;
        callback = (event) => props.onChangeCallback(event, props.tracked_mon);
    }
    return (
        <div className="TrackedPokemon">
            <div className="TrackedPokemonName">{name}</div>
            <IsAlphaCheckbox tracked_mon={props.tracked_mon} onChangeCallback={callback} />
            <MethodRadioButtons tracked_mon={props.tracked_mon} onChangeCallback={callback} />
        </div>
    );
}

class BingoTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tracked_mons: [] };
    }

    addPokemon = (pokemon) => {
        //console.log('addPokemon', pokemon);
        let new_tracked_mons = this.state.tracked_mons.slice();
        new_tracked_mons.push({ pokemon: pokemon, isAlpha: false, method: 'catch' });
        this.setState({ tracked_mons: new_tracked_mons });
    };

    editLastPokemon = (event) => {
        if (this.state.tracked_mons.length === 0) {
            return;
        }
        let new_tracked_mons = this.state.tracked_mons.slice();
        const last = new_tracked_mons.length - 1;
        if (event.target.name === 'isAlpha') {
            new_tracked_mons[last].isAlpha = event.target.checked;
        }
        if (event.target.name === 'method') {
            new_tracked_mons[last].method = event.target.value;
        }
        this.setState({ tracked_mons: new_tracked_mons });
    };

    deleteLastPokemon = () => {
        if (this.state.tracked_mons.length === 0) {
            return;
        }
        this.setState({ tracked_mons: this.state.tracked_mons.slice(0, -1) });
    };

    render() {
        const last_tracked_mon = this.state.tracked_mons.at(-1);
        //console.log('render', this.state, last_tracked_mon);
        return (
            <div className="BingoTracker">
                <PicturedexLA dex={this.props.pokedex} callback={this.addPokemon} />
                <div className="EditLastPokemon">
                    <TrackedPokemon tracked_mon={last_tracked_mon} onChangeCallback={this.editLastPokemon} />
                    <input
                        type="button"
                        className="DeleteButton"
                        value="Delete Last Pokemon"
                        onClick={this.deleteLastPokemon}
                    />
                </div>
                <div className="GoalsAndStatistics">
                    <BingoGoals tracked_mons={this.state.tracked_mons} types={this.props.types} />
                    <TrackedPokemonStatisticsTable
                        tracked_mons={this.state.tracked_mons}
                        methods={tracking_methods}
                        types={this.props.types}
                    />
                </div>
                <TrackedPokemonList tracked_mons={this.state.tracked_mons} />
                <Copyright />
            </div>
        );
    }
}

function TrackedPokemonList(props) {
    return (
        <div className="TrackedPokemonList">
            <h2>Pokemon in Tracker: {props.tracked_mons.length}</h2>
            <ol>
                {props.tracked_mons
                    .map((tracked_mon) => tracked_mon_to_string(tracked_mon))
                    .map((text, index) => (
                        <li key={index + '_' + text}>{text}</li>
                    ))}
            </ol>
        </div>
    );
}

function tracked_mon_to_string(tracked_mon) {
    if (tracked_mon == null) {
        return '[null/undef]';
    }
    return tracked_mon.method + (tracked_mon.isAlpha ? ' Alpha ' : ' ') + tracked_mon.pokemon.name;
}

export { BingoTracker };
