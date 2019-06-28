import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

function Home({data}) {
  return (
    <div className="home__page">
      <Link to="/edit">
        <button className="home__plus">
          +
        </button>
      </Link>
      <div className="home__results">
        {data.map(item => {
          if(item.mood==='happy'){
            return (
              <span>
                😄
              </span>);
          } else if(item.mood ==='sad'){
            return(
              <span>
                😞
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Home;