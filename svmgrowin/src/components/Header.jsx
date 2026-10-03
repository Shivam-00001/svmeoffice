import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <div className="logo">
          SVM
          <span style={{ color: "rgb(165, 6, 228)" }}>Gro</span>
          <span>Win</span>
        </div>

        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          id="nav-links"
        >
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/#services" onClick={closeMenu}>Services</a>
          <a href="/#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/Blogs" onClick={closeMenu}>Blogs</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-lg">
          <a
            href="https://wa.me/916383814585"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/wlogo.png" alt="WhatsApp Logo" />
          </a>
        </div>

        <div
          className="menu-toggle"
          id="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </header>
  );
}