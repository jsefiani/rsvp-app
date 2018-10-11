import React from 'react';

import ConfirmedFilter from './ConfirmedFilter';
import GuestList from "./GuestList";
import Counter from "./Counter"

const MainContent = (props) => {
    return (
        <div className="main">
            <ConfirmedFilter />
            <Counter 
                totalInvited={props.totalInvited}
                numberAttending={props.numberAttending}
                numberUnconfirmed={props.numberUnconfirmed}
            />
            <GuestList />
        </div>
    )
}

export default MainContent;