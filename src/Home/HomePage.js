import './HomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>

      <div className='title'>
        Welcome to the music room !!
      </div>
      <Link to="/tracks"> 
        <button>
          Go to the tracklist
        </button>
      </Link>
      
    </div>
  );
}

export default Home;

