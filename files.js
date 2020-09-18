const fs = require("fs");

fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    console.log("error");
  } else {
    console.log(data.toString());
  }
});

fs.writeFile("./docs/blog2.txt", "hello, world", () => {
  console.log("file was written");
});

console.log("last line");

if (fs.existsSync("./assets")) {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder deleted");
    }
  });
} else {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log("neuspjesan");
    } else {
      console.log("folder created");
    }
  });
}
