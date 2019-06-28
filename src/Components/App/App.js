import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edit from '../Edit/Edit.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => 
          <Home /> }/>
        <Route path="/edit" render={() =>
          <Edit />} />
      </Switch>
    </div>
  );
}

export default App;
