// import
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


// bussiness logic
exports.createComment = async(req,res)=>{
    try{
        // fetch data from req body
        const{post,user,body} = req.body;
        // create a comment object
        const comment = new Comment({
            post,user,body
        });
        // save the new comment in the database
        const savedComment = await comment.save();

        // find the post using Id,add the new comment to its array
        const updatedPost  = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")  //populate the comment array with comment documents
        .exec();

        res.json({
            post:updatedPost,
        });
    }

    catch(err){
        return res.status(500)
        .json({
            err:"error while creating comment",
        });
    }
}