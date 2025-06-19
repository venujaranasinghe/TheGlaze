import Hero from "../components/Hero"
import FeaturedSection from "../components/FeaturedSection"
import ProductGrid from "../components/ProductGrid"
import "./Home.css"

const Home = () => {
  const featuredProducts = [
    {
      name: "Chocolate Truffle Cake",
      description: "Rich chocolate layers with smooth ganache",
      price: 42.99,
      image: "/images/chocolate-cake.jpg",
      featured: true,
      link: "/menu/cakes/chocolate-truffle",
    },
    {
      name: "Red Velvet Cupcakes",
      description: "Classic red velvet with cream cheese frosting",
      price: 24.99,
      image: "/images/red-velvet-cupcakes.jpg",
      featured: false,
      link: "/menu/cupcakes/red-velvet",
    },
    {
      name: "Artisan Cookies",
      description: "Handcrafted cookies with premium ingredients",
      price: 18.99,
      image: "/images/artisan-cookies.jpg",
      featured: false,
      link: "/menu/cookies/artisan",
    },
  ]

  return (
    <div className="home-page">
      <Hero />

      <FeaturedSection
        title="The recipe to happiness"
        description="At TheGlaze, we believe that every celebration deserves something special. Our master bakers craft each cake, cookie, and cupcake with passion and precision, using only the finest ingredients. From classic flavors to innovative creations, we're dedicated to making your moments sweeter."
        image1="/images/baking-process-1.jpg"
        image2="/images/baking-process-2.jpg"
        linkText="Discover Our Story"
        linkUrl="/about"
      />

      <div className="gallery-preview">
        <div className="gallery-item" style={{ backgroundImage: "url(/images/product.jpg)" }}></div>
        <div className="gallery-item" style={{ backgroundImage: "url(/images/product.jpg)" }}></div>
        <div className="gallery-item video-item" style={{ backgroundImage: "url(/images/product.jpg)" }}>
          <div className="play-button">
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
        <div className="gallery-item" style={{ backgroundImage: "url(/images/product.jpg)" }}></div>
        <div className="gallery-item" style={{ backgroundImage: "url(/images/product.jpg)" }}></div>
      </div>

      <FeaturedSection
        title="The recipe to happiness"
        description="Our pastry chefs blend artistry with flavor to create desserts that are as beautiful as they are delicious. Each creation is a masterpiece of taste and design, made fresh daily in our bakery."
        image1="/images/product.jpg"
        image2="/images/product.jpg"
        linkText="View Our Menu"
        linkUrl="/menu"
      />

      <section className="alternatives-section">
        <h2 className="alternatives-title">Delicious Alternatives</h2>
        <p className="alternatives-subtitle">Explore our range of gluten-free, vegan, and sugar-free options</p>
        <button className="alternatives-button">Learn More</button>
      </section>

      <ProductGrid products={featuredProducts} title="Our Bestsellers" />
    </div>
  )
}

export default Home
