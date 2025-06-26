"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductGrid from "../components/ProductGrid"
import "./MenuCategory.css"

const MenuCategory = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState("all")

  // This would normally come from an API or database
  const menuData = {
    cakes: [
      {
        name: "Chocolate Truffle Cake (1KG)",
        description: "Rich chocolate layers with smooth ganache",
        price: 3900,
        image: "/images/Cakes/IMG_1825.JPG",
        category: "chocolate",
        featured: true,
      },
      {
        name: "Vanilla Bean Cake(1KG)",
        description: "Light vanilla sponge with buttercream frosting",
        price: 3900,
        image: "/images/Cakes/IMG_1821.JPG",
        category: "vanilla",
      },
      {
        name: "Black Forest Cake(1KG",
        description: "Chocolate cake with cherries and whipped cream",
        price: 3900,
        image: "/images/Cakes/IMG_1865.JPG",
        category: "chocolate",
      },
      {
        name: "Chocolate Truffle Cake (500g)",
        description: "Rich chocolate layers with smooth ganache",
        price: 2200,
        image: "/images/Cakes/IMG_1825.JPG",
        category: "chocolate",
      },
      {
        name: "Vanilla Bean Cake(500g)",
        description: "Light vanilla sponge with buttercream frosting",
        price: 2200,
        image: "/images/Cakes/IMG_1821.JPG",
        category: "vanilla",
      },
      {
        name: "Black Forest Cake(500g)",
        description: "Chocolate cake with cherries and whipped cream",
        price: 2200,
        image: "/images/Cakes/IMG_1865.JPG",
        category: "chocolate",
      },
    ],
    cookies: [
      {
        name: "Double Chocolate Chip Cookies (6PCS)",
        description: "Classic cookies with premium chocolate chips",
        price: 1700,
        image: "/images/coo.jpg",
        category: "chocolate",
        featured: true,
      },
      {
        name: "Classic Cookies (6PCS)",
        description: "Buttery shortbread with a melt-in-your-mouth texture",
        price: 1200,
        image: "/images/co.jpg",
        category: "classic",
      },
    ],
    cupcakes: [
      {
        name: "Vanilla Cupcakes",
        description: "Classic butter with cream vanilla frosting",
        price: 24.99,
        image: "/images/cu.jpg",
        category: "classic",
        featured: true,
      },
      {
        name: "Chocolate Cupcakes",
        description: "Rich chocolate cupcakes with chocolate buttercream",
        price: 22.99,
        image: "/images/cuu.jpg",
        category: "chocolate",
      },
    ],
  }

  const categoryTitles = {
    cakes: "Our Artisanal Cakes",
    cookies: "Freshly Baked Cookies",
    cupcakes: "Delightful Cupcakes",
  }

  const categoryDescriptions = {
    cakes: "Handcrafted cakes made with premium ingredients for every occasion",
    cookies: "Freshly baked cookies that bring comfort with every bite",
    cupcakes: "Perfect little treats topped with creative and delicious frostings",
  }

  const filters = {
    cakes: ["all", "chocolate", "vanilla", "fruit", "specialty"],
    cookies: ["all", "classic", "chocolate", "specialty", "seasonal"],
    brownies: ["all"],
    cupcakes: ["all", "classic", "chocolate", "fruit", "specialty"],
  }

  useEffect(() => {
    // Simulate loading data from an API
    setLoading(true)
    setTimeout(() => {
      setProducts(menuData[category] || [])
      setLoading(false)
      setActiveFilter("all")
    }, 500)
  }, [category])

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter)

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="menu-category-page">
      <div className="page-header">
        <h1>{categoryTitles[category] || "Menu"}</h1>
        <p>{categoryDescriptions[category] || "Explore our delicious treats"}</p>
      </div>

      <div className="filter-tabs">
        {filters[category]?.map((filter) => (
          <button
            key={filter}
            className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <ProductGrid products={filteredProducts} />

      <div className="category-info">
        <h3>Looking for something special?</h3>
        <p>We offer custom orders and can accommodate dietary restrictions. Contact us to discuss your requirements.</p>
      </div>
    </div>
  )
}

export default MenuCategory
