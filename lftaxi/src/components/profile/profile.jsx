import React from 'react';
import CardForm from '../card-form';
import './profile.css';

const Profile = () => {
    return (
    <div className="profile-container">
        <div className="profile-flex">
            <div className="profile-form">
            <CardForm/>
            </div>
        </div>    
    </div>
    )
}

export default Profile;