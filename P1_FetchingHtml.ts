const fetched = await fetch("https://sahilrajput03.github.io/").then((t) =>
  t.text()
);
console.log("$log:Html fetched:-", fetched);
