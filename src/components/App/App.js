import React, { PureComponent } from 'react'
import Heading from '../Heading/Heading';
import Players from '../Players/Players';
import TierSelection from '../TierSelect/TierSelect';
import Ranomizer from '../Randomizer/Randomizer';
import './App.css';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            noCheckBox : null,
            backgroundClassStyle : "container",
            players: null,
            tiers: [ 
                { 
                    tier: "S",
                    checked: false
                },
                {
                    tier: "A",
                    checked: false
                },
                {
                    tier: "B",
                    checked: false
                },
                {
                    tier: "C",
                    checked: false
                },
                {
                    tier: "D",
                    checked: false
                }
            ]
        };

        this.playerSelection = this.playerSelection.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.noBoxCheckDetectedHandler = this.noBoxCheckDetectedHandler.bind(this)
    }

    playerSelection(e) {
        let currentPlayers = e;
        this.setState({ players: currentPlayers});
    }

    checkboxChange(e) {
        let letter = e.target.value;
        let checkedStatus = e.target.checked;
        let currentArray = this.state.tiers;

        for (let i = 0; i < currentArray.length; i++) {
            if (letter === currentArray[i].tier) {
                currentArray[i].checked = checkedStatus;
                break;
            }
        }
        this.setState({ tiers: currentArray });      
    }

    updateBackgroundStyle() {
        if (this.state.noCheckBox) {
            return "container error";
        }
        return "container";
    }

    noBoxCheckDetectedHandler(e) {
        this.setState({ noCheckBox : true }, () => {
            if(this.state.noCheckBox) {
                this.setState({ backgroundClassStyle : "container error"});
                setTimeout(() => {
                    this.setState({ backgroundClassStyle : "container" });
                }, 300)
            }
        });        
    }


    render() {
        return (
            <div id="app-container">
                <Heading />
                <Players playerSelection={this.playerSelection} />
                <TierSelection checkboxChange={this.checkboxChange} backgroundStyle={this.state.backgroundClassStyle} />
                <Ranomizer tiersArray={this.state.tiers} players={this.state.players} noBoxCheckDetected={this.noBoxCheckDetectedHandler}/>
            </div>
        );
    }
}

export default App;