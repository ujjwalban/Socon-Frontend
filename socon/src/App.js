import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  // List of sample videos (relative to the `public` folder)
  const videos = [
    "videos/sample1.mp4",
    "videos/sample2.mp4",
    "videos/sample3.mp4",
  ];

  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Set finishedAnimation to true after the animation delay
    const timer = setTimeout(() => {
      setFinishedAnimation(true);
    }, 12000); // Adjust this based on total animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generating process with a timeout
    setTimeout(() => {
      alert("Short generated successfully!");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      <Header />

      {/* Main Section */}
      <main className="flex-grow-1">
        <div className="container py-5 text-center">
          <h2 className="mb-5">Discover the Power of AI</h2>

          {/* Sample Videos Section */}
          <div
            className={`sample-videos position-relative ${
              finishedAnimation ? "finished" : ""
            }`}
          >
            {videos.map((video, index) => (
              <div
                className={`video-card animate-stack`}
                style={{ animationDelay: `${index * 2}s` }}
                key={index}
              >
                <video
                  className="video-preview"
                  src={video}
                  width="350"
                  height="200"
                  controls
                  muted
                  loop
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>

          {/* Add the line below */}
          <h2 className="mt-4 text-secondary">
            <b>Generate content for faceless channels and earn money</b>
          </h2>
        </div>

        {/* Form Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label className="form-label">Topic</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Images</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <label className="form-label">Video</label>
              <textarea className="form-control" rows="8"></textarea>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              className={`btn btn-primary px-4 py-2 ${
                isGenerating ? "disabled" : ""
              }`}
              onClick={handleGenerate}
            >
              {isGenerating ? "Generating..." : "Generate Short"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
