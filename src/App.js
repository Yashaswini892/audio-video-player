// import './App.css';
// import Home from "./Home/HomePage"
// import React, { useState } from 'react';

// function App() {

//   return (
//     <Home/> 
//   );
// }

// export default App;


// App.js

import './App.css';
import Home from "./Home/HomePage";
import TrackListPage from "./Tracklist/Tracks"; 
import React from 'react';
import PlayerPage from "./player/PlayPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<TrackListPage />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;