const express = require("express");
const router = express.Router();
//blog routes
const Blog = require("../models/blog");
router.get("/blogs", (req, res) => {
  const mongoose = require("mongoose");

  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/blogs", (req, res) => {
  console.log(req.body);
  const temp = req.body;
  const blog = new Blog(req.body);
  blog
    .save()
    .then(res.redirect("/blogs"))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/create", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("create", { title: "Blog" });
});
router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      console.log(result);
      res.render("details", {
        blogs: [result],
        title: result.title,
      });
    })
    .catch((err) => {
      res.render("404", { title: "Blog not found" });
    });
});
router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log("usao sam odje");
  Blog.findByIdAndDelete(id)
    .then((result) => {
      console.log("obrisao sam");
      res.json({
        redirect: "/blogs",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
