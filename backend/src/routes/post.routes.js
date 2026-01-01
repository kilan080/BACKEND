import { Router } from "express";
import { createPost } from "../controller/post.controller.js";
import { getPosts } from "../controller/post.controller.js";
import { updatePost } from "../controller/post.controller.js";
import { deletePost } from "../controller/post.controller.js";

const router = Router();

router.route('/create').post(createPost);
router.route('/getPosts').get(getPosts);
router.route('/update/:id').patch(updatePost);
router.route('/delete/:id').delete(deletePost);

export default router;