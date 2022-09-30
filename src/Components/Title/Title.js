import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Title.css'
const Title = () => {
    return (
        <div className='header-title'>
            <div className='display-icon'>
                <FontAwesomeIcon id='icon-size' icon={faDumbbell}></FontAwesomeIcon>
                <h2>ACTIVE-FITNESS-CLUB</h2>
            </div>
            <h3 id='select-title'>Select today’s exercise</h3>                      
        </div>
    );
};

export default Title;