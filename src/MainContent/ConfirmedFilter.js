import React from 'react';
import PropTypes from "prop-types";


const ConfirmedFilter = (props) => {
    return (
        <div>
            <h2>Invitees</h2>
            <label>
                <input
                type="checkbox"
                onChange={props.toggleFilter}
                checked={props.isFiltered}
                />{" "}
                Hide those who haven't responded
            </label>
        </div>
    )
}

ConfirmedFilter.propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired
}

export default ConfirmedFilter;