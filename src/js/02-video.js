import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(function(seconds) {
    const curentTime = Object.values(seconds)[0];

    localStorage.setItem("videoplayer-current-time", curentTime);
    
}, 1000));

const timeSet = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(timeSet).then(function () {
     
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
