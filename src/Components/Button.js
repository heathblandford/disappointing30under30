import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../Stylizers/Buttons.css';

class Buttons extends Component {
    render(){
        let score = 0;
        function upvote(){
            score += 1;
            console.log(score)
            return score;
        }

        function downvote(){
            score -= 1;
            console.log(score);
            return score;
        }
        return (
            <div className="buttons">
                <Button variant="contained" color="primary" id="disappointment" className="upDownButton" onClick={upvote}>disappointing</Button>
                <Button variant="contained" color="secondary" id="humblebrag" className="upDownButton" onClick={downvote}>humblebrag</Button>
            </div>
        );
    }
}

export default Buttons;