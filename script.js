// ===== NEXPLAY - script.js =====

// ---- PRODUCTS DATA ----
const products = [
  { id:1, name:"PlayStation 5 Pro", category:"consola", emoji:"🎮", bg:"linear-gradient(135deg,#003087,#0070d1)", price:4299000, tag:"NUEVO", tagClass:"" },
  { id:2, name:"Xbox Series X", category:"consola", emoji:"🕹️", bg:"linear-gradient(135deg,#107c10,#0e5a0e)", price:3199000, tag:"HOT", tagClass:"" },
  { id:3, name:"Nintendo Switch 2", category:"consola", emoji:"🟡", bg:"linear-gradient(135deg,#e4000f,#ff6b6b)", price:2499000, tag:"NUEVO", tagClass:"" },
  { id:4, name:"PC Gamer RTX 4070 Ti", category:"pc", emoji:"🖥️", bg:"linear-gradient(135deg,#1a1a2e,#16213e)", price:6850000, tag:"POPULAR", tagClass:"" },
  { id:5, name:"PC Beast RTX 4090", category:"pc", emoji:"💻", bg:"linear-gradient(135deg,#0f0c29,#302b63)", price:14500000, tag:"ELITE", tagClass:"" },
  { id:6, name:"GTA VI", category:"juego", emoji:"🌴", bg:"linear-gradient(135deg,#ff6b35,#f7c59f)", price:299000, tag:"-10%", tagClass:"sale" },
  { id:7, name:"Spider-Man 3", category:"juego", emoji:"🕷️", bg:"linear-gradient(135deg,#e63946,#457b9d)", price:249000, tag:"NUEVO", tagClass:"" },
  { id:8, name:"Teclado Mecánico RGB", category:"accesorio", emoji:"⌨️", bg:"linear-gradient(135deg,#0d0d0d,#1a1a1a)", price:389000, tag:"HOT", tagClass:"" },
  { id:9, name:"Audífonos Gaming 7.1", category:"accesorio", emoji:"🎧", bg:"linear-gradient(135deg,#6a0dad,#9b59b6)", price:459000, tag:"-20%", tagClass:"sale" },
  { id:10, name:"Monitor 4K 144Hz", category:"accesorio", emoji:"🖥️", bg:"linear-gradient(135deg,#1a1a2e,#00d4ff33)", price:1899000, tag:"OFERTA", tagClass:"sale" },
  { id:11, name:"Elden Ring DLC", category:"juego", emoji:"⚔️", bg:"linear-gradient(135deg,#b5a642,#3d2b1f)", price:189000, tag:"DLC", tagClass:"" },
  { id:12, name:"Mouse Razer DeathAdder", category:"accesorio", emoji:"🖱️", bg:"linear-gradient(135deg,#00ff41,#003300)", price:279000, tag:"HOT", tagClass:"" },
];

// ---- CART ----
let cart = [];
let cartCount = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
  showToast(`✓ ${name} agregado`);
}

function showToast(msg) {
  const toast = document.getElementById("cartToast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

// ---- RENDER PRODUCTS ----
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="addToCart('${p.name}', ${p.price})">
      <div class="product-img" style="background:${p.bg}">
        <span>${p.emoji}</span>
        ${p.tag ? `<span class="product-tag ${p.tagClass}">${p.tag}</span>` : ""}
      </div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <p>${categoryLabel(p.category)}</p>
        <div class="product-footer">
          <span class="product-price">$${p.price.toLocaleString("es-CO")}</span>
          <button class="product-btn">+ Carrito</button>
        </div>
      </div>
    </div>
  `).join("");
}

function categoryLabel(cat) {
  const labels = { consola: "Consola / Gaming", pc: "PC Gaming", juego: "Videojuego", accesorio: "Accesorio" };
  return labels[cat] || cat;
}

// ---- FILTER TABS ----
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.filter);
  });
});

// ---- MODAL ----
function openModal(plan) {
  document.getElementById("modalPlan").textContent = plan;
  document.getElementById("modalOverlay").classList.add("active");
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.getElementById("modalForm").addEventListener("submit", e => {
  e.preventDefault();
  closeModal();
  showToast("🎮 ¡Registro exitoso! Te contactaremos pronto.");
});

// ---- CONTACT FORM ----
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  showToast("📧 ¡Mensaje enviado! Te respondemos pronto.");
  e.target.reset();
});

// ---- NAVBAR SCROLL ----
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ---- HAMBURGER MENU ----
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// ---- SMOOTH SCROLL (nav links) ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      document.getElementById("navLinks").classList.remove("open");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".product-card, .console-feature, .pc-tier, .why-card, .plan-card, .game-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease";
  observer.observe(el);
});

// ---- INIT ----
renderProducts();
