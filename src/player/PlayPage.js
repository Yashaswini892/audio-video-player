// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function PlayerPage() {
//   const location = useLocation();
//   const urlParams = new URLSearchParams(location.search);
//   const trackUrl = urlParams.get('url');

//   // Render audio or video player based on the track URL
//   if (trackUrl.endsWith('.mp3') || trackUrl.endsWith('.wav')) {
//     return <audio controls src={trackUrl} />;
//   } else if (trackUrl.endsWith('.mp4')) {
//     return <video controls src={trackUrl} />;
//   } else {
//     return <p>Unsupported media format</p>;
//   }
// }

// export default PlayerPage;

// ----------------------------------Valid first one until here ---------------------------------------------------------

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function PlayerPage() {
//   const location = useLocation();
//   const trackUrl = location.state?.url;

//   if (!trackUrl) {
//     return <p>No track URL found</p>;
//   }

//   // Determine whether the track is audio or video based on the file extension
//   const isAudio = trackUrl.endsWith('.mp3') || trackUrl.endsWith('.wav');

//   return (
//     <div>
//       {isAudio ? (
//         <audio controls src={trackUrl} />
//       ) : (
//         <video controls src={trackUrl} />
//       )}
//     </div>
//   );
// }

// export default PlayerPage;

// ----------------------------------Valid second one until here ---------------------------------------------------------------

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Controller from './controls';

// function PlayerPage() {
//   const location = useLocation();
//   const trackUrl = location.state?.url;

//   if (!trackUrl) {
//     return <p>No track URL found</p>;
//   }

//   // Determine whether the track is audio or video based on the file extension
//   const isAudio = trackUrl.endsWith('.mp3') || trackUrl.endsWith('.wav');

//   return (
//     <div>
//       {/* {isAudio ? (
//         <audio src={trackUrl} autoPlay />
//       ) : (
//         <video src={trackUrl} autoPlay />
//       )} */}
//       {isAudio ? (
//         <audio src={trackUrl} autoPlay controls={false} />
//       ) : (
//         <video src={trackUrl} autoPlay controls={false} />
//       )}
//       <Controller />
//     </div>
//   );
// }

// export default PlayerPage;

// ---------------------------------------------------------------------------------------------

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Controller from './controls';
// import data from '../data/data';

// function PlayerPage() {
//   const location = useLocation();
//   const trackUrl = location.state?.url;

//   if (!trackUrl) {
//     return <p>No track URL found</p>;
//   }

//   // Extract track title from data
//   const trackTitle = data.tracks.find(track => track.track === trackUrl)?.title;

//   return (
//     <div>
//       <h2>{trackTitle}</h2>
//       <Controller trackUrl={trackUrl} />
//     </div>
//   );
// }

// export default PlayerPage;

// This is working perfectly fine after the controller is added -------------------------------

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Controller from './controls';
// import data from '../data/data';

// function PlayerPage() {
//   const location = useLocation();
//   const mediaUrl = location.state?.url;
//   const mediaType = location.state?.type;

//   console.log(location.state)

//   if (!mediaUrl || !mediaType) {
//     return <p>No media URL or type found</p>;
//   }

//   // Extract media title from data if needed
//   const mediaTitle = data.tracks.find(track => track.track === mediaUrl)?.title;

//   return (
//     <div>
//       <h2>{mediaTitle}</h2>
//       <Controller mediaUrl={mediaUrl} mediaType={mediaType} />
//     </div>
//   );
// }

// export default PlayerPage;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Controller from './controls';
// import data from '../data/data';

// function PlayerPage() {
//   const location = useLocation();
//   const mediaUrl = location.state?.url;
//   const mediaType = getMediaType(mediaUrl);

//   if (!mediaUrl || !mediaType) {
//     return <p>No media URL or type found</p>;
//   }

//   // Extract media title from data if needed
//   const mediaTitle = data.tracks.find(track => track.track === mediaUrl)?.title;

//   return (
//     <div>
//       <h2>{mediaTitle}</h2>
//       <Controller mediaUrl={mediaUrl} mediaType={mediaType} />
//     </div>
//   );
// }

// export default PlayerPage;

// function getMediaType(url) {
//   if (!url) return null;
  
//   const audioExtensions = ['.mp3', '.wav', '.ogg', '.aac']; // Add more audio extensions if needed
//   const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv']; // Add more video extensions if needed

//   const extension = url.substring(url.lastIndexOf('.')).toLowerCase();

//   if (audioExtensions.includes(extension)) {
//     return 'audio';
//   } else if (videoExtensions.includes(extension)) {
//     return 'video';
//   } else {
//     return null;
//   }
// }


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Controller from './controls';
// import data from '../data/data';

// function PlayerPage() {
//   const location = useLocation();
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

//   const tracks = data.tracks; // Assuming you have a data structure containing tracks

//   const handleSkipForward = () => {
//     if (currentTrackIndex < tracks.length - 1) {
//       setCurrentTrackIndex(prevIndex => prevIndex + 1);
//     } else {
//       setCurrentTrackIndex(0);
//     }
//   };

//   const handleSkipBackward = () => {
//     if (currentTrackIndex > 0) {
//       setCurrentTrackIndex(prevIndex => prevIndex - 1);
//     } else {
//       setCurrentTrackIndex(tracks.length - 1);
//     }
//   };

//   const currentTrack = tracks[currentTrackIndex];
//   const {title,url} = currentTrack;
//   console.log("url is", url)

//   function getMediaType(url) {
//     if (!url) return null;
    
//     const audioExtensions = ['.mp3', '.wav', '.ogg', '.aac']; // Add more audio extensions if needed
//     const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv']; // Add more video extensions if needed
  
//     const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
//     console.log("extension",extension)
  
//     if (audioExtensions.includes(extension)) {
//       return 'audio';
//     } else if (videoExtensions.includes(extension)) {
//       return 'video';
//     } else {
//       return null;
//     }
//   }
//   const mediaType = getMediaType(url);

//   console.log(mediaType)

//   if (!url || !mediaType) {
//     return <p>No media URL or type found</p>;
//   }

//   return (
//     <div>
//       <h2>{title}</h2>
//       <Controller mediaUrl={url} mediaType={mediaType} />
//       <button onClick={handleSkipBackward}>Skip Backward</button>
//       <button onClick={handleSkipForward}>Skip Forward</button>
//     </div>
//   );
// }



// export default PlayerPage;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Controller from './controls';
// import data from '../data/data';

// function PlayerPage() {
//   const location = useLocation();
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

//   const tracks = data.tracks; 

//   const handleSkipForward = () => {
//     if (currentTrackIndex < tracks.length - 1) {
//       setCurrentTrackIndex(prevIndex => prevIndex + 1);
//     } else {
//       setCurrentTrackIndex(0);
//     }
//   };

//   const handleSkipBackward = () => {
//     if (currentTrackIndex > 0) {
//       setCurrentTrackIndex(prevIndex => prevIndex - 1);
//     } else {
//       setCurrentTrackIndex(tracks.length - 1);
//     }
//   };

//   const currentTrack = tracks[currentTrackIndex];
//   const title = currentTrack ? currentTrack.title : '';
//   const url = currentTrack ? currentTrack.track : '';
  
//   console.log("url is", url);

//   function getMediaType(url) {
//     if (!url) return null;
    
//     const audioExtensions = ['.mp3', '.wav', '.ogg', '.aac']; // Add more audio extensions if needed
//     const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv']; // Add more video extensions if needed
  
//     const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
//     console.log("extension",extension)
  
//     if (audioExtensions.includes(extension)) {
//       return 'audio';
//     } else if (videoExtensions.includes(extension)) {
//       return 'video';
//     } else {
//       return null;
//     }
//   }
//   const mediaType = getMediaType(url);

//   console.log(mediaType);

//   if (!url || !mediaType) {
//     return <p>No media URL or type found</p>;
//   }

//   return (
//     <div>
//       <h2>{title}</h2>
//       <Controller
//         mediaUrl={url}
//         mediaType={mediaType }
//         handleSkipForward={handleSkipForward}
//         handleSkipBackward={handleSkipBackward}
//       />
//     </div>
//   );
// }

// export default PlayerPage;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Controller from './controls';
import data from '../data/data';

function PlayerPage() {
  const location = useLocation();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (location.state && location.state.url) {
      const index = data.tracks.findIndex(track => track.track === location.state.url);
      if (index !== -1) {
        setCurrentTrackIndex(index);
      }
    }
  }, [location.state]);

  const tracks = data.tracks; 

  const handleSkipForward = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(prevIndex => prevIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
  };

  const handleSkipBackward = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(prevIndex => prevIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1);
    }
  };

  const currentTrack = tracks[currentTrackIndex];
  const title = currentTrack ? currentTrack.title : '';
  const url = currentTrack ? currentTrack.track : '';
  
  function getMediaType(url) {
    if (!url) return null;
    
    const audioExtensions = ['.mp3', '.wav', '.ogg', '.aac']; // Add more audio extensions if needed
    const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv']; // Add more video extensions if needed
  
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
  
    if (audioExtensions.includes(extension)) {
      return 'audio';
    } else if (videoExtensions.includes(extension)) {
      return 'video';
    } else {
      return null;
    }
  }
  const mediaType = getMediaType(url);

  if (!url || !mediaType) {
    return <p>No media URL or type found</p>;
  }

  return (
    <div style = {{display: "flex", flexDirection : "column", height : "100vh"}}>
    <div style = {{marginLeft : 20}}>
      <h2>{title}</h2>
      </div>
      <Controller
        mediaUrl={url}
        mediaType={mediaType }
        handleSkipForward={handleSkipForward}
        handleSkipBackward={handleSkipBackward}
      />
    </div>
  );
}

export default PlayerPage;

