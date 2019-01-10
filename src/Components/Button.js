import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../Stylizers/Buttons.css';

class Buttons extends Component {
    render(){
        return (
            <div className="buttons">
                <Button variant="contained" color="primary" id="disappointment" className="upDownButton">disappointing</Button>
                <Button variant="contained" color="secondary" id="humblebrag" className="upDownButton">humblebrag</Button>
            </div>
        );
    }
}

export default Buttons;