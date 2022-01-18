import express from "express";
const router = express.Router();
import { getPosts, createPost } from "../models/index.js";

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
