"use client"

import { useState } from "react"
import "./CakeDesigns.css"

const CakeDesigns = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Designs" },
    { id: "wedding", name: "Wedding Cakes" },
    { id: "birthday", name: "Birthday Cakes" },
    { id: "special", name: "Special Occasions" },
    { id: "seasonal", name: "Seasonal Designs" },
  ]

  const designs = [
    {
      id: 1,
      name: "Elegant Wedding Cake",
      image: "/images/wedding-cake-1.jpg",
      category: "wedding",
      description: "Three-tier white cake with delicate floral decorations",
    },
    {
      id: 2,
      name: "Chocolate Birthday Cake",
      image: "/images/birthday-cake-1.jpg",
      category: "birthday",
      description: "Rich chocolate cake with colorful sprinkles and candles",
    },
    {
      id: 3,
      name: "Anniversary Celebration",
      image: "/images/special-cake-1.jpg",
      category: "special",
      description: "Elegant cake with gold accents and personalized topper",
    },
    {
      id: 4,
      name: "Winter Wonderland",
      image: "/images/seasonal-cake-1.jpg",
      category: "seasonal",
      description: "Festive winter cake with snowflake decorations",
    },
    {
      id: 5,
      name: "Rustic Wedding Cake",
      image: "/images/wedding-cake-2.jpg",
      category: "wedding",
      description: "Semi-naked cake with fresh berries and greenery",
    },
    {
      id: 6,
      name: "Superhero Birthday",
      image: "/images/birthday-cake-2.jpg",
      category: "birthday",
      description: "Custom superhero themed cake for children",
    },
    {
      id: 7,
      name: "Baby Shower Cake",
      image: "/images/special-cake-2.jpg",
      category: "special",
      description: "Gender reveal cake with delicate pastel decorations",
    },
    {
      id: 8,
      name: "Autumn Harvest",
      image: "/images/seasonal-cake-2.jpg",
      category: "seasonal",
      description: "Fall-inspired cake with autumn colors and decorations",
    },
    {
      id: 9,
      name: "Modern Wedding Cake",
      image: "/images/wedding-cake-3.jpg",
      category: "wedding",
      description: "Contemporary design with geometric patterns",
    },
    {
      id: 10,
      name: "Princess Castle Cake",
      image: "/images/birthday-cake-3.jpg",
      category: "birthday",
      description: "Fairytale castle cake for a princess birthday",
    },
    {
      id: 11,
      name: "Graduation Celebration",
      image: "/images/special-cake-3.jpg",
      category: "special",
      description: "Academic achievement cake with graduation cap",
    },
    {
      id: 12,
      name: "Summer Berries",
      image: "/images/seasonal-cake-3.jpg",
      category: "seasonal",
      description: "Fresh summer cake with seasonal berries",
    },
  ]

  const filteredDesigns =
    activeCategory === "all" ? designs : designs.filter((design) => design.category === activeCategory)

  return (
    <div className="cake-designs-page">
      <div className="page-header">
        <h1>Cake Design Gallery</h1>
        <p>Browse our portfolio of custom cake designs for inspiration</p>
      </div>

      <div className="design-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="designs-grid">
        {filteredDesigns.map((design) => (
          <div key={design.id} className="design-card">
            <div className="design-image" style={{ backgroundImage: `url(${design.image})` }}></div>
            <div className="design-info">
              <h3>{design.name}</h3>
              <p>{design.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-design-cta">
        <h2>Looking for a Custom Design?</h2>
        <p>
          Our pastry artists can create the perfect cake for your special occasion. Contact us to discuss your vision.
        </p>
        <button className="cta-button">Request Custom Design</button>
      </div>
    </div>
  )
}

export default CakeDesigns
