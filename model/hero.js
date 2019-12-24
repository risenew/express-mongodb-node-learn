const mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
	  heroName :String,
	  age : Number,
	  heroSex : String,
	  address : String,
	  heroPosition : [],
	  imgArr:[],
	  favourite:String,
	  explain:String,
},{collection:'myhero'});

const Hero = module.exports = mongoose.model('hero',heroSchema)

