// 🔹 1. Shallow Copy
// 👉 Sirf top level copy hoti hai
// 👉 Nested object same reference share karta hai ❗

// 🔸 Object.assign
var obj1 = {
    name: "Ajeet",
    address: {
        city: "Kanpur"
    }
};

var obj2 = Object.assign({}, obj1);

obj2.address.city = "Delhi";

console.log("Shallow (assign):", obj1.address.city); // ❌ "Delhi" (original bhi change ho gaya)

// 🔸 Spread Operator
var obj3 = {
    name: "Ajeet",
    address: {
        city: "Kanpur"
    }
};

var obj4 = { ...obj3 };

obj4.address.city = "Mumbai";

console.log("Shallow (spread):", obj3.address.city); // ❌ "Mumbai"

// 🔥 Samajh
// 👉 Nested object copy nahi hota
// 👉 Sirf reference copy hota hai

// 🔹 2. Deep Copy
// 👉 Pure object ka alag copy
// 👉 Nested bhi separate hota hai ✅

// 🔸 Method 1 (JSON - simple)
var obj5 = {
    name: "Ajeet",
    address: {
        city: "Kanpur"
    }
};

var obj6 = JSON.parse(JSON.stringify(obj5));

obj6.address.city = "Delhi";

console.log("Deep (JSON):", obj5.address.city); // ✅ "Kanpur"

// 🔸 Method 2 (Recursive – interview important 🔥)
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    var copy = Array.isArray(obj) ? [] : {};

    for (var key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

var obj7 = {
    name: "Ajeet",
    address: {
        city: "Kanpur"
    }
};

var obj8 = deepCopy(obj7);

obj8.address.city = "Delhi";

console.log("Deep (recursive):", obj7.address.city); // ✅ "Kanpur"


// Step-by-step:
// 🟢 key = "name"
//   copy["name"] = deepCopy("Ajeet");
//   👉 result: copy["name"] = "Ajeet";
//
// 🟢 key = "address"
//   copy["address"] = deepCopy({ city: "Kanpur" });
//   👉 yaha recursion chalu 🔥
//
//   Inside recursion:
//   copy["city"] = deepCopy("Kanpur");
//
// ✅ Final result:
// {
//     name: "Ajeet",
//     address: {
//         city: "Kanpur"
//     }
// }