var $hamburger = $navigation.find('.hamburger')
var $navigationLinks = $navigation.find('.navigation__link')
var body = $('body')

//MOBILE NAVIGATION
$hamburger.on('click', function () {
    body.toggleClass('mobile-nav--open')
})

$navigationLinks.on('click', function () {
    body.removeClass('mobile-nav--open')
})

function highlightNavigation(index) {
    setTimeout(function () {
        $navigationLinks.removeClass('active')
        $navigationLinks.eq(index).addClass('active')
    }, 400)
}