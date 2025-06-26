const agencyModel = require('../models/agency.model');
const packageModel = require('../models/package.model');

async function registerAgency(req, res) {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		const existingAgency = await agencyModel.findOne({ email: email });
		if (existingAgency) {
			return res.status(400).json({ message: 'Agency already exists' });
		}
		console.log('Registering agency:', req.body);

		const newAgency = new agencyModel({ name, email, password });
		await newAgency.save();

		res.status(201).json({ message: 'Agency registered successfully', success: true });
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

async function loginAgency(req, res) {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required' });
		}

		const agency = await agencyModel.findOne({ email });
		if (!agency || !(await agency.comparePassword(password))) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		res.status(200).json({ message: 'Login successful', agency });
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

async function addPackage(req, res) {
	try {
		const { packageData } = req.body;
		// agencyId = res.locals.agencyId; // Assuming agencyId is set in middleware

		// if (!agencyId || !packageData) {
		// 	return res.status(400).json({ message: 'Agency ID and package data are required' });
		// }

		// const agency = await agencyModel.findById(agencyId);
		// if (!agency) {
		// 	return res.status(404).json({ message: 'Agency not found' });
		// }

		const newPackage = new packageModel({
			title: packageData.title,
			price: packageData.price,
			duration: packageData.duration,
			description: packageData.description,
			packageType: packageData.type,
		});
		await newPackage.save();
		// agency.packages.push(newPackage._id);
		// await agency.save();
		res.status(201).json({ message: 'Package added successfully', data: newPackage });
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

module.exports = {
	registerAgency,
	loginAgency,
	addPackage,
};
