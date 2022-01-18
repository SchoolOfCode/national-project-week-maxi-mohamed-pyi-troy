import express from "express";
const router = express.Router();
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from "../models/index.js";

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//       res.json({ message: "I wish we had some information to give you ☹️" });
// });

export default router;

//GET all posts
router.get("/", async function (req, res) {
  const allPosts = await getPosts();
  res.json({
    success: true,
    payload: allPosts,
  });
});

// Create new post:
router.post("/", async function (req, res) {
  const { week, day, topic, link } = req.body;
  const newPost = await createPost(week, day, topic, link);
  res.json({
    success: true,
    payload: newPost,
  });
});

// Delete post:

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deletePost(id);
  const result = await getPosts();
  res.json({
    success: true,
    payload: result,
  });
});

// Update post:

router.patch("/:id", async function (req, res) {
  const { id } = req.params;
  const { week, day, topic, link } = req.body;
  const data = await updatePost(id, week, day, topic, link);
  res.json({
    success: true,
    payload: data,
  });
});
