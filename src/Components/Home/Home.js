import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

function Home({data, item}) {
  return (
    <div className="home__page">
      <Link to="/edit">
        <button className="home__plus">
          +
        </button>
      </Link>
      <ul className="home__results">
      {data.map(item => {
        if ( `${item.mood}` === 'happy') {
          return (
            <li className="smiley__happy">
              :) 
            </li>
          );
        } else {
          return (
            <li className="smiley__sad">
              :(
            </li>
          );
        }
        })} 
      </ul>
    </div>
  );
}

export default Home;