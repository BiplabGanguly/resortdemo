import React from 'react'
import "./home.style.css"
import { FaRegCirclePlay } from "react-icons/fa6";
export default function Video() {
  return (
   <div class="video-container">
    <video controls autoplay muted loop>
      <source src="https://videocdn.cdnpk.net/videos/8adc783e-6b57-406d-a88c-3986a5c0cac9/horizontal/previews/clear/large.mp4?token=exp=1753964359~hmac=9685fc8ff1d0ce39d00e7f28d00565d6af8acd1e508d2d358ac055135bfb8360" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="logo-overlay"><FaRegCirclePlay /></div>
  </div>
  )
}
