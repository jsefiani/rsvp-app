import React from 'react';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

import { connect } from "react-redux";

// Import actions
import { removeGuest, toggleConfirmation, toggleEditing, setNameGuest } from "../../actions/rsvpActions";


export class GuestList extends React.Component {
    constructor(props) {
        super(props)
    }

    onRemoveGuest = (id) => {
        this.props.removeGuest({ id })
    }

    toggleConfirmation = (id) => {
        this.props.toggleConfirmation(id)
    }

    toggleEditing = (id) => {
        this.props.toggleEditing(id)
    }

    setName = (newName, id) => {
        this.props.setNameGuest(newName, id)
    }

    render() {
        return (
            <ul>
                <PendingGuest name={this.props.pendingGuest} />
                {this.props.guests
                    .filter(guest => !this.props.isFiltered || guest.isConfirmed)
                    .map((guest, index) =>
                        <Guest
                            key={index}
                            name={guest.name} // Done
                            isConfirmed={guest.isConfirmed} // Done
                            isEditing={guest.isEditing} // Done
                            handleConfirmation={() => this.toggleConfirmation(guest.id)} // Done
                            handleToggleEditing={() => this.toggleEditing(guest.id)} // Done
                            setName={text => this.setName(text, guest.id)} // Done
                            handleRemove={() => this.onRemoveGuest(guest.id)} // Done
                        />
                    )
                }
            </ul>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        guests: state.guests,
        pendingGuest: state.pendingGuest,
        isFiltered: state.isFiltered
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeGuest: (id) => dispatch(removeGuest(id)),
        toggleConfirmation: (id) => dispatch(toggleConfirmation(id)),
        toggleEditing: (id) => dispatch(toggleEditing(id)),
        setNameGuest: (newName, id) => dispatch(setNameGuest(newName, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);