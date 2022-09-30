import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import UserInfo from '../UserInfo/UserInfo';

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
                <div className='user-info'>
                    <img src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" alt="user profile" />
                    <div>
                        <h4>Robert Michael</h4>
                        <p>California</p>
                    </div>
                </div>
                
                {/* <p>Selected Items: {info.length}</p> */}
                <UserInfo></UserInfo>
                <div>
                    <h4>Add A Break</h4>
                </div>
                <div className='break-times'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
        </div>
        
    );
};

export default Main;