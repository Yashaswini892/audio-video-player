// // TrackListPage.js

// import React from 'react';
// import data from '../data/data'; 
// import './Tracks.css';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function Track({ track }) {
//   return (
//     <div>
//       <Link to={`/player?url=${encodeURIComponent(track.track)}`}>{track.title}</Link>
//     </div>
//   );
// }

// function TrackListPage() {
//   return (
//     <div>

//     <div style = {{fontSize : 50}}>
//       <h2>{data.name}</h2>
//       </div>

//       <div >
//       <div>
//         {data.tracks.map((track, index) => (
//           <Track key={index} track={track} />
//         ))}
//         </div>  
//       </div>

//     </div>
//   );
// }

// export default TrackListPage;

// ----------------------------------Valid first one until here ----------------------------------------------------------------------------

// import React from 'react';
// import data from '../data/data'; 
// import { useNavigate } from 'react-router-dom';
// import './Tracks.css';

// function Track({ track }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/player', { state: { url: track.track } });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>{track.title}</button>
//     </div>
//   );
// }

// function TrackListPage() {
//   return (
//     <div className='helper'>

//     <div style = {{fontSize : 50}}>
//       <h2>{data.name}</h2>
//       </div>
//       <div className='onta'>
//         {data.tracks.map((track, index) => (
//           <Track key={index} track={track} />
//         ))}
//         </div>  

//     </div>
//   );
// }

// export default TrackListPage;


// ----------------------------------------- Valid second one until here ------------------------------------------------------

// import React from 'react';
// import data from '../data/data'; 
// import { useNavigate } from 'react-router-dom';
// import './Tracks.css';

// function Track({ track }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/player', { state: { url: track.track } });
//   };

//   return (
//     <div className="track-bar">
//       <div className="track-info"> 
//         <span>{track.title}</span>
//       </div>
//       <button className="play-button" onClick={handleClick}>Play</button>
//     </div>
//   );
// }

// function TrackListPage() {
//   return (
//     <div className='helper'>
//       <div style={{ fontSize: 50 }}>
//         <h2>{data.name}</h2>
//       </div>
//       <div style = {{margin : 20}}>
//         {data.tracks.map((track, index) => (
//           <Track key={index} track={track} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TrackListPage;



import React from 'react';
import data from '../data/data'; 
import { useNavigate } from 'react-router-dom';
import './Tracks.css';

function Track({ track }) {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/player', { state: { url: track.track } });
  // };
  const handleClick = () => {
    navigate('/player', { state: { url: track.track } });
    console.log("Clicked:", track.title, track.track); // Add this line for debugging
  };
  

  return (
    <div className="track-bar">
      <div className="track-info"> 
        <span>{track.title}</span>
      </div>
      <button className="play-button" onClick={handleClick}>Play</button>
    </div>
  );
}

function TrackListPage() {
  return (
    <div className='helper'>
      <div style={{ fontSize: 50, color: "white" }}>
        <h2>{data.name}</h2>
      </div>
      <div style = {{margin : 20}}>
        {data.tracks.map((track, index) => (
          <Track key={track.title} track={track} />
        ))}
      </div>
    </div>
  );
}

export default TrackListPage;


