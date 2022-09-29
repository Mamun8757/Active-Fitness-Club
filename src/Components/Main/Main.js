import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
            .then(data => setActivities(data))
    }, []);
    return (
        <div className='main-container'>
            <div className='excercise-container'>
                {
                    activities.map(activity => <Activity 
                        key={activity.name}
                        activity = {activity}
                    
                    ></Activity>)
                    
                }
            </div>
            <div className='information-container'>
                <h2>Activity Data List</h2>
            </div>
        </div>
        
    );
};

export default Main;