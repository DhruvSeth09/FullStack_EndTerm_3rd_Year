import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const sampleVideos = [
  {
    videoId: "video01",
    title: "Learn React in 30 Minutes",
    thumbnailURL: "https://example.com/thumbnails/react30min.png",
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
    thumbnailURL: "https://example.com/thumbnails/jsbasics.png",
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
];

const DashBoard = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  useEffect(() => {
    const foundVideo = sampleVideos.find((v) => v.videoId === videoId);
    if (foundVideo) {
      setVideo(foundVideo);
      setComments(foundVideo.comments);
    }
  }, [videoId]);

  const handleAddComment = () => {
    if (newCommentText.trim() === "") return;
    const newComment = {
      commentId: `comment${Date.now()}`,
      userId: "currentUser", // Replace with actual user id from auth
      text: newCommentText,
      timestamp: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
    setNewCommentText("");
    // TODO: Save comment to backend
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((c) => c.commentId !== commentId));
    // TODO: Delete comment from backend
  };

  const handleEditComment = (commentId, newText) => {
    setComments(
      comments.map((c) =>
        c.commentId === commentId ? { ...c, text: newText } : c
      )
    );
    // TODO: Update comment in backend
  };

  if (!video) {
    return <div className="p-6">Video not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="mb-4">
        <video
          src={`https://example.com/videos/${video.videoId}.mp4`}
          controls
          className="w-full max-h-96 rounded-lg"
        />
      </div>
      <p className="mb-2">{video.description}</p>
      <p className="text-gray-600 mb-2">Channel: {video.channelName}</p>
      <div className="flex space-x-4 mb-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Like ({video.likes})
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
          Dislike ({video.dislikes})
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Comments</h2>
        <div className="mb-4">
          <textarea
            className="w-full border rounded p-2"
            rows={3}
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Add a comment"
          />
          <button
            onClick={handleAddComment}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Comment
          </button>
        </div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.commentId} className="mb-2 border-b pb-2">
              <p>{comment.text}</p>
              <div className="flex space-x-2 mt-1">
                <button
                  onClick={() => handleDeleteComment(comment.commentId)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
                {/* For editing, a simple prompt for demo */}
                <button
                  onClick={() => {
                    const newText = prompt(
                      "Edit comment:",
                      comment.text
                    );
                    if (newText !== null) {
                      handleEditComment(comment.commentId, newText);
                    }
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;