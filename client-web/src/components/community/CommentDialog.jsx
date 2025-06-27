import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function CommentDialog({ visible, onHide, post, comments = [], onAddComment }) {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    // Call parent callback to add comment (you implement)
    if (onAddComment) {
      onAddComment({
        postId: post.id,
        content: newComment,
        replyTo: replyingTo,
      });
    }

    setNewComment("");
    setReplyingTo(null);
  };

  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
  };

  return (
    <Dialog
      header={`Comments (${comments.length})`}
      visible={visible}
      style={{ width: "40vw", maxWidth: 600 }}
      onHide={() => {
        setReplyingTo(null);
        setNewComment("");
        onHide();
      }}
      breakpoints={{ "960px": "90vw", "640px": "100vw" }}
      blockScroll
    >
      <p className="mb-3 text-gray-700">
        Comments for: <strong>{post?.content}</strong>
      </p>

      {/* Comments list */}
      <div className="max-h-64 overflow-y-auto mb-4 border rounded p-3 bg-gray-50">
        {comments.length === 0 && (
          <p className="text-gray-500 text-sm italic">No comments yet</p>
        )}
        {comments.map((comment) => (
          <div key={comment.id} className="mb-3">
            <p className="text-gray-800">{comment.content}</p>
            <button
              className="text-blue-600 text-xs hover:underline"
              onClick={() => handleReplyClick(comment.id)}
            >
              Reply
            </button>
            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="pl-4 mt-2 border-l border-gray-300">
                {comment.replies.map((reply) => (
                  <p key={reply.id} className="text-gray-600 text-sm mb-1">
                    ↳ {reply.content}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input area */}
      {replyingTo && (
        <p className="text-sm text-gray-600 mb-2">
          Replying to comment #{replyingTo}{" "}
          <button
            className="text-red-500 hover:underline ml-2"
            onClick={() => setReplyingTo(null)}
          >
            Cancel Reply
          </button>
        </p>
      )}
      <InputTextarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder={
          replyingTo ? "Write your reply..." : "Write your comment..."
        }
        rows={3}
        className="w-full"
      />
      <Button
        label={replyingTo ? "Add Reply" : "Add Comment"}
        onClick={handleAddComment}
        className="mt-3"
        disabled={newComment.trim() === ""}
      />
    </Dialog>
  );
}
