const fetched = await fetch("https://sahilrajput03.github.io/").then((t) =>
  t.text()
);
// for fetching json, you could do t.json() instead.
console.log("$log:Html fetched:-", fetched);P
console.log("Program Ends..")
