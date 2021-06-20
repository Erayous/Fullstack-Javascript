const stringManipulator = (msg, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, delay);
  });
};

stringManipulator("JavaScript is cool, even when it sucks", 1000)
  .then((data) => {
    console.log("From first promise: " + data.toUpperCase());
    console.log("From first promise: " + data.length);
    return JSON.stringify(data);
  })
  .then((res) => {
    console.log("From second promise: " + res);
  });
