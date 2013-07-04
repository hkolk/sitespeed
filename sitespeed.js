$(window).load(function() {
window.sitespeed = window.sitespeed || {};
window.sitespeed.data = window.sitespeed.data || {};
sitespeed.data.url = sitespeed.data.url || document.location.toString();

if (window.performance && window.performance.timing) {
    var timing = window.performance.timing;
    sitespeed.data.hasPerformance     = true;
    sitespeed.data.domStart           = timing.loadEventStart;
    sitespeed.data.redirectTime       = timing.redirectEnd - timing.redirectStart;
    sitespeed.data.connectTime        = timing.connectEnd - timing.connectStart;
    sitespeed.data.waitTime           = timing.responseStart - timing.requestStart;
    sitespeed.data.receiveTime        = timing.responseEnd - timing.responseStart;
    sitespeed.data.loadEventTime      = timing.loadEventStart - timing.fetchStart; // blue line in chrome dev tools
    sitespeed.data.domContentTime     = timing.domContentLoadedEventStart - timing.fetchStart; // red line in chrome dev tools
    sitespeed.data.domCompleteTime    = timing.domComplete - timing.domLoading;
} else {
    sitespeed.data.domContentTime     = new Date().getTime() - sitespeed.data.strapped;
    sitespeed.data.domStart = sitespeed.data.strapped;
}
if(typeof sitespeed.postUri != "undefined") {
    $.ajax({
        type: "POST",
        url: sitespeed.postUri,
        data: sitespeed.data
    }).done(function( msg ) {
        // todo!!
        if(typeof sitespeed.debug != "undefined" && sitespeed.debug) {
            console.log( "Data Saved: " + msg );
        }
    });
}

});
