import React from 'react';
import PostCard from './PostCard';
import { posts } from '../../data/dummyData';

export default function PostList() {
  return (
    <div className="w-full max-w-2xl">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
