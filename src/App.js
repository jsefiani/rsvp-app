import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  
  getTotalInvited = () => this.props.guests.length;
  
  getAttendingGuests = () => {
    return (
      this.props.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0)
    )
  }

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header />
        <MainContent 
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    guests: state.guests
  }
}

export default connect(mapStateToProps)(App);
