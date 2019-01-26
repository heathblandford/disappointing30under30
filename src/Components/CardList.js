import React from 'react';
import Card from './Card';

let date = new Date();
let todayMonth = date.getUTCMonth() + 1;
let todayDay = date.getUTCDate();
let todayYear = date.getUTCFullYear();
let todayHours = date.getUTCHours();
let todayMins = date.getUTCMinutes();
let todaySecs = date.getUTCSeconds();
let todayMillis = date.getUTCMilliseconds();
let todayDateText = `${todayYear}-${todayMonth}-${todayDay}T${todayHours}:${todayMins}:${todaySecs}.${todayMillis}`

const CardList = ({ data }) => {
    //sort data by most recent addedhero
    data.sort((a) => {
        return todayDateText > a.createdAt ? -1 : a.createdAt>todayDateText ? 1 : 0;
    })

    return (
        <div>
            {
                data.map((i) => {
                    console.log(i.createdAt);
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