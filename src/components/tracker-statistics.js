import React from 'react';

function TrackedPokemonStatisticsTable(props) {
    //console.log('TrackedPokemonStatisticsTable', props);
    return (
        <div className="StatisticsTable">
            <h2>Statistics</h2>
            <table>
                <TableHeader methods={props.methods} />
                <tbody>
                    <TableRow title="All Pokemon" counts={count_per_method(props.tracked_mons, props.methods)} />
                    <TableRow
                        title="Alphas"
                        counts={count_per_method(
                            props.tracked_mons.filter((mon) => mon.isAlpha),
                            props.methods
                        )}
                    />
                    {props.types.map((type) => (
                        <TableRow
                            key={type}
                            title={type + ' Types'}
                            counts={count_per_method(
                                props.tracked_mons.filter((mon) => mon.pokemon.types.includes(type)),
                                props.methods
                            )}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th>category</th>
                {props.methods.map((method) => (
                    <React.Fragment key={'header_' + method}>
                        <th>{method}</th>
                        <th>unique {method}</th>
                    </React.Fragment>
                ))}
            </tr>
        </thead>
    );
}

function TableRow(props) {
    return (
        <tr>
            <td>{props.title}</td>
            {props.counts.map((count, col_index) => (
                <td key={props.title + col_index}>{count > 0 ? count : ''}</td>
            ))}
        </tr>
    );
}

function count_per_method(tracked_pokemon, methods) {
    let counts = [];
    for (let method of methods) {
        const pokemon_per_method = tracked_pokemon.filter((mon) => mon.method === method);
        counts.push(pokemon_per_method.length);
        counts.push(new Set(pokemon_per_method.map((entry) => entry.pokemon.dex)).size);
    }
    return counts;
}

export { TrackedPokemonStatisticsTable };
