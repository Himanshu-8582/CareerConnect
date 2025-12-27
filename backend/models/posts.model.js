import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    body: {
        
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    upfdatedAt: {
        type: Date,
        default: Date.now
    },
    media: {
        type: String,
        default: ""
    },
    active: {
        type: Boolean,
        default: true
    },
    fileType: {
        type: String,
        default: ""
    }
});

export default Post = mongoose.model("Post", PostSchema);