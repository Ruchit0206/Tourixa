import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import PageLayout from "../layouts/PageLayout";

const modelData = [
  {
    id: "ikI3rGTwIf9xdRrcEgxTxEywGH3",
    place: "Taj Mahal, India",
    description: "Intricate 3D model of the Taj Mahal on Sketchfab.",
  },
  {
    id: "8aed09780cf840de8ba7634b2f7174f7",
    place: "Eiffel Tower, Paris",
    description: "Detailed structure of the Eiffel Tower in 3D.",
  },
  {
    id: "c168371aaffa4c8294bc0da426d0018a",
    place: "Colosseum, Rome",
    description: "High-quality 3D render of the Roman Colosseum.",
  },
  {
    id: "b80c75f91dad4994a0e7000467433ac9",
    place: "Brihadisvara Temple",
    description: "Dravidian architecture masterpiece in 3D.",
  },
  {
    id: "059169f965a84d4abfc9bc6d415c0f43",
    place: "Old Rangji Temple",
    description: "Heritage Hindu temple in beautiful 3D.",
  },
  {
    id: "13c8ef0613564a92b43ee974c1182f56",
    place: "Kailasa Temple, Ellora",
    description: "Rock-cut architectural marvel in Maharashtra.",
  },
  {
    id: "618ff24683ae4d7b87c18f71ce26ec65",
    place: "Gayatri Shaktipeeth Temple, Rajasthan",
    description: "Hindu temple in detailed 3D.",
  },
  {
    id: "9066339c9b904f1ca091e9ff2357a5e5",
    place: "Kashi Vishwanath Temple",
    description: "3D visualization of Varanasi's iconic temple.",
  },
  {
    id: "ba3a034848f240be95983fc07ef5f072",
    place: "Rajarani Temple, Odisha",
    description: "Intricate 3D view of Rajarani Temple.",
  },
  {
    id: "c4377b0209764be4a3baa10969d6cd01",
    place: "Somaskanda, 14th or 15th C CE",
    description: "Chola bronze in high-quality 3D.",
  },
  {
    id: "6cc905be2ae34e8091eb1eaa84a17738",
    place: "Sun Temple Konark",
    description: "The iconic Sun Temple captured in 3D.",
  },
  {
    id: "1e8e9212dc874323af8d21c14d553f85",
    place: "Hampi Chariot",
    description: "Famous stone chariot visualized in 3D.",
  },
  {
    id: "ee188fc27c744f11b0262d0357f37b23",
    place: "Modhera Sun Temple Gujarat",
    description: "Architectural beauty in detailed 3D.",
  },
  {
    id: "38a652e9f3bf49039026ef65ef61ac92",
    place: "Gateway Of India - Mumbai",
    description: "3D model of Mumbai's historical monument.",
  },
];

// 🔲 Thumbnail for each model
const ModelCard = ({ model, onClick }) => {
  return (
    <div
      onClick={() => onClick(model)}
      className="group relative p-[2px] rounded-xl w-full cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow-lg transition">
        <div className="aspect-video mb-3 bg-gray-200 flex items-center justify-center overflow-hidden rounded relative">
          <iframe
            title={model.place}
            frameBorder="0"
            width="100%"
            height="100%"
            src={`https://sketchfab.com/models/${model.id}/embed?autospin=0.3&autostart=0&ui_infos=0&ui_controls=0&ui_watermark=0`}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            className="w-full h-full pointer-events-none"
          ></iframe>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white opacity-80 group-hover:opacity-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center">{model.place}</h3>
        <p className="text-sm text-gray-600 text-center mt-1">{model.description}</p>
      </div>
    </div>
  );
};


export default function ModelsPage() {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleClick = (model) => {
    setSelectedModel(model);
    setVisible(true);
  };

  const filteredModels = modelData.filter((model) =>
    model.place.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-4">Explore 3D Models</h1>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search place..."
          className="border rounded px-3 py-2 mb-6 w-full max-w-md mx-auto block shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🖼️ Grid of Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <ModelCard key={model.id} model={model} onClick={handleClick} />
          ))}
        </div>

        {/* 🪟 Modal for Sketchfab View */}
        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          header={selectedModel?.place}
          style={{ width: "90vw", maxWidth: "1000px" }}
          breakpoints={{ "960px": "95vw", "640px": "100vw" }}
          className="rounded-xl"
        >
          {selectedModel && (
            <div className="aspect-video">
              <iframe
                title={selectedModel.place}
                width="100%"
                height="100%"
                src={`https://sketchfab.com/models/${selectedModel.id}/embed`}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                frameBorder="0"
                className="w-full h-full rounded"
              ></iframe>
            </div>
          )}
        </Dialog>

        {/* 📢 Disclaimer */}
        <div className="mt-10 text-sm text-center text-gray-500 max-w-4xl mx-auto px-4">
          <p className="mb-2">
            <strong>Disclaimer:</strong> All 3D models displayed on this page are embedded directly from <strong>Sketchfab</strong>. We do not claim ownership or copyright.
          </p>
          <p>
            If you're the original creator and would like your model removed, contact us at{" "}
            <a href="mailto:tourixaa@gmail.com" className="text-blue-600 underline">tourixaa@gmail.com</a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
