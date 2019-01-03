import React, { Component } from 'react';
import '../Stylizers/Card.css';

class Card extends Component {
    render(){
        return (
            <div className="Card">
                <div className="nameAge">
                    <h2 className="name">John Doe</h2>
                    <h2 className="comma">, </h2>
                    <h2 className="age">27</h2>
                </div>
                <div className="disappointment">
                    <p className="disappointmentText">Got upset becuase his boss called him while he was eating the first of 2 sandwiches received from a Shake Shack 2 for 1 deal from a dating App. He works from home.</p>
                </div>
                <div className="buttons">
                    <button className="btnBoi" type="button">lol you are disappointing</button>
                    <button className="btnBoi" type="button">stfu, you're humblebragging</button>
                </div>
            </div>
        );
    }
}

export default Card;