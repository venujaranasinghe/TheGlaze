import { Link } from "react-router-dom"
import "./ProductGrid.css"

const ProductGrid = ({ products, title }) => {
  return (
    <section className="product-grid-section">
      {title && <h2 className="product-grid-title">{title}</h2>}
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
              {product.featured && <span className="featured-badge">Featured</span>}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-meta">
                <span className="product-price">${product.price.toFixed(2)}</span>
                {product.link && (
                  <Link to={product.link} className="product-link">
                    View Details
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
