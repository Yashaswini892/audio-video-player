// import React, { useState, useEffect, useRef } from 'react';
// import { styled, Typography, Slider, Paper, Stack, Box } from '@mui/material';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import PauseIcon from '@mui/icons-material/Pause';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// // import data from '../data/data';

// const Div = styled('div')(({theme}) => ({
//     backgroundColor: 'black',
//     height:'100vh',
//     width:'100vw',
//     paddingTop: theme.spacing(6)
// }))

// const CustomPaper = styled(Paper)(({theme}) => ({
//     backgroundColor: '#4c4c4c',
//     marginLeft: theme.spacing(6),
//     marginRight: theme.spacing(6),
//     padding: theme.spacing(2)
// }))

// const PSlider = styled(Slider)(({theme, ...props}) => ({
//     color: 'lime',
//     height: 2,
//     '&:hover': {
//         cursor: 'auto',
//     },
//     '& .MuiSlider-thumb': {
//         width: '13px',
//         height: '13px',
//         display: props.thumbless ? 'none' : 'block',
//     }
// }))
// export default function Controller({ trackUrl }) {
//   const audioPlayer = useRef();

//   // const trackTitle = data.tracks.find(track => track.track === trackUrl)?.title;

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(30);
//   const [mute, setMute] = useState(false);

//   const [elapsed, setElapsed] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//       if (audioPlayer) {
//           audioPlayer.current.volume = volume / 100;
//       }

//       if (isPlaying) {
//           const interval = setInterval(() => {
//               setElapsed(audioPlayer.current.currentTime);
//               setDuration(audioPlayer.current.duration);
//           }, 100);
//           return () => clearInterval(interval);
//       }
//   }, [volume, isPlaying]);

//   function formatTime(time) {
//       if (isNaN(time)) return '00:00';
//       const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
//       const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
//       return `${minutes}:${seconds}`;
//   }

//   const togglePlay = () => {
//       if (!isPlaying) {
//           audioPlayer.current.play();
//       } else {
//           audioPlayer.current.pause();
//       }
//       setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//       setMute(!mute);
//       audioPlayer.current.muted = !mute;
//   };

//   return (
//       <Div>
//           <audio src={trackUrl} ref={audioPlayer} muted={mute} />
//           <CustomPaper>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Stack direction='row' spacing={1}
//                       sx={{
//                           display: 'flex',
//                           justifyContent: 'flex-start',
//                           width: '25%',
//                           alignItems: 'center'
//                       }}
//                   >
//                       <VolumeBtns />

//                       <PSlider min={0} max={100} value={mute ? 0 : volume} onChange={(e, v) => setVolume(v)} />
//                   </Stack>

//                   <Stack direction='row' spacing={1}
//                       sx={{
//                           display: 'flex',
//                           width: '40%',
//                           alignItems: 'center'
//                       }}>
//                       {!isPlaying ? <PlayArrowIcon fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={togglePlay} /> : <PauseIcon fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={togglePlay} />}
//                   </Stack>
//               </Box>

//               <Stack spacing={1} direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Typography sx={{ color: 'lime' }}>{formatTime(elapsed)}</Typography>
//                   <PSlider thumbless value={elapsed} max={duration} />
//                   <Typography sx={{ color: 'lime' }}>{formatTime(duration - elapsed)}</Typography>
//               </Stack>
//           </CustomPaper>
//       </Div>
//   );

//   function VolumeBtns() {
//       return mute ? <VolumeOffIcon sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={toggleMute} /> : <VolumeUpIcon sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={toggleMute} />;
//   }
// }


// The above controller works perfectly fine for audio urls

// import React, { useState, useEffect, useRef } from 'react';
// import { styled, Typography, Slider, Paper, Stack, Box } from '@mui/material';

// // Import icons
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import { SkipPrevious, SkipNext, FastRewind, FastForward } from '@mui/icons-material';

// // Styled components
// const Div = styled('div')(({ theme }) => ({
//   backgroundColor: 'black',
//   height: '100vh',
//   width: '100vw',
//   paddingTop: theme.spacing(6)
// }));

// const CustomPaper = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#4c4c4c',
//   marginLeft: theme.spacing(6),
//   marginRight: theme.spacing(6),
//   padding: theme.spacing(2)
// }));

// const PSlider = styled(Slider)(({ theme, ...props }) => ({
//   color: 'lime',
//   height: 2,
//   '&:hover': {
//     cursor: 'auto',
//   },
//   '& .MuiSlider-thumb': {
//     width: '13px',
//     height: '13px',
//     display: props.thumbless ? 'none' : 'block',
//   }
// }));

// export default function Controller({ mediaUrl, mediaType }) {
//   const mediaRef = useRef();

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(30);
//   const [mute, setMute] = useState(false);
//   const [elapsed, setElapsed] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//     const updateTimer = setInterval(() => {
//       if (mediaRef.current && !mediaRef.current.paused) {
//         setElapsed(mediaRef.current.currentTime);
//         setDuration(mediaRef.current.duration);
//       }
//     }, 1000);
  
//     return () => clearInterval(updateTimer);
//   }, []);
  
//   useEffect(() => {
//     if (mediaRef.current) {
//       if (isPlaying && mediaRef.current.paused) {
//         mediaRef.current.play();
//       } else if (!isPlaying && !mediaRef.current.paused) {
//         mediaRef.current.pause();
//       }
//     }
//   }, [isPlaying]);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     setMute(!mute);
//     mediaRef.current.muted = !mute;
//   };

//   const handleSliderChange = (event, newValue) => {
//     setElapsed(newValue);
//     mediaRef.current.currentTime = newValue;
//   };


import React, { useState, useEffect, useRef } from 'react';
import { styled, Typography, Slider, Paper, Stack, Box } from '@mui/material';

// Import icons
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { SkipPrevious, SkipNext, FastRewind, FastForward } from '@mui/icons-material';

// Styled components
const Div = styled('div')(({ theme }) => ({
  // backgroundColor: 'white',
  height: '100vh',
  width: '100vw',
  // paddingTop: theme.spacing(6)
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'black',
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  padding: theme.spacing(2),
  display : 'flex',
  flexDirection : 'column',
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: 'lime',
  height: 2,
  '&:hover': {
    cursor: 'auto',
  },
  '& .MuiSlider-thumb': {
    width: '13px',
    height: '13px',
    display: props.thumbless ? 'none' : 'block',
  }
}));

export default function Controller({ mediaUrl, mediaType ,handleSkipForward, handleSkipBackward }) {
  const mediaRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      if (mediaRef.current && !mediaRef.current.paused) {
        setElapsed(mediaRef.current.currentTime);
        setDuration(mediaRef.current.duration);
      }
    }, 1000);
  
    return () => clearInterval(updateTimer);
  }, []);
  
  useEffect(() => {
    if (mediaRef.current) {
      if (isPlaying && mediaRef.current.paused) {
        mediaRef.current.play();
      } else if (!isPlaying && !mediaRef.current.paused) {
        mediaRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setMute(!mute);
    mediaRef.current.muted = !mute;
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleSliderChange = (event, newValue) => {
    setElapsed(newValue);
    mediaRef.current.currentTime = newValue;
  };

  const handleFastRewind = () => {
    if (mediaRef.current) {
      mediaRef.current.currentTime -= 10; // Rewind by 10 seconds
    }
  };

  const handleFastForward = () => {
    if (mediaRef.current) {
      mediaRef.current.currentTime += 10; // Fast forward by 10 seconds
    }
  };

  return (
    <Div>
      {mediaType === 'audio' && (
        <audio src={mediaUrl} ref={mediaRef} muted={mute} />
      )}
      {mediaType === 'video' && (
        <video src={mediaUrl} ref={mediaRef} muted={mute} style={{ margin: '0 auto' }}/>
      )}

      <CustomPaper style={{ margin: '0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction='row' spacing={1} sx={{ display: 'flex', justifyContent: 'flex-start', width: '25%', alignItems: 'center' }}>
            <VolumeBtns />
            <PSlider min={0} max={100} value={mute ? 0 : volume} onChange={handleVolumeChange} />
          </Stack>
              <Stack direction='row' spacing={1} sx={{ display: 'flex', width: '40%', alignItems: 'center' }}>
            <SkipPrevious fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={handleSkipBackward} />
            <FastRewind fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={handleFastRewind} />
            {isPlaying ? <PauseIcon fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={togglePlay} /> : <PlayArrowIcon fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={togglePlay} />}
            <FastForward fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={handleFastForward} />
            <SkipNext fontSize={'large'} sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={handleSkipForward} />
          </Stack>
        </Box>

        <Stack spacing={1} direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: 'lime' }}>{formatTime(elapsed)}</Typography>
          <PSlider min={0} max={duration} value={elapsed} onChange={handleSliderChange} />
          <Typography sx={{ color: 'lime' }}>{formatTime(duration)}</Typography>
        </Stack>
      </CustomPaper>
    </Div>
  );

  function VolumeBtns() {
    return mute ? <VolumeOffIcon sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={toggleMute} /> : volume <= 20 ? <VolumeMuteIcon sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={toggleMute} /> : volume <= 75 ? <VolumeDownIcon sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={toggleMute} /> : <VolumeUpIcon sx={{ color: 'lime', '&:hover': { color: 'white' } }} onClick={toggleMute} />;
  }

  function formatTime(time) {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}

