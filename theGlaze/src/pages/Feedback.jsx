"use client"

import { useState } from "react"
import "./Feedback.css"

const Feedback = () => {
  const [activeTab, setActiveTab] = useState("gallery")

  const feedbackImages = [
    {
      id: 1,
      image: "/images/feedback-1.jpg",
      customer: "Sarah M.",
      date: "May 15, 2023",
    },
    {
      id: 2,
      image: "/images/feedback-2.jpg",
      customer: "John D.",
      date: "April 22, 2023",
    },
    {
      id: 3,
      image: "/images/feedback-3.jpg",
      customer: "Emily R.",
      date: "June 3, 2023",
    },
    {
      id: 4,
      image: "/images/feedback-4.jpg",
      customer: "Michael T.",
      date: "May 28, 2023",
    },
    {
      id: 5,
      image: "/images/feedback-5.jpg",
      customer: "Lisa K.",
      date: "June 10, 2023",
    },
    {
      id: 6,
      image: "/images/feedback-6.jpg",
      customer: "David W.",
      date: "April 15, 2023",
    },
    {
      id: 7,
      image: "/images/feedback-7.jpg",
      customer: "Jessica P.",
      date: "May 5, 2023",
    },
    {
      id: 8,
      image: "/images/feedback-8.jpg",
      customer: "Robert J.",
      date: "June 18, 2023",
    },
    {
      id: 9,
      image: "/images/feedback-9.jpg",
      customer: "Amanda S.",
      date: "May 20, 2023",
    },
    {
      id: 10,
      image: "/images/feedback-10.jpg",
      customer: "Thomas B.",
      date: "April 30, 2023",
    },
    {
      id: 11,
      image: "/images/feedback-11.jpg",
      customer: "Olivia N.",
      date: "June 5, 2023",
    },
    {
      id: 12,
      image: "/images/feedback-12.jpg",
      customer: "William H.",
      date: "May 12, 2023",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Miller",
      rating: 5,
      date: "May 15, 2023",
      comment:
        "The birthday cake TheGlaze made for my daughter was not only beautiful but absolutely delicious. Everyone at the party was impressed! The attention to detail was amazing, and they perfectly captured the theme we wanted. Will definitely order from them again!",
    },
    {
      id: 2,
      name: "David & Lisa Johnson",
      rating: 5,
      date: "April 22, 2023",
      comment:
        "Their attention to detail is amazing. Our wedding cake was exactly what we envisioned and tasted even better than it looked. The team was professional and accommodating throughout the entire process. They made our special day even more memorable.",
    },
    {
      id: 3,
      name: "Robert James",
      rating: 5,
      date: "June 3, 2023",
      comment:
        "I've tried many bakeries, but TheGlaze's cookies are simply the best in town. Fresh, flavorful, and perfectly baked every time. Their chocolate chip cookies are my absolute favorite - crispy on the outside and chewy on the inside. Perfect!",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      rating: 4,
      date: "May 28, 2023",
      comment:
        "The cupcakes I ordered for my office party were a huge hit! Everyone loved the variety of flavors, and the presentation was beautiful. The only reason I'm giving 4 stars instead of 5 is because the delivery was a bit late, but the quality made up for it.",
    },
    {
      id: 5,
      name: "Michael Thompson",
      rating: 5,
      date: "June 10, 2023",
      comment:
        "I ordered a custom cake for my wife's birthday, and TheGlaze exceeded all expectations. They took my vague idea and turned it into an incredible creation that perfectly captured her personality. The taste was just as amazing as the design.",
    },
    {
      id: 6,
      name: "Jessica Parker",
      rating: 5,
      date: "April 15, 2023",
      comment:
        "As someone with gluten sensitivity, finding delicious baked goods can be challenging. TheGlaze's gluten-free options are incredible - you can't even tell the difference! Their attention to preventing cross-contamination gives me peace of mind.",
    },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
    image: null,
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your feedback! It will be reviewed and posted soon.",
    })

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      rating: 5,
      comment: "",
      image: null,
    })

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      })
    }, 5000)
  }

  return (
    <div className="feedback-page">
      <div className="page-header">
        <h1>Customer Feedback</h1>
        <p>See what our customers are saying about us</p>
      </div>

      <div className="feedback-tabs">
        <button
          className={`tab-button ${activeTab === "gallery" ? "active" : ""}`}
          onClick={() => setActiveTab("gallery")}
        >
          Photo Gallery
        </button>
        <button
          className={`tab-button ${activeTab === "testimonials" ? "active" : ""}`}
          onClick={() => setActiveTab("testimonials")}
        >
          Testimonials
        </button>
        <button
          className={`tab-button ${activeTab === "submit" ? "active" : ""}`}
          onClick={() => setActiveTab("submit")}
        >
          Submit Feedback
        </button>
      </div>

      <div className="feedback-content">
        {activeTab === "gallery" && (
          <div className="feedback-gallery">
            {feedbackImages.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-info">
                  <p className="customer-name">{item.customer}</p>
                  <p className="feedback-date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className="testimonials-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-date">{testimonial.date}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < testimonial.rating ? "filled" : ""}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-comment">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "submit" && (
          <div className="feedback-form-container">
            <h2>Share Your Experience</h2>
            <p>We'd love to hear about your experience with TheGlaze!</p>

            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Good</option>
                  <option value={2}>2 Stars - Fair</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="comment">Your Feedback</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="5"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Tell us about your experience..."
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="image">Upload Photo (optional)</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
                <small>Share a photo of your order with us!</small>
              </div>

              <button type="submit" className="submit-button">
                Submit Feedback
              </button>

              {formStatus.submitted && (
                <div className={`form-status ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feedback
