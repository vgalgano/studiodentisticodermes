:root{
  --bg:#f6f8fb;
  --card:#ffffff;
  --text:#1b1f24;
  --muted:#5a6470;
  --brand:#0b5ea8;
  --brand2:#0a3f6b;
  --line:#e6ebf2;
  --shadow: 0 10px 30px rgba(16,24,40,.08);
  --radius: 14px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--text);
  background:var(--bg);
  line-height:1.5;
}

a{color:inherit}
.container{max-width:1100px; margin:0 auto; padding:0 18px;}
.mt{margin-top:18px}
.center{text-align:center}
.muted{color:var(--muted)}
.w100{width:100%}

.topbar{
  background: #0f172a;
  color: #e5e7eb;
  font-size: 14px;
}
.topbar__inner{
  display:flex; align-items:center; justify-content:space-between;
  padding:10px 0;
  gap:12px;
}
.topbar__link{color:#e5e7eb; text-decoration:none}
.topbar__link:hover{opacity:.9}
.pill{
  padding:6px 10px; border:1px solid rgba(255,255,255,.12);
  border-radius:999px;
}
.dot{opacity:.6; margin:0 8px}

.header{
  position:sticky; top:0; z-index:50;
  background: rgba(246,248,251,.85);
  backdrop-filter: blur(10px);
  border-bottom:1px solid var(--line);
}
.header__inner{
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 0;
  gap:14px;
}

.brand{display:flex; gap:10px; align-items:center; text-decoration:none}
.brand__mark{
  width:40px; height:40px; border-radius:12px;
  display:grid; place-items:center;
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  color:white; font-weight:800;
  box-shadow: var(--shadow);
}
.brand__text strong{display:block; font-size:14px; letter-spacing:.2px}
.brand__text span{display:block; font-size:16px; font-weight:800}

.nav{display:flex; gap:18px; align-items:center}
.nav__link{
  text-decoration:none;
  color:var(--muted);
  font-weight:600;
  font-size:14px;
}
.nav__link:hover{color:var(--text)}

.actions{display:flex; align-items:center; gap:10px}
.lang{
  border:1px solid var(--line);
  background: var(--card);
  border-radius:999px;
  padding:10px 12px;
  font-weight:800;
  cursor:pointer;
}
.lang:hover{box-shadow: var(--shadow)}
.burger{
  display:none;
  border:1px solid var(--line);
  background: var(--card);
  border-radius: 10px;
  padding:10px 12px;
  font-weight:800;
  cursor:pointer;
}

.mobile{
  display:none;
  border-top:1px solid var(--line);
  background: var(--card);
}
.mobile__inner{
  padding:14px 0;
  display:grid;
  gap:10px;
}
.mobile__link{
  text-decoration:none;
  padding:10px 12px;
  border:1px solid var(--line);
  border-radius: 12px;
  font-weight:800;
  color:var(--muted);
}
.mobile__cta{display:grid; gap:10px; margin-top:6px}

.hero{
  padding:46px 0 30px;
  background:
    radial-gradient(800px 260px at 15% 0%, rgba(11,94,168,.18), transparent 55%),
    radial-gradient(900px 260px at 85% 5%, rgba(10,63,107,.16), transparent 55%),
    var(--bg);
}
.hero__inner{
  display:grid;
  grid-template-columns: 1.4fr .9fr;
  gap:22px;
  align-items:start;
}
h1{font-size:40px; line-height:1.1; margin:0 0 12px}
.lead{font-size:16px; color:var(--muted); max-width:62ch; margin:0 0 18px}

.hero__cta{display:flex; gap:10px; flex-wrap:wrap}
.note{
  margin-top:14px;
  display:flex; gap:10px; align-items:flex-start;
  padding:12px 12px;
  border:1px dashed rgba(11,94,168,.35);
  border-radius: var(--radius);
  background: rgba(11,94,168,.06);
}
.note__icon{font-size:18px}

.badges{
  display:grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap:10px;
  margin-top:16px;
}
.badge{
  border:1px solid var(--line);
  background: var(--card);
  border-radius: var(--radius);
  padding:12px;
  box-shadow: 0 8px 18px rgba(16,24,40,.04);
}
.badge__title{display:block; font-weight:900; font-size:14px}
.badge__text{display:block; color:var(--muted); font-size:13px; margin-top:2px}

.section{padding:42px 0;}
.section--alt{
  background: #fff;
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.section__head{margin-bottom:16px}
.section__sub{color:var(--muted); margin:6px 0 0}

.grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap:14px;
}

.card{
  background: var(--card);
  border:1px solid var(--line);
  border-radius: var(--radius);
  padding:16px;
  box-shadow: var(--shadow);
}
.card--wide{padding:20px}

.hero__card{
  position:relative;
  background: var(--card);
  border:1px solid var(--line);
  border-radius: 18px;
  padding:18px;
  box-shadow: var(--shadow);
}
.hero__card h2{margin:0 0 8px}
.hero__card h3{margin:0 0 8px}
.divider{height:1px; background:var(--line); margin:14px 0}

.phones{display:grid; gap:10px; margin-top:10px}
.phone{
  text-decoration:none;
  border:1px solid var(--line);
  border-radius: 14px;
  padding:12px;
  display:flex; justify-content:space-between; align-items:center;
}
.phone:hover{box-shadow: var(--shadow)}
.phone__label{color:var(--muted); font-weight:800; font-size:13px}
.phone__num{font-weight:1000; letter-spacing:.2px}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  border-radius: 12px;
  padding:12px 14px;
  font-weight:900;
  text-decoration:none;
  border:1px solid transparent;
  cursor:pointer;
  user-select:none;
}
.btn--primary{
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  color:white;
}
.btn--secondary{
  background: #0f172a;
  color:white;
}
.btn--ghost{
  background: transparent;
  border-color: var(--line);
  color: var(--text);
}
.btn:hover{transform: translateY(-1px)}
.btn:active{transform: translateY(0)}

.reviewbox{
  background: var(--card);
  border:1px solid var(--line);
  border-radius: 18px;
  padding:18px;
  box-shadow: var(--shadow);
}
.reviewbox__stars{
  font-size:20px;
  color:#f59e0b;
  letter-spacing:2px;
}
.reviewbox__text{margin:10px 0 14px; color:var(--muted)}
.reviewbox__actions{display:flex; gap:10px; flex-wrap:wrap}

.fineprint{
  margin-top:12px;
  font-size:12.5px;
  color:var(--muted);
}

.contact{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:14px;
}
.contact__cta{display:flex; gap:10px; flex-wrap:wrap; margin-top:12px}

.mapframe{
  width:100%;
  border-radius: 14px;
  overflow:hidden;
  border:1px solid var(--line);
  background:#e5e7eb;
  aspect-ratio: 16 / 10;
}
.mapframe iframe{
  width:100%;
  height:100%;
  border:0;
}

.footer{
  padding:24px 0 70px;
  background:#0f172a;
  color:#e5e7eb;
}
.footer__inner{
  display:flex; justify-content:space-between; gap:16px; align-items:flex-start;
  padding-bottom:10px;
}
.footer__links a{color:#e5e7eb; text-decoration:none}
.footer__links a:hover{opacity:.9}

.callbar{
  position:fixed;
  left:0; right:0; bottom:0;
  display:none;
  gap:10px;
  padding:10px;
  background: rgba(15,23,42,.92);
  backdrop-filter: blur(10px);
  border-top:1px solid rgba(255,255,255,.08);
  z-index: 60;
}
.callbar__btn{
  flex:1;
  text-align:center;
  text-decoration:none;
  font-weight:1000;
  padding:12px 10px;
  border-radius: 12px;
  background: #ffffff;
  color: #0f172a;
}
.callbar__btn--alt{
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  color:#fff;
}

/* Opening hours */
.hours { margin-top: 10px; }
.hours h4 { margin: 0 0 10px; color: var(--text); }
.hours__list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--card);
}
.hours__list li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--line);
  font-weight: 800;
}
.hours__list li:last-child { border-bottom: 0; }
.hours__list span:first-child { color: var(--muted); font-weight: 900; }

@media (max-width: 980px){
  .hero__inner{grid-template-columns: 1fr; }
  .badges{grid-template-columns: 1fr; }
  .grid{grid-template-columns: 1fr;}
  .contact{grid-template-columns: 1fr;}
  h1{font-size:34px}
  .nav{display:none}
  .burger{display:inline-flex}
  .callbar{display:flex}
}