(function() {
    var noop = function() {},
        getExisting = function(name) {
            return window.sitespeed && window.sitespeed[name] ? window.sitespeed[name] : '';
        };

    var currentTime = function() {
        return new Date().getTime();
    };

    var data = {
        domStart: getExisting('domStart'),
        sessionId: getExisting('sessionId'),
        pageId:  getExisting('pageId'),
        events: {}
    };

    var event = function(name) {
        data.events[name] = currentTime();
    }

    var collect = function() {
        data.url = document.location.toString();

        if (window.performance && window.performance.timing) {
            var timing = window.performance.timing;

            data.domStart        = timing.loadEventStart;
            data.redirectTime    = timing.redirectEnd - timing.redirectStart;
            data.connectTime     = timing.connectEnd - timing.connectStart;
            data.waitTime        = timing.responseStart - timing.requestStart;
            data.receiveTime     = timing.responseEnd - timing.responseStart;
            data.loadEventTime   = timing.loadEventStart - timing.fetchStart; // blue line in chrome dev tools
            data.domContentTime  = timing.domContentLoadedEventStart - timing.fetchStart; // red line in chrome dev tools
            data.domCompleteTime = timing.domComplete - timing.domLoading;
        } else {
            data.domContentTime  = new Date().getTime() - data.domStart;
        }

        return data;
    };

    window.sitespeed = {
        currentTime: currentTime,
        event: event,
        collect: collect
    }
})();
