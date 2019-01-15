import React from 'react';
import '../Stylizers/Card.css';
// import Buttons from '../Components/Button';
import Socials from '../Components/Socials';

const Card = ({firstName, lastName, age, disappointment}) => {
    return (
        <div className="Card">
            <div className="nameAge">
                <h2 className="firstName">{firstName} </h2>
                <h2 className="lastName">{lastName}</h2>
                <h2 className="comma">, </h2>
                <h2 className="age">{age}</h2>
            </div>
            <div className="disappointment">
                <p className="disappointmentText">{disappointment}</p>
            </div>
            {/* <Buttons /> */}
            <Socials disappointment={ disappointment }/>
        </div>
    );
}

export default Card;