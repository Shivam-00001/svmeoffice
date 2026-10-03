
export default function BanquetHall() {
  return (
    <>
      <div className="bg-layer">
        <div className="grid-overlay"></div>
        <div id="particles"></div>
      </div>

      <section className="section">
        <div className="container">
          <h1 className="section-title">
            Banquet Hall Booking Service
          </h1>

          <p className="section-desc">
            Book premium banquet halls for weddings, receptions, birthdays,
            engagements, corporate events and family celebrations with complete
            event management support.
          </p>

          {/* Project Intro */}
          <div className="project-intro">
            <img
              src="/assets/Banquet Hall.png"
              className="intro-img"
              alt="service image"
            />

            <div className="intro-content">
              <span className="project-badge">
                Premium Banquet Hall Service
              </span>

              <h2>Book The Perfect Banquet Hall For Every Occasion</h2>

              <p>
                We provide spacious and well-equipped banquet halls for weddings,
                receptions, birthdays, anniversaries, corporate events,
                engagement ceremonies and social gatherings.
              </p>

              <p>
                From venue setup to guest management, decoration, catering,
                lighting and entertainment, everything is arranged
                professionally to make your event memorable and hassle-free.
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="project-stats">
            <div className="stat-card">
              <h2>500+</h2>
              <p>Guest Capacity</p>
            </div>

            <div className="stat-card">
              <h2>24/7</h2>
              <p>Booking Support</p>
            </div>

            <div className="stat-card">
              <h2>AC</h2>
              <p>Fully Air Conditioned</p>
            </div>

            <div className="stat-card">
              <h2>100%</h2>
              <p>Event Ready</p>
            </div>
          </div>

          {/* Services */}
          <div className="project-details">
            <h3>Banquet Hall Services</h3>

            <div className="poster-grid">
              <div className="poster-card">
                <h4>Wedding Functions</h4>
                <p>Beautiful venue for marriage ceremonies and receptions.</p>
              </div>

              <div className="poster-card">
                <h4>Birthday Parties</h4>
                <p>Perfect setup for birthday celebrations and family events.</p>
              </div>

              <div className="poster-card">
                <h4>Engagement Events</h4>
                <p>Elegant arrangements for ring ceremonies and engagements.</p>
              </div>

              <div className="poster-card">
                <h4>Corporate Meetings</h4>
                <p>Professional environment for business events.</p>
              </div>

              <div className="poster-card">
                <h4>Anniversary Celebrations</h4>
                <p>Memorable venue for anniversary parties and gatherings.</p>
              </div>

              <div className="poster-card">
                <h4>Family Functions</h4>
                <p>Comfortable space for all types of social events.</p>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="project-details">
            <h3>Facilities Available</h3>

            <div className="tech-stack">
              <span>Fully AC Hall</span>
              <span>Stage Setup</span>
              <span>LED Lighting</span>
              <span>Decoration</span>
              <span>DJ Sound System</span>
              <span>Catering Area</span>
              <span>Dining Arrangement</span>
              <span>Parking Facility</span>
              <span>Power Backup</span>
              <span>Photography Space</span>
              <span>Bridal Room</span>
              <span>Guest Seating</span>
            </div>
          </div>

          {/* Booking Process */}
          <div className="project-details">
            <h3>Booking Process</h3>

            <div className="process-grid">
              <div className="process-card">
                <span>01</span>
                <h4>Choose Date</h4>
                <p>Select your preferred event date.</p>
              </div>

              <div className="process-card">
                <span>02</span>
                <h4>Venue Visit</h4>
                <p>Visit and inspect the banquet hall.</p>
              </div>

              <div className="process-card">
                <span>03</span>
                <h4>Confirm Booking</h4>
                <p>Reserve the venue with advance payment.</p>
              </div>

              <div className="process-card">
                <span>04</span>
                <h4>Enjoy Event</h4>
                <p>Relax while we help make your event successful.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="project-details">
            <h3>Why Choose Our Banquet Hall?</h3>

            <ul>
              <li>Spacious and clean event venue</li>
              <li>Affordable booking packages</li>
              <li>Professional decoration services</li>
              <li>Comfortable seating arrangements</li>
              <li>Ample parking space</li>
              <li>Suitable for all occasions</li>
              <li>Modern lighting and sound setup</li>
              <li>Friendly customer support</li>
            </ul>
          </div>

                    {/* Testimonial */}
          <div className="testimonial">
            <h3>Customer Feedback</h3>

            <p>
              "Excellent banquet hall with great facilities and professional
              arrangements. Our event was organized smoothly and all guests
              were highly satisfied with the venue and services."
            </p>

            <h4>— Happy Customer</h4>
          </div>

          {/* Back Button */}
          <div className="back-btn-wrap">
            <a href="/#portfolio" className="btn primary">
              ← Back to Portfolio
            </a>
          </div>

        </div>
      </section>
    </>
  );
}