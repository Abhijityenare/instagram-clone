const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        username:{
            type:String,
            unique:[true,'User name already exists'],
            required:[true,"User name is required"]
        },
        email:{
            type:String,
            unique:[true,"email is already exists"],
            required:[true,"email is required"]
        },
        password:{
            type:String,
            required:[true,"password is required"],
            select:false
        },
        bio:String,
        profileImage:{
            type:String,
            default:"https://ik.imagekit.io/bt6ajn1hfv/insta-clone-posts/default-avatar-social-media-display-600nw-2632690107.jpg"
        }
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;