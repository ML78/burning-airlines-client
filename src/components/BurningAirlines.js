import React, {PureComponent as Component} from 'react';
import SearchFlights from './SearchFlights';
import BookFlight from './BookFlight';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3333/users.json';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e){
    this.setState({input: e.target.value});
  }
  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    //this.setState({name: ''}) //clears out name field after user submits.
  }
  render() {
    return(

        <form onSubmit={this._handleSubmit}>
          <input type="text" placeholder="Joe" onInput={this._handleInput}></input>
          <input type="submit" value="Sign Up!"></input>
        </form>

    )
  }
}
////////////////////////////////////////////////////////
class BurningAirlines extends Component {
  constructor(props){
    super(props);
    this.state = {name: ''};
    this.saveName = this.saveName.bind(this);

  //   const fetchName = //this needs to get the name from _handleInput upstairs.
  //   fetchName();
  // }
  //
}
  saveName(s){
    console.log(s);
    axios.post(SERVER_URL,{name: s}).then(results => {
      this.setState({name: [results.data, ...this.state.name]});
    })
    }


  render() {
    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/searchflights'>Search Flights</Link>
        <Link to='/bookflight'>Book Flight</Link>
        <h1>WELCOME TO BURNING AIRLINES</h1>
        <h3>Sign Up</h3>
        <SignUpForm onSubmit={this.saveName} />
    </div>
    )
  }
}

//I'm thinking BurningAirlines will be the main component.
// And inside this there is two or three other components in different pages.
// Or maybe should replace the App component with BurningAirlines:

  // Component 1: SignUp (children -> SignUpForm)
  // Component 2: SearchFlights (children -> SearchForm, SearchResults)
  // Component 3: BookFlight (children -> SelectSeat, ConfirmSeat)


export default BurningAirlines;
