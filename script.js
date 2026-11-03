/* === Rotating Hero Words === */
const words = ["Graphics", "Add's","Logos", "Instagram Posts", "YouTube Videos & Edit's", "Wedding Films", "Brand Videos"];
const target = document.getElementById("changing-text");
let idx = 0;
function rotateWord() {
  target.classList.add("fade-out");
  setTimeout(() => {
    target.textContent = words[idx];
    idx = (idx + 1) % words.length;
    target.classList.remove("fade-out");
  }, 220);
}
setInterval(rotateWord, 1800);

/* small fade CSS effect for word swap */
const style = document.createElement("style");
style.textContent = `#changing-text{transition:opacity .22s ease} #changing-text.fade-out{opacity:.2}`;
document.head.appendChild(style);

/* === Floating Particles === */
const particlesRoot = document.getElementById("particles");
const PARTICLE_COUNT = 28;
function spawnParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  const size = 7 + Math.random() * 14;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (14 + Math.random() * 20) + "s";
  p.style.animationDelay = (Math.random() * 10) + "s";
  particlesRoot.appendChild(p);
}
for (let i = 0; i < PARTICLE_COUNT; i++) spawnParticle();

/* === Scroll Reveal === */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); }
  });
}, { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* === Smooth Scroll on Nav === */
document.querySelectorAll('.nav-links a, .foot-links a, .btn.primary, .btn.ghost')
  .forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById("nav-links").classList.remove("active");
      }
    });
  });

/* === Contact Form → WhatsApp Send === */
document.getElementById("sendBtn")?.addEventListener("click", () => {
  let name = document.querySelector("input[placeholder='Your Name']").value;
  let email = document.querySelector("input[placeholder='Your Email']").value;
  let project = document.querySelector("input[placeholder='Project Type (Logo / Reel / Wedding…)']").value;
  let message = document.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill in all required fields (Name, Email, Message).");
    return;
  }

  let phoneNumber = "916383814585"; // WhatsApp receiver
  let whatsappMessage = `*New Inquiry*%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Project Type:* ${project}%0A
*Message:* ${message}`;

  let url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  window.open(url, "_blank").focus();
});

/* === Mobile Menu Toggle === */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

