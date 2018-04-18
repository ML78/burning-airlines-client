import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';

class SelectSeat extends Component {
  render() {
    return (
      <div>
      <h3>Seat Selection</h3>
    </div>
    )
  }
}

class ConfirmSeat extends Component {
  render() {
    return (
      <h3>Confirm Seat Selection</h3>
    )
  }
}

class BookFlight extends Component {
  render() {
    return (
      <div>
      <Link to='/'>Burning Airlines</Link>
      <h2>BookFlight Page</h2>
      <SelectSeat/>
      <ConfirmSeat/>
    </div>
    )
  }
}

// Component 3: BookFlight (children -> SelectSeat, ConfirmSeat)

export default BookFlight;
