import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AllCreatures from './components/AllCreatures';
import GlobalNav from './components/GlobalNav.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllCreatures}/>
          {/* <Route exact path="/signup" component={SignUp}/>
          <Route path="/artist/:id" component={Artist}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
