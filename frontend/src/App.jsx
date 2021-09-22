import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Hello world</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
