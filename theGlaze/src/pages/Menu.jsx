import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
  const categories = [
    {
      id: "cakes",
      name: "Cakes",
      description: "Artisanal cakes for every occasion",
      image: "/images/category-cakes.jpg",
    },
    {
      id: "cookies",
      name: "Cookies",
      description: "Freshly baked cookies in various flavors",
      image: "/images/category-cookies.jpg",
    },
    {
      id: "cupcakes",
      name: "Cupcakes",
      description: "Delightful cupcakes with creative toppings",
      image: "/images/category-cupcakes.jpg",
    },
  ]

  return (
    <div className="menu-page">
      <div className="page-header">
        <h1>Our Menu</h1>
        <p>Explore our delicious range of handcrafted treats</p>
      </div>

      <div className="menu-categories">
        {categories.map((category) => (
          <Link
            to={`/menu/${category.id}`}
            className="category-card"
            key={category.id}
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="category-overlay">
              <h2 className="category-name">{category.name}</h2>
              <p className="category-description">{category.description}</p>
              <span className="category-link">View Menu</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="menu-info">
        <div className="info-box">
          <h3>Custom Orders</h3>
          <p>
            Looking for something special? We offer custom cakes and desserts for any occasion. Contact us to discuss
            your requirements.
          </p>
          <Link to="/contact" className="info-link">
            Get in Touch
          </Link>
        </div>

        <div className="info-box">
          <h3>Dietary Options</h3>
          <p>
            We cater to various dietary needs including gluten-free, vegan, and sugar-free options. Just let us know
            your preferences.
          </p>
          <Link to="/contact" className="info-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
