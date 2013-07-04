window.sitespeed = window.sitespeed || {}
sitespeed.url = sitespeed.url || document.location.toString();
var o = {}

if (window.performance && window.performance.timing) {
    var timing = window.performance.timing;
    sitespeed['redirectTime']       = timing.redirectEnd - timing.redirectStart;
    sitespeed['connectTime']        = timing.connectEnd - timing.connectStart;
    sitespeed['waitTime']           = timing.responseStart - timing.requestStart;
    sitespeed['receiveTime']        = timing.responseEnd - timing.responseStart;
    sitespeed['loadEventTime']      = timing.loadEventStart - timing.fetchStart; // blue line in chrome dev tools
    sitespeed['domContentTime']     = timing.domContentLoadedEventStart - timing.fetchStart; // red line in chrome dev tools
    sitespeed['domCompleteTime']    = timing.domComplete - timing.domLoading;
}
alert(o.url);
$.ajax({
    type: "POST",
    url: "sensor.php",
    //data: o
    data: o
}).done(function( msg ) {
    alert( "Data Saved: " + msg );
});
