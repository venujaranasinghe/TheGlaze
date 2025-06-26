import "./About.css"

const About = () => {
  const teamMembers = [
    {
      name: "Dulasha",
      role: "Wanigasekara",
      image: "/images/p.jpg",
      bio: "With over 5 years of experience, Dulasha brings creativity and precision to every creation.",
    },
    // {
    //   name: "Sophia Rodriguez",
    //   role: "Pastry Specialist",
    //   image: "/images/product.jpg",
    //   bio: "Sophia's passion for traditional recipes with modern twists creates unique flavors.",
    // },
    {
      name: "Emasha",
      role: "Wanigasekara",
      image: "/images/p.jpg",
      bio: "Emasha founded TheGlaze with a vision to create memorable dessert experiences.",
    },
  ]

  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About TheGlaze</h1>
        <p>Our story, our passion, our commitment to quality</p>
      </div>

      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2019, TheGlaze began as a small family bakery with a big dream: to create desserts that bring joy
            to every celebration. What started as a passion project in a home kitchen has grown into a beloved
            destination for cake lovers across the city.
          </p>
          <p>
            Our journey has been guided by a simple philosophy: use the finest ingredients, craft with care, and always
            put flavor first. Over the years, we've perfected our recipes and expanded our offerings, but our commitment
            to quality has never wavered.
          </p>
          <p>
            Today, TheGlaze is known for its artisanal cakes, cookies, and cupcakes that combine traditional baking
            techniques with innovative flavors and designs. Every item is made fresh daily in our bakery, ensuring that
            what you taste is at its absolute best.
          </p>
        </div>
        <div className="story-image" style={{ backgroundImage: "url(/images/product.jpg)" }}></div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3>Passion</h3>
            <p>We pour our hearts into every creation, treating each dessert as a work of art.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Quality</h3>
            <p>We use only premium ingredients and never compromise on taste or freshness.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4l3 3"></path>
              </svg>
            </div>
            <h3>Consistency</h3>
            <p>We maintain the highest standards in every batch, ensuring reliable excellence.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Community</h3>
            <p>We believe in creating connections and celebrating life's moments together.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}></div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>
              "The birthday cake TheGlaze made for my daughter was not only beautiful but absolutely delicious. Everyone
              at the party was impressed!"
            </p>
            <div className="testimonial-author">- Sarah M.</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>
              "Their attention to detail is amazing. Our wedding cake was exactly what we envisioned and tasted even
              better than it looked."
            </p>
            <div className="testimonial-author">- David & Lisa</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p>
              "I've tried many bakeries, but TheGlaze's cookies are simply the best in town. Fresh, flavorful, and
              perfectly baked every time."
            </p>
            <div className="testimonial-author">- Robert J.</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
