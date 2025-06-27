import React, { useState } from "react";
import CreatePostForm from "../components/community/CreatePostForm";
import PostList from "../components/community/PostList";
import CommunitySection from "../components/community/CommunitySection";
import PageLayout from "../components/layouts/PageLayout";
import CreateCommunityForm from "../components/community/CreateCommunityForm";

export default function Community() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showCommunityForm, setShowCommunityForm] = useState(false);

  const handleAddCommunity = (newCommunity) => {
    setCommunityList((prev) => [
      ...prev,
      {
        id: prev.length + 1, // or better: Date.now() or uuid
        ...newCommunity,
      },
    ]);
  };
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto mt-5">

        <div className="flex justify-end mb-6 px-4">
          <button
            onClick={() => setShowCreateForm((prev) => !prev)}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            {showCreateForm ? "Close" : "Create Post"}
          </button>
        </div>

        {/* Wrapper controls total width */}
        <div className="px-4 max-w-7xl mx-auto">
          {/* Make form full width of container */}
          {showCreateForm && (
            <div className="mb-10 w-full">
              <CreatePostForm />
            </div>
          )}

          {/* Posts and communities side-by-side */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Posts */}
            <main className="flex-1 max-w-4xl">
              <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
              <PostList />
            </main>

            {/* Communities */}
            <aside className="w-full lg:w-80 sticky top-10 self-start max-h-[calc(100vh-5rem)] overflow-auto hide-scrollbar">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Communities to Join</h2>
                <button
                  onClick={() => setShowCommunityForm((prev) => !prev)}
                  className="text-sm hover:bg-blue-300 px-3 py-1 rounded-md flex items-center gap-2"
                  title="Create Community"
                >
                  {showCommunityForm ? (
                    "Close"
                  ) : (
                    <>
                      <i className="pi pi-plus text-black"></i>
                    </>
                  )}
                </button>

              </div>

              {showCommunityForm && (
                <div className="mb-6">
                  <CreateCommunityForm onCreate={handleAddCommunity} />
                </div>
              )}

              <CommunitySection />
            </aside>


          </div>
        </div>
      </div>
    </PageLayout>
  );
}
