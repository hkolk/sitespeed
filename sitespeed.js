$(window).load(function() {
window.sitespeed = window.sitespeed || {};
window.sitespeed.data = window.sitespeed.data || {};
sitespeed.data.url = sitespeed.data.url || document.location.toString();

if (window.performance && window.performance.timing) {
    var timing = window.performance.timing;
    sitespeed.data.domStart           = timing.loadEventStart;
    sitespeed.data.redirectTime       = timing.redirectEnd - timing.redirectStart;
    sitespeed.data.connectTime        = timing.connectEnd - timing.connectStart;
    sitespeed.data.waitTime           = timing.responseStart - timing.requestStart;
    sitespeed.data.receiveTime        = timing.responseEnd - timing.responseStart;
    sitespeed.data.loadEventTime      = timing.loadEventStart - timing.fetchStart; // blue line in chrome dev tools
    sitespeed.data.domContentTime     = timing.domContentLoadedEventStart - timing.fetchStart; // red line in chrome dev tools
    sitespeed.data.domCompleteTime    = timing.domComplete - timing.domLoading;
} else {
    sitespeed.data.domContentTime     = new Date().getTime() - sitespeed.data.domStart;
}
$.ajax({
    type: "POST",
    url: "sensor.php",
    //data: o
    data: sitespeed.data
}).done(function( msg ) {
    // todo!!
    alert( "Data Saved: " + msg );
});
});
