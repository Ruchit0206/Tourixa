const jwt = require('jsonwebtoken');
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
		if (!agency) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		if (agency.password !== password) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		const token = jwt.sign(
			{
				id: agency._id,
				role: 'AGENCY',
				username: agency.email,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '7d' }
		);

		res.status(200).json({
			message: 'Login successful',
			token,
			agency: {
				id: agency._id,
				name: agency.name,
				email: agency.email,
			},
		});
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

async function addPackage(req, res) {
	try {
		const { title, price, duration, description, packageType, from, to } = req.body;
		const agencyId = res.locals.userData?.id;

		if (
			!agencyId ||
			!title ||
			!price ||
			!duration ||
			!description ||
			!packageType ||
			!req.file
		) {
			return res.status(400).json({ message: 'All fields and photo are required' });
		}

		const agency = await agencyModel.findById(agencyId);
		if (!agency) {
			return res.status(404).json({ message: 'Agency not found' });
		}

		const newPackage = new packageModel({
			agencyId,
			title,
			price,
			duration,
			description,
			packageType,
			from,
			to,
			photo: `/uploads/${req.file.filename}`, // Store relative or absolute path
		});

		await newPackage.save();

		res.status(201).json({
			message: 'Package added successfully',
			data: {
				_id: newPackage._id,
				title: newPackage.title,
				price: newPackage.price,
				duration: newPackage.duration,
				description: newPackage.description,
				packageType: newPackage.packageType,
				photoUrl: newPackage.photoUrl,
				isActive: newPackage.isActive,
				createdAt: newPackage.createdAt,
				updatedAt: newPackage.updatedAt,
			},
		});
	} catch (error) {
		console.error('Add package error:', error);
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

async function getAllPackages(req, res) {
	const packages = await packageModel.find({});
	return res.json({ data: packages, success: true });
}

module.exports = {
	registerAgency,
	loginAgency,
	addPackage,
	getAllPackages,
};
