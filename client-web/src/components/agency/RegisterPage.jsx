import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.jpeg';
import { fetchPost } from '../../utils/fetch.utils';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (!fullName.trim()) {
			setError('Full name is required.');
			return;
		}
		if (!email) {
			setError('Email is required.');
			return;
		}
		if (!password) {
			setError('Password is required.');
			return;
		}
		if (password !== confirmPassword) {
			setError('Passwords do not match.');
			return;
		}

		try {
			const result = await fetchPost({
				pathName: 'agency/register',
				body: JSON.stringify({ name: fullName, email, password }),
			});
			if (result.error) {
				setError(result.error);
				return;
			}
			if (result.success) {
				alert(`Registered: ${fullName}, Email: ${email}`);
				navigate('/agency/login');
			} else {
				console.log('Registration failed:', result);
				setError(result.message || 'Registration failed. Please try again.');
			}
		} catch (err) {
			console.error('Registration error:', err);
			setError('An unexpected error occurred. Please try again later.');
		}
	};

	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
			<form
				onSubmit={handleSubmit}
				className="bg-white w-full max-w-md rounded-lg shadow-md p-6"
			>
				<div className="flex flex-col items-center mb-6">
					<img
						src={logo}
						alt="Agency Logo"
						className="w-20 h-20 object-cover mb-2 rounded-full"
					/>
					<h2 className="text-xl font-semibold text-gray-800">Create Your Account</h2>
				</div>

				{error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

				<div className="mb-4">
					<label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
						Full Name
					</label>
					<input
						id="fullName"
						type="text"
						placeholder="Your full name"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
						className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="you@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						id="password"
						type="password"
						placeholder="Create a password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="confirmPassword"
						className="block text-sm font-medium text-gray-700"
					>
						Confirm Password
					</label>
					<input
						id="confirmPassword"
						type="password"
						placeholder="Confirm your password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
				>
					Register
				</button>

				<p className="text-center mt-4 text-sm text-gray-600">
					Already have an account?{' '}
					<Link to="/agency/login" className="text-blue-500 hover:underline">
						Login here
					</Link>
				</p>
			</form>

			<footer className="text-center text-sm text-gray-500 mt-6">
				<p>© 2025 Tourixaa. All rights reserved.</p>
				<div className="space-x-2 mt-1">
					<Link to="/privacy-policy" className="hover:underline">
						Privacy Policy
					</Link>
					<span>|</span>
					<Link to="/terms-of-service" className="hover:underline">
						Terms of Service
					</Link>
					<span>|</span>
					<Link to="/contact" className="hover:underline">
						Contact
					</Link>
				</div>
			</footer>
		</div>
	);
}
