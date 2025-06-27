import React, { useState, useRef } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Carousel } from "primereact/carousel";

export default function CreatePostForm() {
  const [text, setText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const toast = useRef(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    toast.current.show({
      severity: "success",
      summary: "Files Selected",
      detail: `${newFiles.length} file(s) added`,
      life: 3000,
    });
  };

  const handleDeleteFile = (indexToRemove) => {
    console.log("Deleting file at index:", indexToRemove);
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleUploadClick = () => {
    if (selectedFiles.length === 0) {
      toast.current.show({
        severity: "warn",
        summary: "No Files",
        detail: "Please select files to upload",
        life: 3000,
      });
      return;
    }

    // Mock upload logic here
    toast.current.show({
      severity: "info",
      summary: "Upload Started",
      detail: `${selectedFiles.length} file(s) uploaded (mock)`,
      life: 3000,
    });

    setSelectedFiles([]);
    fileInputRef.current.value = null;
  };

  const handleCancelClick = () => {
    setSelectedFiles([]);
    fileInputRef.current.value = null;
    toast.current.show({
      severity: "info",
      summary: "Selection Cancelled",
      life: 2000,
    });
  };

  const handleSubmit = () => {
    if (!text && selectedFiles.length === 0) {
      toast.current.show({
        severity: "warn",
        summary: "Empty Post",
        detail: "Write something or upload files.",
        life: 3000,
      });
      return;
    }

    console.log("Post Text:", text);
    console.log("Files:", selectedFiles);

    toast.current.show({
      severity: "success",
      summary: "Post Created",
      detail: "Your post was submitted (mock).",
      life: 3000,
    });

    setText("");
    setSelectedFiles([]);
    fileInputRef.current.value = null;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 w-full">
      <Toast ref={toast} />

      <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>

      <InputTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="What's on your mind?"
        className="w-full mb-4 border border-gray-300 rounded-lg p-3"
        autoResize
      />

      {/* Hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        id="file-upload"
      />

      <div className="flex items-center gap-4">
        {/* Upload icon label */}
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 inline-block relative"
          title="Choose Images or Videos"
        >
          <i className="pi pi-image text-2xl"></i>
        </label>

        {/* Mention people button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-lg text-sm"
          title="Mention People"
          onClick={() => {
            // handle mention action here
          }}
        >
          <i className="pi pi-users text-lg"></i> {/* user group icon */}
          <span>Mention</span>
        </button>
      </div>

      {/* Upload and Cancel buttons only if files selected */}
      {selectedFiles.length > 0 && (
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={handleUploadClick}
            className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl border border-blue-700 shadow-lg transition-colors duration-300"
            title="Upload"
            type="button"
          >
            <i className="pi pi-check text-xl"></i>
          </button>

          <button
            onClick={handleCancelClick}
            className="flex items-center justify-center w-12 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl border border-gray-300 shadow transition-colors duration-300"
            title="Cancel"
            type="button"
          >
            <i className="pi pi-times text-xl"></i>
          </button>

          {/* New Add More button */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="flex items-center justify-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition-colors duration-300"
            title="Add More Files"
            type="button"
          >
            <i className="pi pi-plus mr-2"></i> Add More
          </button>

          <span className="text-gray-500 text-sm font-medium select-none">
            {selectedFiles.length} file{selectedFiles.length !== 1 ? "s" : ""}{" "}
            selected
          </span>
        </div>
      )}

      {/* Preview selected files carousel */}
      {selectedFiles.length > 0 && (
        <div className="mt-4" style={{ maxWidth: "480px" }}>
          <Carousel
            value={selectedFiles}
            numVisible={1}
            numScroll={1}
            className="rounded-lg border border-gray-300 p-2"
            itemTemplate={(file, index) => {
              const isImage = file.type.startsWith("image/");
              const isVideo = file.type.startsWith("video/");
              const url = URL.createObjectURL(file);

              return (
                <div
                  key={index}
                  className="relative rounded overflow-hidden shadow-sm flex justify-center items-center group"
                  style={{ maxHeight: "240px" }}
                >
                  {/* Delete button, only visible on hover */}
                  <button
                    onClick={() => handleDeleteFile(index)}
                    className="absolute top-2 right-2 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center w-8 h-8"
                    title="Delete"
                    type="button"
                  >
                    <i className="pi pi-trash"></i>
                  </button>

                  {isImage && (
                    <img
                      src={url}
                      alt={`preview-${index}`}
                      className="object-contain w-full h-60"
                      onLoad={() => URL.revokeObjectURL(url)}
                    />
                  )}
                  {isVideo && (
                    <video
                      src={url}
                      controls
                      className="object-contain w-full h-60"
                      onLoadedData={() => URL.revokeObjectURL(url)}
                    />
                  )}
                </div>
              );
            }}
          />
        </div>
      )}

      <div className="flex justify-end mt-6">
        <Button
          label="Post"
          icon="pi pi-send"
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 border-none text-white text-sm px-4 py-2 rounded-lg"
        />
      </div>
    </div>
  );
}
