import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/edit">
        <button>
          +
        </button>
      </Link>
      <p>Home</p>
    </div>
  );
}

export default Home;