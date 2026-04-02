// 🔹 Fake APIs (simulate real APIs)
function api1() {
    return new Promise((res) => {
      setTimeout(() => res("✅ API 1 Success (1s)"), 1000);
    });
  }
  
  function api2() {
    return new Promise((res) => {
      setTimeout(() => res("✅ API 2 Success (2s)"), 2000);
    });
  }
  
  function api3() {
    return new Promise((_, rej) => {
      setTimeout(() => rej("❌ API 3 Failed (1.5s)"), 1500);
    });
  }
  
  // 🔹 Output element
  const output = document.getElementById("output");
  
  // ============================
  // 🔵 Promise.all
  // ============================
  document.getElementById("all").onclick = async () => {
    output.innerText = "Loading (ALL)...";
  
    try {
      const result = await Promise.all([api1(), api2()]);
      output.innerText = "Promise.all:\n" + result.join("\n");
    } catch (err) {
      output.innerText = "Error: " + err;
    }
  };
  
  // ============================
  // ⚡ Promise.race
  // ============================
  document.getElementById("race").onclick = async () => {
    output.innerText = "Loading (RACE)...";
  
    try {
      const result = await Promise.race([api1(), api2()]);
      output.innerText = "Promise.race:\n" + result;
    } catch (err) {
      output.innerText = "Error: " + err;
    }
  };
  
  // ============================
  // 🧾 Promise.allSettled
  // ============================
  document.getElementById("settled").onclick = async () => {
    output.innerText = "Loading (ALL SETTLED)...";
  
    const result = await Promise.allSettled([api1(), api3()]);
  
    let formatted = result.map((r, i) => {
      if (r.status === "fulfilled") {
        return `API ${i + 1}: ✅ ${r.value}`;
      } else {
        return `API ${i + 1}: ❌ ${r.reason}`;
      }
    });
  
    output.innerText = "Promise.allSettled:\n" + formatted.join("\n");
  };
  
  // ============================
  // 🟢 Promise.any
  // ============================
  document.getElementById("any").onclick = async () => {
    output.innerText = "Loading (ANY)...";
  
    try {
      const result = await Promise.any([api3(), api1(), api2()]);
      output.innerText = "Promise.any:\n" + result;
    } catch (err) {
      output.innerText = "All Promises Failed ❌";
    }
  };


// Error thrown by Promise.any when all promises are rejected.

// 📌 Key Points:
// Contains all errors
// Access using .errors
// 💻 Example:
// Promise.any([
//   Promise.reject("Error 1"),
//   Promise.reject("Error 2")
// ])
// .catch(err => {
//   console.log(err);        // AggregateError
//   console.log(err.errors); // ["Error 1", "Error 2"]
// });