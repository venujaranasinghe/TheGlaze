import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-title">TheGlaze</h3>
            <p className="footer-description">
              Crafting delicious moments with our artisanal cakes, cookies, and cupcakes. Every bite tells a story of
              passion and perfection.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Latest Treats</h4>
            <div className="footer-posts">
              <div className="footer-post">
                <p>New summer collection of fruit cakes is now available</p>
                <span>June 12, 2023</span>
              </div>
              <div className="footer-post">
                <p>Try our award-winning chocolate truffle cake</p>
                <span>May 28, 2023</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Instagram Feed</h4>
            <div className="instagram-feed">
              <div
                className="insta-img"
                style={{ backgroundImage: 'url(/images/Cakes/IMG_1835.JPG)' }}
              ></div>
              <div
                className="insta-img"
                style={{ backgroundImage: 'url(/images/Cakes/IMG_1831.JPG)' }}
              ></div>
              <div
                className="insta-img"
                style={{ backgroundImage: 'url(/images/Cakes/IMG_1827.JPG)' }}
              ></div>
              <div
                className="insta-img"
                style={{ backgroundImage: 'url(/images/Cakes/IMG_1821.JPG)' }}
              ></div>
            </div>
          </div>


          <div className="footer-column">
            <h4>Join The Club</h4>
            <p>Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <div className="contact-info">
              <p>Contact: +94 70 571 7077</p>
              <p>Email: wanigasekaradulasha@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TheGlaze. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
