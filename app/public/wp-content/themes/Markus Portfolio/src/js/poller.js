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