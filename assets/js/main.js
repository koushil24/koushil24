(function(){
var P=D.profile,Z=document.createElement('div'),$=function(i){return document.getElementById(i)||Z},E=function(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML};
function L(u,t){return '<a href="'+u+'" target="_blank" rel="noopener">'+t+'</a>'}
$('h-name').innerHTML='Koushil <span>R Gowda</span>';
$('h-now').textContent=P.now;$('gl').innerHTML=P.glance.map(function(g){return '<a href="'+g[2]+'"><dt>'+E(g[0])+'</dt><dd>'+E(g[1])+'</dd></a>'}).join('');$('h-badge').textContent=P.badge;
$('h-resume').href=P.resume;$('r-v').href=P.resume;$('r-v').dataset.lb='assets/resume/resume-page.jpg';$('r-v').dataset.alt='Resume of Koushil R Gowda';$('r-v').dataset.tall='1';$('r-v').dataset.extra='<a class="btn pri" href="'+P.resume+'" download>Download PDF</a>';$('r-dl').href=P.resume;
$('h-soc').innerHTML=L(P.github,'GitHub')+L(P.linkedin,'LinkedIn')+'<a href="mailto:'+P.email+'">Email</a>';
$('a-photo').src=P.photo;
$('a-text').innerHTML=P.about.map(function(t){return '<p>'+E(t)+'</p>'}).join('')+'<blockquote>'+E(P.quote)+'</blockquote>'+
 '<p><b>Interests:</b> '+E(P.interests)+'</p><p>'+E(P.personal)+'</p>'+
 '<h3>Education</h3>'+P.education.map(function(e){return '<p><b>'+E(e[0])+'</b><br>'+E(e[1])+' | '+E(e[2])+'</p>'}).join('')+
 '<div class="vals">'+P.values.map(function(v){return '<div><b>'+v[0]+'</b><br>'+v[1]+'</div>'}).join('')+'</div>';
$('tl').innerHTML=D.journey.map(function(j){return '<li><b>'+E(j[0])+'</b><strong>'+E(j[1])+'</strong><br><span>'+E(j[2])+'</span></li>'}).join('');
$('sk').innerHTML=D.skills.map(function(s){return '<div class="sk"><b>'+E(s.group)+'</b><span>'+E(s.items)+'</span></div>'}).join('');
var X=D.experience,F=X[0];$('ex').innerHTML='<article class="feat"><p class="s">Current role | '+E(F.dates)+'</p><h3>'+E(F.title)+'</h3><p>'+E(F.org)+'</p><ul>'+F.points.map(function(t){return '<li>'+E(t)+'</li>'}).join('')+'</ul><ul class="chips"><li>Protection relay testing</li><li>Numerical protection relays</li><li>Electrical protection concepts</li></ul></article><details class="more"><summary>Earlier experience ('+(X.length-1)+' roles)</summary>'+X.slice(1).map(function(x){return '<div class="job"><h3>'+E(x.title)+'</h3><p>'+E(x.org)+' | '+E(x.dates)+'</p><ul>'+x.points.map(function(t){return '<li>'+E(t)+'</li>'}).join('')+'</ul></div>'}).join('')+'</details>';
$('pr').innerHTML=D.projects.groups.map(function(g,gi){return '<h3 class="gt">'+E(g.title)+'</h3><div class="grid">'+g.cards.map(function(c,i){var dev=g.title=='In development';return '<article class="card'+(gi==0&&i<2?' f':'')+'">'+(dev?'<span class="tag">IN DEVELOPMENT</span>':(g.title=='Live projects'?'<span class="tag live">LIVE</span>':''))+'<img class="pimg" loading="lazy" src="'+c.img+'" alt="'+E(c.alt)+'" width="800" height="500" style="object-position:'+c.pos+'" data-lb="'+c.img+'" data-alt="'+E(c.alt)+'" role="button" tabindex="0"><h3>'+E(c.name)+'</h3><p>'+E(c.text)+'</p>'+(c.did?'<p><b>My contribution:</b> '+E(c.did)+'</p>':'')+'<p class="s">'+E(c.stack)+(c.status&&!dev?' | '+E(c.status):'')+'</p>'+(c.url?'<p>'+L(c.url,'View '+E(c.name)+' &rarr;')+'</p>':'')+'</article>'}).join('')+'</div>'}).join('');
$('st').innerHTML=D.ai.stages.map(function(s,i){return '<li'+(i==D.ai.current?' class="on" aria-current="true"':'')+'>'+E(s)+'</li>'}).join('');
$('ai-u').innerHTML=D.ai.uses.map(function(u){return '<div class="card"><p>'+E(u)+'</p></div>'}).join('')+'<div class="card"><p class="s">AI tools currently used</p><p>'+E(D.ai.tools)+'</p></div>';
function chips(a){return a.map(function(t){return '<li>'+E(t)+'</li>'}).join('')}
$('ln').innerHTML=chips(D.learning.now);$('lx').innerHTML=chips(D.learning.next);
$('ce').innerHTML=D.certificates.map(function(g){return '<div class="cg"><h3>'+E(g.group)+'</h3><div class="cl">'+g.items.map(function(i){return '<div class="ci" role="button" tabindex="0" data-lb="assets/certificates/'+i.file+'" data-alt="'+E(i.title)+'"><img loading="lazy" src="assets/certificates/'+i.file+'" alt="Certificate thumbnail: '+E(i.title)+'" width="96" height="68"><div><b>'+E(i.title)+'</b><small>'+E(i.by)+'</small></div></div>'}).join('')+'</div></div>'}).join('');
document.querySelectorAll('.ci img').forEach(function(im){im.addEventListener('error',function(){im.style.display='none'})});
$('ac').innerHTML=['Co-author of two papers published in IJCRT (Smart Entry Counter, 2024; Eco Smart Plasma System, 2025).','Presented Smart Entry Counter at the National Conference NCSSPES, VVIET Mysuru.','Participant, AvEEEshkar 2024 and 2025 state-level project competitions.'].map(function(t){return '<li>'+E(t)+'</li>'}).join('');
$('c-t').textContent='Open to opportunities in protection, relay testing, commissioning and service engineering.';
$('c-b').innerHTML='<a class="btn pri" href="mailto:'+P.email+'">'+P.email+'</a>'+L(P.linkedin,'<span class="btn">LinkedIn</span>')+L(P.github,'<span class="btn">GitHub</span>');
$('ft').textContent='\u00a9 2026 Koushil R Gowda';
var r=document.documentElement,t;try{t=localStorage.getItem('theme')}catch(e){}
if(t)r.setAttribute('data-theme',t);
$('theme').onclick=function(){var n=r.getAttribute('data-theme')=='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
$('menu').onclick=function(){var o=$('links').classList.toggle('open');this.setAttribute('aria-expanded',o)};
$('links').addEventListener('click',function(e){if(e.target.tagName=='A'){$('links').classList.remove('open')}});
document.querySelectorAll('.tl li,.stages li').forEach(function(l,i){l.style.setProperty('--i',i%8)});
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('animateMotion').forEach(function(a){a.parentNode.removeChild(a)})}
var nav=$('links'),det=document.querySelector('#links details');
function closeAll(){nav.classList.remove('open');$('menu').setAttribute('aria-expanded','false');if(det)det.removeAttribute('open')}
document.addEventListener('click',function(e){if(!e.target.closest('.nav'))closeAll();else if(det&&det.open&&!det.contains(e.target))det.removeAttribute('open')});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();$('menu').focus()}});
if(det)det.addEventListener('click',function(e){if(e.target.tagName==='A')closeAll()});
var T0=performance.now(),LD=$('loader');function hideLoader(){if(!LD||LD.classList.contains('hide'))return;setTimeout(function(){LD.classList.add('hide');document.documentElement.classList.remove('lock')},Math.max(0,2400-(performance.now()-T0)))}
if(document.readyState=='complete')hideLoader();else addEventListener('load',hideLoader);setTimeout(hideLoader,4500);
var ho=document.querySelector('.hero .orb');if(ho&&window.matchMedia('(hover:hover)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.addEventListener('pointermove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;ho.style.transform='rotateY('+x*16+'deg) rotateX('+(-y*16)+'deg)'})}
var lb=document.createElement('div');lb.id='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Enlarged view');lb.innerHTML='<button class="lbx" aria-label="Close">&times;</button><div class="lbc"><img alt=""><div class="lbp"></div></div>';document.body.appendChild(lb);
var li=lb.querySelector('img'),lp=lb.querySelector('.lbp'),lx=lb.querySelector('.lbx'),lf;
function openLB(t){li.src=t.dataset.lb;li.alt=t.dataset.alt||'';lp.innerHTML=t.dataset.extra||'';lb.className=t.dataset.tall?'tall':'';lb.hidden=false;document.documentElement.classList.add('lbo');lf=t;lx.focus()}
function closeLB(){if(lb.hidden)return;lb.hidden=true;document.documentElement.classList.remove('lbo');li.removeAttribute('src');if(lf&&lf.focus)lf.focus()}
document.addEventListener('click',function(e){var t=e.target.closest('[data-lb]');if(t){e.preventDefault();openLB(t);return}if(e.target===lb||e.target.closest('.lbx'))closeLB()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLB();if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[role=button][data-lb]')){e.preventDefault();openLB(e.target)}});
var W=[].slice.call(document.querySelectorAll('main section .wrap')),rm=matchMedia('(prefers-reduced-motion: reduce)').matches,tk=0;
function dp(){tk=0;var vh=innerHeight;document.documentElement.style.setProperty('--sy',Math.round(scrollY*.3));W.forEach(function(e){var r=e.getBoundingClientRect();if(r.bottom<-300||r.top>vh+300)return;if(r.height>vh*1.25){e.style.transform='';e.style.opacity='';return}var c=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/vh)),a=Math.abs(c);e.style.transform='perspective(1100px) rotateX('+(c*6)+'deg) scale('+(1-a*.06)+')';e.style.opacity=1-a*.3})}
if(!rm){addEventListener('scroll',function(){if(!tk){tk=1;requestAnimationFrame(dp)}},{passive:true});addEventListener('resize',dp);dp()}
})();
