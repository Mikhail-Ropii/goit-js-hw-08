const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// const trottling = _.throttle()
player.on('timeupdate', function (seconds) {
    const curentTime = Object.values(seconds)[0];

    localStorage.setItem("videoplayer-current-time", curentTime);
    
});

const timeSet = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(timeSet).then(function (seconds) {
     
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
