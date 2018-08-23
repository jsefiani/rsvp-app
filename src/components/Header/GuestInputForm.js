import React from 'react';
import PropTypes from 'prop-types';


const GuestInputForm = props => {
    return (
        <form onSubmit={props.newGuestSubmitHandler}>
            <input
                type="text"
                onChange={props.handleNameInput}
                value={props.pendingGuest}
                placeholder="Invite Someone"
            />
            <button type="submit" name="submit" value="submit">
                Submit
            </button>
        </form>
    )
};

GuestInputForm.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default GuestInputForm;