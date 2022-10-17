import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay(evt) {
  console.log(evt);
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

const getValue = localStorage.getItem('videoplayer-current-time');
console.log(getValue);
if (getValue === null || getValue === undefined) {
  return;
} else {
  player.setCurrentTime(getValue);
}

// import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const STORAGE_KEY = 'videoplayer-current-time';

// player.on('timeupdate', onPlay);

// function onPlay(evt) {
//   localStorage.setItem(STORAGE_KEY, evt.seconds);
// }

// const getStorageValue = localStorage.getItem(STORAGE_KEY);

// if (getStorageValue === null || getStorageValue === undefined) {
//   return;
// } else {
//   player.setCurrentTime(getStorageValue);
// }
