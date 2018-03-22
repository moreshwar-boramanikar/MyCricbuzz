var mongoose = require('mongoose');

var post = mongoose.model("post",{
    url:{
        type:String
    },
    comments:{
        type:Array
    }
})

module.exports = {
    post
}