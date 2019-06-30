import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Edit from '../Edit/Edit.js';

class App extends React.Component {
  constructor(props){
    const newData = { date: '', mood: '' };
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
        mood: 'happy'},
        {date: '2019-01-09',
        mood: 'sad'},
      ]
    })
    this.updateMood = this.updateMood.bind(this);
  }


  updateMood(event){
    const actualMood = event.currentTarget.value;
    return(
      this.newData.mood: actualMood
    );
  }

  updateDate(event){
    let dato;
    const actualDate = event.currentTarget.value;
    return(
      this.dato : actualDate
    );
    console.log('date', actualDate);
    console.log('dato', dato);
  }

  render(){
  const { data } = this.state;
  return (
    <div className="principal__page">
      <Switch>
        <Route exact path="/" render={() => 
          <Home 
          item={data.map(item =>item)}/> }/>
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
