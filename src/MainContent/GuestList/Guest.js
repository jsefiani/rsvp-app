import React from 'react';

import GuestName from './GuestName';

const Guest = (props) => 
    <li>
        <GuestName 
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}
        >
            {props.name}
        </GuestName>
        <label>
            <input 
                type="checkbox" 
                checked={props.isConfirmed} 
                onChange={props.handleConfirmation}    
            /> Confirmed
        </label>
        <button onClick={props.handleToggleEditing}>{props.isEditing ? "Save" : "Edit"}</button>
        <button onClick={props.handleRemove}>remove</button>
    </li>;

export default Guest;