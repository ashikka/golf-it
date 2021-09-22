import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container fuild className="App">
        <Switch>
          <Route exact path="/">
            <h1>Hello world</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
