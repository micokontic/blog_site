global.setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("ovo se vrti");
}, 1000);

console.log(__dirname);
console.log(__filenamen);
