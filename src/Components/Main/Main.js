import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAddToList = (activity) => {
        const newInfo = [...info, activity];
        setInfo(newInfo);
    }

    return (
        <div className='main-container'>
            <div className='excercise-container'>
                {
                    activities.map(activity => <Activity 
                        key={activity.name}
                        activity = {activity}
                        handleAddToList = {handleAddToList}
                    ></Activity>)
                    
                }
            </div>
            <div className='information-container'>
                <h2>Activity Data List</h2>
                <p>Selected Items: {info.length}</p>
            </div>
        </div>
        
    );
};

export default Main;