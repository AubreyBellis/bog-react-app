import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AllCreatures from './components/AllCreatures';
import GlobalNav from './components/GlobalNav.js';
import Creature from './components/Creature.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllCreatures}/>
         {/* <Route exact path="/signup" component={SignUp}/> */}
        <Route path="/creature/:id" component={Creature}/>
       </div>
      </Router>
    );
  }
}

export default App;
