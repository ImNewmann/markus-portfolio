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


