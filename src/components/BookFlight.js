import React, {PureComponent as Component} from 'react';

class SelectSeat extends Component {
  render() {
    return (
      <h2>Seat Selection</h2>
    )
  }
}

class ConfirmSeat extends Component {
  render() {
    return (
      <h2>Confirm Seat Selection</h2>
    )
  }
}

class BookFlight extends Component {
  render() {
    return (
      <div>
      <h1>BookFlight Page</h1>
      <SelectSeat/>
      <ConfirmSeat/>
    </div>
    )
  }
}

// Component 3: BookFlight (children -> SelectSeat, ConfirmSeat)

export default BookFlight;
