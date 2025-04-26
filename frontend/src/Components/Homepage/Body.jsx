import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const dummyThumbnail = "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg";
const dummyVideoURLs = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  "https://www.youtube.com/watch?v=L_jWHffIx5E",
  "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
  "https://www.youtube.com/watch?v=9bZkp7q19f0",
  "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  "https://www.youtube.com/watch?v=YQHsXMglC9A",
  "https://www.youtube.com/watch?v=RgKAFK5djSk",
];

const sampleVideos = [
  {
    videoId: "video01",
    title: "Learn React in 30 Minutes",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[0],
    description: "A quick tutorial to get started with React.",
    channelId: "channel01",
    uploader: "user01",
    channelName: "React Channel",
    views: 15200,
    likes: 1023,
    dislikes: 45,
    uploadDate: "2024-09-20",
    comments: [
      {
        commentId: "comment01",
        userId: "user02",
        text: "Great video! Very helpful.",
        timestamp: "2024-09-21T08:30:00Z",
      },
    ],
  },
  {
    videoId: "video02",
    title: "JavaScript Basics",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[1],
    description: "Learn the basics of JavaScript.",
    channelId: "channel02",
    uploader: "user02",
    channelName: "JS Tutorials",
    views: 23000,
    likes: 1500,
    dislikes: 30,
    uploadDate: "2024-08-15",
    comments: [],
  },
  {
    videoId: "video03",
    title: "Top 10 CSS Tricks",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[2],
    description: "Improve your CSS skills with these tricks.",
    channelId: "channel03",
    uploader: "user03",
    channelName: "CSS Mastery",
    views: 18000,
    likes: 900,
    dislikes: 20,
    uploadDate: "2024-07-10",
    comments: [],
  },
  {
    videoId: "video04",
    title: "Understanding Node.js",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[3],
    description: "A beginner's guide to Node.js.",
    channelId: "channel04",
    uploader: "user04",
    channelName: "Node Channel",
    views: 25000,
    likes: 1200,
    dislikes: 25,
    uploadDate: "2024-06-05",
    comments: [],
  },
  {
    videoId: "video05",
    title: "Python for Data Science",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[4],
    description: "Learn Python basics for data science.",
    channelId: "channel05",
    uploader: "user05",
    channelName: "Data Science Hub",
    views: 30000,
    likes: 2000,
    dislikes: 40,
    uploadDate: "2024-05-20",
    comments: [],
  },
  {
    videoId: "video06",
    title: "Machine Learning Basics",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[5],
    description: "Introduction to machine learning concepts.",
    channelId: "channel06",
    uploader: "user06",
    channelName: "ML Academy",
    views: 22000,
    likes: 1100,
    dislikes: 35,
    uploadDate: "2024-04-15",
    comments: [],
  },
  {
    videoId: "video07",
    title: "Docker Essentials",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[6],
    description: "Learn Docker from scratch.",
    channelId: "channel07",
    uploader: "user07",
    channelName: "DevOps Channel",
    views: 27000,
    likes: 1300,
    dislikes: 28,
    uploadDate: "2024-03-10",
    comments: [],
  },
  {
    videoId: "video08",
    title: "Kubernetes for Beginners",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[7],
    description: "Getting started with Kubernetes.",
    channelId: "channel08",
    uploader: "user08",
    channelName: "Cloud Channel",
    views: 19000,
    likes: 950,
    dislikes: 22,
    uploadDate: "2024-02-05",
    comments: [],
  },
  {
    videoId: "video09",
    title: "React Hooks Deep Dive",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[8],
    description: "Advanced React hooks explained.",
    channelId: "channel09",
    uploader: "user09",
    channelName: "React Channel",
    views: 21000,
    likes: 1150,
    dislikes: 30,
    uploadDate: "2024-01-01",
    comments: [],
  },
  {
    videoId: "video10",
    title: "TypeScript Basics",
    thumbnailURL: dummyThumbnail,
    videoURL: dummyVideoURLs[9],
    description: "Learn TypeScript from scratch.",
    channelId: "channel10",
    uploader: "user10",
    channelName: "TS Tutorials",
    views: 16000,
    likes: 800,
    dislikes: 18,
    uploadDate: "2023-12-15",
    comments: [],
  },
];

function Body() {
  const location = useLocation();
  const [videos, setVideos] = useState(sampleVideos);
  const [filteredVideos, setFilteredVideos] = useState(sampleVideos);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [playingVideoURL, setPlayingVideoURL] = useState(null);

  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      setSearchTerm(location.state.searchTerm);
      filterVideos(location.state.searchTerm, activeFilter);
    }
  }, [location.state]);

  const filterVideos = (search, filter) => {
    let filtered = videos;
    if (search) {
      filtered = filtered.filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filter && filter !== "All") {
      filtered = filtered.filter(
        (video) => video.channelName.toLowerCase() === filter.toLowerCase()
      );
    }
    setFilteredVideos(filtered);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterVideos(value, activeFilter);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    filterVideos(searchTerm, filter);
  };

  const handleVideoClick = (videoURL) => {
    setPlayingVideoURL(videoURL);
  };

  const handleLike = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.videoId === videoId
          ? { ...video, likes: video.likes + 1 }
          : video
      )
    );
    setFilteredVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.videoId === videoId
          ? { ...video, likes: video.likes + 1 }
          : video
      )
    );
  };

  const handleDislike = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.videoId === videoId
          ? { ...video, dislikes: video.dislikes + 1 }
          : video
      )
    );
    setFilteredVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.videoId === videoId
          ? { ...video, dislikes: video.dislikes + 1 }
          : video
      )
    );
  };

  const filters = ["All", "React Channel", "JS Tutorials"];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex justify-center">
        {/* Sidebar is handled in Header */}
        <main className="flex-grow p-6 max-w-7xl w-full">
          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Filter Buttons */}
          <div className="mb-6 flex space-x-4 bg-gray-400 p-4 rounded-lg justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 $$
                  activeFilter === filter
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-red-200 text-gray-700 hover:bg-red-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Video Player */}
          <VideoPlayer
            playingVideoURL={playingVideoURL}
            onClose={() => setPlayingVideoURL(null)}
          />

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.videoId}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div
                  onClick={() => handleVideoClick(video.videoURL)}
                  className="relative"
                >
                  <img
                    src={video.thumbnailURL}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{video.channelName}</p>
                  <p className="text-gray-500 text-xs mb-4">
                    {video.views.toLocaleString()} views
                  </p>
                  <div className="mt-auto flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(video.videoId)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-red-600 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 9l-3 3m0 0l-3-3m3 3V4"
                        />
                      </svg>
                      <span>{video.likes}</span>
                    </button>
                    <button
                      onClick={() => handleDislike(video.videoId)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 15l3-3m0 0l3 3m-3-3v7"
                        />
                      </svg>
                      <span>{video.dislikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
