import React from 'react';
import { connect } from "react-redux";

// import actions
import { toggleFilter } from "../actions/rsvpActions";


class ConfirmedFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleFilter = () => {
        this.props.toggleFilter()
    }

    render(){
        return (
            <div>
                <h2>Invitees</h2>
                <label>
                    <input
                        type="checkbox"
                        onChange={this.toggleFilter}
                        checked={this.props.isFiltered}
                    />{" "}
                    Hide those who haven't responded
            </label>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isFiltered: state.isFiltered
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleFilter: () => dispatch(toggleFilter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmedFilter);