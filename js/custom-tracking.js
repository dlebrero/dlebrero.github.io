

jQuery(function($) {
    // Debug flag
    var debugMode = false;

    // Default time delay before checking location
    var callBackTime = 100;

    // # px before tracking a reader
    var readerLocation = 400;

    // Set some flags for tracking & execution
    var timer = 0;
    var endContent = false;
    var didComplete = false;

    // Set some time variables to calculate reading time
    var startTime = new Date();
    var beginning = startTime.getTime();
    var totalTime = 0;

    // Get some information about the current page
    var pageTitle = document.title;

    // Track the aticle load
    if (!debugMode) {
        ga('send', 'event', 'Blog', 'ArticleLoaded', 'url', window.location.href, {
           nonInteraction: true
        });
    } else {
        alert('The page has loaded. Woohoo.');
    }
    // Check the location and track user
    function trackLocation() {
        bottom = $(window).height() + $(window).scrollTop();
        height = $(document).height();

        // If user has hit the bottom of the content send an event
        if (bottom >= $('.entry-content').offset().top + $('.entry-content').innerHeight() && !endContent) {
            currentTime = new Date();
            contentScrollEnd = currentTime.getTime();
            timeToContentEnd = Math.round((contentScrollEnd - beginning) / 1000);
            if (!debugMode) {
               if (timeToContentEnd < 20) {
                    ga('set', 'dimension1', 'Scanner');
                } else {
                    ga('set', 'dimension1', 'Reader');
                }
                ga('send', 'event', 'Blog', 'ContentBottom', 'time', timeToContentEnd, {
                  nonInteraction: true
                });
            } else {
                alert('end content section '+timeToContentEnd);
            }
            endContent = true;
        }

        // If user has hit the bottom of page send an event
        if (bottom >= height && !didComplete) {
            currentTime = new Date();
            end = currentTime.getTime();
            totalTime = Math.round((end - beginning) / 1000);
            if (!debugMode) {
                ga('send', 'event', 'Blog', 'PageBottom', 'time', totalTime, {
                  nonInteraction: true
                });
            } else {
                alert('bottom of page '+totalTime);
            }
            didComplete = true;
        }
    }

    // Track the scrolling and track location
    $(window).scroll(function() {
        if (timer) {
            clearTimeout(timer);
        }

        // Use a buffer so we don't call trackLocation too often.
        timer = setTimeout(trackLocation, callBackTime);
    });
});