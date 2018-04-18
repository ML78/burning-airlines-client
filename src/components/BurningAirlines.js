import React, {PureComponent as Component} from 'react';
import SignUp from './SignUp';
import SearchFlights from './SearchFlights';
import BookFlight from './BookFlight';

class BurningAirlines extends Component {
  render() {
    return(
      <div>
      <SignUp />
      <SearchFlights />
      <BookFlight />
    </div>
    )
  }
}

//I'm thinking BurningAirlines will be the main component. And inside this there is two or three other components in different pages. Or maybe should replace the App component with BurningAirlines:

  // Component 1: SignUp (children -> SignUpForm)
  // Component 2: SearchFlights (children -> SearchForm, SearchResults)
  // Component 3: BookFlight (children -> SelectSeat, ConfirmSeat)


export default BurningAirlines;
