const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
	// TODO: Add more fields

	complaintTitle: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	province: {
		type: String,
		required: true,
	},
	district: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	emergencyNo: {
		type: String,
		required: true,
	},
	image: {
		    type:String,
		    required:false
	},
    citizenId: {
		type: String,
		required: true,
	},
	
    citizenName: {
		type: String,
		required: true,
	},
    citizenNIC: {
		type: String,
		required: true,
	},
    complaintStatus: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("complaint", ComplaintSchema);

