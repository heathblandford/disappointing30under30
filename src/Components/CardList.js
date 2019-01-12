import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
    return (
        <div>
            {
                data.map((i) => {
                    return (<Card
                        firstName = {i.first_name}
                        lastName = {i.last_name}
                        age = {i.age}
                        disappointment = {i.disappointment}
                    />)
                })    
            }
        </div>
    )
}

export default CardList;