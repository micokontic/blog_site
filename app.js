const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://netninja:test1234@nodetutorial.oeekf.mongodb.net/node-tuts?retryWrites=true&w=majority";

const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to database");
    app.listen(3000);
  })
  .catch((err) => {
    console.log("neuspjesno konektovanje na bazu");
    console.log(err);
  });

var morgan = require("morgan");

app.set("view engine", "ejs");
app.set("views", "views");

//middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "Naslov",
//     snippet: "Snippet of a new blog",
//     body: "The body of a new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((results) => {
//       res.send(results);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("5f61de32a81c870ae835f600")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About", blogs: "blogs" });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/create_blogs");
});
app.use(blogRoutes);
//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
