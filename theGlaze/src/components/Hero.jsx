"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/background.jpg",
      title: "FRESH",
      subtitle: "cakes",
      description: "Handcrafted with love and premium ingredients",
    },
    {
      image: "/images/background2.jpg",
      title: "fresh",
      subtitle: "COOKIES",
      description: "Baked daily for that perfect crunch and flavor",
    },
    {
      image: "/images/background1.jpg",
      title: "sweet",
      subtitle: "CUPCAKES",
      description: "Little bites of heaven in every flavor",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h2 className="hero-title">
                <span className="title-part">{slide.title}</span>
                <span className="subtitle-part">{slide.subtitle}</span>
              </h2>
              <p className="hero-description">{slide.description}</p>
              <Link to="/menu" className="hero-button">
                Explore Menu
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button className="slider-arrow next" onClick={nextSlide} aria-label="Next slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero
