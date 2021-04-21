import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

import Header from './Header';
import Web from './Web';
import Main from './Main';

function App() {
  return (
    <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/web" component={Web}/>
        </Switch>

        {/* <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/comment" component={Comment} />
        </Switch> */}
    </div>
  );
}

export default App;
