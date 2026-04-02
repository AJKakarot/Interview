function debounce(func, delay) {
    var timer;

    return function () {
        var context = this;          // save this
        var args = arguments;        // save all arguments

        clearTimeout(timer);

        timer = setTimeout(function () {
            func(context, args);     // simple call
        }, delay);
    };
}

function searchData(value) {
    console.log("Searching:", value);
}

var debouncedSearch = debounce(searchData, 500);

debouncedSearch("A");
debouncedSearch("Aj");
debouncedSearch("Ajeet"); // only this runs