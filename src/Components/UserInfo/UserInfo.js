import React from 'react';
import './UserInfo.css'
const UserInfo = () => {
    return (
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
    );
};

export default UserInfo;