import React from 'react';
import { connect } from "react-redux";

import GuestInputForm from './GuestInputForm';

// Importing actions
import { setPendingGuest, addGuest, clearPendingGuest } from "../actions/rsvpActions";

export class Header extends React.Component {
    
    constructor(props) {
        super(props)
    }

    onHandleNameInput = (e) => {
        this.props.setPendingGuest(e.target.value)
    }

    newGuestSubmitHandler = (e) => {
        e.preventDefault();
        if(this.props.pendingGuest) {
            this.props.addGuest({ name: this.props.pendingGuest })
            this.props.clearPendingGuest()
        }
    }
    
    render() {
        return (
            <header>
                <h1>RSVP</h1>
                <GuestInputForm
                    newGuestSubmitHandler={this.newGuestSubmitHandler}
                    pendingGuest={this.props.pendingGuest}
                    handleNameInput={this.onHandleNameInput}
                />
            </header>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        pendingGuest: state.pendingGuest
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setPendingGuest: (inputName) => dispatch(setPendingGuest(inputName)),
        addGuest: (newGuest) => dispatch(addGuest(newGuest)),
        clearPendingGuest: () => dispatch(clearPendingGuest())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);