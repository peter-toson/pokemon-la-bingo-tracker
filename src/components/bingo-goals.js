function BingoGoals(props) {
    return (
        <div style={{ border: '1px solid black' }}>
            <h2>BingoGoals</h2>
            <BingoCatchKoTypes />
            <TrackerGoal
                counter={2}
                title="Tracker Goal"
                opengoals={['open']}
                checkedgoals={['ckecked1', 'checked2']}
            />
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

function BingoCatchKoTypes(props) {
    return (
        <div className="TrackerGoal">
            <div className="AutoCounter">0</div>
            <div className="GoalDescription">
                <div className="GoalTitle">GoalTitle</div>
                <div className="GoalDetails">
                    <div className="OpenGoalDetail">Open</div>
                    <div className="CheckedGoalDetail">Checked</div>
                </div>
            </div>
        </div>
    );
}

export { BingoGoals };
