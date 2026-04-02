// 🔹 1. Promise.all()
//Sab promises success honge tabhi chalega

var p1 = Promise.resolve("A");
var p2 = Promise.resolve("B");
var p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .then(function (res) {
        console.log("Promise.all:", res); // ["A", "B", "C"]
    })
    .catch(function (err) {
        console.log(err);
    });

// 🔹 2. Promise.race()
// 👉 Jo pehle complete hoga wahi result

var r1 = new Promise(function (resolve) {
    setTimeout(() => resolve("First"), 1000);
});

var r2 = new Promise(function (resolve) {
    setTimeout(() => resolve("Second"), 2000);
});

Promise.race([r1, r2])
    .then(function (res) {
        console.log("Promise.race:", res); // "First"
    });

// 🔹 3. Promise.allSettled()
// 👉 Sabka result milega (success + fail dono)

var s1 = Promise.resolve("Success");
var s2 = Promise.reject("Error");

Promise.allSettled([s1, s2])
    .then(function (res) {
        console.log("Promise.allSettled:", res);
    });
// 👉 Output:
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Error" }
// ]

// 🔹 4. Promise.any()
// 👉 Pehla success return karega

var a1 = Promise.reject("Fail 1");
var a2 = Promise.resolve("Success");
var a3 = Promise.reject("Fail 2");

Promise.any([a1, a2, a3])
    .then(function (res) {
        console.log("Promise.any:", res); // "Success"
    })
    .catch(function (err) {
        console.log(err);
    });


// 🔹 5. Promise.resolve()
// 👉 Direct success promise

var p5 = Promise.resolve("Done");

p5.then(function (res) {
    console.log("Promise.resolve:", res); // "Done"
});

// 🔹 6. Promise.reject()
// 👉 Direct failed promise

var p6 = Promise.reject("Error");

p6.catch(function (err) {
    console.log("Promise.reject:", err); // "Error"
});
