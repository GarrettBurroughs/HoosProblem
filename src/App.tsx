import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostView from './components/PostView';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Switch>
          <Route path="/post/:postID" render={({ match }) => (
            <PostView postID={ match.params.postID } />
          )} />
        </Switch>

        <Route path="/home">
          <Homepage></Homepage>
        </Route>

        
      </div>
    </Router>

  );
}

export default App;
