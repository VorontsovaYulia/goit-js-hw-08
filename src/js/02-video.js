import Player from '@vimeo/player';
import throttle from '/node_modules/lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    function onPlay(evt) {

        localStorage.setItem("videoplayer-current-time", JSON.stringify(evt))
        
    };

player.on('timeupdate', throttle(onPlay, 1000));

const curTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? [];
player.setCurrentTime(curTime.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

