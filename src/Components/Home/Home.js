import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home__page">
      <Link to="/edit">
        <button className="home__plus">
          +
        </button>
      </Link>
      <div className="home__results">
      holas holas
      </div>
    </div>
  );
}

export default Home;