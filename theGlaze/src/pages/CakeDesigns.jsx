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
      name: "Design 1",
      image: "/images/Cakes/IMG_1815.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 2,
      name: "Design 2",
      image: "/images/Cakes/IMG_1865.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 3,
      name: "Design 3",
      image: "/images/Cakes/IMG_1817.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 4,
      name: "Design 4",
      image: "/images/Cakes/IMG_1818.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 5,
      name: "Design 5",
      image: "/images/Cakes/IMG_1864.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 6,
      name: "Design 6",
      image: "/images/Cakes/IMG_1820.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 7,
      name: "Design 7",
      image: "/images/Cakes/IMG_1821.JPG",
      category: "wedding",
      description: "",
    },
        {
      id: 8,
      name: "Design 8",
      image: "/images/Cakes/IMG_1822.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 9,
      name: "Design 9",
      image: "/images/Cakes/IMG_1823.JPG",
      category: "special",
      description: "",
    },
        {
      id: 10,
      name: "Design 10",
      image: "/images/Cakes/IMG_1824.JPG",
      category: "wedding",
      description: "",
    },
        {
      id: 11,
      name: "Design 11",
      image: "/images/Cakes/IMG_1825.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 12,
      name: "Design 12",
      image: "/images/Cakes/IMG_1826.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 13,
      name: "Design 13",
      image: "/images/Cakes/IMG_1827.JPG",
      category: "wedding",
      description: "",
    },
        {
      id: 14,
      name: "Design 14",
      image: "/images/Cakes/IMG_1828.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 15,
      name: "Design 15",
      image: "/images/Cakes/IMG_1829.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 16,
      name: "Design 16",
      image: "/images/Cakes/IMG_1830.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 17,
      name: "Design 17",
      image: "/images/Cakes/IMG_1831.JPG",
      category: "wedding",
      description: "",
    },
        {
      id: 18,
      name: "Design 18",
      image: "/images/Cakes/IMG_1832.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 19,
      name: "Design 19",
      image: "/images/Cakes/IMG_1833.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 20,
      name: "Design 20",
      image: "/images/Cakes/IMG_1834.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 21,
      name: "Design 21",
      image: "/images/Cakes/IMG_1835.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 22,
      name: "Design 22",
      image: "/images/Cakes/IMG_1836.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 23,
      name: "Design 23",
      image: "/images/Cakes/IMG_1837.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 24,
      name: "Design 24",
      image: "/images/Cakes/IMG_1838.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 25,
      name: "Design 25",
      image: "/images/Cakes/IMG_1839.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 26,
      name: "Design 26",
      image: "/images/Cakes/IMG_1840.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 27,
      name: "Design 27",
      image: "/images/Cakes/IMG_1841.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 28,
      name: "Design 28",
      image: "/images/Cakes/IMG_1842.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 29,
      name: "Design 29",
      image: "/images/Cakes/IMG_1843.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 30,
      name: "Design 30",
      image: "/images/Cakes/IMG_1844.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 31,
      name: "Design 31",
      image: "/images/Cakes/IMG_1845.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 32,
      name: "Design 32",
      image: "/images/Cakes/IMG_1846.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 33,
      name: "Design 33",
      image: "/images/Cakes/IMG_1847.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 34,
      name: "Design 34",
      image: "/images/Cakes/IMG_1848.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 35,
      name: "Design 35",
      image: "/images/Cakes/IMG_1849.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 36,
      name: "Design 36",
      image: "/images/Cakes/IMG_1850.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 37,
      name: "Design 37",
      image: "/images/Cakes/IMG_1851.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 38,
      name: "Design 38",
      image: "/images/Cakes/IMG_1852.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 39,
      name: "Design 39",
      image: "/images/Cakes/IMG_1853.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 40,
      name: "Design 40",
      image: "/images/Cakes/IMG_1854.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 41,
      name: "Design 41",
      image: "/images/Cakes/IMG_1855.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 42,
      name: "Design 42",
      image: "/images/Cakes/IMG_1856.JPG",
      category: "wedding",
      description: "",
    },
        {
      id: 43,
      name: "Design 43",
      image: "/images/Cakes/IMG_1857.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 44,
      name: "Design 44",
      image: "/images/Cakes/IMG_1858.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 45,
      name: "Design 45",
      image: "/images/Cakes/IMG_1859.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 46,
      name: "Design 46",
      image: "/images/Cakes/IMG_1860.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 47,
      name: "Design 47",
      image: "/images/Cakes/IMG_1861.JPG",
      category: "birthday",
      description: "",
    },
        {
      id: 48,
      name: "Design 49",
      image: "/images/Cakes/IMG_1862.JPG",
      category: "birthday",
      description: "",
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
