import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props => {
    return (
        <header>
            <h1>RSVP</h1>
            <GuestInputForm 
                newGuestSubmitHandler={props.newGuestSubmitHandler}
                pendingGuest={props.pendingGuest}
                handleNameInput={props.handleNameInput}
            />
        </header>
    )
};

Header.propTypes = {
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    newGuestSubmitHandler: PropTypes.func.isRequired
}

export default Header;