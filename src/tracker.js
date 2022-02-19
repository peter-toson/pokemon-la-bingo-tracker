import React from 'react';

const pokedex_info = [
    { key: 223, dex: '218', name: 'Abomasnow', types: ['Ice', 'Grass'] },
    { key: 60, dex: '058', name: 'Abra', types: ['Psychic'] },
    { key: 80, dex: '078', name: 'Aipom', types: ['Normal'] },
    { key: 62, dex: '060', name: 'Alakazam', types: ['Psychic'] },
    { key: 81, dex: '079', name: 'Ambipom', types: ['Normal'] },
    { key: 153, dex: '151', name: 'Arcanine', types: ['Fire', 'Rock'] },
    //  { key: 243, dex: "238", name: "Arceus", types: ["Normal"] },
    { key: 221, dex: '216', name: 'Avalugg', types: ['Ice', 'Rock'] },
    //  { key: 232, dex: "227", name: "Azelf", types: ["Psychic"] },
    { key: 99, dex: '097', name: 'Barboach', types: ['Water', 'Ground'] },
    { key: 169, dex: '167', name: 'Basculegion', types: ['Water', 'Ghost'] },
    { key: 168, dex: '166', name: 'Basculin', types: ['Water'] },
    //  { key: 216, dex: "211", name: "Bastiodon", types: ["Rock", "Steel"] },
    { key: 20, dex: '020', name: 'Beautifly', types: ['Bug', 'Flying'] },
    { key: 220, dex: '215', name: 'Bergmite', types: ['Ice'] },
    { key: 11, dex: '011', name: 'Bibarel', types: ['Normal', 'Water'] },
    { key: 10, dex: '010', name: 'Bidoof', types: ['Normal'] },
    { key: 90, dex: '088', name: 'Blissey', types: ['Normal'] },
    { key: 125, dex: '123', name: 'Bonsly', types: ['Rock'] },
    { key: 227, dex: '222', name: 'Braviary', types: ['Psychic', 'Flying'] },
    { key: 185, dex: '181', name: 'Bronzong', types: ['Steel', 'Psychic'] },
    { key: 184, dex: '180', name: 'Bronzor', types: ['Steel', 'Psychic'] },
    { key: 91, dex: '089', name: 'Budew', types: ['Grass', 'Poison'] },
    { key: 41, dex: '041', name: 'Buizel', types: ['Water'] },
    { key: 66, dex: '064', name: 'Buneary', types: ['Normal'] },
    { key: 43, dex: '043', name: 'Burmy', types: ['Bug'] },
    { key: 94, dex: '092', name: 'Carnivine', types: ['Grass'] },
    { key: 21, dex: '021', name: 'Cascoon', types: ['Bug'] },
    { key: 89, dex: '087', name: 'Chansey', types: ['Normal'] },
    { key: 159, dex: '157', name: 'Chatot', types: ['Normal', 'Flying'] },
    { key: 69, dex: '067', name: 'Cherrim', types: ['Grass'] },
    { key: 68, dex: '066', name: 'Cherubi', types: ['Grass'] },
    { key: 63, dex: '061', name: 'Chimchar', types: ['Fire'] },
    { key: 200, dex: '196', name: 'Chimecho', types: ['Psychic'] },
    { key: 199, dex: '195', name: 'Chingling', types: ['Psychic'] },
    { key: 205, dex: '201', name: 'Clefable', types: ['Fairy'] },
    { key: 204, dex: '200', name: 'Clefairy', types: ['Fairy'] },
    { key: 203, dex: '199', name: 'Cleffa', types: ['Fairy'] },
    { key: 72, dex: '070', name: 'Combee', types: ['Bug', 'Flying'] },
    //  { key: 213, dex: "208", name: "Cranidos", types: ["Rock"] },
    //  { key: 235, dex: "230", name: "Cresselia", types: ["Psychic"] },
    { key: 101, dex: '099', name: 'Croagunk', types: ['Poison', 'Fighting'] },
    { key: 36, dex: '036', name: 'Crobat', types: ['Poison', 'Flying'] },
    { key: 4, dex: '004', name: 'Cyndaquil', types: ['Fire'] },
    //  { key: 247, dex: "242", name: "Darkrai", types: ["Dark"] },
    { key: 2, dex: '002', name: 'Datrix', types: ['Grass', 'Flying'] },
    { key: 3, dex: '003', name: 'Decidueye', types: ['Grass', 'Fighting'] },
    { key: 8, dex: '008', name: 'Dewott', types: ['Water'] },
    //  { key: 240, dex: "235", name: "Dialga", types: ["Steel", "Dragon"] },
    { key: 151, dex: '149', name: 'Drapion', types: ['Poison', 'Dark'] },
    { key: 38, dex: '038', name: 'Drifblim', types: ['Ghost ', ' Flying'] },
    { key: 37, dex: '037', name: 'Drifloon', types: ['Ghost ', ' Flying'] },
    { key: 161, dex: '159', name: 'Dusclops', types: ['Ghost'] },
    { key: 162, dex: '160', name: 'Dusknoir', types: ['Ghost'] },
    { key: 160, dex: '158', name: 'Duskull', types: ['Ghost'] },
    { key: 22, dex: '022', name: 'Dustox', types: ['Bug', 'Poison'] },
    { key: 25, dex: '025', name: 'Eevee', types: ['Normal'] },
    { key: 187, dex: '183', name: 'Electabuzz', types: ['Electric'] },
    { key: 188, dex: '184', name: 'Electivire', types: ['Electric'] },
    { key: 197, dex: '193', name: 'Electrode', types: ['Electric', 'Grass'] },
    { key: 186, dex: '182', name: 'Elekid', types: ['Electric'] },
    { key: 165, dex: '163', name: 'Empoleon', types: ['Water', 'Steel'] },
    //  { key: 239, dex: "234", name: "Enamorus", types: ["Fairy", "Flying"] },
    { key: 29, dex: '029', name: 'Espeon', types: ['Psychic'] },
    { key: 176, dex: '172', name: 'Finneon', types: ['Water'] },
    { key: 28, dex: '028', name: 'Flareon', types: ['Fire'] },
    { key: 42, dex: '042', name: 'Floatzel', types: ['Water'] },
    { key: 212, dex: '207', name: 'Froslass', types: ['Ice', 'Ghost'] },
    { key: 192, dex: '188', name: 'Gabite', types: ['Dragon', 'Ground'] },
    { key: 106, dex: '104', name: 'Gallade', types: ['Psychic', 'Fighting'] },
    { key: 193, dex: '189', name: 'Garchomp', types: ['Dragon', 'Ground'] },
    { key: 105, dex: '103', name: 'Gardevoir', types: ['Psychic', ' Fairy'] },
    { key: 138, dex: '136', name: 'Gastly', types: ['Ghost', 'Poison'] },
    { key: 85, dex: '083', name: 'Gastrodon', types: ['Water', 'Ground'] },
    { key: 140, dex: '138', name: 'Gengar', types: ['Ghost', 'Poison'] },
    { key: 48, dex: '046', name: 'Geodude', types: ['Rock', 'Ground'] },
    { key: 191, dex: '187', name: 'Gible', types: ['Dragon', ' Ground'] },
    //  { key: 242, dex: "237", name: "Giratina", types: ["Ghost", "Dragon"] },
    { key: 32, dex: '032', name: 'Glaceon', types: ['Ice'] },
    { key: 211, dex: '206', name: 'Glalie', types: ['Ice'] },
    { key: 154, dex: '152', name: 'Glameow', types: ['Normal'] },
    { key: 189, dex: '185', name: 'Gligar', types: ['Ground', 'Flying'] },
    { key: 190, dex: '186', name: 'Gliscor', types: ['Ground', 'Flying'] },
    { key: 35, dex: '035', name: 'Golbat', types: ['Poison', 'Flying'] },
    { key: 71, dex: '069', name: 'Golduck', types: ['Water'] },
    { key: 50, dex: '048', name: 'Golem', types: ['Rock', 'Ground'] },
    { key: 119, dex: '117', name: 'Goodra', types: ['Dragon', 'Steel'] },
    { key: 117, dex: '115', name: 'Goomy', types: ['Dragon'] },
    { key: 49, dex: '047', name: 'Graveler', types: ['Rock', 'Ground'] },
    { key: 133, dex: '131', name: 'Grotle', types: ['Grass'] },
    { key: 152, dex: '150', name: 'Growlithe', types: ['Fire', 'Rock'] },
    { key: 83, dex: '081', name: 'Gyarados', types: ['Water', 'Flying'] },
    { key: 88, dex: '086', name: 'Happiny', types: ['Normal'] },
    { key: 139, dex: '137', name: 'Haunter', types: ['Ghost', 'Poison'] },
    //  { key: 233, dex: "228", name: "Heatran", types: ["Fire", "Steel"] },
    { key: 77, dex: '075', name: 'Heracross', types: ['Bug', 'Fighting'] },
    { key: 109, dex: '107', name: 'Hippopotas', types: ['Ground'] },
    { key: 110, dex: '108', name: 'Hippowdon', types: ['Ground'] },
    { key: 143, dex: '141', name: 'Honchkrow', types: ['Dark', 'Flying'] },
    { key: 65, dex: '063', name: 'Infernape', types: ['Fire', 'Fighting'] },
    { key: 27, dex: '027', name: 'Jolteon', types: ['Electric'] },
    { key: 61, dex: '059', name: 'Kadabra', types: ['Psychic'] },
    { key: 104, dex: '102', name: 'Kirlia', types: ['Psychic', 'Fairy'] },
    { key: 75, dex: '073', name: 'Kleavor', types: ['Bug', 'Rock'] },
    { key: 39, dex: '039', name: 'Kricketot', types: ['Bug'] },
    { key: 40, dex: '040', name: 'Kricketune', types: ['Bug'] },
    // { key: 238, dex: "233", name: "Landorus", types: ["Ground", "Flying"] },
    { key: 31, dex: '031', name: 'Leafeon', types: ['Grass'] },
    { key: 128, dex: '126', name: 'Lickilicky', types: ['Normal'] },
    { key: 127, dex: '125', name: 'Lickitung', types: ['Normal'] },
    { key: 96, dex: '094', name: 'Lilligant', types: ['Grass', 'Fighting'] },
    { key: 67, dex: '065', name: 'Lopunny', types: ['Normal'] },
    { key: 229, dex: '224', name: 'Lucario', types: ['Fighting', 'Steel'] },
    { key: 177, dex: '173', name: 'Lumineon', types: ['Water'] },
    { key: 16, dex: '016', name: 'Luxio', types: ['Electric'] },
    { key: 17, dex: '017', name: 'Luxray', types: ['Electric'] },
    { key: 158, dex: '156', name: 'Machamp', types: ['Fighting'] },
    { key: 157, dex: '155', name: 'Machoke', types: ['Fighting'] },
    { key: 156, dex: '154', name: 'Machop', types: ['Fighting'] },
    { key: 178, dex: '174', name: 'Magby', types: ['Fire'] },
    { key: 82, dex: '080', name: 'Magikarp', types: ['Water'] },
    { key: 179, dex: '175', name: 'Magmar', types: ['Fire'] },
    { key: 180, dex: '176', name: 'Magmortar', types: ['Fire'] },
    //  { key: 181, dex: "177", name: "Magnemite", types: ["Electric", "Steel"] },
    //  { key: 182, dex: "178", name: "Magneton", types: ["Electric", "Steel"] },
    { key: 183, dex: '179', name: 'Magnezone', types: ['Electric', 'Steel'] },
    { key: 219, dex: '214', name: 'Mamoswine', types: ['Ice', 'Ground'] },
    //  { key: 245, dex: "240", name: "Manaphy", types: ["Water"] },
    { key: 167, dex: '165', name: 'Mantine', types: ['Water', 'Flying'] },
    { key: 166, dex: '164', name: 'Mantyke', types: ['Water', 'Flying'] },
    //  { key: 231, dex: "226", name: "Mesprit", types: ["Psychic"] },
    { key: 78, dex: '076', name: 'Mime Jr.', types: ['Psychic', 'Fairy'] },
    { key: 201, dex: '197', name: 'Misdreavus', types: ['Ghost'] },
    { key: 202, dex: '198', name: 'Mismagius', types: ['Ghost'] },
    { key: 64, dex: '062', name: 'Monferno', types: ['Fire', 'Fighting'] },
    { key: 47, dex: '045', name: 'Mothim', types: ['Bug', 'Flying'] },
    { key: 79, dex: '077', name: 'Mr. Mime', types: ['Psychic', 'Fairy'] },
    { key: 53, dex: '051', name: 'Munchlax', types: ['Normal'] },
    { key: 142, dex: '140', name: 'Murkrow', types: ['Dark', 'Flying'] },
    { key: 172, dex: '169', name: 'Ninetales', types: ['Fire'] },
    //  { key: 173, dex: "169", name: "Ninetales (Alola)", types: ["Ice", "Fairy"] },
    { key: 194, dex: '190', name: 'Nosepass', types: ['Rock'] },
    { key: 149, dex: '147', name: 'Octillery', types: ['Water'] },
    { key: 120, dex: '118', name: 'Onix', types: ['Rock', 'Ground'] },
    { key: 7, dex: '007', name: 'Oshawott', types: ['Water'] },
    { key: 87, dex: '085', name: 'Overqwil', types: ['Dark', 'Poison'] },
    { key: 111, dex: '109', name: 'Pachirisu', types: ['Electric'] },
    //  { key: 241, dex: "236", name: "Palkia", types: ["Water", "Dragon"] },
    { key: 55, dex: '053', name: 'Paras', types: ['Bug', 'Grass'] },
    { key: 56, dex: '054', name: 'Parasect', types: ['Bug', 'Grass'] },
    { key: 95, dex: '093', name: 'Petilil', types: ['Grass'] },
    //  { key: 244, dex: "239", name: "Phione", types: ["Water"] },
    { key: 57, dex: '055', name: 'Pichu', types: ['Electric'] },
    { key: 58, dex: '056', name: 'Pikachu', types: ['Electric'] },
    { key: 218, dex: '213', name: 'Piloswine', types: ['Ice', 'Ground'] },
    { key: 163, dex: '161', name: 'Piplup', types: ['Water'] },
    { key: 23, dex: '023', name: 'Ponyta', types: ['Fire'] },
    { key: 135, dex: '133', name: 'Porygon', types: ['Normal'] },
    { key: 136, dex: '134', name: 'Porygon2', types: ['Normal'] },
    { key: 137, dex: '135', name: 'Porygon-Z', types: ['Normal'] },
    { key: 164, dex: '162', name: 'Prinplup', types: ['Water'] },
    { key: 195, dex: '191', name: 'Probopass', types: ['Rock', 'Steel'] },
    { key: 70, dex: '068', name: 'Psyduck', types: ['Water'] },
    { key: 155, dex: '153', name: 'Purugly', types: ['Normal'] },
    { key: 5, dex: '005', name: 'Quilava', types: ['Fire'] },
    { key: 86, dex: '084', name: 'Qwilfish', types: ['Dark', 'Poison'] },
    { key: 59, dex: '057', name: 'Raichu', types: ['Electric'] },
    { key: 103, dex: '101', name: 'Ralts', types: ['Psychic', 'Fairy'] },
    //{ key: 214, dex: '209', name: 'Rampardos', types: ['Rock'] },
    { key: 24, dex: '024', name: 'Rapidash', types: ['Fire'] },
    //  { key: 234, dex: "229", name: "Regigigas", types: ["Normal"] },
    { key: 148, dex: '146', name: 'Remoraid', types: ['Water'] },
    { key: 123, dex: '121', name: 'Rhydon', types: ['Ground', 'Rock'] },
    { key: 122, dex: '120', name: 'Rhyhorn', types: ['Ground', 'Rock'] },
    { key: 124, dex: '122', name: 'Rhyperior', types: ['Ground', 'Rock'] },
    { key: 228, dex: '223', name: 'Riolu', types: ['Fighting'] },
    { key: 92, dex: '090', name: 'Roselia', types: ['Grass', 'Poison'] },
    { key: 93, dex: '091', name: 'Roserade', types: ['Grass', 'Poison'] },
    { key: 198, dex: '194', name: 'Rotom', types: ['Electric', 'Ghost'] },
    { key: 1, dex: '001', name: 'Rowlet', types: ['Grass ', 'Flying'] },
    { key: 226, dex: '221', name: 'Rufflet', types: ['Normal', 'Flying'] },
    { key: 9, dex: '009', name: 'Samurott', types: ['Water', 'Dark'] },
    { key: 76, dex: '074', name: 'Scizor', types: ['Bug', 'Steel'] },
    { key: 74, dex: '072', name: 'Scyther', types: ['Bug', 'Flying'] },
    { key: 146, dex: '144', name: 'Sealeo', types: ['Ice', 'Water'] },
    //  { key: 246, dex: "241", name: "Shaymin", types: ["Grass"] },
    { key: 84, dex: '082', name: 'Shellos', types: ['Water'] },
    //{ key: 215, dex: '210', name: 'Shieldon', types: ['Rock', 'Steel'] },
    { key: 15, dex: '015', name: 'Shinx', types: ['Electric'] },
    { key: 19, dex: '019', name: 'Silcoon', types: ['Bug'] },
    { key: 150, dex: '148', name: 'Skorupi', types: ['Poison', 'Bug'] },
    { key: 113, dex: '111', name: 'Skuntank', types: ['Poison', 'Dark'] },
    { key: 118, dex: '116', name: 'Sliggoo', types: ['Dragon', 'Steel'] },
    { key: 206, dex: '202', name: 'Sneasel', types: ['Fighting', 'Poison'] },
    //  { key: 207, dex: "202", name: "Sneasel (Kanto)", types: ["Dark", "Ice"] },
    { key: 208, dex: '203', name: 'Sneasler', types: ['Fighting', 'Poison'] },
    { key: 54, dex: '052', name: 'Snorlax', types: ['Normal'] },
    { key: 210, dex: '205', name: 'Snorunt', types: ['Ice'] },
    { key: 222, dex: '217', name: 'Snover', types: ['Ice', 'Grass'] },
    { key: 145, dex: '143', name: 'Spheal', types: ['Ice', 'Water'] },
    //  { key: 141, dex: "139", name: "Spiritomb", types: ["Ghost", "Dark"] },
    { key: 51, dex: '049', name: 'Stantler', types: ['Normal'] },
    { key: 14, dex: '014', name: 'Staraptor', types: ['Normal', 'Flying'] },
    { key: 13, dex: '013', name: 'Staravia', types: ['Normal', 'Flying'] },
    { key: 12, dex: '012', name: 'Starly', types: ['Normal', 'Flying'] },
    { key: 121, dex: '119', name: 'Steelix', types: ['Steel', 'Ground'] },
    { key: 112, dex: '110', name: 'Stunky', types: ['Poison', 'Dark'] },
    { key: 126, dex: '124', name: 'Sudowoodo', types: ['Rock'] },
    { key: 217, dex: '212', name: 'Swinub', types: ['Ice', 'Ground'] },
    { key: 33, dex: '033', name: 'Sylveon', types: ['Fairy'] },
    { key: 97, dex: '095', name: 'Tangela', types: ['Grass'] },
    { key: 98, dex: '096', name: 'Tangrowth', types: ['Grass'] },
    { key: 114, dex: '112', name: 'Teddiursa', types: ['Normal'] },
    { key: 174, dex: '170', name: 'Tentacool', types: ['Water', 'Poison'] },
    { key: 175, dex: '171', name: 'Tentacruel', types: ['Water', 'Poison'] },
    //  { key: 237, dex: "232", name: "Thundurus", types: ["Electric", "Flying"] },
    { key: 131, dex: '129', name: 'Togekiss', types: ['Fairy', 'Flying'] },
    { key: 129, dex: '127', name: 'Togepi', types: ['Fairy'] },
    { key: 130, dex: '128', name: 'Togetic', types: ['Fairy', 'Flying'] },
    { key: 236, dex: '231', name: 'Tornadus', types: ['Flying'] },
    { key: 134, dex: '132', name: 'Torterra', types: ['Grass', 'Ground'] },
    { key: 102, dex: '100', name: 'Toxicroak', types: ['Poison', 'Fighting'] },
    { key: 132, dex: '130', name: 'Turtwig', types: ['Grass'] },
    { key: 6, dex: '006', name: 'Typhlosion', types: ['Fire', 'Ghost'] },
    { key: 30, dex: '030', name: 'Umbreon', types: ['Dark'] },
    { key: 144, dex: '142', name: 'Unown', types: ['Psychic'] },
    { key: 116, dex: '114', name: 'Ursaluna', types: ['Ground', 'Normal'] },
    { key: 115, dex: '113', name: 'Ursaring', types: ['Normal'] },
    { key: 230, dex: '225', name: 'Uxie', types: ['Psychic'] },
    { key: 26, dex: '026', name: 'Vaporeon', types: ['Water'] },
    { key: 73, dex: '071', name: 'Vespiquen', types: ['Bug', 'Flying'] },
    { key: 196, dex: '192', name: 'Voltorb', types: ['Electric', 'Grass'] },
    { key: 170, dex: '168', name: 'Vulpix', types: ['Fire'] },
    //  { key: 171, dex: "168", name: "Vulpix (Alola)", types: ["Ice"] },
    { key: 147, dex: '145', name: 'Walrein', types: ['Ice', 'Water'] },
    //  { key: 209, dex: "204", name: "Weavile", types: ["Dark", "Ice"] },
    { key: 100, dex: '098', name: 'Whiscash', types: ['Water', 'Ground'] },
    { key: 44, dex: '044', name: 'Wormadam Gr', types: ['Bug', 'Grass'] },
    { key: 45, dex: '044', name: 'Wormadam Br', types: ['Bug', 'Ground'] },
    { key: 46, dex: '044', name: 'Wormadam Pk', types: ['Bug', 'Steel'] },
    { key: 18, dex: '018', name: 'Wurmple', types: ['Bug'] },
    { key: 52, dex: '050', name: 'Wyrdeer', types: ['Normal', 'Psychic'] },
    { key: 107, dex: '105', name: 'Yanma', types: ['Bug', 'Flying'] },
    { key: 108, dex: '106', name: 'Yanmega', types: ['Bug', 'Flying'] },
    { key: 225, dex: '220', name: 'Zoroark', types: ['Normal', 'Ghost'] },
    { key: 224, dex: '219', name: 'Zorua', types: ['Normal', 'Ghost'] },
    { key: 34, dex: '034', name: 'Zubat', types: ['Poison', 'Flying'] },
];

const all_types = [...new Set(pokedex_info.reduce((result, entry) => result.concat(entry.types), new Array(0)))];

class PokemonTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: Date.now(),
            caught: [],
        };
    }

    updateDimensions = () => {
        //console.log('updateDimensions')
        const now = Date.now();
        if (now > this.state.timestamp + 100) {
            //console.log('updateDimensions does something')
            this.setState({
                key: now,
                caught: this.state.caught,
            });
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    renderPokemonButton(pokedex_entry) {
        return (
            <button className="PokemonButton" onClick={() => this.handlePokemonClick(pokedex_entry)}>
                {pokedex_entry.name}
            </button>
        );
    }

    renderPokedexButtons() {
        const number_columns = Math.floor(window.innerWidth / 105 - 0.3);
        const number_rows = Math.ceil(pokedex_info.length / number_columns);
        const height = number_rows * 28;
        const div_style = {
            height: height + 'px',
        };
        //console.log(window.window.innerWidth, height);
        return (
            <div className="PokedexButtons" style={div_style}>
                {pokedex_info.map((x) => this.renderPokemonButton(x))}
            </div>
        );
    }

    caught_entry_to_string(caught_entry) {
        return caught_entry.state + (caught_entry.alpha ? ' Alpha ' : ' ') + caught_entry.pokemon.name;
    }

    renderCaughtPokemonList() {
        return (
            <div className="CaughtList">
                <h3>Pokemon List</h3>
                {this.state.caught.map((x) => (
                    <>
                        {this.caught_entry_to_string(x)}
                        <br />
                    </>
                ))}
            </div>
        );
    }

    renderStatistics() {
        function count(state, filter_func) {
            const pre_filtered_entries = state.caught.filter((item) => filter_func(item));

            const count_catches = pre_filtered_entries.filter((item) => {
                return item.state === 'catch';
            }).length;

            const count_unique_catches = [
                ...new Set(
                    pre_filtered_entries.filter((item) => item.state === 'catch').map((item) => item.pokemon.dex)
                ),
            ].length;

            const count_kos = pre_filtered_entries.filter((item) => item.state === 'KO').length;

            const count_unique_kos = [
                ...new Set(pre_filtered_entries.filter((item) => item.state === 'KO').map((item) => item.pokemon.dex)),
            ].length;

            const count_evos = pre_filtered_entries.filter((item) => item.state === 'evolve').length;

            const count_unique_evos = [
                ...new Set(
                    pre_filtered_entries.filter((item) => item.state === 'evolve').map((item) => item.pokemon.dex)
                ),
            ].length;

            return [count_catches, count_unique_catches, count_evos, count_unique_evos, count_kos, count_unique_kos];
        }

        function render(row_header, counts) {
            return (
                <tr>
                    <td>{row_header}</td>
                    {counts.map((entry) => (
                        <td>{entry === 0 ? '' : entry}</td>
                    ))}
                </tr>
            );
        }

        return (
            <div className="Statistics">
                <h3>Statistics</h3>
                <table className="StatisticsTable">
                    <thead>
                        <tr>
                            <th>category</th>
                            <th>catches</th>
                            <th>unique catches</th>
                            <th>evolutions</th>
                            <th>unique evolutions</th>
                            <th>KO's</th>
                            <th>unique KO's</th>
                        </tr>
                    </thead>
                    <tbody>
                        {render(
                            'all Pokemon',
                            count(this.state, (item) => {
                                return true;
                            })
                        )}
                        {render(
                            'Alpha Pokemon',
                            count(this.state, (item) => {
                                return item.alpha;
                            })
                        )}
                        {all_types.map((type) =>
                            render(
                                type + ' types',
                                count(this.state, (item) => {
                                    return item.pokemon.types.includes(type);
                                })
                            )
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    renderLastEntry() {
        let alpha = null;
        let state = null;
        let last_pokemon_name = 'Last Pokemon';
        const last = this.state.caught.length - 1;
        if (last > -1) {
            alpha = this.state.caught[last].alpha;
            state = this.state.caught[last].state;
            last_pokemon_name = this.state.caught[last].pokemon.name;
        }
        return (
            <>
                <h3>Edit Last Pokemon</h3>
                <div className="edit_last_entry">
                    <div className="toggle_button_group">
                        <button
                            className={state === 'catch' ? 'active_toggle' : 'inactive_toggle'}
                            onClick={() => this.editLastPokemon('state', 'catch')}
                        >
                            Catch
                        </button>
                        <button
                            className={state === 'evolve' ? 'active_toggle' : 'inactive_toggle'}
                            onClick={() => this.editLastPokemon('state', 'evolve')}
                        >
                            Evolve
                        </button>
                        <button
                            className={state === 'KO' ? 'active_toggle' : 'inactive_toggle'}
                            onClick={() => this.editLastPokemon('state', 'KO')}
                        >
                            KO
                        </button>
                    </div>
                    <div className="toggle_button_group">
                        <button
                            className={alpha === false ? 'active_toggle' : 'inactive_toggle'}
                            onClick={() => this.editLastPokemon('alpha', false)}
                        >
                            Normal
                        </button>
                        <button
                            className={alpha === true ? 'active_toggle' : 'inactive_toggle'}
                            onClick={() => this.editLastPokemon('alpha', true)}
                        >
                            Alpha
                        </button>
                    </div>
                    <div className="last_pokemon_name">{last_pokemon_name}</div>
                    <button className="remove_last" onClick={() => this.removeLast()}>
                        Remove
                    </button>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="PokemonTracker">
                {this.renderPokedexButtons()}
                {this.renderLastEntry()}
                {this.renderStatistics()}
                {this.renderCaughtPokemonList()}
            </div>
        );
    }

    handlePokemonClick(pokemon_info) {
        const caught = this.state.caught.concat([{ pokemon: pokemon_info, alpha: false, state: 'catch' }]);

        this.setState({ timestamp: Date.now(), caught: caught });
    }

    editLastPokemon(property, value) {
        if (this.state.caught.length === 0) {
            return;
        }

        let new_caught_list = this.state.caught.slice();
        const last = new_caught_list.length - 1;

        if (property === 'alpha') {
            new_caught_list[last].alpha = value;
        }
        if (property === 'state') {
            new_caught_list[last].state = value;
        }
        this.setState({ timestamp: Date.now(), caught: new_caught_list });
    }

    removeLast() {
        if (this.state.caught.length === 0) {
            return;
        }
        let new_caught_list = this.state.caught.slice(0, -1);
        this.setState({ caught: new_caught_list });
    }
}

export default PokemonTracker;