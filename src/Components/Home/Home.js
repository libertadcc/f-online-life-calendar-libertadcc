import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

function Home({item}) {
  return (
    <div className="home__page">
      <Link to="/edit">
        <button className="home__plus">
          +
        </button>
      </Link>
      <div className="home__results">
        {if (${item.mood} === 'happy')}
        if(mood==='happy'){
          <p>hola</p>
        } else {
          <p>mal</p>
        }
        
      </div>
    </div>
  );
}

export default Home;