import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Home({item}) {
  return (
    <div className="home__page">
      <Link to="/edit">
        <button className="home__plus">
          +
        </button>
      </Link>
      <ul className="home__results">
      { item.map((item, index) => {
        if ( `${item.mood}` === 'happy') {
          return (
            <li key={index} className="smiley happy">
              <span className="face">
                :)
              </span>
            </li>
          );
        } else {
          return (
            <li key={index} className="smiley sad">
              <span className="face">
                :(
              </span>
            </li>
          );
        }})} 
      {/* ¿Cómo hacerlo pasando solo el mood? */}
      </ul>
    </div>
  );
}

export default Home;

Home.propTypes = {
  item: PropTypes.array
}