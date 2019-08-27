import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import JsonFile from '../../static/characters';
import './styles.css'
import { Typography } from '@material-ui/core';

const jsonFile = JsonFile;

class Ranomizer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            randCharacters: []
        };

        this.compareJSON = this.compareJSON.bind(this);
        this.randomCharacter = this.randomCharacter.bind(this);
    }

    compareJSON() {
        let tempArray = [];
        for (let i = 0; i < jsonFile.length; i++) {
            if (this.props.tiersArray[i].checked) {
                tempArray = tempArray.concat(jsonFile[i].characters);
            }
        }

        return tempArray;
    }

    randomCharacter() {
        let tempArray = [];
        let characterSet = this.compareJSON();
        let bgColor;

        if (characterSet.length === 0) {
            this.props.noBoxCheckDetected(true);
            return null;
        }

        for (let i = 0; i < this.props.players; i++) {
            let currentRand = characterSet[Math.floor(Math.random() * characterSet.length)];
                for (let i = 0; i < jsonFile.length; i++) {
                    if(jsonFile[i].characters.includes(currentRand)) {
                        bgColor = jsonFile[i].tier;
                    }
                }
                tempArray.push(
                    <div key={i} className={"card-container"}>
                        <img 
                            className="character-img" 
                            src={require("../../static/charactersImgs/" + currentRand.toLowerCase().replace(/ /g, '').replace(/\./g, '') + ".png")} 
                            alt={currentRand}
                        />
                    <div className={bgColor + " color-card"}></div>
                        <Typography variant="h5">Player {i + 1}:</Typography>
                        <Typography className="character" variant="h5">{currentRand}</Typography>
                    </div>
                );
        }

        this.setState({ randCharacters: tempArray });
    }
    

    render() {
        return (
            <div className="output-container">
                <div className="button-container">
                    <Button 
                        fullWidth={true} 
                        size="large" 
                        variant="contained" 
                        color="primary" 
                        onClick={this.randomCharacter}
                    ><Typography>Generate Players!</Typography></Button>
                </div>
                <div className="rendered-content-container">
                    {this.state.randCharacters}
                </div>
            </div>
        );
    }
}

export default Ranomizer;