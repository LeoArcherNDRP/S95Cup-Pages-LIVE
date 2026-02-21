/* ==========================================================
   HELPERS
========================================================== */
const body = document.body;

function isExternalHref(href) {
  if (!href) return true;
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function shouldSkipTransition(linkEl, href) {
  if (!linkEl) return true;
  if (linkEl.hasAttribute("data-no-transition")) return true;
  if (linkEl.getAttribute("target") === "_blank") return true;
  if (!href) return true;
  if (href.startsWith("#")) return true;
  if (isExternalHref(href)) return true;
  return false;
}

function navigateWithTransition(url) {
  body.classList.remove("page-visible");
  setTimeout(() => {
    window.location.href = url;
  }, 350);
}

function closeNav() {
  body.classList.remove("nav-open");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
}

function toggleNav() {
  const next = !body.classList.contains("nav-open");
  body.classList.toggle("nav-open", next);
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) toggle.setAttribute("aria-expanded", String(next));
}

/* ==========================================================
   PAGE TRANSITION (GLOBAL)
========================================================== */
window.addEventListener("load", () => {
  body.classList.add("page-visible");
});

/* ==========================================================
   NAV MENU TOGGLE + CLOSE BEHAVIOR
========================================================== */
const navToggle = document.querySelector(".nav-toggle");
if (navToggle) {
  // Default aria-expanded if not present
  if (!navToggle.hasAttribute("aria-expanded")) {
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", (e) => {
    e.preventDefault();
    toggleNav();
  });
}

// Close nav on overlay click
document.addEventListener("click", (e) => {
  const overlay = e.target.closest(".page-overlay");
  if (!overlay) return;
  if (body.classList.contains("nav-open")) closeNav();
});

// Close nav on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.classList.contains("nav-open")) {
    closeNav();
  }
});

/* ==========================================================
   CLICK HANDLING: EVENT CARDS + LINK TRANSITIONS
========================================================== */
document.addEventListener("click", (e) => {
  // Event cards
  const card = e.target.closest(".event-card");
  if (card) {
    const url = card.getAttribute("data-event-url");
    if (url) {
      e.preventDefault();
      closeNav();
      navigateWithTransition(url);
    }
    return;
  }

  // Standard links
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");

  // If nav is open and user clicked a nav link, close nav first
  if (body.classList.contains("nav-open") && link.closest(".nav-menu")) {
    closeNav();
  }

  if (shouldSkipTransition(link, href)) return;

  e.preventDefault();
  navigateWithTransition(href);
});

/* ==========================================================
   STANDARD CAROUSEL CONTROLS
========================================================== */
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const prevBtn = carousel.querySelector("[data-carousel-prev]");
  const nextBtn = carousel.querySelector("[data-carousel-next]");

  if (!track || slides.length === 0) return;

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    index = (index + 1) % slides.length;
    updateCarousel();
  });
});

/* ==========================================================
   COPY LINK BUTTON
========================================================== */
const copyBtn = document.getElementById("copyLinkBtn");
const popup = document.getElementById("copyPopup");

if (copyBtn && popup) {
  copyBtn.addEventListener("click", async () => {
    const link = copyBtn.getAttribute("data-copy-link");
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);
      popup.style.opacity = "1";
      setTimeout(() => (popup.style.opacity = "0"), 2000);
    } catch {
      // If clipboard permissions fail, silently do nothing
    }
  });
}

/* ==========================================================
   GLITCH CLICK EFFECT
========================================================== */
document.addEventListener("click", (e) => {
  // Don't glitch on nav toggle clicks (keeps UI clean)
  if (e.target.closest(".nav-toggle")) return;

  const x = e.clientX;
  const y = e.clientY;

  const burst = document.createElement("div");
  burst.classList.add("glitch-burst");
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  document.body.appendChild(burst);

  setTimeout(() => burst.remove(), 450);

  for (let i = 0; i < 6; i++) {
    const frag = document.createElement("div");
    frag.classList.add("glitch-frag");

    frag.style.left = `${x}px`;
    frag.style.top = `${y}px`;

    frag.style.setProperty("--dx", `${(Math.random() - 0.5) * 70}px`);
    frag.style.setProperty("--dy", `${(Math.random() - 0.5) * 70}px`);

    document.body.appendChild(frag);
    setTimeout(() => frag.remove(), 350);
  }
});

/* ==========================================================
   MULTIPLE FADE CAROUSELS (independent)
========================================================== */
document.querySelectorAll("[data-event-fade-carousel]").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".event-fade-slide");
  if (!slides.length) return;

  let index = 0;
  slides[0].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4500);
});

/* ==========================================================
   RACE PAGES: CLICK TO EXPAND DRIVER DETAILS
   (supports race1–race6 template)
========================================================== */
document.querySelectorAll("tr.driver-row[data-driver]").forEach((row) => {
  row.addEventListener("click", () => {
    const id = row.dataset.driver;
    if (!id) return;

    const panel = document.getElementById("driver-" + id);
    if (!panel) return;

    panel.style.display = panel.style.display === "table-row" ? "none" : "table-row";
  });
});
