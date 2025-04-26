import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";

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
    thumbnailURL: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    videoURL: dummyVideoURLs[0],
    description: "A quick tutorial to get started with React.",
    channelId: "channel01",
    uploader: "user01",
    channelName: "React Channel",
    views: 15200,
    likes: 1023,
    dislikes: 45,
    uploadDate: "2024-09-20",
  },
  {
    videoId: "video02",
    title: "JavaScript Basics",
    thumbnailURL: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    videoURL: dummyVideoURLs[1],
    description: "Learn the basics of JavaScript.",
    channelId: "channel02",
    uploader: "user02",
    channelName: "JS Tutorials",
    views: 23000,
    likes: 1500,
    dislikes: 30,
    uploadDate: "2024-08-15",
  },
  {
    videoId: "video03",
    title: "Top 10 CSS Tricks",
    thumbnailURL: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
    videoURL: dummyVideoURLs[2],
    description: "Improve your CSS skills with these tricks.",
    channelId: "channel03",
    uploader: "user03",
    channelName: "CSS Mastery",
    views: 18000,
    likes: 900,
    dislikes: 20,
    uploadDate: "2024-07-10",
  },
  {
    videoId: "video04",
    title: "Understanding Node.js",
    thumbnailURL: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    videoURL: dummyVideoURLs[3],
    description: "A beginner's guide to Node.js.",
    channelId: "channel04",
    uploader: "user04",
    channelName: "Node Channel",
    views: 25000,
    likes: 1200,
    dislikes: 25,
    uploadDate: "2024-06-05",
  },
  {
    videoId: "video05",
    title: "Python for Data Science",
    thumbnailURL: "https://img.youtube.com/vi/Zi_XLOBDo_Y/hqdefault.jpg",
    videoURL: dummyVideoURLs[4],
    description: "Learn Python basics for data science.",
    channelId: "channel05",
    uploader: "user05",
    channelName: "Data Science Hub",
    views: 30000,
    likes: 2000,
    dislikes: 40,
    uploadDate: "2024-05-20",
  },
  {
    videoId: "video06",
    title: "Machine Learning Basics",
    thumbnailURL: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    videoURL: dummyVideoURLs[5],
    description: "Introduction to machine learning concepts.",
    channelId: "channel06",
    uploader: "user06",
    channelName: "ML Academy",
    views: 22000,
    likes: 1100,
    dislikes: 35,
    uploadDate: "2024-04-15",
  },
  {
    videoId: "video07",
    title: "Docker Essentials",
    thumbnailURL: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
    videoURL: dummyVideoURLs[6],
    description: "Learn Docker from scratch.",
    channelId: "channel07",
    uploader: "user07",
    channelName: "DevOps Channel",
    views: 27000,
    likes: 1300,
    dislikes: 28,
    uploadDate: "2024-03-10",
  },
  {
    videoId: "video08",
    title: "Kubernetes for Beginners",
    thumbnailURL: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    videoURL: dummyVideoURLs[7],
    description: "Getting started with Kubernetes.",
    channelId: "channel08",
    uploader: "user08",
    channelName: "Cloud Channel",
    views: 19000,
    likes: 950,
    dislikes: 22,
    uploadDate: "2024-02-05",
  },
  {
    videoId: "video09",
    title: "React Hooks Deep Dive",
    thumbnailURL: "https://img.youtube.com/vi/YQHsXMglC9A/hqdefault.jpg",
    videoURL: dummyVideoURLs[8],
    description: "Advanced React hooks explained.",
    channelId: "channel09",
    uploader: "user09",
    channelName: "React Channel",
    views: 21000,
    likes: 1150,
    dislikes: 30,
    uploadDate: "2024-01-01",
  },
  {
    videoId: "video10",
    title: "TypeScript Basics",
    thumbnailURL: "https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg",
    videoURL: dummyVideoURLs[9],
    description: "Learn TypeScript from scratch.",
    channelId: "channel10",
    uploader: "user10",
    channelName: "TS Tutorials",
    views: 16000,
    likes: 800,
    dislikes: 18,
    uploadDate: "2023-12-15",
  },
];

function VideoPage() {
  const { videoId } = useParams();

  const currentVideo = sampleVideos.find((video) => video.videoId === videoId);

  if (!currentVideo) {
    return <div className="p-6">Video not found.</div>;
  }

  const suggestedVideos = sampleVideos.filter(
    (video) => video.videoId !== videoId
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{currentVideo.title}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-grow">
          <div className="relative w-full h-full aspect-w-16 aspect-h-9">
            <ReactPlayer
              url={currentVideo.videoURL}
              controls
              playing
              width="100%"
              height="100%"
            />
          </div>
          <p className="mt-4 text-gray-700">{currentVideo.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            {currentVideo.views.toLocaleString()} views • Uploaded on {currentVideo.uploadDate}
          </p>
        </div>
        <aside className="w-full lg:w-80">
          <h2 className="text-xl font-semibold mb-3">Suggested Videos</h2>
          <div className="space-y-4">
            {suggestedVideos.map((video) => (
              <Link
                key={video.videoId}
                to={`/video/${video.videoId}`}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
              >
                <img
                  src={video.thumbnailURL}
                  alt={video.title}
                  className="w-24 h-14 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-sm">{video.title}</p>
                  <p className="text-xs text-gray-500">{video.channelName}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default VideoPage;
