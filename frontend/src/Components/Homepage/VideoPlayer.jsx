import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ playingVideoURL, onClose }) {
  if (!playingVideoURL) return null;

  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-4xl min-h-3xl aspect-w-16 aspect-h-9">
        <ReactPlayer
          url={playingVideoURL}
          controls
          playing
          width="100%"
          height="100%"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
