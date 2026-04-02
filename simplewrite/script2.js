function throttle(func, delay) {
    var lastCallTime = 0;

    return function () {
        var context = this;
        var args = arguments;

        var currentTime = new Date().getTime();

        if (currentTime - lastCallTime >= delay) {
            lastCallTime = currentTime;

            func.call(context, args[0]);
        }
    };
}

function sendRequest(msg) {
    console.log("API Call:", msg);
}

var throttledClick = throttle(sendRequest, 7000);

// simulate fast clicks


throttledClick("Click 3");