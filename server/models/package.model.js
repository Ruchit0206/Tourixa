const mongoose = require('mongoose');
const packageSchema = new mongoose.Schema(
	{
		agencyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'agency',
		},
		packageType: {
			type: String,
			required: true,
			enum: [
				'International',
				'Domestic',
				'Group Tour',
				'Solo Tour',
				'Nature & Tracking',
				'Maharaja Express',
				'Honeymoon Package',
				'Senior Citizen',
				'Business Packages',
				'Children Places',
			],
		},
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		duration: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		photo: { type: String },
		from: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
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

module.exports = mongoose.model('package', packageSchema);
