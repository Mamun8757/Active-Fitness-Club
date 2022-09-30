import React from 'react';
import './UserInfo.css'
const UserInfo = (props) => {
    const {info} = props;
    
    let hour = 0;
    for(const activity of info){
        hour = hour + activity.time;
    }
    return (
        <div className='information-container'>
            <div className='user-info'>
                <img src="https://profile-images.xing.com/images/d43f85c4535185f63194c6b778713426-4/robert-michels.1024x1024.jpg" alt="user profile" />
                <div>
                    <h4>Robert Michael</h4>
                    <p>California</p>
                </div>
            </div>
            <div className='user-details'>
                <div>
                    <p>75Kg</p>
                    <h5>Weight</h5>
                </div>
                <div>
                    <p>6.5</p>
                    <h5>Height</h5>
                </div>
                <div>
                    <p>25 yrs</p>
                    <h5>Age</h5>
                </div>
            </div>

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
            <div>
                <h3>Exercise Details</h3>
                <h5>Exercise Time: {hour} seconds</h5>
                <h5>Break Time:</h5>
            </div>
            <button id='submit-btn'>Activity Completed</button>
        </div>
    );
};

export default UserInfo;