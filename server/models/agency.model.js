const mongoose = require('mongoose');
const agencySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		proofDocument: {
			type: String,
			// required: true,
		},
		phone: {
			type: String,
			// required: true,
			trim: true,
		},
		address: {
			type: String,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('agency', agencySchema);
