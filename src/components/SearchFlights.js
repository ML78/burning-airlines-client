import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3333/flights.json';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {start: '', finish: ''};
    this._handleStartChange = this._handleStartChange.bind(this);
    this._handleFinishChange = this._handleFinishChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleStartChange(e){
    this.setState({start: e.target.value});
  }
  _handleFinishChange(e){
    this.setState({finish: e.target.value});
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.start, this.state.finish);
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
class SearchResults extends Component {
  render() {
    return(
      <div>
        <h3>Search Results</h3>
        {/*List of Flight Search Results*/}
      </div>
    )
  }
}

////////////////////////////////////////////////////////
class SearchFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {flights: []};
    this.findFlights = this.findFlights.bind(this);

  }

  findFlights(start, finish){
    console.log('finding flights from', start, finish);
    axios.post(SERVER_URL, {flights: start, finish}).then((results) => {
      console.log(results);
      this.setState({flights: [results.data, ...this.state.flights]});
    })
  }


// axios.get(SERVER_URL).then(function (results){
//          let flightsArr = [];
//          for (let i = 0; i<results.data.length;i++)
//            if (results.data[i].origin === o && results.data[i].destination === d)
//              flightsArr.push(results.data[i]);
//          this.setState({ flights:flightsArr });
//        }.bind(this));


  render() {
    return(
      <div>
        <Link to='/'>Burning Airlines</Link>
        <h2>Search Flights</h2>
      <SearchForm onSubmit={this.findFlights}/>
      <SearchResults/>
    </div>
    )
  }
}
// Component 2: SearchFlights (children -> SearchForm, SearchResults)
export default SearchFlights;
