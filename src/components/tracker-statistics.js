import React from 'react';

function TrackedPokemonStatisticsTable(props) {
    //console.log('TrackedPokemonStatisticsTable', props);
    return (
        <div className="StatisticsTable">
            <h2>Statistics</h2>
            <table>
                <TableHeader methods={['obtained', 'catches', 'KOs']} />
                <tbody>
                    <TableRow title="All Pokemon" counts={count_per_method(props.tracked_mons, props.methods)} />
                    <TableRow
                        title="Alphas"
                        counts={count_per_method(
                            props.tracked_mons.filter((mon) => mon.isAlpha),
                            props.methods
                        )}
                    />
                    {props.types.map((type) => {
                        const counts = count_per_method(
                            props.tracked_mons.filter((mon) => mon.pokemon.types.includes(type))
                        );
                        if (counts.every((count) => count === 0)) {
                            return null;
                        }
                        return <TableRow key={type} title={type + ' Types'} counts={counts} />;
                    })}
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

function count_per_method(tracked_pokemon) {
    let counts = [];

    const obtained = tracked_pokemon.filter((mon) => mon.method === 'catch' || mon.method === 'evolve');
    counts.push(obtained.length);
    counts.push(new Set(obtained.map((entry) => entry.pokemon.dex)).size);

    const caught = tracked_pokemon.filter((mon) => mon.method === 'catch');
    counts.push(caught.length);
    counts.push(new Set(caught.map((entry) => entry.pokemon.dex)).size);

    const kos = tracked_pokemon.filter((mon) => mon.method === 'KO');
    counts.push(kos.length);
    counts.push(new Set(kos.map((entry) => entry.pokemon.dex)).size);

    return counts;
}

export { TrackedPokemonStatisticsTable };
