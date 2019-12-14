// Image Loading Animation
var landingPage = $('.landing-page')
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