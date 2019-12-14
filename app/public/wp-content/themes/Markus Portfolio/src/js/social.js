// Hover colors for social media
var socialMediaIcon = $('.social-media a i')
socialMediaIcon.hover(
    function () {
        $(this).parent().siblings().children().addClass('grey-out')
    }, function () {
        $(this).parent().siblings().children().removeClass('grey-out')
    }
)