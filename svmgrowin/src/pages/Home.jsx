import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const words = [
  "Graphics",
  "Add's",
  "Logos",
  "Instagram Posts",
  "YouTube Videos & Edit's",
  "Wedding Films",
  "Brand Videos"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="bg-layer">
        <div className="grid-overlay"></div>
        <div id="particles"></div>
      </div>

      {/* Hero */}
      <section id="hero" className="hero section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
    <source
      src="/assets/video/14299460-hd_1920_1080_25fps.mp4"
      type="video/mp4"
    />
  </video>

        <div className="container hero-inner">
          <h1 className="headline">
            We Create{" "}
            <span id="changing-text" className="accent">
              {words[index]}
            </span>
          </h1>

          <p className="subhead">
            Graphics • Shooting • Video Editing • Social Media Posts
            (Instagram & YouTube)
          </p>

          <div className="cta-row">
            <a href="#services" className="btn primary">
              Explore Services
            </a>

            <a href="#contact" className="btn ghost">
              Get a Quote
            </a>
          </div>

          <div className="trust">
            <span className="dot"></span> Fast Turnaround
            <span className="dot"></span> Pro Quality
            <span className="dot"></span> Budget Friendly
          </div>
        </div>
      </section>
      {/* Baaki Services, Portfolio, About, Contact */}
  


        {/* Services */}
<section id="services" className="services section">
  <div className="container">

    <h2 className="section-title">Our Services</h2>
    <p className="section-desc">
      Complete event, creative and business solutions — from planning to execution, everything under one roof.
    </p>

    <div className="services-slider">
      <div className="cards">

        <article className="card reveal">
          <h3>🏛️ Banquet Hall</h3>
          <p>Fully managed banquet hall booking for weddings, parties and events with premium arrangements.</p>
          <ul>
            <li>Wedding Events</li>
            <li>Birthday Parties</li>
            <li>Corporate Events</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>💃 Cultural Dance</h3>
          <p>Traditional and modern cultural dance groups for events, weddings and stage shows.</p>
          <ul>
            <li>Folk Dance</li>
            <li>Stage Performances</li>
            <li>Festival Shows</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>🎭 Event Entertainment</h3>
          <p>Complete entertainment setup for events including anchors, DJs, lighting and stage shows.</p>
          <ul>
            <li>DJ Setup</li>
            <li>Anchor / Host</li>
            <li>Stage Lighting</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>🎨 Graphic Design</h3>
          <p>Creative design solutions for branding, promotion and print media.</p>
          <ul>
            <li>Logo Design</li>
            <li>Posters & Banners</li>
            <li>Brand Identity</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>🖼️ Photo Framing & Printing</h3>
          <p>High-quality printing and framing services for memories and professional displays.</p>
          <ul>
            <li>Photo Frames</li>
            <li>Canvas Printing</li>
            <li>Wedding Albums</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>📸 Photography</h3>
          <p>Professional photography for events, weddings, products and personal shoots.</p>
          <ul>
            <li>Wedding Photography</li>
            <li>Event Photography</li>
            <li>Product Shoot</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>⛺ Tent House & Event Services</h3>
          <p>Complete tent house setup including decoration, seating and event arrangements.</p>
          <ul>
            <li>Wedding Tent Setup</li>
            <li>Stage Decoration</li>
            <li>Lighting & Seating</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>🚗 Vehicle Services</h3>
          <p>Wedding and event transportation services with cars, buses and luxury vehicles.</p>
          <ul>
            <li>Wedding Cars</li>
            <li>Guest Transport</li>
            <li>Pickup & Drop</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>📷 Wedding Shoot</h3>
          <p>Cinematic wedding photography capturing emotions, rituals and memories.</p>
          <ul>
            <li>Pre-Wedding Shoot</li>
            <li>Wedding Coverage</li>
            <li>Highlight Moments</li>
          </ul>
        </article>

        <article className="card reveal">
          <h3>🎬 Wedding Video Edit</h3>
          <p>Professional cinematic wedding video editing with storytelling and music sync.</p>
          <ul>
            <li>Highlight Video</li>
            <li>Full Wedding Film</li>
            <li>Reels & Teasers</li>
          </ul>
        </article>

      </div>
    </div>

  </div>
</section>

{/* Portfolio */}
<section id="portfolio" className="portfolio section">
  <div className="container">
    <h2 className="section-title">Recent Work</h2>
    <p className="section-desc">A quick peek at our style and quality.</p>

   <div className="grid">

  <Link to="/templates/Wedding-shoot" className="tile reveal">
    <div className="ph">
      <img src="/assets/wed.jpg" alt="Wedding Shoot" />
    </div>
    <span>Wedding Shoot</span>
  </Link>

  <Link to="/templates/Wedding-video-edit" className="tile reveal">
    <div className="ph">
      <img src="/assets/wed edit.webp" alt="Wedding Video Edit" />
    </div>
    <span>Wedding & Reels Video Edit</span>
  </Link>

  <Link to="/templates/Graphic-design" className="tile reveal">
    <div className="ph">
      <img src="/assets/Graphic Design.png" alt="Graphic Design" />
    </div>
    <span>Graphic Design</span>
  </Link>

  <Link to="/templates/Photography" className="tile reveal">
    <div className="ph">
      <img src="../assets/Photography 1.jpg" alt="Photography" />
    </div>
    <span>Photography</span>
  </Link>

  <Link to="/templates/Photo-framing-printing" className="tile reveal">
    <div className="ph">
      <img
        src="/assets/Photo Framing & Printing.jpg"
        alt="Photo Framing & Printing"
      />
    </div>
    <span>Photo Framing & Printing</span>
  </Link>

  <Link to="/templates/Vehicle-services" className="tile reveal">
    <div className="ph">
      <img src="/assets/Vehicle Services.png" alt="Vehicle Services" />
    </div>
    <span>Vehicle Services</span>
  </Link>

  <Link to="/templates/Cultural Dance" className="tile reveal">
    <div className="ph">
      <img src="/assets/Cultural Dance.png" alt="Cultural Dance" />
    </div>
    <span>Cultural Dance & Entertainment Services</span>
  </Link>

  <Link to="/templates/Event Entertainment" className="tile reveal">
    <div className="ph">
      <img src="/assets/Entertainment.png" alt="Event Entertainment" />
    </div>
    <span>Event Entertainment Services</span>
  </Link>

  <Link to="/templates/Banquet-hall" className="tile reveal">
    <div className="ph">
      <img
        src="/assets/Banquet Hall.png"
        alt="Banquet Hall Booking Service"
      />
    </div>
    <span>Banquet Hall Booking Service</span>
  </Link>

  <Link to="/templates/Tent-house-event-services" className="tile reveal">
    <div className="ph">
      <img
        src="/assets/Tent House & Event Services.png"
        alt="Tent House & Event Services"
      />
    </div>
    <span>Tent House & Event Services</span>
  </Link>

</div>
  </div>
</section>

{/* About */}
<section id="about" className="about section">
  <div className="container about-grid">

    <div className="about-text">

      <h2 className="section-title">About SVM GroWin</h2>

      <p className="section-desc">
        SVMGroWin is a complete creative and event service platform dedicated
        to helping individuals, businesses and organizations bring their ideas
        to life. From professional graphic design and photography to wedding
        shoots, video editing, event management and transportation services,
        we provide reliable solutions under one roof.
      </p>

      <p className="section-desc">
        Whether you're planning a wedding, corporate event, cultural program,
        business promotion or personal celebration, our experienced team
        ensures quality service, timely delivery and customer satisfaction
        at every step.
      </p>

      <ul className="bullets">
        <li>🎨 Graphic Design & Branding Solutions</li>
        <li>📸 Professional Photography & Wedding Shoots</li>
        <li>🎬 Wedding, Reels & Video Editing Services</li>
        <li>🏕 Tent House & Complete Event Setup</li>
        <li>🏛 Banquet Hall Booking Assistance</li>
        <li>🚗 Vehicle Rental & Transportation Services</li>
        <li>💃 Cultural Dance & Entertainment Programs</li>
        <li>🖼 Photo Framing & Premium Printing Services</li>
      </ul>

    </div>

    <div className="about-card reveal">

      <div className="about-content">

        <h3>Why Choose SVM GroWin?</h3>

        <p>
          We combine creativity, professionalism and affordability to deliver
          exceptional results. Our goal is to make every project and event
          memorable through quality work and dedicated support.
        </p>

        <div className="stats">

          <div>
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>1000+</strong>
            <span>Projects Completed</span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Contact */}
<section id="contact" className="contact section">
  <div className="container">
    <h2 className="section-title">Let’s Work Together</h2>
    <p className="section-desc">
      Tell us about your project—get a free quote today.
    </p>

    <form
      className="contact-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="row">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
      </div>

      <div className="row">
        <input
          type="text"
          placeholder="Project Type (Logo / Reel / Wedding…)"
        />
      </div>

      <textarea rows="5" placeholder="Your Message"></textarea>

      <button
        type="button"
        className="btn primary"
        id="sendBtn"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

<section id="address" className="address-info section">
  <div className="container">

    <h2 className="section-title">Get In Touch</h2>

    <p className="section-desc">
      We're here to help. Reach out to us for inquiries,
      support, or project discussions.
    </p>

    <div className="address-info-grid">

      {/* Left Side */}
      <div className="left">

        <div className="info-item">
          <img
            src="/assets/social_icons/location.svg"
            alt="Location"
            className="custom-icon"
          />
          <span>
            Gaunariyara Chowk Bazar, Maharajganj,
            Uttar Pradesh - 273303
          </span>
        </div>

        <div className="info-item">
          <img
            src="/assets/social_icons/mobile.svg"
            alt="Phone"
            className="custom-icon"
          />
          <a href="tel:+916383814585">
            +91 6383814585
          </a>
        </div>

        <div className="info-item">
          <img
            src="/assets/social_icons/email.svg"
            alt="Email"
            className="custom-icon"
          />
          <span>info@svmgrowin.com</span>
        </div>

      </div>

      {/* Right Side */}
      <div className="right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.1346313139468!2d83.57453523958138!3d27.24885039993268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996a78988069b51%3A0x90a440b1776cee13!2sRadha%20Photo%20Studio!5e1!3m2!1sen!2sin!4v1781002990688!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>

    </div>

  </div>

  {/* WhatsApp Chat */}
  <div className="whatshapchat">
    <p className="mini">Prefer WhatsApp?</p>

    <a
      href="https://wa.me/916383814585"
      target="_blank"
      rel="noreferrer"
    >
      <img src="/wlogo.png" alt="WhatsApp Logo" />
    </a>
  </div>
</section>
  </>
        );   
}