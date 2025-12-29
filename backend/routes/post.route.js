import { Router } from "express";
import { commentPost, createPost, deleteCommentOfUser, deletePost, getAllPosts, getCommentByPost, incrementLikes } from "../controllers/post.controller";


const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    },
})

const upload = multer({ storage: storage });

router.route('/post').post(upload.single('media'), createPost);
router.route('/posts').get(getAllPosts);
router.route('/delete_post').post(deletePost);
router.route('/comment').post(commentPost);
router.route('/get_comments').get(getCommentByPost);
router.route('/delete_comment').delete(deleteCommentOfUser);
router.route('/increment_post_like').post(incrementLikes);


export default router;