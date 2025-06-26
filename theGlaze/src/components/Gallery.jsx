"use client"

import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/images/w1.jpg",
    alt: "Artisan cake decoration",
    title: "Handcrafted Decorations",
  },
  {
    id: 2,
    type: "video",
    src: "/images/w1.jpg",
    alt: "Baking process video",
    title: "Behind the Scenes",
  },
  {
    id: 3,
    type: "image",
    src: "/images/w2.jpg",
    alt: "Fresh baked goods",
    title: "Daily Fresh Bakes",
  },
  {
    id: 4,
    type: "image",
    src: "/images/w3.jpg",
    alt: "Cake showcase",
    title: "Signature Creations",
  },
  {
    id: 5,
    type: "image",
    src: "/images/w1.jpg",
    alt: "Bakery interior",
    title: "Our Cozy Space",
  },
  {
    id: 6,
    type: "image",
    src: "/images/w2.jpg",
    alt: "Cupcake collection",
    title: "Sweet Varieties",
  },
]

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const openModal = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-header">
          <h2 className="gallery-title">Sweet Moments</h2>
          <p className="gallery-subtitle">A glimpse into our world of artisan baking</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={item.id} className={`gallery-item gallery-item-${index + 1}`} onClick={() => openModal(item)}>
              <div className="gallery-image" style={{ backgroundImage: `url(${item.src})` }}>
                <div className="gallery-overlay">
                  {item.type === "video" && (
                    <div className="play-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  )}
                  <div className="gallery-content">
                    <h3 className="gallery-item-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-image-container">
              <img src={selectedItem.src || "/placeholder.svg"} alt={selectedItem.alt} className="modal-image" />
              {selectedItem.type === "video" && (
                <div className="video-overlay">
                  <div className="play-button-large">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-info">
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
