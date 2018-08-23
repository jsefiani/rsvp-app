import React, { Component } from 'react';
import uniqid from 'uniqid';

import Header from './Header';
import MainContent from './MainContent';
import SimpleStorage from "react-simple-storage";
//import './App.css';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  //lastGuestId = 0;

  // newGuestId = () => {
  //   const id = this.lastGuestId;
  //   this.lastGuestId += 1
  //   return id;
  // }

  toggleGuestProperty = (property, id) => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  removeGuest = id => 
      this.setState({
        guests: this.state.guests.filter(guest => id !== guest.id)
      })
  

  toggleEditing = id => 
    this.toggleGuestProperty("isEditing", id);


  toggleConfirmation = id => 
    this.toggleGuestProperty("isConfirmed", id);
  

  setName = (name, id) => 
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () => 
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  handleNameInput = (e) => {
    return (
      this.setState({
        pendingGuest: e.target.value
      })
    )
  }
    

  newGuestSubmitHandler = e => {
    e.preventDefault();
    //const id = this.newGuestId();
    if(this.state.pendingGuest) {
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id: uniqid()
          },
          ...this.state.guests
        ],
        pendingGuest: ""
      });
    }
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => {
    return (
      this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0)
    )
  }

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent 
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
