import React, {PureComponent as Component} from 'react';

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
        <h2>Search Results</h2>
        {/*List of Flight Search Results*/}
      </div>
    )
  }
}
class SearchFlights extends Component {
  render() {
    return(
      <div>
        <h1>Search Flights</h1>
      <SearchForm/>
      <SearchResults/>
    </div>
    )
  }
}
// Component 2: SearchFlights (children -> SearchForm, SearchResults)
export default SearchFlights;
