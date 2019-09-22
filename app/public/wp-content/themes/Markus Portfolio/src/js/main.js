jQuery(document).ready(function( $ ) {
    
    //GLOBAL VARIABLES
    var landingPage = $('.landing-page')
    var sections = $('.section')
    var $navigation = $('.navigation')
    var $hamburger = $navigation.find('.hamburger')
    var $navigationLinks = $navigation.find('.navigation__link')
    var soundCloudClient = '9yZSvlXAK7Wmu4xhb0hdMtjP9D2z351X'
    var playButton = $('.play-button')
    var progressBars = $('.song-played-progress')
    var musicPlayer = $('.music-player')
    var duration = $('.amplitude-time-remaining')
    var songs = $('.song')
    var videos = $('.video')
    var songUrls = []
    var isMobile = mobileCheck()
    var isTouchDevice = isTouchDevice()

    // Image Loading Animation
    var body = $('body')
    var heroImage = $('.fixed-bg')
    var src = heroImage.css('background-image');
    var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
    var img = new Image()
    img.src = url;    

    $(img).one('load', function () {
        setTimeout(function () {
            body.addClass('image-loaded').removeClass('image-loading')
        }, 500)
    })
    landingPage.css('height', window.innerHeight + 'px')

    $('#fullpage').fullpage({
        //options here
        scrollOverflow: true,
        normalScrollElements: (isMobile ? '' : '.music-player__track-list'),
        verticalCentered: false,
        easingcss3: 'cubic-bezier(0.77, 0, 0.175, 1)',
        scrollingSpeed: 1200,
        fixedElements: '.navigation',
        anchors: ['section1', 'section2', 'section3', 'section4'],
        onLeave: function (origin, destination, direction) {
            if (direction !== 'up') {
                animateContent(destination)
            }

            switch (destination.index) {
                case 0:
                    if ($navigation.hasClass('navigation--show')) {
                        $navigation.find('.navigation__link').css('transform', 'translateX(0)')
                        $navigation.addClass('navigation--leaving')
                        setTimeout(function () {
                            $navigation.find('.navigation__link').css('transform', 'translateX(-140px)')
                            $navigation.removeClass('navigation--leaving')
                            $navigation.removeClass('navigation--show')
                        }, 1100)
                    }
                    break;
                case 1:
                    setTimeout(function () {
                        $navigation.addClass('navigation--show')
                    }, isMobile ? 400 : 600)
                    highlightNavigation(0)
                    break;
                case 2:
                    highlightNavigation(1)
                    break;
                case 3:
                    highlightNavigation(2)
                    break;
            }

            if (destination.index === 3) {
                heroImage.addClass('section4')
            } else {
                heroImage.removeClass('section4')
            }

            if (direction === 'up') {
                scrollDirection = 'Up'
                body.addClass('scroll-up')
            } else {
                scrollDirection = 'Down'
                body.removeClass('scroll-up')
            }
        },
        afterLoad: function (origin, destination, direction) {
            if (direction === 'up') {
                resetContent(sections)
            }
            history.replaceState(null, null, ' ')
        }
    });

    //MOBILE NAVIGATION
    $hamburger.on('click', function () {
        body.toggleClass('mobile-nav--open')
    })

    $navigationLinks.on('click', function () {
        body.removeClass('mobile-nav--open')
    })

    // Hover colors for social media
    var socialMediaIcon = $('.social-media a i')
    socialMediaIcon.hover(
        function () {
            $(this).parent().siblings().children().addClass('grey-out')
        }, function () {
            $(this).parent().siblings().children().removeClass('grey-out')
        }
    )

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

    Amplitude.init({
        "songs": songUrls,
        "soundcloud_client": soundCloudClient
    })

    // VIDEO ANIMATIONS
    videos.each(function (index, video) {
        var videoAnimationDelay = (index * 250) + 350;
        var videoTitleAnimationDelay = videoAnimationDelay + 150
        var videoDescriptionAnimationDelay = videoAnimationDelay + 300
        var videoMakerAnimationDelay = videoAnimationDelay + 450
        var video = $(video)
        var videoThumbnail = video.find('.video__thumbnail')
        var videoTitle = video.find('.video-info__title')
        var videoDescription = video.find('.video-info__description p:first-child')
        var videoMaker = video.find('.video-info__description p:last-child')

        videoThumbnail.css('animation-delay', videoAnimationDelay + 'ms')
        videoTitle.css('animation-delay', videoTitleAnimationDelay + 'ms')
        videoDescription.css('animation-delay', videoDescriptionAnimationDelay + 'ms')
        videoMaker.css('animation-delay', videoMakerAnimationDelay + 'ms')
    })

    function mobileCheck () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    // BASIC POLLER
    function waitForEl(selector, callback, maxtries, interval) {
        var poller = setInterval(function () {
            var el = $(selector)
            var retry = maxtries === false || maxtries-- > 0
            if (retry && el.length < 1) return // will try again
            clearInterval(poller)
            callback(el || null)
        }, interval)
    }

    function audioPlaying () {
        musicPlayer.addClass('audio-playing')
        duration.css('display', 'block')
        playButton.addClass('pause')
    }

    function audioPaused () {
        playButton.removeClass('pause')
        musicPlayer.removeClass('audio-playing')
    }


    function highlightNavigation(index) {
        setTimeout(function () {
            $navigationLinks.removeClass('active')
            $navigationLinks.eq(index).addClass('active')
        }, 400)
    }

    function animateContent (destinationSection) {
        destinationSection.item.classList.add('section-animate')

        setTimeout(function () {
            destinationSection.item.classList.add('section-animate--show')
        }, isMobile ? 400 : 600)
    }

    function resetContent (sections) {
        sections.removeClass('section-animate')
        sections.removeClass('section-animate--show')
    }

    function isTouchDevice() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function(query) {
          return window.matchMedia(query).matches;
        }
      
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          return true;
        }
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
      }
})
