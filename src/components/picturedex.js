import React from 'react';
//import spritesheet from '../img/spritesheet_la.png';

class Sprite extends React.Component {
    onClick = () => {
        // console.log('Sprite.callback', this.props.entry);
        if (this.props.callback != null) {
            this.props.callback(this.props.entry);
        }
    };

    render() {
        const config = this.props.config;
        const entry = this.props.entry;

        const bg_width = Math.round(config.sheet_width * config.sprite_scale);
        const bg_height = Math.round(config.sheet_height * config.sprite_scale);
        const offset_x = Math.round((-entry.col * config.tiling_size - config.tiling_border) * config.sprite_scale);
        const offset_y = Math.round((-entry.row * config.tiling_size - config.tiling_border) * config.sprite_scale);
        const bg_size = Math.round((config.tiling_size - 2 * config.tiling_border) * config.sprite_scale);

        const margin_top = Math.round(-0.7 * config.textsize);

        const style_entry = {
            width: bg_size,
            height: bg_size + config.textsize,
            padding: '0px 2px',
        };

        const style_sprite = {
            backgroundImage: `url(https://rawcdn.githack.com/peter-toson/pokemon-la-bingo-tracker/e1663eff03c2339e15b79a79c270270fb6a6d694/src/img/spritesheet_la.png)`,
            backgroundPosition: `${offset_x}px ${offset_y}px`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${bg_width}px ${bg_height}px`,
            width: bg_size,
            height: bg_size,
            border: '1px solid black',
            borderRadius: '100%',
        };

        const style_text = {
            fontSize: `${config.textsize}px`,
            //overflow: 'hidden',
            textAlign: 'center',
            marginTop: `${margin_top}px`,
        };

        return (
            <div className="PicturedexEntry>" style={style_entry} onClick={this.onClick}>
                <div className="Sprite" style={style_sprite} />
                <div className="Name" style={style_text}>
                    {entry.name}
                </div>
            </div>
        );
    }
}

class PicturedexLA extends React.Component {
    constructor(props) {
        super(props);
        if (props.dex == null) {
            this.state = { dex: la_dex_full.slice(0, 10) };
        } else {
            this.state = { dex: props.dex };
        }
    }

    render() {
        const config = {
            sheet_width: 1822,
            sheet_height: 3512,
            tiling_border: 8,
            tiling_size: 130,
            sprite_scale: 0.33,
            textsize: 8,
        };

        return (
            <div className="PicturedexLA" style={{ display: 'flex', gap: '4px 4px', flexWrap: 'wrap' }}>
                {this.state.dex.map((entry) => (
                    <Sprite key={entry.id} config={config} entry={entry} callback={this.props.callback} />
                ))}
            </div>
        );
    }
}

function Copyright(props) {
    return (
        <div className="Copyright">
            The Pokemon trademark, Pokemon names and designs are (c) 1996-2022 by Nintendo, Gamefreak, and The Pokemon
            Company. Credit to the sprite sheet goes to DogToon64 on{' '}
            <a href="https://www.spriters-resource.com">https://www.spriters-resource.com</a>
        </div>
    );
}

const la_dex_full = [
    { id: 1, dex: '001', name: 'Rowlet', types: ['Grass ', 'Flying'], row: 25, col: 11 },
    { id: 2, dex: '002', name: 'Datrix', types: ['Grass', 'Flying'], row: 25, col: 12 },
    { id: 3, dex: '003', name: 'Decidueye', types: ['Grass', 'Fighting'], row: 25, col: 13 },
    { id: 4, dex: '004', name: 'Cyndaquil', types: ['Fire'], row: 4, col: 13 },
    { id: 5, dex: '005', name: 'Quilava', types: ['Fire'], row: 5, col: 0 },
    { id: 6, dex: '006', name: 'Typhlosion', types: ['Fire', 'Ghost'], row: 5, col: 1 },
    { id: 7, dex: '007', name: 'Oshawott', types: ['Water'], row: 24, col: 1 },
    { id: 8, dex: '008', name: 'Dewott', types: ['Water'], row: 24, col: 2 },
    { id: 9, dex: '009', name: 'Samurott', types: ['Water', 'Dark'], row: 24, col: 3 },
    { id: 10, dex: '010', name: 'Bidoof', types: ['Normal'], row: 13, col: 0 },
    { id: 11, dex: '011', name: 'Bibarel', types: ['Normal', 'Water'], row: 13, col: 2 },
    { id: 12, dex: '012', name: 'Starly', types: ['Normal', 'Flying'], row: 12, col: 8 },
    { id: 13, dex: '013', name: 'Staravia', types: ['Normal', 'Flying'], row: 12, col: 10 },
    { id: 14, dex: '014', name: 'Staraptor', types: ['Normal', 'Flying'], row: 12, col: 12 },
    { id: 15, dex: '015', name: 'Shinx', types: ['Electric'], row: 13, col: 8 },
    { id: 16, dex: '016', name: 'Luxio', types: ['Electric'], row: 13, col: 10 },
    { id: 17, dex: '017', name: 'Luxray', types: ['Electric'], row: 13, col: 12 },
    { id: 18, dex: '018', name: 'Wurmple', types: ['Bug'], row: 10, col: 3 },
    { id: 19, dex: '019', name: 'Silcoon', types: ['Bug'], row: 10, col: 4 },
    { id: 20, dex: '020', name: 'Beautifly', types: ['Bug', 'Flying'], row: 10, col: 5 },
    { id: 21, dex: '021', name: 'Cascoon', types: ['Bug'], row: 10, col: 6 },
    { id: 22, dex: '022', name: 'Dustox', types: ['Bug', 'Poison'], row: 10, col: 7 },
    { id: 23, dex: '023', name: 'Ponyta', types: ['Fire'], row: 2, col: 7 },
    { id: 24, dex: '024', name: 'Rapidash', types: ['Fire'], row: 2, col: 8 },
    { id: 25, dex: '025', name: 'Eevee', types: ['Normal'], row: 4, col: 7 },
    { id: 26, dex: '026', name: 'Vaporeon', types: ['Water'], row: 4, col: 8 },
    { id: 27, dex: '027', name: 'Jolteon', types: ['Electric'], row: 4, col: 9 },
    { id: 28, dex: '028', name: 'Flareon', types: ['Fire'], row: 4, col: 10 },
    { id: 29, dex: '029', name: 'Espeon', types: ['Psychic'], row: 5, col: 12 },
    { id: 30, dex: '030', name: 'Umbreon', types: ['Dark'], row: 5, col: 13 },
    { id: 31, dex: '031', name: 'Leafeon', types: ['Grass'], row: 20, col: 6 },
    { id: 32, dex: '032', name: 'Glaceon', types: ['Ice'], row: 20, col: 7 },
    { id: 33, dex: '033', name: 'Sylveon', types: ['Fairy'], row: 25, col: 10 },
    { id: 34, dex: '034', name: 'Zubat', types: ['Poison', 'Flying'], row: 0, col: 11 },
    { id: 35, dex: '035', name: 'Golbat', types: ['Poison', 'Flying'], row: 0, col: 13 },
    { id: 36, dex: '036', name: 'Crobat', types: ['Poison', 'Flying'], row: 5, col: 2 },
    { id: 37, dex: '037', name: 'Drifloon', types: ['Ghost ', ' Flying'], row: 16, col: 3 },
    { id: 38, dex: '038', name: 'Drifblim', types: ['Ghost ', ' Flying'], row: 16, col: 4 },
    { id: 39, dex: '039', name: 'Kricketot', types: ['Bug'], row: 13, col: 4 },
    { id: 40, dex: '040', name: 'Kricketune', types: ['Bug'], row: 13, col: 6 },
    { id: 41, dex: '041', name: 'Buizel', types: ['Water'], row: 15, col: 4 },
    { id: 42, dex: '042', name: 'Floatzel', types: ['Water'], row: 15, col: 6 },
    { id: 43, dex: '043', name: 'Burmy', types: ['Bug'], row: 14, col: 6 },
    { id: 44, dex: '044', name: 'Wormadam', types: ['Bug', 'Grass'], row: 14, col: 9 },
    { id: 45, dex: '044', name: 'Wormadam', types: ['Bug', 'Ground'], row: 14, col: 10 },
    { id: 46, dex: '044', name: 'Wormadam', types: ['Bug', 'Steel'], row: 14, col: 11 },
    { id: 47, dex: '045', name: 'Mothim', types: ['Bug', 'Flying'], row: 14, col: 12 },
    { id: 48, dex: '046', name: 'Geodude', types: ['Rock', 'Ground'], row: 2, col: 4 },
    { id: 49, dex: '047', name: 'Graveler', types: ['Rock', 'Ground'], row: 2, col: 5 },
    { id: 50, dex: '048', name: 'Golem', types: ['Rock', 'Ground'], row: 2, col: 6 },
    { id: 51, dex: '049', name: 'Stantler', types: ['Normal'], row: 9, col: 13 },
    { id: 52, dex: '050', name: 'Wyrdeer', types: ['Normal', 'Psychic'], row: 26, col: 0 },
    { id: 53, dex: '051', name: 'Munchlax', types: ['Normal'], row: 17, col: 13 },
    { id: 54, dex: '052', name: 'Snorlax', types: ['Normal'], row: 4, col: 12 },
    { id: 55, dex: '053', name: 'Paras', types: ['Bug', 'Grass'], row: 1, col: 1 },
    { id: 56, dex: '054', name: 'Parasect', types: ['Bug', 'Grass'], row: 1, col: 2 },
    { id: 57, dex: '055', name: 'Pichu', types: ['Electric'], row: 5, col: 3 },
    { id: 58, dex: '056', name: 'Pikachu', types: ['Electric'], row: 0, col: 2 },
    { id: 59, dex: '057', name: 'Raichu', types: ['Electric'], row: 0, col: 3 },
    { id: 60, dex: '058', name: 'Abra', types: ['Psychic'], row: 1, col: 8 },
    { id: 61, dex: '059', name: 'Kadabra', types: ['Psychic'], row: 1, col: 10 },
    { id: 62, dex: '060', name: 'Alakazam', types: ['Psychic'], row: 1, col: 12 },
    { id: 63, dex: '061', name: 'Chimchar', types: ['Fire'], row: 12, col: 1 },
    { id: 64, dex: '062', name: 'Monferno', types: ['Fire', 'Fighting'], row: 12, col: 2 },
    { id: 65, dex: '063', name: 'Infernape', types: ['Fire', 'Fighting'], row: 12, col: 3 },
    { id: 66, dex: '064', name: 'Buneary', types: ['Normal'], row: 16, col: 5 },
    { id: 67, dex: '065', name: 'Lopunny', types: ['Normal'], row: 16, col: 6 },
    { id: 68, dex: '066', name: 'Cherubi', types: ['Grass'], row: 15, col: 8 },
    { id: 69, dex: '067', name: 'Cherrim', types: ['Grass'], row: 15, col: 10 },
    { id: 70, dex: '068', name: 'Psyduck', types: ['Water'], row: 1, col: 3 },
    { id: 71, dex: '069', name: 'Golduck', types: ['Water'], row: 1, col: 4 },
    { id: 72, dex: '070', name: 'Combee', types: ['Bug', 'Flying'], row: 15, col: 0 },
    { id: 73, dex: '071', name: 'Vespiquen', types: ['Bug', 'Flying'], row: 15, col: 1 },
    { id: 74, dex: '072', name: 'Scyther', types: ['Bug', 'Flying'], row: 3, col: 13 },
    { id: 75, dex: '073', name: 'Kleavor', types: ['Bug', 'Rock'], row: 26, col: 1 },
    { id: 76, dex: '074', name: 'Scizor', types: ['Bug', 'Steel'], row: 8, col: 8 },
    { id: 77, dex: '075', name: 'Heracross', types: ['Bug', 'Fighting'], row: 8, col: 11 },
    { id: 78, dex: '076', name: 'Mime\xa0Jr.', types: ['Psychic', 'Fairy'], row: 17, col: 3 },
    { id: 79, dex: '077', name: 'Mr.\xa0Mime', types: ['Psychic', 'Fairy'], row: 3, col: 11 },
    { id: 80, dex: '078', name: 'Aipom', types: ['Normal'], row: 5, col: 10 },
    { id: 81, dex: '079', name: 'Ambipom', types: ['Normal'], row: 16, col: 2 },
    { id: 82, dex: '080', name: 'Magikarp', types: ['Water'], row: 4, col: 2 },
    { id: 83, dex: '081', name: 'Gyarados', types: ['Water', 'Flying'], row: 4, col: 4 },
    { id: 84, dex: '082', name: 'Shellos', types: ['Water'], row: 15, col: 11 },
    { id: 85, dex: '083', name: 'Gastrodon', types: ['Water', 'Ground'], row: 15, col: 13 },
    { id: 86, dex: '084', name: 'Qwilfish', types: ['Dark', 'Poison'], row: 8, col: 7 },
    { id: 87, dex: '085', name: 'Overqwil', types: ['Dark', 'Poison'], row: 26, col: 6 },
    { id: 88, dex: '086', name: 'Happiny', types: ['Normal'], row: 17, col: 4 },
    { id: 89, dex: '087', name: 'Chansey', types: ['Normal'], row: 3, col: 9 },
    { id: 90, dex: '088', name: 'Blissey', types: ['Normal'], row: 10, col: 2 },
    { id: 91, dex: '089', name: 'Budew', types: ['Grass', 'Poison'], row: 13, col: 13 },
    { id: 92, dex: '090', name: 'Roselia', types: ['Grass', 'Poison'], row: 11, col: 1 },
    { id: 93, dex: '091', name: 'Roserade', types: ['Grass', 'Poison'], row: 14, col: 0 },
    { id: 94, dex: '092', name: 'Carnivine', types: ['Grass'], row: 18, col: 12 },
    { id: 95, dex: '093', name: 'Petilil', types: ['Grass'], row: 24, col: 4 },
    { id: 96, dex: '094', name: 'Lilligant', types: ['Grass', 'Fighting'], row: 24, col: 5 },
    { id: 97, dex: '095', name: 'Tangela', types: ['Grass'], row: 3, col: 10 },
    { id: 98, dex: '096', name: 'Tangrowth', types: ['Grass'], row: 20, col: 0 },
    { id: 99, dex: '097', name: 'Barboach', types: ['Water', 'Ground'], row: 11, col: 2 },
    { id: 100, dex: '098', name: 'Whiscash', types: ['Water', 'Ground'], row: 11, col: 3 },
    { id: 101, dex: '099', name: 'Croagunk', types: ['Poison', 'Fighting'], row: 18, col: 8 },
    { id: 102, dex: '100', name: 'Toxicroak', types: ['Poison', 'Fighting'], row: 18, col: 10 },
    { id: 103, dex: '101', name: 'Ralts', types: ['Psychic', 'Fairy'], row: 10, col: 10 },
    { id: 104, dex: '102', name: 'Kirlia', types: ['Psychic', 'Fairy'], row: 10, col: 11 },
    { id: 105, dex: '103', name: 'Gardevoir', types: ['Psychic', ' Fairy'], row: 10, col: 12 },
    { id: 106, dex: '104', name: 'Gallade', types: ['Psychic', 'Fighting'], row: 20, col: 12 },
    { id: 107, dex: '105', name: 'Yanma', types: ['Bug', 'Flying'], row: 5, col: 11 },
    { id: 108, dex: '106', name: 'Yanmega', types: ['Bug', 'Flying'], row: 20, col: 5 },
    { id: 109, dex: '107', name: 'Hippopotas', types: ['Ground'], row: 18, col: 3 },
    { id: 110, dex: '108', name: 'Hippowdon', types: ['Ground'], row: 18, col: 5 },
    { id: 111, dex: '109', name: 'Pachirisu', types: ['Electric'], row: 15, col: 2 },
    { id: 112, dex: '110', name: 'Stunky', types: ['Poison', 'Dark'], row: 16, col: 12 },
    { id: 113, dex: '111', name: 'Skuntank', types: ['Poison', 'Dark'], row: 16, col: 13 },
    { id: 114, dex: '112', name: 'Teddiursa', types: ['Normal'], row: 9, col: 2 },
    { id: 115, dex: '113', name: 'Ursaring', types: ['Normal'], row: 9, col: 3 },
    { id: 116, dex: '114', name: 'Ursaluna', types: ['Ground', 'Normal'], row: 26, col: 9 },
    { id: 117, dex: '115', name: 'Goomy', types: ['Dragon'], row: 25, col: 7 },
    { id: 118, dex: '116', name: 'Sliggoo', types: ['Dragon', 'Steel'], row: 25, col: 8 },
    { id: 119, dex: '117', name: 'Goodra', types: ['Dragon', 'Steel'], row: 25, col: 9 },
    { id: 120, dex: '118', name: 'Onix', types: ['Rock', 'Ground'], row: 3, col: 0 },
    { id: 121, dex: '119', name: 'Steelix', types: ['Steel', 'Ground'], row: 8, col: 5 },
    { id: 122, dex: '120', name: 'Rhyhorn', types: ['Ground', 'Rock'], row: 3, col: 5 },
    { id: 123, dex: '121', name: 'Rhydon', types: ['Ground', 'Rock'], row: 3, col: 7 },
    { id: 124, dex: '122', name: 'Rhyperior', types: ['Ground', 'Rock'], row: 19, col: 12 },
    { id: 125, dex: '123', name: 'Bonsly', types: ['Rock'], row: 17, col: 2 },
    { id: 126, dex: '124', name: 'Sudowoodo', types: ['Rock'], row: 5, col: 7 },
    { id: 127, dex: '125', name: 'Lickitung', types: ['Normal'], row: 3, col: 4 },
    { id: 128, dex: '126', name: 'Lickilicky', types: ['Normal'], row: 19, col: 11 },
    { id: 129, dex: '127', name: 'Togepi', types: ['Fairy'], row: 5, col: 5 },
    { id: 130, dex: '128', name: 'Togetic', types: ['Fairy', 'Flying'], row: 5, col: 6 },
    { id: 131, dex: '129', name: 'Togekiss', types: ['Fairy', 'Flying'], row: 20, col: 4 },
    { id: 132, dex: '130', name: 'Turtwig', types: ['Grass'], row: 11, col: 12 },
    { id: 133, dex: '131', name: 'Grotle', types: ['Grass'], row: 11, col: 13 },
    { id: 134, dex: '132', name: 'Torterra', types: ['Grass', 'Ground'], row: 12, col: 0 },
    { id: 135, dex: '133', name: 'Porygon', types: ['Normal'], row: 4, col: 11 },
    { id: 136, dex: '134', name: 'Porygon2', types: ['Normal'], row: 9, col: 12 },
    { id: 137, dex: '135', name: 'Porygon-Z', types: ['Normal'], row: 20, col: 11 },
    { id: 138, dex: '136', name: 'Gastly', types: ['Ghost', 'Poison'], row: 2, col: 11 },
    { id: 139, dex: '137', name: 'Haunter', types: ['Ghost', 'Poison'], row: 2, col: 12 },
    { id: 140, dex: '138', name: 'Gengar', types: ['Ghost', 'Poison'], row: 2, col: 13 },
    { id: 141, dex: '139', name: 'Spiritomb', types: ['Ghost', 'Dark'], row: 17, col: 6 },
    { id: 142, dex: '140', name: 'Murkrow', types: ['Dark', 'Flying'], row: 6, col: 1 },
    { id: 143, dex: '141', name: 'Honchkrow', types: ['Dark', 'Flying'], row: 16, col: 8 },
    { id: 144, dex: '142', name: 'Unown', types: ['Psychic'], row: 6, col: 3 },
    { id: 145, dex: '143', name: 'Spheal', types: ['Ice', 'Water'], row: 11, col: 9 },
    { id: 146, dex: '144', name: 'Sealeo', types: ['Ice', 'Water'], row: 11, col: 10 },
    { id: 147, dex: '145', name: 'Walrein', types: ['Ice', 'Water'], row: 11, col: 11 },
    { id: 148, dex: '146', name: 'Remoraid', types: ['Water'], row: 9, col: 8 },
    { id: 149, dex: '147', name: 'Octillery', types: ['Water'], row: 9, col: 9 },
    { id: 150, dex: '148', name: 'Skorupi', types: ['Poison', 'Bug'], row: 18, col: 6 },
    { id: 151, dex: '149', name: 'Drapion', types: ['Poison', 'Dark'], row: 18, col: 7 },
    { id: 152, dex: '150', name: 'Growlithe', types: ['Fire', 'Rock'], row: 1, col: 5 },
    { id: 153, dex: '151', name: 'Arcanine', types: ['Fire', 'Rock'], row: 1, col: 6 },
    { id: 154, dex: '152', name: 'Glameow', types: ['Normal'], row: 16, col: 9 },
    { id: 155, dex: '153', name: 'Purugly', types: ['Normal'], row: 16, col: 10 },
    { id: 156, dex: '154', name: 'Machop', types: ['Fighting'], row: 1, col: 13 },
    { id: 157, dex: '155', name: 'Machoke', types: ['Fighting'], row: 2, col: 0 },
    { id: 158, dex: '156', name: 'Machamp', types: ['Fighting'], row: 2, col: 1 },
    { id: 159, dex: '157', name: 'Chatot', types: ['Normal', 'Flying'], row: 17, col: 5 },
    { id: 160, dex: '158', name: 'Duskull', types: ['Ghost'], row: 11, col: 4 },
    { id: 161, dex: '159', name: 'Dusclops', types: ['Ghost'], row: 11, col: 5 },
    { id: 162, dex: '160', name: 'Dusknoir', types: ['Ghost'], row: 21, col: 0 },
    { id: 163, dex: '161', name: 'Piplup', types: ['Water'], row: 12, col: 4 },
    { id: 164, dex: '162', name: 'Prinplup', types: ['Water'], row: 12, col: 5 },
    { id: 165, dex: '163', name: 'Empoleon', types: ['Water', 'Steel'], row: 12, col: 6 },
    { id: 166, dex: '164', name: 'Mantyke', types: ['Water', 'Flying'], row: 19, col: 3 },
    { id: 167, dex: '165', name: 'Mantine', types: ['Water', 'Flying'], row: 9, col: 11 },
    { id: 168, dex: '166', name: 'Basculin', types: ['Water'], row: 24, col: 7 },
    { id: 169, dex: '167', name: 'Basculegion', types: ['Water', 'Ghost'], row: 26, col: 7 },
    { id: 170, dex: '168', name: 'Vulpix', types: ['Fire'], row: 0, col: 7 },
    { id: 172, dex: '169', name: 'Ninetales', types: ['Fire'], row: 0, col: 9 },
    { id: 171, dex: '168', name: 'Vulpix\xa0', types: ['Ice'], row: 0, col: 8 },
    { id: 173, dex: '169', name: 'Ninetales\xa0', types: ['Ice', 'Fairy'], row: 0, col: 10 },
    { id: 174, dex: '170', name: 'Tentacool', types: ['Water', 'Poison'], row: 2, col: 2 },
    { id: 175, dex: '171', name: 'Tentacruel', types: ['Water', 'Poison'], row: 2, col: 3 },
    { id: 176, dex: '172', name: 'Finneon', types: ['Water'], row: 19, col: 0 },
    { id: 177, dex: '173', name: 'Lumineon', types: ['Water'], row: 19, col: 1 },
    { id: 178, dex: '174', name: 'Magby', types: ['Fire'], row: 10, col: 1 },
    { id: 179, dex: '175', name: 'Magmar', types: ['Fire'], row: 4, col: 1 },
    { id: 180, dex: '176', name: 'Magmortar', types: ['Fire'], row: 20, col: 3 },
    { id: 181, dex: '177', name: 'Magnemite', types: ['Electric', 'Steel'], row: 2, col: 9 },
    { id: 182, dex: '178', name: 'Magneton', types: ['Electric', 'Steel'], row: 2, col: 10 },
    { id: 183, dex: '179', name: 'Magnezone', types: ['Electric', 'Steel'], row: 19, col: 10 },
    { id: 184, dex: '180', name: 'Bronzor', types: ['Steel', 'Psychic'], row: 17, col: 0 },
    { id: 185, dex: '181', name: 'Bronzong', types: ['Steel', 'Psychic'], row: 17, col: 1 },
    { id: 186, dex: '182', name: 'Elekid', types: ['Electric'], row: 10, col: 0 },
    { id: 187, dex: '183', name: 'Electabuzz', types: ['Electric'], row: 4, col: 0 },
    { id: 188, dex: '184', name: 'Electivire', types: ['Electric'], row: 20, col: 2 },
    { id: 189, dex: '185', name: 'Gligar', types: ['Ground', 'Flying'], row: 8, col: 3 },
    { id: 190, dex: '186', name: 'Gliscor', types: ['Ground', 'Flying'], row: 20, col: 8 },
    { id: 191, dex: '187', name: 'Gible', types: ['Dragon', ' Ground'], row: 17, col: 8 },
    { id: 192, dex: '188', name: 'Gabite', types: ['Dragon', 'Ground'], row: 17, col: 10 },
    { id: 193, dex: '189', name: 'Garchomp', types: ['Dragon', 'Ground'], row: 17, col: 12 },
    { id: 194, dex: '190', name: 'Nosepass', types: ['Rock'], row: 10, col: 13 },
    { id: 195, dex: '191', name: 'Probopass', types: ['Rock', 'Steel'], row: 20, col: 13 },
    { id: 196, dex: '192', name: 'Voltorb', types: ['Electric', 'Grass'], row: 3, col: 1 },
    { id: 197, dex: '193', name: 'Electrode', types: ['Electric', 'Grass'], row: 3, col: 2 },
    { id: 198, dex: '194', name: 'Rotom', types: ['Electric', 'Ghost'], row: 21, col: 2 },
    { id: 199, dex: '195', name: 'Chingling', types: ['Psychic'], row: 16, col: 11 },
    { id: 200, dex: '196', name: 'Chimecho', types: ['Psychic'], row: 11, col: 6 },
    { id: 201, dex: '197', name: 'Misdreavus', types: ['Ghost'], row: 6, col: 2 },
    { id: 202, dex: '198', name: 'Mismagius', types: ['Ghost'], row: 16, col: 7 },
    { id: 203, dex: '199', name: 'Cleffa', types: ['Fairy'], row: 5, col: 4 },
    { id: 204, dex: '200', name: 'Clefairy', types: ['Fairy'], row: 0, col: 5 },
    { id: 205, dex: '201', name: 'Clefable', types: ['Fairy'], row: 0, col: 6 },
    { id: 206, dex: '202', name: 'Sneasel', types: ['Fighting', 'Poison'], row: 9, col: 1 },
    { id: 208, dex: '203', name: 'Sneasler', types: ['Fighting', 'Poison'], row: 26, col: 3 },
    { id: 207, dex: '202', name: 'Sneasel\xa0', types: ['Dark', 'Ice'], row: 9, col: 0 },
    { id: 209, dex: '204', name: 'Weavile', types: ['Dark', 'Ice'], row: 19, col: 8 },
    { id: 210, dex: '205', name: 'Snorunt', types: ['Ice'], row: 11, col: 7 },
    { id: 211, dex: '206', name: 'Glalie', types: ['Ice'], row: 11, col: 8 },
    { id: 212, dex: '207', name: 'Froslass', types: ['Ice', 'Ghost'], row: 21, col: 1 },
    { id: 213, dex: '208', name: 'Cranidos', types: ['Rock'], row: 14, col: 2 },
    { id: 214, dex: '209', name: 'Rampardos', types: ['Rock'], row: 14, col: 3 },
    { id: 215, dex: '210', name: 'Shieldon', types: ['Rock', 'Steel'], row: 14, col: 4 },
    { id: 216, dex: '211', name: 'Bastiodon', types: ['Rock', 'Steel'], row: 14, col: 5 },
    { id: 217, dex: '212', name: 'Swinub', types: ['Ice', 'Ground'], row: 9, col: 5 },
    { id: 218, dex: '213', name: 'Piloswine', types: ['Ice', 'Ground'], row: 9, col: 6 },
    { id: 219, dex: '214', name: 'Mamoswine', types: ['Ice', 'Ground'], row: 20, col: 9 },
    { id: 220, dex: '215', name: 'Bergmite', types: ['Ice'], row: 25, col: 4 },
    { id: 221, dex: '216', name: 'Avalugg', types: ['Ice', 'Rock'], row: 25, col: 5 },
    { id: 222, dex: '217', name: 'Snover', types: ['Ice', 'Grass'], row: 19, col: 4 },
    { id: 223, dex: '218', name: 'Abomasnow', types: ['Ice', 'Grass'], row: 19, col: 6 },
    { id: 224, dex: '219', name: 'Zorua', types: ['Normal', 'Ghost'], row: 24, col: 8 },
    { id: 225, dex: '220', name: 'Zoroark', types: ['Normal', 'Ghost'], row: 24, col: 9 },
    { id: 226, dex: '221', name: 'Rufflet', types: ['Normal', 'Flying'], row: 24, col: 10 },
    { id: 227, dex: '222', name: 'Braviary', types: ['Psychic', 'Flying'], row: 24, col: 11 },
    { id: 228, dex: '223', name: 'Riolu', types: ['Fighting'], row: 18, col: 0 },
    { id: 229, dex: '224', name: 'Lucario', types: ['Fighting', 'Steel'], row: 18, col: 1 },
    { id: 230, dex: '225', name: 'Uxie', types: ['Psychic'], row: 21, col: 8 },
    { id: 231, dex: '226', name: 'Mesprit', types: ['Psychic'], row: 21, col: 9 },
    { id: 232, dex: '227', name: 'Azelf', types: ['Psychic'], row: 21, col: 10 },
    { id: 233, dex: '228', name: 'Heatran', types: ['Fire', 'Steel'], row: 22, col: 1 },
    { id: 234, dex: '229', name: 'Regigigas', types: ['Normal'], row: 22, col: 2 },
    { id: 235, dex: '230', name: 'Cresselia', types: ['Psychic'], row: 22, col: 5 },
    { id: 236, dex: '231', name: 'Tornadus', types: ['Flying'], row: 24, col: 12 },
    { id: 237, dex: '232', name: 'Thundurus', types: ['Electric', 'Flying'], row: 25, col: 0 },
    { id: 238, dex: '233', name: 'Landorus', types: ['Ground', 'Flying'], row: 25, col: 2 },
    { id: 239, dex: '234', name: 'Enamorus', types: ['Fairy', 'Flying'], row: 26, col: 4 },
    { id: 240, dex: '235', name: 'Dialga', types: ['Steel', 'Dragon'], row: 21, col: 11 },
    { id: 241, dex: '236', name: 'Palkia', types: ['Water', 'Dragon'], row: 21, col: 13 },
    { id: 242, dex: '237', name: 'Giratina', types: ['Ghost', 'Dragon'], row: 22, col: 3 },
    { id: 243, dex: '238', name: 'Arceus', types: ['Normal'], row: 22, col: 11 },
    { id: 244, dex: '239', name: 'Phione', types: ['Water'], row: 22, col: 6 },
    { id: 245, dex: '240', name: 'Manaphy', types: ['Water'], row: 22, col: 7 },
    { id: 246, dex: '241', name: 'Shaymin', types: ['Grass'], row: 22, col: 9 },
    { id: 247, dex: '242', name: 'Darkrai', types: ['Dark'], row: 22, col: 8 },
];

const banlist_legends = new Set([
    'Uxie',
    'Mesprit',
    'Azelf',
    'Heatran',
    'Regigigas',
    'Cresselia',
    'Tornadus',
    'Thundurus',
    'Landorus',
    'Enamorus',
    'Dialga',
    'Palkia',
    'Giratina',
    'Arceus',
    'Phione',
    'Manaphy',
    'Shaymin',
    'Darkrai',
]);

const banlist_bingo = new Set([
    ...banlist_legends,
    'Rowlet',
    'Datrix',
    'Decidueye',
    'Cyndaquil',
    'Quilava',
    'Typhlosion',
    'Oshawott',
    'Dewott',
    'Samurott',
    'Wyrdeer',
    'Kleavor',
    'Scizor',
    'Overqwil',
    'Ursaluna',
    'Basculegion',
    'Vulpix\xa0',
    'Ninetales\xa0',
    'Magnemite',
    'Magneton',
    'Sneasel',
    'Weavile',
]);

const la_dex_no_legends = la_dex_full.filter((entry) => !banlist_legends.has(entry.name));

const la_dex_bingoable = la_dex_full.filter((entry) => !banlist_bingo.has(entry.name));

export { PicturedexLA, Copyright, la_dex_full, la_dex_no_legends, la_dex_bingoable };
