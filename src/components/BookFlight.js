import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AIRPLANES_URL = 'http://localhost:3333/airplanes.json';

// Get airplanes data from SERVER_URL. Display on page. Name: rows: columns: (id)
class SelectSeat extends Component {
  constructor(props){
    super(props);
     this.state = { name: [], rows: [], columns: []}
    this._handleClick = this._handleClick.bind(this)

  }


_handleClick(){
  console.log('click happened');
  this.props.onClick(this.state.name, this.state.rows, this.state.columns); //calling the this.displayFlight in parent.
}

render(){
  return(
    <div><button onClick={this._handleClick}>Click Me</button></div>
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

// function SearchResults(props){
//   return(
//     <table>
//       {props.displayFlight.map( (flight) =>
//       <tr>
//       <td key={flight.name}>{flight.name}</td>
//       <td key={flight.rows}>{flight.rows}</td>
//       <td key={flight.columns}>{flight.columns}</td>
//       <Link to={`/bookflight/${flight.id}`}>Book Now</Link>
//       </tr> )}
//     </table>
//   )
// }

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
      axios.get(AIRPLANES_URL).then(function(results){
        console.log(results.data);
      });
  }


  render() {
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
