import React from 'react';
import CommunityCard from './CommunityCard';
import { communities } from '../../data/dummyData';

export default function CommunitySection() {
  return (
    <div className="mt-6 space-y-5">
      {communities.map((com) => (
        <CommunityCard key={com.id} community={com} />
      ))}
    </div>
  );
}
