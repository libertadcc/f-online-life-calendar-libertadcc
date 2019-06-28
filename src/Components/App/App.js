import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edit from '../Edit/Edit.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state({
      mood: [ 
        'happy', 
        'sad',
        'sad'
      ]
    })
  }
  render(){
  return (
    <div className="principal__page">
      <Switch>
        <Route exact path="/" render={() => 
          <Home /> }/>
        <Route path="/edit" render={() =>
          <Edit />} />
      </Switch>
    </div>
  );
  }
}

export default App;
