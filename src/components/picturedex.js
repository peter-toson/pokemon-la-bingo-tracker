import React from 'react';
import spritesheet from '../../public/img/spritesheet_la.png';

class Sprite extends React.Component {
    onClick = () => {
        console.log('Sprite.callback', this.props.name);
        if (this.props.callback != null) {
            this.props.callback(this.props.name);
        }
    };

    render() {
        const config = this.props.config;

        const bg_width = Math.round(config.sheet_width * config.sprite_scale);
        const bg_height = Math.round(config.sheet_height * config.sprite_scale);
        const offset_x = Math.round(
            (-this.props.col * config.tiling_size - config.tiling_border) * config.sprite_scale
        );
        const offset_y = Math.round(
            (-this.props.row * config.tiling_size - config.tiling_border) * config.sprite_scale
        );
        const bg_size = Math.round((config.tiling_size - 2 * config.tiling_border) * config.sprite_scale);

        const style_entry = {
            width: bg_size,
            height: bg_size + config.textsize,
        };

        const style_sprite = {
            backgroundImage: `url(${spritesheet})`,
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
            overflow: 'hidden',
        };

        return (
            <div className="PicturedexEntry>" style={style_entry} onClick={this.onClick}>
                <div className="Sprite" style={style_sprite} />
                <div className="Name" style={style_text}>
                    {this.props.name}
                </div>
            </div>
        );
    }
}
class PicturedexLA extends React.Component {
    callback = (name) => {
        console.log('PicturedexLA.callback', name);
    };

    render() {
        const config = {
            sheet_width: 1822,
            sheet_height: 3512,
            tiling_border: 8,
            tiling_size: 130,
            sprite_scale: 0.3,
            textsize: 10,
        };

        return (
            <div className="PicturedexLA" style={{ display: 'flex', gap: '4px 4px' }}>
                <Sprite config={config} row={0} col={3} name="Raichu" callback={this.callback} />
                <Sprite config={config} row={1} col={3} name="Psyduck" callback={this.callback} />
                <Sprite config={config} row={2} col={3} name="Tentacruel" callback={this.callback} />
                <Sprite config={config} row={3} col={3} name="Electrode" callback={this.callback} />
                <Sprite config={config} row={4} col={3} name="Magikarp" callback={this.callback} />
                <Sprite config={config} row={5} col={3} name="Pichu" callback={this.callback} />
                <Sprite config={config} row={6} col={3} name="Unown" callback={this.callback} />
                <Sprite config={config} row={8} col={3} name="Gligar" callback={this.callback} />
                <Sprite config={config} row={9} col={3} name="Ursaring" callback={this.callback} />
            </div>
        );
    }
}

export { PicturedexLA };
