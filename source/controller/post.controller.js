var Post = require("../model/post.model");

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.send(err.message);
  }
};

exports.addPost = async (req, res) => {
  try {
    const post = new Post({
      text: req.body.text,
      title: req.body.title,
    });
    await post.save();
    res.send(post);
  } catch (err) {
    res.send(err.message);
  }
};

exports.updatePost = async (req, res) => {
  try {
    await Post.updateOne({ _id: req.params.id }, req.body);
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch (err) {
    res.send(err.message);
  }
};

exports.ratePost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (req.body.ratings) {
      post.ratings = [...post.ratings, req.body.ratings];
    }
    await post.save();
    res.send(post);
  } catch (err) {
    res.send(err.message);
  }
};

exports.getAverageRate = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });
    let sumOfRating = post.ratings.reduce((a, b) => a + b);
    let avgRating = sumOfRating / post.ratings.length;
    res.send({ avgRating: avgRating });
  } catch (err) {
    res.send(err.message);
    console.log("shalu")
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (err) {
    res.send(err.message);
  }
};
