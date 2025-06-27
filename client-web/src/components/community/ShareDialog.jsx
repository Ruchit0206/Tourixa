import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function ShareDialog({ visible, onHide, post }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://yourwebsite.com/posts/${post?.id}`);
    alert('Post link copied!');
    onHide();
  };

  return (
    <Dialog header="Share Post" visible={visible} style={{ width: '25vw' }} onHide={onHide}>
      <p>Share this post: <strong>{post?.content}</strong></p>
      <Button label="Copy Post Link" onClick={handleCopyLink} icon="pi pi-copy" className="mt-3" />
    </Dialog>
  );
}
