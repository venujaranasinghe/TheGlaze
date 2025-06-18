import { Link } from "react-router-dom"
import "./FeaturedSection.css"

const FeaturedSection = ({ title, description, image1, image2, linkText, linkUrl }) => {
  return (
    <section className="featured-section">
      <div className="featured-content">
        <h2 className="featured-title">{title}</h2>
        <p className="featured-description">{description}</p>
        <Link to={linkUrl} className="featured-link">
          {linkText}
        </Link>
        <Link to={linkUrl} className="featured-link-alt">
          Learn More
        </Link>
      </div>
      <div className="featured-images">
        <div className="featured-image" style={{ backgroundImage: `url(/images/product.jpg)` }}></div>
        <div className="featured-image" style={{ backgroundImage: `url(/images/product.jpg)` }}></div>
      </div>
    </section>
  )
}

export default FeaturedSection
