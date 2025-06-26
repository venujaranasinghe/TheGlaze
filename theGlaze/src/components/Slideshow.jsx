"use client"

import { useState, useEffect } from "react"

const slideshowImages = [
  {
    id: 1,
    src: "/images/1.jpg",
    alt: "Artisan cake decoration",
  },
  {
    id: 2,
    src: "/images/2.jpg",
    alt: "Fresh baked goods",
  },
  {
    id: 3,
    src: "/images/3.jpg",
    alt: "Baking process",
  },
  {
    id: 4,
    src: "/images/4.jpg",
    alt: "Cake showcase",
  },
  {
    id: 5,
    src: "/images/5.jpg",
    alt: "Sweet creations",
  },
]

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 2000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {slideshowImages.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentSlide ? "active" : ""} ${
              index === (currentSlide - 1 + slideshowImages.length) % slideshowImages.length ? "prev" : ""
            } ${index === (currentSlide + 1) % slideshowImages.length ? "next" : ""}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="slide-overlay"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="slideshow-dots">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
