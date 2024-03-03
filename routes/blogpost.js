const express = require("express");
// import controller
const { createComment } = require("../controllers/commentController");
const { createPost,getAllPosts } = require("../controllers/PostController");
const { likePost, unlikePost } = require("../controllers/LikeController");
const router = express.Router();



// mapping create
router.post("/comments/create",createComment);
router.post("/post/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost)
// export
module.exports = router;