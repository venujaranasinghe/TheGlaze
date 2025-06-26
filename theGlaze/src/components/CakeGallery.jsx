"use client"

import { useState, useEffect } from "react"

const cakeGalleryItems = [
  {
    id: 1,
    type: "signature",
    title: "Midnight Velvet",
    subtitle: "Dark chocolate perfection",
    image: "/images/w1.jpg",
    price: "$85",
    description: "Layers of rich dark chocolate cake with velvety ganache",
    category: "Signature Cakes",
  },
  {
    id: 2,
    type: "seasonal",
    title: "Rose Garden",
    subtitle: "Delicate floral elegance",
    image: "/images/w2.jpg",
    price: "$95",
    description: "Vanilla sponge with rose buttercream and edible flowers",
    category: "Seasonal Specials",
  },
  {
    id: 3,
    type: "classic",
    title: "Golden Honey",
    subtitle: "Traditional sweetness",
    image: "/images/w3.jpg",
    price: "$65",
    description: "Honey-infused layers with caramelized cream",
    category: "Classic Collection",
  },
  {
    id: 4,
    type: "artisan",
    title: "Lavender Dreams",
    subtitle: "French countryside inspired",
    image: "/images/w1.jpg",
    price: "$78",
    description: "Delicate lavender cake with lemon cream filling",
    category: "Artisan Series",
  },
  {
    id: 5,
    type: "signature",
    title: "Caramel Cascade",
    subtitle: "Flowing golden indulgence",
    image: "/images/w2.jpg",
    price: "$88",
    description: "Salted caramel layers with flowing caramel drizzle",
    category: "Signature Cakes",
  },
  {
    id: 6,
    type: "seasonal",
    title: "Berry Bliss",
    subtitle: "Summer's finest treasures",
    image: "/images/w3.jpg",
    price: "$72",
    description: "Mixed berry compote with vanilla bean cream",
    category: "Seasonal Specials",
  },
]

const CakeGallery = () => {
  const [selectedCake, setSelectedCake] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openCakeModal = (cake) => {
    setSelectedCake(cake)
  }

  const closeCakeModal = () => {
    setSelectedCake(null)
  }

  const filteredCakes =
    activeFilter === "all" ? cakeGalleryItems : cakeGalleryItems.filter((cake) => cake.type === activeFilter)

  const filters = [
    { key: "all", label: "All Creations" },
    { key: "signature", label: "Signature" },
    { key: "seasonal", label: "Seasonal" },
    { key: "classic", label: "Classic" },
    { key: "artisan", label: "Artisan" },
  ]

  return (
    <>
      <section className="cake-gallery-section">
        <div className="gallery-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-diamond">◆</div>
            <div className="decoration-line"></div>
          </div>
          <h2 className="gallery-title">Our Masterpieces</h2>
          <p className="gallery-subtitle">Each cake tells a story of passion, artistry, and the finest ingredients</p>

          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`cake-display-case ${isLoaded ? "loaded" : ""}`}>
          {filteredCakes.map((cake, index) => (
            <div
              key={cake.id}
              className={`cake-showcase cake-${cake.type}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openCakeModal(cake)}
            >
              <div className="cake-frame">
                <div className="cake-image-container">
                  <img src={cake.image || "/placeholder.svg"} alt={cake.title} className="cake-image" />
                  <div className="cake-overlay">
                    <div className="cake-details">
                      <span className="cake-category">{cake.category}</span>
                      <h3 className="cake-title">{cake.title}</h3>
                      <p className="cake-subtitle">{cake.subtitle}</p>
                      <div className="cake-price">{cake.price}</div>
                    </div>
                    <div className="view-details-btn">
                      <span>View Details</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cake-stand"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elegant Modal */}
      {selectedCake && (
        <div className="cake-modal" onClick={closeCakeModal}>
          <div className="modal-backdrop"></div>
          <div className="cake-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCakeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-image-section">
              <img
                src={selectedCake.image || "/placeholder.svg"}
                alt={selectedCake.title}
                className="modal-cake-image"
              />
            </div>

            <div className="modal-details-section">
              <div className="modal-header">
                <span className="modal-category">{selectedCake.category}</span>
                <h2 className="modal-title">{selectedCake.title}</h2>
                <p className="modal-subtitle">{selectedCake.subtitle}</p>
              </div>

              <div className="modal-description">
                <p>{selectedCake.description}</p>
              </div>

              <div className="modal-footer">
                <div className="modal-price">{selectedCake.price}</div>
                <button className="order-btn">
                  <span>Order Now</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CakeGallery
