var videos = $('.video')

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