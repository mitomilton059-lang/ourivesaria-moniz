import { createClient } from '@supabase/supabase-js';
import './styles.css';

const SUPABASE_URL='https://xpiklwqgcehmnkdwavkd.supabase.co';
const SUPABASE_KEY='sb_publishable_vR7Aagbhw4o2lbs1X1re_w_tYXDCU79';
const supabase=createClient(SUPABASE_URL,SUPABASE_KEY);
const imgs=Object.values(import.meta.glob('/public/images/*.jpg',{eager:true,query:'?url',import:'default'})).map(x=>x.replace('/public',''));
const hero=imgs[0]||'';
const gallery=imgs.slice(1,7);

document.querySelector('#app').innerHTML=`
<header class="header canva-header"><a class="brand canva-brand" href="#top">OURIVESARIA MONIZ</a><nav><a href="#top">Início</a><a href="#colecoes">Coleções</a><a href="#manifesto">Sobre</a><a href="#lojas">Lojas</a><a href="#contacto">Contacto</a></nav><a class="phone" href="tel:+244942516456">942 516 456</a><button class="menu" aria-label="Menu">☰</button></header>
<div class="ambient"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="cursor-glow"></div><main id="top">
<section class="hero moniz-home">
  <div class="home-bg" style="background-image:url('${hero}')"></div>
  <div class="home-vignette"></div><div class="home-lines"></div><div class="home-topline"></div>
  <div class="home-content"><p class="home-kicker">OURIVESARIA</p><h1>OURIVESARIA<br><span>MONIZ</span></h1><p class="home-tagline">O brilho que valoriza o que é seu.</p>
  <div class="home-actions"><a class="home-btn" href="#lojas">Ver nossas lojas <b>✦</b></a><a class="home-btn" href="#vender">Comprar ouro <b>✦</b></a></div></div>
  <div class="hero-3d" data-hero3d><div class="hero-3d-shadow"></div><div class="hero-3d-image" style="background-image:url('${hero}')"></div><div class="hero-3d-reflection"></div><div class="hero-3d-ring ring-one"></div><div class="hero-3d-ring ring-two"></div></div>
  <div class="home-edge home-edge-left"></div><div class="home-edge home-edge-right"></div><div class="home-scroll">SCROLL <span>↓</span></div>
</section>
<section class="moniz-intro"><div class="intro-title">MATÉRIA, BRILHO, CONFIANÇA.</div><div class="intro-divider"></div><p>Transformamos metais preciosos em expressões de beleza atemporal. Cada peça nasce do encontro entre tradição, precisão e paixão.</p></section>
<section class="moniz-visual-strip" id="colecoes">${gallery.slice(0,5).map((im,i)=>`<figure><img src="${im}" alt="Ourivesaria Moniz — peça ${i+1}" loading="lazy"><span>0${i+1}</span></figure>`).join('')}</section>
<section class="moniz-stores-preview" id="lojas-preview">${[1,2,3,4,5].map(n=>`<a href="#lojas" class="mini-store"><span class="dot"></span><strong>LOJA 0${n}</strong><small>LUANDA</small></a>`).join('')}</section>
<section class="sell section" id="vender"><div class="section-kicker">01 / COMPRA DE OURO</div><div class="sell-grid"><div><h2>Tem ouro para<br><em>vender?</em></h2></div><div><p class="big-copy">Transforme o que já não usa em valor. Fale diretamente com a Ourivesaria Moniz e descubra como podemos ajudar.</p><a class="text-link" href="https://wa.me/244942516456" target="_blank">Falar pelo WhatsApp <span>↗</span></a></div></div></section>
<section class="jewelry-showcase section" id="joias"><div class="jewelry-head"><div><div class="section-kicker">02 / COLEÇÃO MONIZ</div><h2>Veja nossas<br><em>joias.</em></h2></div><div class="jewelry-copy"><p>Uma apresentação visual das peças e do universo da Ourivesaria Moniz, com destaque para fios, correntes e detalhes em ouro.</p><span>18K — 22K · SELEÇÃO VISUAL</span></div></div><div class="jewelry-stage">${gallery.slice(0,5).map((im,i)=>`<article class="jewel-card jewel-${i+1}" data-tilt><div class="jewel-image"><img src="${im}" alt="Joia Ourivesaria Moniz — seleção ${i+1}" loading="lazy"></div><div class="jewel-meta"><span>0${i+1}</span><strong>${["Fios de ouro","Correntes Moniz","Detalhe precioso","Coleção especial","Peça em destaque"][i]}</strong><small>18K — 22K</small></div></article>`).join("")}</div><div class="jewelry-marquee"><span>OURO</span><i>✦</i><span>BRILHO</span><i>✦</i><span>PRECISÃO</span><i>✦</i><span>MONIZ</span><i>✦</i><span>OURO</span></div></section>\n<section class="gallery section" id="galeria"><div class="section-head"><div><div class="section-kicker">02 / MONIZ</div><h2>Detalhes que<br><em>falam por si.</em></h2></div><p>Uma seleção das nossas peças e do universo Moniz.</p></div><div class="masonry">${gallery.map((im,i)=>`<figure class="tile tile-${i+1}" data-tilt><img src="${im}" alt="Peça e ambiente Ourivesaria Moniz" loading="lazy"/><span>0${i+1}</span></figure>`).join('')}</div></section>
<section class="stores section" id="lojas"><div class="section-kicker">03 / ONDE ENCONTRAR</div><div class="stores-title"><h2>5 lojas.<br><em>Uma só Moniz.</em></h2><p>Estamos em pontos estratégicos de Luanda para estar mais perto de si.</p></div><div id="stores-list" class="stores-list"></div></section>
<section class="manifesto section" id="manifesto"><div class="manifesto-card"><div class="metal"></div><div class="manifesto-text"><p class="eyebrow">OURIVESARIA MONIZ</p><h2>O seu ouro.<br><em>O seu valor.</em></h2><a class="btn btn-light" href="tel:+244942516456">Ligar 942 516 456 <span>↗</span></a></div></div></section>
<section class="contact section" id="contacto"><div class="section-kicker">04 / CONTACTO</div><div class="contact-grid"><div><h2>Vamos<br><em>conversar?</em></h2></div><div><p>Para informações sobre compra de ouro ou localização das nossas lojas:</p><a class="contact-number" href="tel:+244942516456">942 516 456</a><a class="text-link" href="https://wa.me/244942516456" target="_blank">Abrir WhatsApp <span>↗</span></a></div></div></section>
</main><footer><div class="brand">MONIZ<span>OURIVESARIA</span></div><p>Compra de ouro · Luanda, Angola</p><p>© ${new Date().getFullYear()} Ourivesaria Moniz</p></footer>`;

async function loadStores(){const {data,error}=await supabase.from('stores').select('*').order('sort_order');const list=document.querySelector('#stores-list');if(error){list.innerHTML='<p>Consulte-nos pelo 942 516 456 para localização das lojas.</p>';return}list.innerHTML=data.map((s,i)=>`<article class="store"><span>0${i+1}</span><div><h3>${s.name}</h3><p>${s.address}</p></div><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name+' '+s.address+', Luanda, Angola')}" target="_blank">Mapa ↗</a></article>`).join('')}
loadStores();


// Live cinematic motion
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}, {passive:true});
const ambient=document.querySelector('.ambient');
for(let i=0;i<24;i++){const p=document.createElement('i');p.style.setProperty('--x',Math.random()*100+'%');p.style.setProperty('--y',Math.random()*100+'%');p.style.setProperty('--d',(5+Math.random()*9)+'s');p.style.setProperty('--s',(1+Math.random()*3)+'px');ambient.appendChild(p)}
const heroEl=document.querySelector('.hero');
heroEl.addEventListener('pointermove',e=>{const r=heroEl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;heroEl.style.setProperty('--mx',x);heroEl.style.setProperty('--my',y)}, {passive:true});
heroEl.addEventListener('pointerleave',()=>{heroEl.style.setProperty('--mx',0);heroEl.style.setProperty('--my',0)});
const header=document.querySelector('.header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
document.querySelectorAll('[data-tilt]').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in') }),{threshold:.12});document.querySelectorAll('.section,.store,.tile').forEach(e=>io.observe(e));

const hero3d=document.querySelector('[data-hero3d]');
if(hero3d){
  hero3d.addEventListener('pointermove',e=>{const r=hero3d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero3d.style.setProperty('--rx',(-y*9)+'deg');hero3d.style.setProperty('--ry',(x*11)+'deg');hero3d.style.setProperty('--px',(x*18)+'px');hero3d.style.setProperty('--py',(y*14)+'px')},{passive:true});
  hero3d.addEventListener('pointerleave',()=>{hero3d.style.setProperty('--rx','0deg');hero3d.style.setProperty('--ry','0deg');hero3d.style.setProperty('--px','0px');hero3d.style.setProperty('--py','0px')});
}
