import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import BurningAirlines from './components/BurningAirlines';
import SearchFlights from './components/SearchFlights';
import BookFlight from './components/BookFlight';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={BurningAirlines}/>
      <Route exact path="/searchflights" component={SearchFlights}/>
      <Route path="/bookflight/:id" component={BookFlight}/>
    </div>
  </Router>
);

export default Routes;
