import React, {PureComponent as Component} from 'react';

class BurningAirlines extends to Component {
  render() {
    return(
      <h1>Main Component: BurningAirlines</h1>
    )
  }
}

//I'm thinking BurningAirlines will be the main component. And inside this there is two or three other components in different pages. Or maybe should replace the App component with BurningAirlines:

  // Component 1: SignUp (children -> SignUpForm)
  // Component 2: SearchFlights (children -> SearchForm, SearchResults)
  // Component 3: BookFlight (children -> SelectSeat, BookForm?) 


export default BurningAirlines;
