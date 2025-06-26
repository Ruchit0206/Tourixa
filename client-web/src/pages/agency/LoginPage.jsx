import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/logo.jpeg'; // make sure the path is correct
import { fetchPost } from '../../utils/fetch.utils'; // make sure path is correct

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (!email) {
			setError('Email is required.');
			return;
		}
		if (!password) {
			setError('Password is required.');
			return;
		}

		try {
			const res = await fetchPost({
				pathName: 'agency/login',
				body: JSON.stringify({ email, password }),
			});

			if (res?.token) {
				localStorage.setItem('token', res.token);
				localStorage.setItem('role', 'AGENCY');
				localStorage.setItem('agencyName', res.agency?.name); // optional
				localStorage.setItem('agencyEmail', res.agency?.email); // optional

				navigate('/dashboard');
			} else {
				setError(res?.message || 'Login failed. Please try again.');
			}
		} catch (err) {
			console.error('Login error:', err);
			setError('Something went wrong. Please try again.');
		}
	};

	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#e2ecf3] px-5 py-10">
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-2xl w-full max-w-md p-8"
			>
				<div className="flex flex-col items-center mb-6">
					<img
						src={logo}
						alt="Agency Logo"
						className="w-20 h-20 object-contain rounded-full mb-3"
					/>
					<h2 className="text-2xl font-semibold text-gray-800">Agency Login</h2>
				</div>

				{error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

				<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
					Email
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="you@example.com"
					required
					className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
					Password
				</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
					required
					className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 text-sm text-gray-600 gap-2">
					<label className="flex items-center gap-2">
						<input
							type="checkbox"
							checked={remember}
							onChange={() => setRemember(!remember)}
							className="accent-blue-600"
						/>
						Remember me
					</label>
					<Link to="/forgot-password" className="text-blue-600 hover:underline">
						Forgot password?
					</Link>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
				>
					Login
				</button>

				<p className="text-center text-sm text-gray-600 mt-6">
					Don’t have an account?{' '}
					<Link to="/agency/register" className="text-blue-600 hover:underline">
						Register here
					</Link>
				</p>
			</form>

			<footer className="text-center text-sm text-gray-600 mt-6 px-2">
				<p>© 2025 Your Agency. All rights reserved.</p>
				<div className="mt-2 flex justify-center flex-wrap gap-x-2 gap-y-1">
					<Link to="/privacy-policy" className="hover:underline text-blue-600">
						Privacy Policy
					</Link>
					<span className="text-gray-400">|</span>
					<Link to="/terms-of-service" className="hover:underline text-blue-600">
						Terms of Service
					</Link>
					<span className="text-gray-400">|</span>
					<Link to="/contact" className="hover:underline text-blue-600">
						Contact
					</Link>
				</div>
			</footer>
		</div>
	);
}
