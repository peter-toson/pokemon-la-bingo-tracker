function BingoGoals(props) {
    return (
        <div className="BingoGoals">
            <h2>Bingo Goals</h2>
            <LABingoableSingleStagers tracked_mons={props.tracked_mons} />
            <CatchKoTypes tracked_mons={props.tracked_mons} types={props.types} />
        </div>
    );
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
    const bingoable_single_stagers = new Set(['Chatot', 'Heracross', 'Pachirisu', 'Unown']);
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

    console.log(bingoable_single_stagers, unique_dex_entries, open_mons, checked_mons);

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
