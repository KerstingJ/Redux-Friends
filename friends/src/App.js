import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import PrivateRoute from './components/PrivateRouter'

import Login from './views/Login'
import FriendsList from './views/FriendsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={FriendsList} />
      </div>
    );
  }
}

export default App;
