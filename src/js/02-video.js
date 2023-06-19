import Player from '@vimeo/player';
import throttle from '/node_modules/lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(evt) {
       
        localStorage.setItem("videoplayer-current-time", JSON.stringify(evt.seconds));
        
    };

player.on('timeupdate', throttle(onPlay, 1000));

const curTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? [];
player.setCurrentTime(curTime).then(function(seconds) {
   
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
          
            break;

        default:
           
            break;
    }
});

