import React, { PureComponent } from 'react';
import { Slider, Typography } from '@material-ui/core';
import './styles.css'

class Players extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            players: 0
        };

        this.setPlayerValue = this.setPlayerValue.bind(this);
    }

setPlayerValue(e) {
    this.setState({ players: e });
}

    render() {
        return (
            <div className="slider">
                <Typography className="heading" variant="h4">Select Number of Players</Typography>
                    <Slider
                        min={1}
                        max={16}
                        step={1}
                        marks={true}
                        getAriaValueText={this.props.playerSelection}
                        defaultValue={2}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="on"
                    />
            </div>
        );
    }
}

export default Players;