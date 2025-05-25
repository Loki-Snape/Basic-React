import React, { use, useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext)
     if(!user) return <div>Kindly Login</div>
    return (
        <div>
            <h2>Welcome {user.username}</h2>
        </div>
    );
}

export default Profile;