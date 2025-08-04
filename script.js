//nav bar hamburger btn

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

//open
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//////////////////////////////////////

// Global navigation helpers
const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "exp",
  "certifications-section",
];
const navLinks = Array.from(document.querySelectorAll("nav a"));

// extracted from index.html
// Hamburger menu toggle for small screens, always show nav on large screens
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("nav-hamburger");
  const navList = document.getElementById("main-nav-list");
  function updateNavDisplay() {
    if (window.innerWidth > 1024) {
      navList.classList.add("open");
      navList.style.display = "flex";
    } else {
      navList.classList.remove("open");
      navList.style.display = "";
    }
  }
  updateNavDisplay();
  window.addEventListener("resize", updateNavDisplay);

  if (!btn || !navList) return;
  btn.addEventListener("click", function () {
    if (window.innerWidth <= 1024) {
      navList.classList.toggle("open");
      if (navList.classList.contains("open")) {
        navList.style.display = "flex";
      } else {
        navList.style.display = "";
      }
    }
  });
  // Close menu when clicking a link (on small screens)
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 1024) {
        navList.classList.remove("open");
        navList.style.display = "";
      }
    });
  });
});

// extracted from index.html
// Hacking typing animation for "Web Developer"
const text = "Computer Engineering Student";
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const el = document.getElementById("hacking-title");
let display = "";
let i = 0;

function hackType() {
  if (i <= text.length) {
    // Show correct chars + random chars for the rest
    let shown = text.slice(0, i);
    let randoms = "";
    for (let j = i; j < text.length; j++) {
      randoms += chars[Math.floor(Math.random() * chars.length)];
    }
    el.textContent = shown + randoms;
    i++;
    setTimeout(hackType, 50);
  } else {
    el.textContent = text;
  }
}
hackType();

// extracted from index.html
// Lazy load fade-in for each section in <main>
document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main");
  if (!main) return;
  const sections = Array.from(main.children).filter(
    (el) => el.tagName === "SECTION" || el.classList.contains("section-border"),
  );
  sections.forEach((section) => {
    section.classList.add("lazy-fade");
  });
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  sections.forEach((section) => observer.observe(section));
});

// extracted from index.html
// Improved scroll-to-top button logic for smooth entrance and no random disappearing
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  const headerSection = document.querySelector("header");
  function checkScroll() {
    const headerBottom =
      headerSection.getBoundingClientRect().bottom + window.scrollY;
    if (window.scrollY > headerBottom - 30) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.pointerEvents = "auto";
      scrollBtn.style.transform = "translateY(0)";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
      scrollBtn.style.transform = "translateY(40px)";
    }
  }
  window.addEventListener("scroll", checkScroll, { passive: true });
  checkScroll();
});

// extracted from index.html
// Highlight nav link for section in view (improved logic)
document.addEventListener("DOMContentLoaded", function () {
  // Map 'home' to header section instead of document.body
  const headerSection = document.querySelector("header");
  const sections = sectionIds
    .map((id) => (id === "home" ? headerSection : document.getElementById(id)))
    .filter(Boolean);
  function onScroll() {
    let current = null;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let maxVisible = 0;
    let maxIndex = 0;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section) {
        const rect = section.getBoundingClientRect();
        const visible = Math.max(
          0,
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0),
        );
        if (visible > maxVisible) {
          maxVisible = visible;
          maxIndex = i;
        }
      }
    }
    current = sectionIds[maxIndex];
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-section-link");
      } else {
        link.classList.remove("active-section-link");
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("theme-toggle");
  const header = document.querySelector("header");

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  themeBtn.addEventListener("click", function () {
    const isLight = document.body.classList.contains("light-theme");
    const newTheme = isLight ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);

    if (isLight) {
      document.body.style.background = "";
      document.body.style.color = "";

      themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
      themeBtn.style.backgroundColor = "black";
      themeBtn.style.color = "white";
      if (header) {
        header.style.background =
          "linear-gradient(120deg, #f3f4f6 60%, #e5e7eb 100%)";
      }
    } else {
      document.body.style.background = "#161515";
      document.body.style.color = "#f8fafc";
      themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
      themeBtn.style.backgroundColor = "orange";
      themeBtn.style.color = "black";
      if (header) {
        header.style.background =
          "linear-gradient(120deg, #181d24 60%, #23272f 100%)";
      }
    }
  }
});
