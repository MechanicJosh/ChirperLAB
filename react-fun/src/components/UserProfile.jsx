import React from 'react';

const UserProfile = props => {

    let role = '';

    if (props.admin){
        role = 'admin';
    }else{
        role = 'guest';
    }

    return(
        <div>
            <h1>My name is {props.name} and my favorite show is {props.favoriteShow} and I am a {role}</h1>
        </div>
    );
}

export default UserProfile;