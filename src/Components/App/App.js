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
        mood: 'sad'}
      ],
      newDate: '',
      newMood: ''
    })
    this.updateMood = this.updateMood.bind(this);
    this.updateDate = this.updateDate.bind(this);

    this.updateApp = this.updateApp.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this);
  }
  

  saveData(){
    localStorage.setItem('moods', JSON.stringify(this.state.data));
  }

  getData(){
    JSON.parse(localStorage.getItem('moods'));
    return console.log('Datos del localstorage')
  }

  updateMood(event){
    const { newMood } = this.state;
    const actualMood = event.currentTarget.value;
    this.setState({
      newMood: actualMood
    });
  }

  updateDate(event){
    const { newDate } = this.state;
    const actualDate = event.currentTarget.value;
    this.setState({
      newDate: actualDate
    });
  }

  updateApp(){
    const actualData = {date: this.state.newDate, mood: this.state.newMood};
    this.setState(prevState => ({
      data: [...prevState.data, actualData]
    }))
  }

  render(){
  const { data } = this.state;
  return (
    <div className="principal__page">
      <Switch>
        <Route exact path="/" render={() => 
          <Home 
          item = {data.map(item => item)}/> }/>
        <Route path="/edit" render={() =>
          <Edit 
          updateApp = {this.updateApp}
          newMood = {this.state.newMood}
          updateMood={this.updateMood}
          updateDate={this.updateDate}
          />} />
      </Switch>
    </div>
  );
  }
}

export default App;
