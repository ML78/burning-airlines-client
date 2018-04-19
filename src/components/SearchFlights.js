import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const FLIGHTS_URL = 'http://localhost:3333/flights.json';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {flight_from: '', flight_to: ''};
    this._handleStartChange = this._handleStartChange.bind(this);
    this._handleFinishChange = this._handleFinishChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleStartChange(e){
    this.setState({flight_from: e.target.value});
  }
  _handleFinishChange(e){
    this.setState({flight_to: e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.flight_from, this.state.flight_to);
  }
  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <label>Origin:</label>
        <input type="text" placeholder="Sydney" onChange={this._handleStartChange}></input>
        <label>Destination:</label>
        <input type="text" placeholder="Brisbane" onChange={this._handleFinishChange}></input>
        <input type="submit" value="Search Flights"></input>
      </form>
    )
  }
}
/////////////////////////////////////////////////////////
///// Functional Component SearchResults: Child of SearchFlights, sibling of SearchForm
function SearchResults(props) {

  return(
    <table>
      {/*JSON.stringify(props.flightsList)*/}
      {/*The props is the variable flightsList that was passed inside the parent*/}
      <tr>
        <th>Flight Number</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Flight Date</th>
        <th>Plane</th>
      </tr>
      {props.flightsList.map( (flight) => {
        const flightState = {
          pathname: `/bookflight/${flight.id}`,
          state: flight
        }

        return (
          <tr>
          <td key={flight.flight_number}>{flight.flight_number}</td>
          <td key={flight.flight_from}>{flight.flight_from}</td>
          <td key={flight.flight_to}>{flight.flight_to}</td>
          <td key={flight.flight_date}>{flight.flight_date}</td>
          <td key={flight.airplane_id}>{flight.airplane.name}</td>
          <Link to={flightState}>Book Now</Link>
          </tr>
        )
      }

       )}
    </table>
  )
}

////////////////////////////////////////////////////////
class SearchFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {flight_from: [], flight_to: [], flights: []};
    //Getting all flights from Rails then filtering the ones here.
    const findFlights = function (start, finish){
      this.setState({flight_from: start, flight_to: finish});
      console.log('finding flights from', start, finish, this.state);
      axios.get(FLIGHTS_URL).then(function (results){
          console.log(results);
               let flightsList = [];
               for (let i = 0; i<results.data.length;i++){
                 if (results.data[i].flight_from === start && results.data[i].flight_to === finish)
                   flightsList.push(results.data[i]);
               }
               this.setState({ flights: flightsList });
              console.log(flightsList);
              // setTimeout(function () {
              //   findFlights(this.state.flight_from, this.state.flight_to)
              // }.bind(this), 4000)
             }.bind(this));
    }.bind(this);
    this.findFlights = findFlights.bind(this);
  } //End CONSTRUCTOR

  render() {
    return(
      <div>
        <Link to='/'>Burning Airlines</Link>
        <h2>Search Flights</h2>
      <SearchForm onSubmit={this.findFlights}/>
      <SearchResults flightsList={this.state.flights}/>

    </div> //flightsList={this.state.flights} --> put the state of the parent into a variable and passing that as a prop into the SearchResults child.
    )
  }
}
// Component 2: SearchFlights (children -> SearchForm, SearchResults)
export default SearchFlights;
