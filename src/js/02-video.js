import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(playTime, 1000));

console.log(throttle(playTime, 1000));


    function playTime(evt) {
        localStorage.setItem('videoplayer-current-time', evt.seconds);
};
const numberKey = Number(localStorage.getItem('videoplayer-current-time'));

        if (numberKey) {
            player.setCurrentTime(numberKey);
        };
console.log(numberKey);
