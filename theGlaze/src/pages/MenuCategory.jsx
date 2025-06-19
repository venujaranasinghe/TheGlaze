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
        name: "Chocolate Truffle Cake",
        description: "Rich chocolate layers with smooth ganache",
        price: 42.99,
        image: "/images/product.jpg",
        category: "chocolate",
        featured: true,
      },
      {
        name: "Vanilla Bean Cake",
        description: "Light vanilla sponge with buttercream frosting",
        price: 38.99,
        image: "/images/product.jpg",
        category: "vanilla",
      },
      {
        name: "Red Velvet Cake",
        description: "Classic red velvet with cream cheese frosting",
        price: 44.99,
        image: "/images/product.jpg",
        category: "specialty",
      },
      {
        name: "Lemon Drizzle Cake",
        description: "Zesty lemon cake with lemon glaze",
        price: 39.99,
        image: "/images/product.jpg",
        category: "fruit",
      },
      {
        name: "Carrot Cake",
        description: "Spiced carrot cake with cream cheese frosting",
        price: 41.99,
        image: "/images/product.jpg",
        category: "specialty",
      },
      {
        name: "Black Forest Cake",
        description: "Chocolate cake with cherries and whipped cream",
        price: 45.99,
        image: "/images/product.jpg",
        category: "chocolate",
      },
    ],
    cookies: [
      {
        name: "Chocolate Chip Cookies",
        description: "Classic cookies with premium chocolate chips",
        price: 18.99,
        image: "/images/product.jpg",
        category: "classic",
        featured: true,
      },
      {
        name: "Oatmeal Raisin Cookies",
        description: "Hearty oatmeal cookies with plump raisins",
        price: 17.99,
        image: "/images/product.jpg",
        category: "classic",
      },
      {
        name: "Shortbread Cookies",
        description: "Buttery shortbread with a melt-in-your-mouth texture",
        price: 19.99,
        image: "/images/product.jpg",
        category: "classic",
      },
      {
        name: "Macaron Assortment",
        description: "Delicate French macarons in assorted flavors",
        price: 24.99,
        image: "/images/product.jpg",
        category: "specialty",
      },
      {
        name: "Gingerbread Cookies",
        description: "Spiced gingerbread cookies with royal icing",
        price: 20.99,
        image: "/images/product.jpg",
        category: "seasonal",
      },
      {
        name: "Double Chocolate Cookies",
        description: "Rich chocolate cookies with chocolate chunks",
        price: 19.99,
        image: "/images/product.jpg",
        category: "chocolate",
      },
    ],
    cupcakes: [
      {
        name: "Red Velvet Cupcakes",
        description: "Classic red velvet with cream cheese frosting",
        price: 24.99,
        image: "/images/product.jpg",
        category: "classic",
        featured: true,
      },
      {
        name: "Chocolate Cupcakes",
        description: "Rich chocolate cupcakes with chocolate buttercream",
        price: 22.99,
        image: "/images/product.jpg",
        category: "chocolate",
      },
      {
        name: "Vanilla Cupcakes",
        description: "Light vanilla cupcakes with vanilla buttercream",
        price: 21.99,
        image: "/images/product.jpg",
        category: "classic",
      },
      {
        name: "Lemon Cupcakes",
        description: "Zesty lemon cupcakes with lemon cream cheese frosting",
        price: 23.99,
        image: "/images/product.jpg",
        category: "fruit",
      },
      {
        name: "Salted Caramel Cupcakes",
        description: "Vanilla cupcakes with salted caramel buttercream",
        price: 25.99,
        image: "/images/product.jpg",
        category: "specialty",
      },
      {
        name: "Birthday Cupcakes",
        description: "Funfetti cupcakes with colorful sprinkles",
        price: 24.99,
        image: "/images/product.jpg",
        category: "specialty",
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
