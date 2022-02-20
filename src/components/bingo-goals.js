import React from 'react';

function BingoGoals(props) {
    return (
        <div className="BingoGoals">
            <h2>Bingo Goals</h2>
            <LABingoableSingleStagers tracked_mons={props.tracked_mons} />
            <CatchKoTypes tracked_mons={props.tracked_mons} types={props.types} />
            <CountingGoal goal_name="Miss Fortune Sisters" />
            <CountingGoal goal_name="Stunned Pokemon" />
            <CountingGoal goal_name="High Flying Pokemon" />
            <CountingGoal goal_name="" />
            <CountingGoal goal_name="" />
        </div>
    );
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    decrement = () => {
        this.setState({ counter: this.state.counter > 0 ? this.state.counter - 1 : 0 });
    };

    render() {
        return (
            <div className="Counter">
                <input className="MinusButton" type="button" value="&#8211;" onClick={this.decrement} />
                <div className="ManualCounter">{this.state.counter}</div>
                <input className="PlusButton" type="button" value="+" onClick={this.increment} />
            </div>
        );
    }
}

class CountingGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { goal_name: props.goal_name };
    }

    changeText = (event) => {
        if (event.target.name === 'goal_name') {
            this.setState({ goal_name: event.target.value });
        }
    };

    render() {
        return (
            <div className="CountingGoal">
                <Counter />
                <input
                    className="CountingGoalText"
                    type="text"
                    name="goal_name"
                    value={this.state.goal_name}
                    onChange={this.changeText}
                />
            </div>
        );
    }
}

function TrackerGoal(props) {
    return (
        <div className="TrackerGoal">
            <div className="AutoCounter">{props.counter}</div>
            <div className="GoalDescription">
                <div className="GoalTitle">{props.title}</div>
                <div className="GoalDetails">
                    {props.opengoals.map((goal) => (
                        <div key={'opengoal_' + goal} className="OpenGoalDetail">
                            {goal}
                        </div>
                    ))}
                    {props.checkedgoals.map((goal) => (
                        <div key={'checkedgoals_' + goal} className="CheckedGoalDetail">
                            {goal}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CatchKoTypes(props) {
    let tracked_types =
        /* set for unique values */
        new Set(
            props.tracked_mons
                /* only return the types of the pokemon */
                .map((mon) => mon.pokemon.types)
                /* flatten the "types" array */
                .reduce((list, types) => list.concat(types), [])
        );
    /* set difference */
    const open_types = props.types.filter((type) => !tracked_types.has(type));
    /* array again so that tracked_types has a .map() funciton */
    tracked_types = new Array(...tracked_types);

    return (
        <TrackerGoal
            className="TrackerGoal"
            title="Catch / KO types"
            counter={tracked_types.length}
            opengoals={open_types}
            checkedgoals={tracked_types}
        />
    );
}

function LABingoableSingleStagers(props) {
    const bingoable_single_stagers = new Set(['Chatot', 'Heracross', 'Pachirisu', 'Rotom', 'Unown']);
    const unique_dex_entries = new Set(
        props.tracked_mons
            /* only caught pokemon count */
            /* envovled would also count for most 'catch' goals, but that's not an option here */
            .filter((mon) => mon.method === 'catch')
            /* get only pokemon names */
            .map((mon) => mon.pokemon.name)
            /* filter only those in the bingo goal */
            .filter((name) => bingoable_single_stagers.has(name))
    );

    const open_mons = new Array(...bingoable_single_stagers).filter((mon) => !unique_dex_entries.has(mon));
    const checked_mons = new Array(...unique_dex_entries);

    return (
        <TrackerGoal
            className="TrackerGoal"
            title="Catch Single State Pokemon"
            counter={checked_mons.length}
            opengoals={open_mons}
            checkedgoals={checked_mons}
        />
    );
}

export { BingoGoals };
