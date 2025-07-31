import React from 'react'
import "./home.style.css"
import { FaRegCirclePlay } from "react-icons/fa6";
export default function Video() {
  return (
   <div class="video-container">
    <video controls autoplay muted loop>
      <source src="https://videocdn.cdnpk.net/videos/6b8d872e-9197-4e62-a130-e279711adeed/horizontal/previews/clear/large.mp4?token=exp=1753945692~hmac=e1c3f5a22188dd825ee3fb32abd838be0c0481c605dd748882ea8396bad36d7a" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="logo-overlay"><FaRegCirclePlay /></div>
  </div>
  )
}
