const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
	name: {type: String, required: true},
	founded: Date,
	employees: Number,
	active: Boolean,
	products: [String],
	CEO: {
		name: String,
		age: Number
	}
})

//first argument names a collection we're putting in mongoDB
//mongodb should lowercase and pluralize it
//second argument gives it the above structure
module.exports = mongoose.model('Company', companySchema);