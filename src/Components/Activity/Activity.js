import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const {img, name, benefit, time} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='card-info'>
                <p id='activity-name'>{name}</p>
                <p>{benefit}</p>
                <p id='bottom-space'>{time}</p>
            </div>
            <button onClick={() => props.handleAddToList(props.activity)}>
                <p>Add To List</p>
            </button>
        </div>
        
    );
};

export default Activity;