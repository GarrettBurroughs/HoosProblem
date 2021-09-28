import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PostView from './components/PostView';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Switch>
          <Route path="/HoosProblem/post/:postID" render={({ match }) => (
            <PostView postID={ match.params.postID } />
          )} />
        </Switch>

        <Route path="/HoosProblem/home">
          <Homepage></Homepage>
        </Route>

        <Route exact path="/">
          <Redirect to="/HoosProblem/home"></Redirect>
        </Route>
        <Route exact path="/HoosProblem">
          <Redirect to="/HoosProblem/home"></Redirect>
        </Route>
      </div>
    </Router>

  );
}

export default App;
