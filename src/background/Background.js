import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4"
import fallbackImage from '../assets/fallback-image.png';

const Background = () => {
    return (
        <>
        
        <div className="shadow-overlay">
            <video playsInline autoPlay muted loop preload="auto" id="bg" poster={fallbackImage}><source src={video} type="video/mp4"></source></video>
        </div>
        
        </>
    )
}

export default Background;