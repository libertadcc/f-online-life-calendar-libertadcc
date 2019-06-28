import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edit from '../Edit/Edit.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state=({
      data: [ 
        {date: '2019-01-02',
        mood: 'happy'},
        {date: '2019-01-03',
        mood: 'sad'},
        {date: '2019-01-04',
        mood: 'happy'},
        {date: '2019-01-08',
        mood: 'happy'}
      ]
    })
    this.updateMood = this.updateMood.bind(this);
  }
  
  updateMood(event){
    const actualMood = event.currentTarget.value;
    return(
      console.log('mood', actualMood)
    );
  }
  updateDate(event){
    const actualDate = event.currentTarget.value;
    return(
      console.log('date', actualDate)
    );
  }

  render(){
  return (
    <div className="principal__page">
      <Switch>
        <Route exact path="/" render={() => 
          <Home data={this.state.data}/> }/>
        <Route path="/edit" render={() =>
          <Edit 
          updateMood={this.updateMood}
          updateDate={this.updateDate}/>} />
      </Switch>
    </div>
  );
  }
}

export default App;
