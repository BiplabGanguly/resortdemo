import React, { useRef, useState, useEffect } from 'react';
import '../home.style.css';
import { FaRegCirclePlay } from 'react-icons/fa6';

export default function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    console.log(video);
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayState = () => setIsPlaying(!video.paused);

    video.addEventListener('play', updatePlayState);
    video.addEventListener('pause', updatePlayState);

    return () => {
      video.removeEventListener('play', updatePlayState);
      video.removeEventListener('pause', updatePlayState);
    };
  }, []);

  return (
    <div className="video-container" onClick={handleTogglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
      <button className="logo-overlay">
        {!isPlaying ? (
          <FaRegCirclePlay size={100} color="#fff" />
        ) : null}
      </button>
      <video
        ref={videoRef}
        muted
        playsInline
        // add loop if needed
        poster="https://videocdn.cdnpk.net/videos/0bda3d2b-7d87-4040-9fd9-de90294e35b7/horizontal/thumbnails/large.jpg?uid=R153708199&amp;ga=GA1.1.910958514.1751544603&amp;item_id=2846622"
      >
        <source
          src="https://drive.google.com/file/d/1roCbUrhufy3NXd7gu4-bFbq3YQp_Y8wf/view"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

  );
}
{/* <video width="1280" height="720" controls="" controlslist="nodownload" playsinline="" autoplay="" loop="" class="absolute inset-0 block h-full max-w-full overflow-hidden w-full object-cover" aria-hidden="true"><source type="video/mp4"></video> */ }
