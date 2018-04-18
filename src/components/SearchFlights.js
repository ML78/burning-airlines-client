import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom';

class SearchForm extends Component {
  render() {
    return(
      <form>
        {/*TODO: start and end destination dropdowns*/}
        <input type="submit" value="Search Flights"></input>
      </form>
    )
  }
}

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
class SearchFlights extends Component {
  render() {
    return(
      <div>
        <Link to='/'>Burning Airlines</Link>
        <h2>Search Flights</h2>
      <SearchForm/>
      <SearchResults/>
    </div>
    )
  }
}
// Component 2: SearchFlights (children -> SearchForm, SearchResults)
export default SearchFlights;
