import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchFlights from './SearchFlights';

const FLIGHTS_URL = 'http://localhost:3333/flights/:id.json';

// Get airplanes data from SERVER_URL. Display on page. Name: rows: columns: (id)
class SelectSeat extends Component {
render(){

  return(
    <div>

    </div>
  )
}

}
/////////////////////////////////////////////////////////////////////////////
class ConfirmSeat extends Component {
  //When user presses select seat button (form) then post the 'airplane_id', and 'user_id'
  render() {
    return (
      <h3>Confirm Seat Selection</h3>
    )
  }
}

/////////////////////////////////////////////////////////////////////////////
class BookFlight extends Component {
  constructor(props){
    super(props);
    this.state = {name: [], rows: [], columns: []}
    this.displayFlight = this.displayFlight.bind(this)
  }

// this.props.match.params.id
    displayFlight(name, rows, columns){
      console.log('name of flight', name, 'has', rows, 'and', columns);
      axios.get(FLIGHTS_URL).then(function(results){
        console.log(results.data);
      });
  }


  render() {
    console.log(this.props)
    return (
      <div>
      <Link to='/'>Burning Airlines</Link>
      <h2>BookFlight Page</h2>
      <SelectSeat onClick={this.displayFlight}/>
      <ConfirmSeat/>
    </div>
    )
  }
}

// Component 3: BookFlight (children -> SelectSeat, ConfirmSeat)

export default BookFlight;
