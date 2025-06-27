import React from 'react';
import { Button } from 'primereact/button';

export default function CommunityCard({ community }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="mb-3">
        <h4 className="text-xl font-semibold text-blue-800">{community.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{community.description}</p>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>
          <i className="pi pi-user mr-1" /><span className="font-medium">{community.owner}</span>
        </span>
        <span>
          <i className="pi pi-users mr-1" /> {community.members} 
        </span>
      </div>

      <Button
        className="w-full p-button-sm p-button-outlined p-button-primary flex items-center justify-center gap-2"
      >
        <i className="pi pi-plus-circle text-sm"></i>
        <span className="text-sm font-medium">Join</span>
      </Button>

    </div>
  );
}
