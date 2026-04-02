function deepCopy(obj) {
    // base case
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    // array ya object
    let copy = Array.isArray(obj) ? [] : {};
  
    // loop
    for (let key in obj) {
      copy[key] = deepCopy(obj[key]); // recursion
    }
  
    return copy;
  }

  const obj = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY"
    }
  }

  const copy = deepCopy(obj);
  copy.address.city = "Los Angeles";
  console.log(obj);
  console.log(copy);