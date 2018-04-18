import React, {PureComponent as Component} from 'react';
import SearchFlights from './SearchFlights';
import BookFlight from './BookFlight';
import {Link} from 'react-router-dom';

const SERVER_URL = 'http://localhost:3333/airplanes.json';

class SignUpForm extends Component {
  render() {
    return(

        <form>
          <input type="text" placeholder="Joe"></input>
          <input type="submit" value="Sign Up!"></input>
        </form>

    )
  }
}

class BurningAirlines extends Component {
  render() {
    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/searchflights'>Search Flights</Link>
        <Link to='/bookflight'>Book Flight</Link>
        <h1>WELCOME TO BURNING AIRLINES</h1>
        <h3>Sign Up</h3>
        <SignUpForm />
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
