const express = require('express')
const postController = require('../controllers/post.controller')
const postRouter = express.Router()
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require('../../middleware/auth.middleware')

postRouter.post('/',identifyUser,upload.single('image'),postController.createPostController)
postRouter.get('/',identifyUser,postController.getPostController)
postRouter.get('/details/:postId',identifyUser,postController.getPostDetailsController)
postRouter.post("/like/:postId", identifyUser, postController.likePostController)
postRouter.post("/unlike/:postId", identifyUser, postController.unlikePostController)
postRouter.get('/Feed',identifyUser,postController.getFeedController)

module.exports = postRouter