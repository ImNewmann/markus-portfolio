var musicPlayer = $('.music-player')
var duration = $('.amplitude-time-remaining')
var songs = $('.song')
var playButton = $('.play-button')
var progressBars = $('.song-played-progress')
var songUrls = []
var isTouchDevice = isTouchDevice()

// SOUNDPLAYER
musicPlayer.on('click', function (e) {
    if (e.target.classList[0] !== 'song-played-progress') {
        waitForEl('.amplitude-playing', audioPlaying, false, 100)
        if (musicPlayer.find('.audio-playing')) {
            audioPaused()
        }
    }
})

songs.each(function (index, song) {
    var animationDelay = (index * 120) + 500;
    var song = $(song)
    song.css('animation-delay', animationDelay + 'ms')
})

var progressEvent = isTouchDevice ? 'touchend' : 'click'
progressBars.on(progressEvent, function (e) {
    e.stopPropagation();
    var offset = this.getBoundingClientRect();
    var xVal = isTouchDevice ? e.originalEvent.changedTouches[0].clientX : e.pageX
    var x = xVal - offset.left;
    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});

songs.each(function (i, song) {
    var song = $(song).children().first()
    var songUrl = song.attr('data-song-url')
    songUrls[i] = { "url": songUrl }
})

Amplitude.init({"songs": songUrls})


function audioPlaying () {
    musicPlayer.addClass('audio-playing')
    duration.css('display', 'block')
    playButton.addClass('pause')
}

function audioPaused () {
    playButton.removeClass('pause')
    musicPlayer.removeClass('audio-playing')
}
