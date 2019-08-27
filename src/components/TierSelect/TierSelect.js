import React, { Component } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Typography } from '@material-ui/core';
import "./styles.css";

class TierSelection extends Component {
    render() {
        return (
            <div className={this.props.backgroundStyle}>
                <div id="heading">
                    <Typography variant="h4">
                        Character Class Selection
                    </Typography>
                </div>
                <div id="checkboxes">
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.props.checked} onChange={this.props.checkboxChange} value="S" />
                            }
                            label={<div className="S-Label circle"><Typography variant="h3">S</Typography></div>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.props.checked} onChange={this.props.checkboxChange} value="A" />
                            }
                            label={<div className="A-Label circle"><Typography variant="h3">A</Typography></div>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.props.checked} onChange={this.props.checkboxChange} value="B" />
                            }
                            label={<div className="B-Label circle"><Typography variant="h3">B</Typography></div>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.props.checked} onChange={this.props.checkboxChange} value="C" />
                            }
                            label={<div className="C-Label circle"><Typography variant="h3">C</Typography></div>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.props.checked} onChange={this.props.checkboxChange} value="D" />
                            }
                            label={<div className="D-Label circle"><Typography variant="h3">D</Typography></div>}
                        />
                    </FormGroup>
                </div>
            </div>
        );
    }
}

export default TierSelection;
