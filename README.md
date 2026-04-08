<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GamerZone — Consolas · PC Gamer · Videojuegos</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#060610;
  --surface:#0d0d1f;
  --surface2:#13132b;
  --card:#111128;
  --cyan:#00f5ff;
  --magenta:#ff2d78;
  --green:#00ff88;
  --yellow:#ffd700;
  --text:#e8eaff;
  --muted:#6b6d8a;
  --border:rgba(0,245,255,0.15);
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  background:var(--bg);
  color:var(--text);
  font-family:'Rajdhani',sans-serif;
  overflow-x:hidden;
  cursor:none;
}

/* CUSTOM CURSOR */
.cursor{
  width:12px;height:12px;border-radius:50%;
  background:var(--cyan);
  position:fixed;z-index:9999;pointer-events:none;
  transform:translate(-50%,-50%);
  transition:transform .08s,background .2s;
  box-shadow:0 0 12px var(--cyan);
}
.cursor-ring{
  width:36px;height:36px;border-radius:50%;
  border:1px solid rgba(0,245,255,0.5);
  position:fixed;z-index:9998;pointer-events:none;
  transform:translate(-50%,-50%);
  transition:transform .18s ease,width .2s,height .2s,border-color .2s;
}

/* NOISE OVERLAY */
body::before{
  content:'';position:fixed;inset:0;z-index:1;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  opacity:0.4;
}

/* SCANLINES */
body::after{
  content:'';position:fixed;inset:0;z-index:1;pointer-events:none;
  background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,245,255,0.015) 2px,rgba(0,245,255,0.015) 4px);
}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:1rem 3.5rem;
  background:rgba(6,6,16,0.9);
  backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border);
}
.logo{
  font-family:'Orbitron',monospace;
  font-size:1.5rem;font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}
.logo .gz{color:var(--cyan);}
.logo .zone{color:var(--text);}
nav ul{list-style:none;display:flex;gap:2.5rem;}
nav ul a{
  color:var(--muted);text-decoration:none;
  font-size:.95rem;font-weight:600;letter-spacing:2px;
  text-transform:uppercase;
  transition:color .2s;
  position:relative;
}
nav ul a::after{
  content:'';position:absolute;bottom:-4px;left:0;right:0;height:1px;
  background:var(--cyan);transform:scaleX(0);transition:transform .2s;
}
nav ul a:hover{color:var(--cyan);}
nav ul a:hover::after{transform:scaleX(1);}
.nav-right{display:flex;align-items:center;gap:1rem;}
.cart-btn{
  background:transparent;border:1px solid var(--border);
  color:var(--text);padding:.5rem 1.2rem;border-radius:4px;
  font-family:'Rajdhani',sans-serif;font-size:.9rem;font-weight:600;
  letter-spacing:1px;cursor:none;
  transition:background .2s,border-color .2s;
  display:flex;align-items:center;gap:.5rem;
}
.cart-btn:hover{background:rgba(0,245,255,0.08);border-color:var(--cyan);}
.cart-count{
  background:var(--magenta);color:#fff;
  width:18px;height:18px;border-radius:50%;
  font-size:.7rem;display:flex;align-items:center;justify-content:center;
  font-weight:700;
}

/* HERO */
.hero{
  min-height:100vh;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;padding:8rem 2rem 4rem;
  position:relative;overflow:hidden;
}
.hero-grid-bg{
  position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(0,245,255,0.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(0,245,255,0.04) 1px,transparent 1px);
  background-size:80px 80px;
  animation:gridMove 20s linear infinite;
}
@keyframes gridMove{from{transform:translateY(0)}to{transform:translateY(80px)}}
.hero-glow{
  position:absolute;
  width:600px;height:600px;
  background:radial-gradient(circle,rgba(0,245,255,0.12) 0%,transparent 70%);
  top:50%;left:50%;transform:translate(-50%,-50%);
  pointer-events:none;
  animation:glowPulse 4s ease-in-out infinite;
}
.hero-glow2{
  position:absolute;
  width:400px;height:400px;
  background:radial-gradient(circle,rgba(255,45,120,0.1) 0%,transparent 70%);
  top:30%;left:70%;
  pointer-events:none;
}
@keyframes glowPulse{0%,100%{opacity:0.7;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}}

.hero-tag{
  display:inline-flex;align-items:center;gap:.6rem;
  border:1px solid rgba(0,245,255,0.3);
  border-radius:2px;padding:.35rem 1rem;
  font-size:.8rem;font-weight:600;letter-spacing:3px;color:var(--cyan);
  text-transform:uppercase;margin-bottom:2rem;
  position:relative;z-index:2;
  animation:fadeUp .5s ease both;
}
.hero-tag::before{content:'▶';font-size:.6rem;}

h1{
  font-family:'Orbitron',monospace;
  font-size:clamp(2.5rem,8vw,7rem);
  font-weight:900;
  line-height:.95;
  letter-spacing:-2px;
  position:relative;z-index:2;
  animation:fadeUp .5s .1s ease both;
  text-transform:uppercase;
}
h1 .line-cyan{
  color:var(--cyan);
  text-shadow:0 0 40px rgba(0,245,255,0.5),0 0 80px rgba(0,245,255,0.2);
}
h1 .line-mag{color:var(--magenta);}
.hero-sub{
  font-size:1.2rem;color:var(--muted);
  max-width:560px;margin:1.5rem auto 3rem;
  line-height:1.6;font-weight:400;
  position:relative;z-index:2;
  animation:fadeUp .5s .2s ease both;
}
.hero-btns{
  display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;
  position:relative;z-index:2;
  animation:fadeUp .5s .3s ease both;
}
.btn-cyber{
  background:var(--cyan);color:#000;
  padding:.9rem 2.5rem;font-family:'Orbitron',monospace;
  font-size:.85rem;font-weight:700;letter-spacing:2px;
  text-decoration:none;text-transform:uppercase;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:box-shadow .2s,transform .2s;
  cursor:none;
}
.btn-cyber:hover{box-shadow:0 0 30px rgba(0,245,255,0.6);transform:translateY(-2px);}
.btn-outline{
  border:1px solid rgba(0,245,255,0.4);color:var(--cyan);
  padding:.9rem 2.5rem;font-family:'Orbitron',monospace;
  font-size:.85rem;font-weight:700;letter-spacing:2px;
  text-decoration:none;text-transform:uppercase;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:background .2s;cursor:none;
}
.btn-outline:hover{background:rgba(0,245,255,0.08);}

/* MARQUEE */
.marquee-wrap{
  background:var(--cyan);padding:.6rem 0;
  overflow:hidden;white-space:nowrap;
  margin-top:0;
}
.marquee-inner{
  display:inline-block;
  animation:marquee 20s linear infinite;
}
.marquee-inner span{
  font-family:'Orbitron',monospace;font-size:.7rem;font-weight:700;
  letter-spacing:3px;text-transform:uppercase;color:#000;
  padding:0 2rem;
}
.marquee-inner span::before{content:'◆ ';}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* SECTIONS */
section{padding:6rem 3.5rem;position:relative;}
.section-label{
  font-family:'Orbitron',monospace;font-size:.7rem;font-weight:700;
  letter-spacing:4px;text-transform:uppercase;color:var(--cyan);
  margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem;
}
.section-label::before{content:'';width:30px;height:1px;background:var(--cyan);}
h2{
  font-family:'Orbitron',monospace;
  font-size:clamp(1.8rem,3.5vw,2.8rem);
  font-weight:900;text-transform:uppercase;
  margin-bottom:.75rem;letter-spacing:-1px;
}
.section-desc{color:var(--muted);font-size:1.05rem;max-width:500px;margin-bottom:3rem;line-height:1.6;}

/* CATEGORY TABS */
.tabs{
  display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:3rem;
}
.tab{
  background:transparent;border:1px solid var(--border);
  color:var(--muted);padding:.6rem 1.5rem;
  font-family:'Rajdhani',sans-serif;font-size:.9rem;font-weight:600;
  letter-spacing:2px;text-transform:uppercase;
  cursor:none;transition:all .2s;
  clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
}
.tab.active,.tab:hover{
  background:rgba(0,245,255,0.1);border-color:var(--cyan);color:var(--cyan);
}

/* PRODUCT GRID */
.products-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
  gap:1.5rem;
  max-width:1300px;margin:0 auto;
}
.product-card{
  background:var(--card);
  border:1px solid rgba(255,255,255,0.06);
  border-radius:4px;
  overflow:hidden;
  position:relative;
  transition:border-color .3s,transform .3s;
  cursor:none;
}
.product-card:hover{border-color:var(--cyan);transform:translateY(-6px);}
.product-card:hover .card-glow{opacity:1;}
.card-glow{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(circle at 50% 0%,rgba(0,245,255,0.07) 0%,transparent 60%);
  opacity:0;transition:opacity .3s;
}
.card-badge{
  position:absolute;top:12px;left:12px;z-index:2;
  font-family:'Orbitron',monospace;font-size:.65rem;font-weight:700;
  letter-spacing:2px;padding:.3rem .7rem;text-transform:uppercase;
  clip-path:polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%);
}
.badge-new{background:var(--green);color:#000;}
.badge-hot{background:var(--magenta);color:#fff;}
.badge-sale{background:var(--yellow);color:#000;}
.badge-stock{background:var(--surface2);color:var(--muted);border:1px solid var(--border);}

.card-img{
  width:100%;height:200px;
  display:flex;align-items:center;justify-content:center;
  font-size:5rem;
  background:var(--surface2);
  position:relative;overflow:hidden;
}
.card-img::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(180deg,transparent 40%,var(--card) 100%);
}

.card-body{padding:1.25rem;}
.card-category{
  font-size:.75rem;font-weight:600;letter-spacing:3px;
  text-transform:uppercase;color:var(--muted);margin-bottom:.4rem;
}
.card-title{
  font-family:'Orbitron',monospace;font-size:1rem;font-weight:700;
  margin-bottom:.4rem;line-height:1.3;letter-spacing:.5px;
}
.card-desc{font-size:.88rem;color:var(--muted);line-height:1.5;margin-bottom:1rem;}
.card-specs{
  display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem;
}
.spec-tag{
  background:rgba(0,245,255,0.06);border:1px solid rgba(0,245,255,0.15);
  color:var(--cyan);font-size:.7rem;font-weight:600;
  padding:.2rem .6rem;border-radius:2px;letter-spacing:1px;
}
.card-footer{
  display:flex;align-items:center;justify-content:space-between;
  border-top:1px solid rgba(255,255,255,0.06);padding-top:1rem;
}
.price-wrap{}
.price-original{font-size:.85rem;color:var(--muted);text-decoration:line-through;display:block;}
.price{font-family:'Orbitron',monospace;font-size:1.3rem;font-weight:900;color:var(--cyan);}
.add-btn{
  background:rgba(0,245,255,0.1);border:1px solid rgba(0,245,255,0.3);
  color:var(--cyan);padding:.55rem 1rem;
  font-family:'Rajdhani',sans-serif;font-size:.85rem;font-weight:700;
  letter-spacing:1px;cursor:none;
  clip-path:polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%);
  transition:background .2s,box-shadow .2s;
}
.add-btn:hover{background:rgba(0,245,255,0.2);box-shadow:0 0 15px rgba(0,245,255,0.3);}

/* FEATURED BANNER */
.featured-banner{
  background:var(--surface);
  border:1px solid rgba(0,245,255,0.15);
  border-radius:4px;padding:3rem;
  display:grid;grid-template-columns:1fr auto;
  gap:2rem;align-items:center;
  max-width:1300px;margin:0 auto 3rem;
  position:relative;overflow:hidden;
}
.featured-banner::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:4px;
  background:linear-gradient(180deg,var(--cyan),var(--magenta));
}
.featured-banner::after{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at 80% 50%,rgba(0,245,255,0.05) 0%,transparent 60%);
}
.featured-label{
  font-family:'Orbitron',monospace;font-size:.65rem;letter-spacing:3px;
  color:var(--magenta);text-transform:uppercase;margin-bottom:.75rem;
}
.featured-title{
  font-family:'Orbitron',monospace;font-size:clamp(1.5rem,3vw,2.2rem);
  font-weight:900;text-transform:uppercase;letter-spacing:-1px;
  margin-bottom:.75rem;position:relative;z-index:1;
}
.featured-desc{color:var(--muted);line-height:1.6;max-width:500px;margin-bottom:1.5rem;position:relative;z-index:1;}
.featured-price-wrap{display:flex;align-items:baseline;gap:.75rem;margin-bottom:1.5rem;position:relative;z-index:1;}
.featured-price{font-family:'Orbitron',monospace;font-size:2.5rem;font-weight:900;color:var(--cyan);}
.featured-old{font-size:1rem;color:var(--muted);text-decoration:line-through;}
.featured-img{font-size:8rem;position:relative;z-index:1;}

/* STATS BAR */
.stats-bar{
  background:var(--surface);
  border-top:1px solid var(--border);border-bottom:1px solid var(--border);
  padding:3rem;
}
.stats-grid{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:2rem;max-width:1000px;margin:0 auto;text-align:center;
}
.stat-num{
  font-family:'Orbitron',monospace;font-size:2.5rem;font-weight:900;
  color:var(--cyan);display:block;
  text-shadow:0 0 20px rgba(0,245,255,0.4);
}
.stat-label{font-size:.85rem;color:var(--muted);font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-top:.25rem;}

/* BRANDS */
.brands-section{padding:3rem 3.5rem;border-bottom:1px solid var(--border);}
.brands-grid{
  display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;
  max-width:1100px;margin:1.5rem auto 0;
}
.brand-chip{
  background:var(--card);border:1px solid var(--border);
  padding:.7rem 2rem;font-family:'Orbitron',monospace;
  font-size:.8rem;font-weight:700;letter-spacing:2px;
  color:var(--muted);text-transform:uppercase;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:color .2s,border-color .2s;cursor:none;
}
.brand-chip:hover{color:var(--text);border-color:rgba(255,255,255,0.2);}

/* NEWSLETTER */
.newsletter{
  background:var(--surface);
  border-top:1px solid var(--border);
  padding:5rem 3.5rem;text-align:center;
}
.newsletter h2{margin-bottom:.75rem;}
.newsletter p{color:var(--muted);max-width:450px;margin:0 auto 2rem;}
.newsletter-form{
  display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap;
}
.newsletter-form input{
  background:var(--card);border:1px solid var(--border);
  color:var(--text);padding:.85rem 1.5rem;
  font-family:'Rajdhani',sans-serif;font-size:1rem;font-weight:500;
  width:300px;outline:none;
  clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
  transition:border-color .2s;
}
.newsletter-form input:focus{border-color:var(--cyan);}
.newsletter-form input::placeholder{color:var(--muted);}

/* FOOTER */
footer{
  padding:3rem 3.5rem;
  border-top:1px solid var(--border);
  display:grid;grid-template-columns:1fr auto;
  gap:2rem;align-items:start;
}
.footer-logo{font-family:'Orbitron',monospace;font-size:1.8rem;font-weight:900;letter-spacing:3px;margin-bottom:.5rem;}
.footer-tagline{color:var(--muted);font-size:.9rem;}
.footer-right{text-align:right;}
.footer-right p{color:var(--muted);font-size:.85rem;margin-bottom:.3rem;}

/* CART TOAST */
.toast{
  position:fixed;bottom:2rem;right:2rem;z-index:200;
  background:var(--surface);border:1px solid var(--cyan);
  padding:1rem 1.5rem;border-radius:4px;
  font-size:.9rem;font-weight:600;letter-spacing:1px;
  transform:translateX(200%);transition:transform .3s ease;
  clip-path:polygon(8px 0%,100% 0%,100% 100%,0% 100%,0% 8px);
}
.toast.show{transform:translateX(0);}
.toast span{color:var(--cyan);}

/* ANIMATIONS */
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}

/* FILTER BAR */
.filter-bar{
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:1rem;margin-bottom:2rem;
  padding-bottom:1.5rem;border-bottom:1px solid var(--border);
}
.filter-left{display:flex;gap:.75rem;flex-wrap:wrap;}
.filter-label{color:var(--muted);font-size:.85rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;align-self:center;}
select.filter-select{
  background:var(--card);border:1px solid var(--border);
  color:var(--text);padding:.5rem 1rem;
  font-family:'Rajdhani',sans-serif;font-size:.9rem;font-weight:600;
  cursor:none;outline:none;
  transition:border-color .2s;
}
select.filter-select:hover{border-color:var(--cyan);}
.results-count{color:var(--muted);font-size:.85rem;font-weight:600;letter-spacing:1px;}
.results-count strong{color:var(--cyan);}
</style>
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<nav>
  <div class="logo"><span class="gz">GAMER</span><span class="zone">ZONE</span></div>
  <ul>
    <li><a href="#consolas">Consolas</a></li>
    <li><a href="#pc">PC Gamer</a></li>
    <li><a href="#juegos">Juegos</a></li>
    <li><a href="#accesorios">Accesorios</a></li>
  </ul>
  <div class="nav-right">
    <button class="cart-btn" onclick="toggleCart()">
      🛒 Carrito <span class="cart-count" id="cartCount">0</span>
    </button>
  </div>
</nav>

<section class="hero">
  <div class="hero-grid-bg"></div>
  <div class="hero-glow"></div>
  <div class="hero-glow2"></div>
  <div class="hero-tag">Nueva temporada 2025</div>
  <h1>
    <span class="line-cyan">LEVEL</span><br>
    <span class="line-mag">UP</span><br>
    <span>YOUR GAME</span>
  </h1>
  <p class="hero-sub">Consolas, PC Gamer y videojuegos al mejor precio. Envíos a todo Colombia en 24h.</p>
  <div class="hero-btns">
    <a href="#consolas" class="btn-cyber">Ver catálogo</a>
    <a href="#ofertas" class="btn-outline">Ofertas del día</a>
  </div>
</section>

<div class="marquee-wrap">
  <div class="marquee-inner">
    <span>PlayStation 5</span><span>Xbox Series X</span><span>Nintendo Switch</span>
    <span>PC Gamer RTX 4090</span><span>Call of Duty</span><span>FIFA 25</span>
    <span>Spider-Man 2</span><span>Cyberpunk 2077</span><span>GTA VI</span>
    <span>Steam Deck</span><span>Elden Ring</span><span>Forza Horizon 5</span>
    <span>PlayStation 5</span><span>Xbox Series X</span><span>Nintendo Switch</span>
    <span>PC Gamer RTX 4090</span><span>Call of Duty</span><span>FIFA 25</span>
    <span>Spider-Man 2</span><span>Cyberpunk 2077</span><span>GTA VI</span>
    <span>Steam Deck</span><span>Elden Ring</span><span>Forza Horizon 5</span>
  </div>
</div>

<div class="stats-bar">
  <div class="stats-grid">
    <div><span class="stat-num">500+</span><div class="stat-label">Títulos disponibles</div></div>
    <div><span class="stat-num">24h</span><div class="stat-label">Envío express</div></div>
    <div><span class="stat-num">50k+</span><div class="stat-label">Clientes felices</div></div>
    <div><span class="stat-num">100%</span><div class="stat-label">Garantía oficial</div></div>
  </div>
</div>

<section id="consolas">
  <div class="section-label">Categoría 01</div>
  <h2>Consolas</h2>
  <p class="section-desc">Las últimas generaciones de PlayStation, Xbox y Nintendo con garantía oficial.</p>

  <div class="featured-banner">
    <div>
      <div class="featured-label">⚡ Destacado del mes</div>
      <div class="featured-title">PlayStation 5<br>Pro Edition</div>
      <p class="featured-desc">La consola más potente de Sony con resolución 8K, ray tracing avanzado y SSD de 2TB. La experiencia gaming definitiva.</p>
      <div class="featured-price-wrap">
        <span class="featured-price">$4.299.000</span>
        <span class="featured-old">$4.899.000</span>
      </div>
      <button class="btn-cyber" onclick="addToCart('PS5 Pro')">Agregar al carrito</button>
    </div>
    <div class="featured-img">🎮</div>
  </div>

  <div class="products-grid">
    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-hot">HOT</div>
      <div class="card-img">🎮</div>
      <div class="card-body">
        <div class="card-category">Sony · Consola</div>
        <div class="card-title">PlayStation 5 Slim</div>
        <div class="card-desc">Consola next-gen más compacta, 1TB SSD, soporte 4K 120fps.</div>
        <div class="card-specs">
          <span class="spec-tag">4K 120fps</span>
          <span class="spec-tag">1TB SSD</span>
          <span class="spec-tag">Ray Tracing</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$3.200.000</span>
            <span class="price">$2.899.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('PS5 Slim')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-new">NEW</div>
      <div class="card-img">🕹️</div>
      <div class="card-body">
        <div class="card-category">Microsoft · Consola</div>
        <div class="card-title">Xbox Series X</div>
        <div class="card-desc">Potencia total: 12 teraflops, 1TB NVMe SSD, Game Pass compatible.</div>
        <div class="card-specs">
          <span class="spec-tag">12 TFLOPS</span>
          <span class="spec-tag">Game Pass</span>
          <span class="spec-tag">Quick Resume</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price">$2.999.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Xbox Series X')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-sale">-20%</div>
      <div class="card-img">🎯</div>
      <div class="card-body">
        <div class="card-category">Nintendo · Consola</div>
        <div class="card-title">Nintendo Switch OLED</div>
        <div class="card-desc">Pantalla OLED de 7", modo portátil o TV, 64GB internos.</div>
        <div class="card-specs">
          <span class="spec-tag">OLED 7"</span>
          <span class="spec-tag">Portátil</span>
          <span class="spec-tag">64GB</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$1.499.000</span>
            <span class="price">$1.199.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Switch OLED')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-img">🖥️</div>
      <div class="card-body">
        <div class="card-category">Valve · Handheld</div>
        <div class="card-title">Steam Deck OLED</div>
        <div class="card-desc">PC portátil para gaming, toda tu biblioteca de Steam en tus manos.</div>
        <div class="card-specs">
          <span class="spec-tag">AMD Zen 2</span>
          <span class="spec-tag">OLED HDR</span>
          <span class="spec-tag">512GB</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price">$2.499.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Steam Deck OLED')">+ Carrito</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="pc" style="background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
  <div class="section-label">Categoría 02</div>
  <h2>PC Gamer</h2>
  <p class="section-desc">Equipos ensamblados con las mejores especificaciones para máximo rendimiento.</p>

  <div class="filter-bar">
    <div class="filter-left">
      <span class="filter-label">Filtrar:</span>
      <select class="filter-select"><option>Todos los rangos</option><option>Gama alta</option><option>Gama media</option><option>Gama entrada</option></select>
      <select class="filter-select"><option>Precio: todos</option><option>Menos de $3M</option><option>$3M - $6M</option><option>Más de $6M</option></select>
    </div>
    <span class="results-count">Mostrando <strong>4</strong> productos</span>
  </div>

  <div class="products-grid">
    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-hot">TOP</div>
      <div class="card-img">💻</div>
      <div class="card-body">
        <div class="card-category">PC Gamer · Gama Alta</div>
        <div class="card-title">Titan X Pro RTX 4090</div>
        <div class="card-desc">La bestia definitiva: RTX 4090, i9-13900K, 64GB DDR5, 2TB NVMe.</div>
        <div class="card-specs">
          <span class="spec-tag">RTX 4090</span>
          <span class="spec-tag">i9-13900K</span>
          <span class="spec-tag">64GB DDR5</span>
          <span class="spec-tag">240Hz</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price">$18.900.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Titan X Pro')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-new">NEW</div>
      <div class="card-img">🖥️</div>
      <div class="card-body">
        <div class="card-category">PC Gamer · Gama Alta</div>
        <div class="card-title">Nexus RTX 4070 Ti</div>
        <div class="card-desc">Rendimiento brutal en 1440p y 4K. RTX 4070 Ti, Ryzen 7 7800X3D, 32GB.</div>
        <div class="card-specs">
          <span class="spec-tag">RTX 4070 Ti</span>
          <span class="spec-tag">Ryzen 7</span>
          <span class="spec-tag">32GB DDR5</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$9.500.000</span>
            <span class="price">$8.499.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Nexus RTX 4070 Ti')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-sale">-15%</div>
      <div class="card-img">⚡</div>
      <div class="card-body">
        <div class="card-category">PC Gamer · Gama Media</div>
        <div class="card-title">Storm RTX 4060</div>
        <div class="card-desc">El punto dulce: RTX 4060, Ryzen 5 7600X, 16GB DDR5, 1TB NVMe.</div>
        <div class="card-specs">
          <span class="spec-tag">RTX 4060</span>
          <span class="spec-tag">Ryzen 5</span>
          <span class="spec-tag">16GB DDR5</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$4.500.000</span>
            <span class="price">$3.799.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Storm RTX 4060')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-img">🔥</div>
      <div class="card-body">
        <div class="card-category">Laptop · Gamer</div>
        <div class="card-title">Viper Laptop RTX 4070</div>
        <div class="card-desc">Gaming portátil sin compromisos. Pantalla 165Hz QHD, teclado RGB.</div>
        <div class="card-specs">
          <span class="spec-tag">RTX 4070</span>
          <span class="spec-tag">165Hz QHD</span>
          <span class="spec-tag">16GB DDR5</span>
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price">$7.299.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Viper Laptop')">+ Carrito</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="juegos">
  <div class="section-label">Categoría 03</div>
  <h2>Videojuegos</h2>
  <p class="section-desc">Los títulos más esperados del año para todas las plataformas.</p>

  <div class="tabs">
    <button class="tab active" onclick="setTab(this,'all')">Todos</button>
    <button class="tab" onclick="setTab(this,'ps5')">PS5</button>
    <button class="tab" onclick="setTab(this,'xbox')">Xbox</button>
    <button class="tab" onclick="setTab(this,'switch')">Switch</button>
    <button class="tab" onclick="setTab(this,'pc')">PC</button>
  </div>

  <div class="products-grid">
    <div class="product-card" data-plat="ps5">
      <div class="card-glow"></div>
      <div class="card-badge badge-new">NEW</div>
      <div class="card-img" style="background:linear-gradient(135deg,#1a1a3e,#2d1b69);">🕷️</div>
      <div class="card-body">
        <div class="card-category">PS5 · Acción / Aventura</div>
        <div class="card-title">Marvel's Spider-Man 2</div>
        <div class="card-desc">Peter Parker y Miles Morales juntos en el mejor Spider-Man de la historia.</div>
        <div class="card-specs"><span class="spec-tag">4K 60fps</span><span class="spec-tag">DualSense</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$299.000</span></div>
          <button class="add-btn" onclick="addToCart('Spider-Man 2')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card" data-plat="ps5 xbox pc">
      <div class="card-glow"></div>
      <div class="card-badge badge-hot">HOT</div>
      <div class="card-img" style="background:linear-gradient(135deg,#1a0a0a,#4a1a00);">⚔️</div>
      <div class="card-body">
        <div class="card-category">Multi · RPG</div>
        <div class="card-title">Elden Ring: Shadow of the Erdtree</div>
        <div class="card-desc">La expansión más esperada del RPG del año. Nuevo mapa, jefes épicos.</div>
        <div class="card-specs"><span class="spec-tag">PS5</span><span class="spec-tag">Xbox</span><span class="spec-tag">PC</span></div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$180.000</span>
            <span class="price">$149.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Elden Ring DLC')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card" data-plat="ps5 xbox pc">
      <div class="card-glow"></div>
      <div class="card-badge badge-sale">-30%</div>
      <div class="card-img" style="background:linear-gradient(135deg,#0a1a0a,#0a3a1a);">🌿</div>
      <div class="card-body">
        <div class="card-category">Multi · RPG Abierto</div>
        <div class="card-title">Cyberpunk 2077: Ultimate</div>
        <div class="card-desc">Incluye Phantom Liberty. El futuro distópico definitivo en 2077.</div>
        <div class="card-specs"><span class="spec-tag">Ray Tracing</span><span class="spec-tag">DLSS 3</span></div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$250.000</span>
            <span class="price">$175.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('Cyberpunk 2077')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card" data-plat="xbox pc">
      <div class="card-glow"></div>
      <div class="card-img" style="background:linear-gradient(135deg,#0a0a1a,#001a3a);">🏎️</div>
      <div class="card-body">
        <div class="card-category">Xbox / PC · Carreras</div>
        <div class="card-title">Forza Horizon 5</div>
        <div class="card-desc">Mundo abierto en México, 500+ autos, clima dinámico. Carreras sin límites.</div>
        <div class="card-specs"><span class="spec-tag">4K 60fps</span><span class="spec-tag">500+ Autos</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$199.000</span></div>
          <button class="add-btn" onclick="addToCart('Forza Horizon 5')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card" data-plat="switch">
      <div class="card-glow"></div>
      <div class="card-badge badge-new">NEW</div>
      <div class="card-img" style="background:linear-gradient(135deg,#1a1000,#3a2800);">🌟</div>
      <div class="card-body">
        <div class="card-category">Switch · Aventura</div>
        <div class="card-title">The Legend of Zelda: TOTK</div>
        <div class="card-desc">Tears of the Kingdom. Hyrule vertical, ultrahand y aventura infinita.</div>
        <div class="card-specs"><span class="spec-tag">Switch</span><span class="spec-tag">Switch OLED</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$279.000</span></div>
          <button class="add-btn" onclick="addToCart('Zelda TOTK')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card" data-plat="ps5 xbox pc">
      <div class="card-glow"></div>
      <div class="card-badge badge-hot">HOT</div>
      <div class="card-img" style="background:linear-gradient(135deg,#0a0000,#2a0000);">💀</div>
      <div class="card-body">
        <div class="card-category">Multi · FPS</div>
        <div class="card-title">Call of Duty: Black Ops 6</div>
        <div class="card-desc">Campaña épica, multijugador renovado y el Zombies más intenso.</div>
        <div class="card-specs"><span class="spec-tag">120fps</span><span class="spec-tag">Crossplay</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$319.000</span></div>
          <button class="add-btn" onclick="addToCart('CoD Black Ops 6')">+ Carrito</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="accesorios" style="background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
  <div class="section-label">Categoría 04</div>
  <h2>Accesorios Gaming</h2>
  <p class="section-desc">Periféricos y gadgets para llevar tu setup al siguiente nivel.</p>
  <div class="products-grid">
    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-img">🎧</div>
      <div class="card-body">
        <div class="card-category">Audio · Headset</div>
        <div class="card-title">SteelSeries Arctis Nova Pro</div>
        <div class="card-desc">Audio Hi-Fi, cancelación activa de ruido, sonar espacial 360°.</div>
        <div class="card-specs"><span class="spec-tag">Hi-Fi</span><span class="spec-tag">ANC</span><span class="spec-tag">360°</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$899.000</span></div>
          <button class="add-btn" onclick="addToCart('Arctis Nova Pro')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-sale">-25%</div>
      <div class="card-img">⌨️</div>
      <div class="card-body">
        <div class="card-category">Periférico · Teclado</div>
        <div class="card-title">Razer BlackWidow V4 Pro</div>
        <div class="card-desc">Mecánico inalámbrico, switches Green, RGB Chroma por tecla.</div>
        <div class="card-specs"><span class="spec-tag">Mecánico</span><span class="spec-tag">RGB</span><span class="spec-tag">Wireless</span></div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="price-original">$650.000</span>
            <span class="price">$487.000</span>
          </div>
          <button class="add-btn" onclick="addToCart('BlackWidow V4')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-img">🖱️</div>
      <div class="card-body">
        <div class="card-category">Periférico · Mouse</div>
        <div class="card-title">Logitech G Pro X Superlight 2</div>
        <div class="card-desc">El mouse más ligero: 60g, sensor HERO 2, 32.000 DPI.</div>
        <div class="card-specs"><span class="spec-tag">60g</span><span class="spec-tag">32K DPI</span><span class="spec-tag">Wireless</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$549.000</span></div>
          <button class="add-btn" onclick="addToCart('G Pro X Superlight')">+ Carrito</button>
        </div>
      </div>
    </div>

    <div class="product-card">
      <div class="card-glow"></div>
      <div class="card-badge badge-new">NEW</div>
      <div class="card-img">🖥️</div>
      <div class="card-body">
        <div class="card-category">Monitor · Gaming</div>
        <div class="card-title">LG UltraGear 27" QHD 240Hz</div>
        <div class="card-desc">Panel IPS Nano, 1ms GTG, G-Sync compatible, HDR 600.</div>
        <div class="card-specs"><span class="spec-tag">QHD 240Hz</span><span class="spec-tag">IPS 1ms</span><span class="spec-tag">HDR600</span></div>
        <div class="card-footer">
          <div class="price-wrap"><span class="price">$1.899.000</span></div>
          <button class="add-btn" onclick="addToCart('LG UltraGear 27')">+ Carrito</button>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="brands-section">
  <div class="section-label" style="justify-content:center;">Marcas oficiales</div>
  <div class="brands-grid">
    <div class="brand-chip">Sony</div>
    <div class="brand-chip">Microsoft</div>
    <div class="brand-chip">Nintendo</div>
    <div class="brand-chip">NVIDIA</div>
    <div class="brand-chip">AMD</div>
    <div class="brand-chip">Razer</div>
    <div class="brand-chip">Logitech</div>
    <div class="brand-chip">SteelSeries</div>
    <div class="brand-chip">ASUS ROG</div>
    <div class="brand-chip">MSI</div>
    <div class="brand-chip">Corsair</div>
    <div class="brand-chip">HyperX</div>
  </div>
</div>

<div class="newsletter">
  <div class="section-label" style="justify-content:center;">Mantente al día</div>
  <h2>Ofertas exclusivas para gamers</h2>
  <p>Suscríbete y recibe alertas de precios, lanzamientos y descuentos antes que nadie.</p>
  <div class="newsletter-form">
    <input type="email" placeholder="tu@correo.com" id="emailInput">
    <button class="btn-cyber" onclick="subscribeNewsletter()">Suscribirse</button>
  </div>
</div>

<footer>
  <div>
    <div class="footer-logo"><span style="color:var(--cyan)">GAMER</span>ZONE</div>
    <div class="footer-tagline">Tu tienda gamer de confianza en Colombia.</div>
    <div style="margin-top:1rem;display:flex;gap:1rem;flex-wrap:wrap;">
      <span style="color:var(--muted);font-size:.8rem;">✓ Garantía oficial</span>
      <span style="color:var(--muted);font-size:.8rem;">✓ Envío 24h</span>
      <span style="color:var(--muted);font-size:.8rem;">✓ Pagos seguros</span>
    </div>
  </div>
  <div class="footer-right">
    <p>© 2025 GamerZone</p>
    <p>Desarrollado con Claude (Anthropic)</p>
    <p style="margin-top:.5rem;color:var(--cyan);font-size:.8rem;">Fabio Andrey Ramírez Luna</p>
    <p style="color:var(--cyan);font-size:.8rem;">Primer Semestre</p>
  </div>
</footer>

<div class="toast" id="toast">✓ <span id="toastMsg"></span> agregado al carrito</div>

<script>
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cursor.style.left=mx+'px';cursor.style.top=my+'px';
});
function animRing(){
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('button,a,.product-card,.tab,.brand-chip').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    cursor.style.transform='translate(-50%,-50%) scale(2)';
    cursor.style.background='var(--magenta)';
    ring.style.width='56px';ring.style.height='56px';
    ring.style.borderColor='rgba(255,45,120,0.5)';
  });
  el.addEventListener('mouseleave',()=>{
    cursor.style.transform='translate(-50%,-50%) scale(1)';
    cursor.style.background='var(--cyan)';
    ring.style.width='36px';ring.style.height='36px';
    ring.style.borderColor='rgba(0,245,255,0.5)';
  });
});

let cartItems=0;
function addToCart(name){
  cartItems++;
  document.getElementById('cartCount').textContent=cartItems;
  document.getElementById('toastMsg').textContent=name;
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}
function toggleCart(){
  alert(`🛒 Tienes ${cartItems} producto(s) en el carrito.\n\nFuncionalidad de checkout próximamente.`);
}

function setTab(el, plat){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.product-card[data-plat]').forEach(card=>{
    if(plat==='all'||card.dataset.plat.includes(plat)){
      card.style.display='block';
    } else {
      card.style.display='none';
    }
  });
}

function subscribeNewsletter(){
  const v=document.getElementById('emailInput').value;
  if(v&&v.includes('@')){
    document.getElementById('toastMsg').textContent='Suscripcion exitosa!';
    const t=document.getElementById('toast');
    t.classList.add('show');
    document.getElementById('emailInput').value='';
    setTimeout(()=>t.classList.remove('show'),2500);
  }
}
</script>
</body>
</html>
