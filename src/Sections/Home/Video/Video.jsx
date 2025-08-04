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
    <div className="video-container" onClick={handleTogglePlay}  aria-label={isPlaying ? 'Pause video' : 'Play video'}>
      <button className="logo-overlay">
        {!isPlaying ? (
          <FaRegCirclePlay size={120} color="#fff" />
        ) : null}
      </button>
      <video
        ref={videoRef}
        muted
        playsInline
      // add loop if needed
      >
        <source
          src="https://videocdn.cdnpk.net/videos/f6ef5560-0fd4-43d4-94ad-820eb773419e/horizontal/previews/clear/large.mp4?token=exp=1754161156~hmac=42e84a35c96468be1ebdced9d69dbdd120b71bfd1c6d1fae59820f8e044da9a8"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

  );
}
