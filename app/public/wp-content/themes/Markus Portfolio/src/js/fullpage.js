var sections = $('.section')
var $navigation = $('.navigation')
var body = $('body')
var heroImage = $('.fixed-bg')
var isMobile = mobileCheck()

$('#fullpage').fullpage({
    scrollOverflow: true,
    normalScrollElements: (isMobile ? '' : '.music-player__track-list'),
    verticalCentered: !isMobile,
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