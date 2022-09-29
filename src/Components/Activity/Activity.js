import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const {img, name, time} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{time}</p>
        </div>
    );
};

export default Activity;