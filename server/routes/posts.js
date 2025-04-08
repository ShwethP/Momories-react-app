import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();
//localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);// this is used to make updates using unique ids
router.delete('/:id', deletePost);// this is to delete post
router.patch('/:id/likePost', likePost);


export default router;