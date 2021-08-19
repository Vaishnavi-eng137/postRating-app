const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    text:{
        type:String,
        default:null,
        required: true
    },
    title: String,
    ratings:[{
        type: Number,
        min:0,
        max:10
    }]
})

const Post = mongoose.model('Post',postSchema);

module.exports = Post;
