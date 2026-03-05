const postModel = require('../models/post.model')
const likeModel = require('../models/like.model')
const ImageKit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')
const jwt = require("jsonwebtoken")

const imageKit = new ImageKit({
    privateKey:process.env.PRIVATE_KEY_IMAGEKIT
})

async function createPostController(req, res) {

    const file = await imageKit.files.upload({
        file: await toFile(req.file.buffer, req.file.originalname),
        fileName: req.file.originalname,
        folder: "insta-clone-posts"
    });

    const post = await postModel.create({
        caption:req.body.caption,
        imgurl:file.url,
        user:req.user.id
    })
    res.status(201).json({
        message:"post create successfully",
        post
    })
}
async function getPostController(req,res){
    // cookies are populated by cookie-parser middleware (must be added before routes)
    // accessing req.body.cookies will be undefined on GET requests, which causes the
    // TypeError seen by the user.  Always read from req.cookies.



    const userId = req.user.id ;
    const posts = await postModel.find({
        user: userId
    });

    res.status(200).json({
        message: "posts fetched successfully",
        posts
    });
}

async function getPostDetailsController(req,res){
         
   
    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const isValidUser = post.user.toString() === userId

    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden content"
        })
    }

    res.status(200).json({
        message:"post fetched successfully",
        post
    })

} 

async function likePostController(req,res){

        const postId = req.params.postId
        const username = req.user.username

        const isPostExist = await postModel.findById(postId)

        if (!isPostExist) {
            return res.status(404).json({
                message:'post not found'
            })
        }

        const like = await likeModel.create({
            post:postId,
            user:username
        })

        res.status(200).json({
            message:"post like successfully",
            like
        })


}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
    likePostController
}