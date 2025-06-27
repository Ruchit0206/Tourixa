// components/community/CreateCommunityForm.jsx
import React, { useState } from 'react';

export default function CreateCommunityForm({ onCreate }) {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && owner && description) {
            const newCommunity = {
                id: Date.now(),
                name,
                owner,
                members: Math.floor(Math.random() * 500 + 100),
                description,
            };
            onCreate(newCommunity);
            setName('');
            setOwner('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow">
            <div>
                <label className="block font-semibold">Community Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block font-semibold">Owner</label>
                <input
                    type="text"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block font-semibold">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Create Community
            </button>
        </form>
    );
}
