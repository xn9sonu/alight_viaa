/**
 * MotionVanta - Core Application JavaScript
 * High-performance, clean vanilla JS
 */

const WHATSAPP_PHONE = "6283121321450"; // +62 831-2132-1450

// Product database for dynamic modals & ordering
const productsData = [
  {
    id: "prod-1",
    category: "apps",
    badge: "badge_bestseller",
    badgeClass: "badge-gold",
    image: "assets/images/hero-character.jpg",
    nameKey: "prod_1_name",
    descKey: "prod_1_desc",
    priceKey: "prod_1_price",
    periodKey: "prod_1_period",
    features: {
      id: [
        "Akun Private 1 Tahun Penuh (Bisa pakai email sendiri / dari admin)",
        "Garansi 365 Hari Replace / Reset jika bermasalah",
        "Tanpa Watermark 'Alight Motion' di hasil video",
        "Bebas export resolusi hingga 4K pada 60 FPS",
        "Mendukung file XML besar (> 5MB) tanpa lag",
        "Unlock 1000+ efek premium, font, transisi & shape",
        "Support multi-platform: Android smartphone, tablet, iPhone & iPad"
      ],
      en: [
        "Full 1-Year Private Account (Use your personal email or ready-made)",
        "365 Days Replacement / Reset Warranty",
        "Zero 'Alight Motion' watermark on all exports",
        "High-definition export up to 4K resolution at 60 FPS",
        "Smoothly imports large XML project files (> 5MB)",
        "Unlocks 1,000+ premium effects, fonts, transitions & shapes",
        "Multi-platform support: Android phone, tablet, iPhone & iPad"
      ]
    },
    waMessage: {
      id: "Halo MotionVanta, saya ingin memesan produk: *Alight Motion Pro Private (1 Tahun)*. Tolong info detail pembayaran dan prosesnya ya.",
      en: "Hello MotionVanta, I would like to order: *Alight Motion Pro Private (1 Year)*. Please provide payment details and setup instructions."
    }
  },
  {
    id: "prod-2",
    category: "presets",
    badge: "badge_popular",
    badgeClass: "badge-cyan",
    image: "assets/images/product-ffmax.jpg",
    nameKey: "prod_2_name",
    descKey: "prod_2_desc",
    priceKey: "prod_2_price",
    periodKey: "prod_2_period",
    features: {
      id: [
        "250+ Preset Alight Motion & File XML siap pakai",
        "Preset Jedag-Jedug JJ Viral TikTok & Reels",
        "Anime Music Video (AMV) Shakes, Smooth Motion & Flash FX",
        "Free Fire / MLBB Highlight Game Beat Sync presets",
        "Color Grading Cinematic LUTs & Tone Curves",
        "Panduan cara import XML 5MB+ untuk Android & iOS",
        "Akses Cloud Drive dengan update preset bulanan"
      ],
      en: [
        "250+ Ready-to-use Alight Motion Presets & XML Files",
        "Trending Beat-Sync (JJ) Presets for TikTok & Reels",
        "Anime Music Video (AMV) Shakes, Smooth Motion & Flash FX",
        "Free Fire & MLBB Highlight Beat Sync Presets",
        "Cinematic Color Grading LUTs & Tone Curves",
        "Step-by-step XML import guide for Android & iOS",
        "Lifetime Cloud Drive access with monthly additions"
      ]
    },
    waMessage: {
      id: "Halo MotionVanta, saya ingin membeli: *Mega Preset FF & AMV Viral Pack*. Tolong info link dan cara transaksinya.",
      en: "Hello MotionVanta, I want to purchase the *Mega Preset FF & AMV Viral Pack*. Please provide payment info."
    }
  },
  {
    id: "prod-3",
    category: "apps",
    badge: "badge_new",
    badgeClass: "badge-orange",
    image: "assets/images/hero-character.jpg",
    nameKey: "prod_3_name",
    descKey: "prod_3_desc",
    priceKey: "prod_3_price",
    periodKey: "prod_3_period",
    features: {
      id: [
        "Akun Private 1 Bulan (30 Hari)",
        "Garansi 30 Hari Penuh",
        "Tanpa Watermark & Tanpa Iklan",
        "Support Import Preset XML",
        "Export hingga resolusi 1080p / 4K",
        "Support Android & iOS"
      ],
      en: [
        "1-Month Private Account (30 Days)",
        "30 Days Full Warranty",
        "No Watermark & Zero Ads",
        "XML Preset Import Support",
        "Export up to 1080p / 4K Resolution",
        "Supports Android & iOS"
      ]
    },
    waMessage: {
      id: "Halo MotionVanta, saya ingin memesan paket: *Alight Motion Pro Private (1 Bulan)*. Mohon info nomor rekening / QRIS.",
      en: "Hello MotionVanta, I would like to order: *Alight Motion Pro Private (1 Month)*. Please send payment methods."
    }
  },
  {
    id: "prod-4",
    category: "effects",
    badge: "badge_premium",
    badgeClass: "badge-purple",
    image: "assets/images/product-purple.jpg",
    nameKey: "prod_4_name",
    descKey: "prod_4_desc",
    priceKey: "prod_4_price",
    periodKey: "prod_4_period",
    features: {
      id: [
        "150+ Fire Spark, Glowing Neon & Energy Particles Overlays",
        "Cinematic Optical Lens Flares & Light Streaks 4K 60FPS",
        "Glitch Transitions, Film Burns & VHS Textures",
        "Sound FX Pack: Bass Drops, Swooshes, Gunshots & Hit Impacts",
        "Format MP4 Black Screen (Blending Mode: Screen) siap pakai",
        "Bisa digunakan di Alight Motion, CapCut, Premiere Pro & After Effects"
      ],
      en: [
        "150+ Fire Sparks, Glowing Neon & Energy Particle Overlays",
        "Cinematic Optical Lens Flares & Light Streaks 4K 60FPS",
        "Glitch Transitions, Film Burns & VHS Textures",
        "Sound FX Pack: Heavy Bass Drops, Whooshes, Gunshots & Impacts",
        "High-res MP4 Black Screen format (Screen Blend Mode ready)",
        "Compatible with Alight Motion, CapCut, Premiere Pro & After Effects"
      ]
    },
    waMessage: {
      id: "Halo MotionVanta, saya ingin memesan: *Neon Glow & Visual FX Masterpack*. Mohon info ketersediaan dan cara pesan.",
      en: "Hello MotionVanta, I would like to order: *Neon Glow & Visual FX Masterpack*. Please guide me on ordering."
    }
  },
  {
    id: "prod-5",
    category: "apps",
    badge: "badge_popular",
    badgeClass: "badge-cyan",
    image: "assets/images/hero-character.jpg",
    nameKey: "prod_5_name",
    descKey: "prod_5_desc",
    priceKey: "prod_5_price",
    periodKey: "prod_5_period",
    features: {
      id: [
        "Akun Sharing Terkelola 1 Tahun",
        "Garansi aktif selama masa sewa",
        "Unlock efek premium & font",
        "Ekspor tanpa watermark",
        "Paling hemat biaya untuk editor pemula",
        "Support Android & iOS"
      ],
      en: [
        "Managed 1-Year Shared Account",
        "Active warranty throughout subscription",
        "Unlocks premium effects & fonts",
        "Export without watermark",
        "Most cost-effective for beginners",
        "Supports Android & iOS"
      ]
    },
    waMessage: {
      id: "Halo MotionVanta, saya ingin memesan: *Alight Motion Sharing (1 Tahun)*. Mohon info ketersediaan slot sharingnya.",
      en: "Hello MotionVanta, I'd like to get *Alight Motion Sharing (1 Year)*. Please let me know available slots."
    }
  },
  {
    id: "prod-6",
    category: "effects",
    badge: "badge_bestseller",
    badgeClass: "badge-gold",
    image: "assets/images/product-ffmax.jpg",
    nameKey: "prod_6_name",
    descKey: "prod_6_desc",
    priceKey: "prod_6_price",
    periodKey: "prod_6_period",
    features: {
      id: [
        "Alight Motion Pro Private 1 Tahun Penuh (Full Garansi)",
        "Mega Preset FF, MLBB & AMV Pack (250+ XML)",
        "Neon Glow & Visual FX Masterpack (Overlays & Sound FX)",
        "Tutorial Rahasia Editing Jedag-Jedug & Color Grading Smooth",
        "Akses VIP Group Telegram Creator & Prioritas Support 24/7"
      ],
      en: [
        "1-Year Alight Motion Pro Private Account (Full Warranty)",
        "Mega Preset FF, MLBB & AMV Pack (250+ XMLs)",
        "Neon Glow & Visual FX Masterpack (Overlays & Sound FX)",
        "Exclusive Smooth Beat-Sync & Color Grading Masterclass Guide",
        "VIP Telegram Creators Group Access & Priority Support 24/7"
      ]
    },
    waMessage: {
      id: "Halo MotionVanta, saya ingin memesan paket lengkap: *All-in-One Ultimate Editor Bundle*. Tolong pandu proses ordernya.",
      en: "Hello MotionVanta, I would like to order the *All-in-One Ultimate Editor Bundle*. Please guide me through."
    }
  }
];

// Current State
let currentLang = localStorage.getItem("mv_lang") || "id";

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initNavbar();
  initProducts();
  initPricing();
  initFAQ();
  initModals();
  initParticles();
  initWhatsAppButtons();
  initSmoothScroll();
});

/**
 * Language Manager
 */
function initLanguage() {
  applyLanguage(currentLang);

  const langButtons = document.querySelectorAll("[data-lang-switch]");
  langButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute("data-lang-switch");
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem("mv_lang", currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  const dict = translations[lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update aria-labels
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  // Update Active Lang UI
  document.querySelectorAll("[data-lang-switch]").forEach(btn => {
    if (btn.getAttribute("data-lang-switch") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Re-render products if they exist
  renderProducts();
}

/**
 * Sticky Navbar & Mobile Menu
 */
function initNavbar() {
  const navbar = document.getElementById("main-nav");
  const hamburger = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Scroll blur effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.classList.toggle("no-scroll", isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      });
    });
  }
}

/**
 * Product Showcase and Filtering
 */
let currentCategory = "all";

function initProducts() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      renderProducts();
    });
  });

  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const dict = translations[currentLang];
  const filtered = currentCategory === "all"
    ? productsData
    : productsData.filter(p => p.category === currentCategory);

  container.innerHTML = filtered.map(product => {
    const badgeText = dict[product.badge] || "PREMIUM";
    const name = dict[product.nameKey] || product.nameKey;
    const desc = dict[product.descKey] || product.descKey;
    const price = dict[product.priceKey] || product.priceKey;
    const period = dict[product.periodKey] || "";
    const detailBtnText = dict.btn_details || "Detail Produk";
    const orderBtnText = dict.btn_order_wa || "Pesan via WhatsApp";
    const waUrl = getWhatsAppUrl(product.waMessage[currentLang]);

    return `
      <div class="product-card card-glass" data-product-id="${product.id}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${name}" class="product-img" loading="lazy">
          <div class="product-badge ${product.badgeClass}">${badgeText}</div>
          <div class="image-gradient-overlay"></div>
        </div>
        <div class="product-content">
          <h3 class="product-title">${name}</h3>
          <p class="product-desc">${desc}</p>
          <div class="product-pricing">
            <span class="price-value">${price}</span>
            <span class="price-period">${period}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-secondary btn-sm open-details-btn" onclick="openProductModal('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>${detailBtnText}</span>
            </button>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.55 0 8.24 3.69 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.178 8.178 0 0 1-5.83 2.41c-1.47 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.26-8.24m4.53 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.2-.59.2-1.09.14-1.19-.06-.1-.22-.16-.47-.28z"/></svg>
              <span>${orderBtnText}</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Pricing Plan WhatsApp Links
 */
function initPricing() {
  const planButtons = document.querySelectorAll(".plan-cta-btn");
  planButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const planName = btn.getAttribute("data-plan-name");
      const message = currentLang === "id"
        ? `Halo MotionVanta, saya ingin memesan paket *${planName}*. Mohon info detail pembayaran.`
        : `Hello MotionVanta, I'm interested in ordering the *${planName}* plan. Please provide payment details.`;
      
      window.open(getWhatsAppUrl(message), "_blank");
    });
  });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-question");
    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      // Close all others
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Modals (Product Details & Legal Pages)
 */
function initModals() {
  const modalOverlays = document.querySelectorAll(".modal-overlay");
  modalOverlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.closest(".modal-close-btn")) {
        closeAllModals();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Legal modal triggers
  document.querySelectorAll("[data-legal-modal]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const modalType = link.getAttribute("data-legal-modal");
      openLegalModal(modalType);
    });
  });
}

function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const dict = translations[currentLang];
  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;

  const titleEl = document.getElementById("modal-prod-title");
  const imgEl = document.getElementById("modal-prod-img");
  const priceEl = document.getElementById("modal-prod-price");
  const periodEl = document.getElementById("modal-prod-period");
  const descEl = document.getElementById("modal-prod-desc");
  const featuresList = document.getElementById("modal-prod-features");
  const waBtn = document.getElementById("modal-prod-wa-btn");
  const badgeEl = document.getElementById("modal-prod-badge");

  titleEl.textContent = dict[product.nameKey] || product.nameKey;
  imgEl.src = product.image;
  imgEl.alt = titleEl.textContent;
  priceEl.textContent = dict[product.priceKey] || product.priceKey;
  periodEl.textContent = dict[product.periodKey] || "";
  descEl.textContent = dict[product.descKey] || product.descKey;
  badgeEl.textContent = dict[product.badge] || "PREMIUM";
  badgeEl.className = `product-badge ${product.badgeClass}`;

  const feats = product.features[currentLang] || product.features.id;
  featuresList.innerHTML = feats.map(f => `
    <li>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${f}</span>
    </li>
  `).join("");

  const waUrl = getWhatsAppUrl(product.waMessage[currentLang]);
  waBtn.href = waUrl;

  modal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function openLegalModal(type) {
  const modal = document.getElementById("legal-modal");
  const titleEl = document.getElementById("legal-modal-title");
  const contentEl = document.getElementById("legal-modal-content");
  if (!modal || !titleEl || !contentEl) return;

  const dict = translations[currentLang];

  if (type === "terms") {
    titleEl.textContent = dict.legal_terms || "Syarat & Ketentuan";
    contentEl.innerHTML = currentLang === "id" ? `
      <h3>1. Ketentuan Umum</h3>
      <p>Dengan membeli produk digital atau layanan dari MotionVanta, Anda menyetujui seluruh ketentuan yang tercantum di halaman ini.</p>
      <h3>2. Penggunaan Produk & Akun</h3>
      <p>Akun private diperuntukkan bagi 1 pengguna. Dilarang membagikan atau menjual kembali akses akun tanpa izin resmi.</p>
      <p>Untuk paket Preset & XML, lisensi berlaku untuk kebutuhan pembuatan video pribadi maupun konten komersial Anda, dilarang memperjualbelikan file mentah (raw source).</p>
      <h3>3. Pembayaran & Pengiriman</h3>
      <p>Pengiriman akun atau link download digital dilakukan secara instan melalui WhatsApp setelah konfirmasi transfer valid.</p>
    ` : `
      <h3>1. General Terms</h3>
      <p>By purchasing digital goods or services from MotionVanta, you agree to comply with all terms and conditions stated herein.</p>
      <h3>2. Product Usage</h3>
      <p>Private accounts are strictly for 1 individual user. Reselling or distributing account credentials without permission is prohibited.</p>
      <p>Presets & XML files are licensed for your personal and commercial content creation. Reselling the raw project files is strictly prohibited.</p>
      <h3>3. Payment & Delivery</h3>
      <p>Digital delivery of credentials and download links is completed via WhatsApp upon verified payment confirmation.</p>
    `;
  } else if (type === "privacy") {
    titleEl.textContent = dict.legal_privacy || "Kebijakan Privasi";
    contentEl.innerHTML = currentLang === "id" ? `
      <h3>1. Data yang Dikumpulkan</h3>
      <p>MotionVanta hanya mengumpulkan informasi kontak dasar (nomor WhatsApp dan nama) untuk keperluan transaksi dan bantuan garansi.</p>
      <h3>2. Keamanan Data</h3>
      <p>Kami menjamin kerahasiaan nomor dan data Anda tidak akan dibagikan atau dijual ke pihak ketiga mana pun.</p>
    ` : `
      <h3>1. Information We Collect</h3>
      <p>MotionVanta collects minimal contact information (WhatsApp phone number and name) solely for processing orders and warranty support.</p>
      <h3>2. Data Protection</h3>
      <p>We guarantee strict confidentiality. Your details will never be sold or shared with any unauthorized third parties.</p>
    `;
  } else if (type === "refund") {
    titleEl.textContent = dict.legal_refund || "Kebijakan Refund & Garansi";
    contentEl.innerHTML = currentLang === "id" ? `
      <h3>1. Ketentuan Garansi</h3>
      <p>Seluruh akun Alight Motion Pro dilindungi garansi sesuai durasi paket (misal: 30 hari untuk 1 Bulan, 365 hari untuk 1 Tahun).</p>
      <h3>2. Penggantian Akun (Replacement)</h3>
      <p>Jika terjadi kendala teknis pada akun yang bukan disebabkan kelalaian pengguna (misal: banned sistem pihak ketiga), admin akan memberikan reset atau akun pengganti baru tanpa biaya tambahan.</p>
      <h3>3. Pengembalian Dana (Refund)</h3>
      <p>Refund dana dapat diproses apabila tim kami tidak dapat memberikan solusi atau akun pengganti dalam waktu 1x24 jam.</p>
    ` : `
      <h3>1. Warranty Policy</h3>
      <p>All Alight Motion Pro accounts are backed by a full warranty corresponding to the purchased subscription term (e.g. 30 days for Monthly, 365 days for Yearly).</p>
      <h3>2. Account Replacement</h3>
      <p>If an unexpected technical issue arises, our team will provide a fresh replacement account promptly at no extra charge.</p>
      <h3>3. Refund Terms</h3>
      <p>A full or prorated refund is issued if our support cannot provide a working solution or replacement within 24 hours.</p>
    `;
  }

  modal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.classList.remove("no-scroll");
}

/**
 * WhatsApp Link Helper
 */
function getWhatsAppUrl(customMessage) {
  const defaultMsg = currentLang === "id"
    ? "Halo MotionVanta, saya ingin mengetahui produk premium yang tersedia."
    : "Hello MotionVanta, I would like to know more about your premium products.";
  
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

function initWhatsAppButtons() {
  // Update general WA buttons
  document.querySelectorAll(".direct-wa-btn").forEach(btn => {
    btn.href = getWhatsAppUrl();
  });
}

/**
 * Hero Ambient Particles (Canvas)
 * Creates dynamic gold and fire spark particles with zero external libraries
 */
function initParticles() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 25 : 55;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 20;
      this.size = Math.random() * 2.8 + 0.8;
      this.speedY = Math.random() * 1.2 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.8 + 0.2;
      this.fadeRate = Math.random() * 0.005 + 0.002;
      // Gold & Warm Orange shades
      const colors = ["#FF8A00", "#FFB52E", "#FF4500", "#FFD700", "#FFA500"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.opacity -= this.fadeRate;

      if (this.opacity <= 0 || this.y < -10) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.size * 4;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const p = new Particle();
    p.y = Math.random() * height; // initial scatter
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Smooth Scroll with Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href.startsWith("#modal")) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById("main-nav")?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}
