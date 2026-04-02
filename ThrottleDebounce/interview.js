// 🔁 Debounce
function debounce(fn, delay) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  
  // 🚦 Throttle
  function throttle(fn, limit) {
    let lastCall = 0;
  
    return function (...args) {
      let now = Date.now();
  
      if (now - lastCall >= limit) {
        fn.apply(this, args);
        lastCall = now;
      }
    };
  }
  
  // 🔎 Search (Debounce)
  const input = document.getElementById("search");
  const output = document.getElementById("output");
  
  const handleSearch = debounce((value) => {
    console.log("API Call:", value);
    output.innerText = "Searching: " + value;
  }, 500);
  
  input.addEventListener("input", (e) => {
    handleSearch(e.target.value);
  });
  
  // 📜 Scroll (Throttle)
  const handleScroll = throttle(() => {
    console.log("Scroll position:", window.scrollY);
  }, 5000);
  
  window.addEventListener("scroll", handleScroll);