import React, { useState } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import CommentDialog from "./CommentDialog";
import ShareDialog from "./ShareDialog";
import ReportConfirmDialog from "./ReportConfirmDialog";
import { formatDistanceToNow } from "date-fns";


export default function PostCard({ post }) {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const mediaItems = post.media || (
    post.image || post.video
      ? [
        ...(post.image ? [{ type: "image", url: post.image }] : []),
        ...(post.video ? [{ type: "video", url: post.video }] : []),
      ]
      : []
  );

  const mediaTemplate = (media, index) => (
    <div
      key={index}
      className="rounded-lg overflow-hidden bg-gray-100 w-full max-h-[360px] flex justify-center items-center"
      style={{ aspectRatio: "16 / 9" }}
    >
      {media.type === "image" ? (
        <img
          src={media.url}
          alt={`media-${index}`}
          className="object-cover w-full h-full"
        />
      ) : (
        <video
          controls
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
        >
          <source src={media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-6 w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-lg">{post.user}</h3>
          <div className="text-xs text-gray-400">
            {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
          </div>
        </div>
        <span className="text-xs text-gray-500 capitalize">{post.type}</span>
      </div>

      <p className="mb-3">{post.content}</p>

      {mediaItems.length > 1 ? (
        <Carousel
          value={mediaItems}
          itemTemplate={mediaTemplate}
          numVisible={1}
          numScroll={1}
          className="mb-3 max-h-[380px]"
          showIndicators
          circular
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "600px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "480px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      ) : mediaItems.length === 1 ? (
        mediaTemplate(mediaItems[0], 0)
      ) : null}

      <div className="flex justify-around text-sm mt-2 space-x-4 text-gray-600">
        <Button
          icon="pi pi-heart"
          label={`Like (${post.likes})`}
          className="p-button-text text-red-600 hover:text-red-700"
        />
        <Button
          icon="pi pi-comments"
          label="Comment"
          className="p-button-text text-blue-600 hover:text-blue-700"
          onClick={() => setShowComment(true)}
        />
        <Button
          icon="pi pi-share-alt"
          label="Share"
          className="p-button-text text-teal-600 hover:text-teal-700"
          onClick={() => setShowShare(true)}
        />
        <Button
          icon="pi pi-flag"
          label="Report"
          className="p-button-text text-red-500 hover:text-red-600"
          onClick={() => setShowReport(true)}
        />
      </div>

      <CommentDialog
        visible={showComment}
        onHide={() => setShowComment(false)}
        post={post}
      />
      <ShareDialog
        visible={showShare}
        onHide={() => setShowShare(false)}
        post={post}
      />
      <ReportConfirmDialog
        visible={showReport}
        onConfirm={() => {
          alert("Post reported!");
          setShowReport(false);
        }}
        onHide={() => setShowReport(false)}
      />
    </div>
  );
}
