import Player from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', lodashThrottle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
  console.log(evt);
}

const getValue = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(getValue);
if (getValue === null || getValue === undefined) {
  return;
} else {
  player.setCurrentTime(getValue);
}
