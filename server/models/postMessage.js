import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})
//we have a schema to show ewhat all a post should contain now we'll define a model for that and export it
const postMessage = mongoose.model('memories', postSchema)

export default postMessage;

//so on postmessage model we can run all the crud methods create read delete update