var mongoose= require('mongoose');

var questionSchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 10},
    description: String,
    //foreign key to associate  answer with question
    _user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    _answers:[{type:mongoose.Schema.Types.ObjectId, ref:'Answer'}],
    created_at: {type: Date, default: Date.now }
})
//create a user model based on the above schema
mongoose.model('Question', questionSchema);


var mongoose= require('mongoose');
//create schema
var UserSchema= new mongoose.Schema({
    username: String,

})
//create User model based on this schema
mongoose.model('User', UserSchema);

var mongoose= require('mongoose');

var answerSchema = new mongoose.Schema({
    name:String,
    answer: { type: String, required: true, minlength: 5},
    description: String,
    likes: {type:Number, default:0},
    _user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    _question:{type:mongoose.Schema.Types.ObjectId, ref:'Question'},
    created_at: {type: Date, default: Date.now }

})
//create a user model based on the above schema
mongoose.model('Answer', answerSchema);
