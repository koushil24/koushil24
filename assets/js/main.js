(function(){
var P=D.profile,$=function(i){return document.getElementById(i)},E=function(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML};
function L(u,t){return '<a href="'+u+'" target="_blank" rel="noopener">'+t+'</a>'}
$('h-name').innerHTML='Koushil <span>R Gowda</span>';
$('h-role').textContent=P.role+' | '+P.company;$('h-tag').textContent=P.tagline;$('h-badge').textContent=P.badge;
$('h-resume').href=P.resume;$('r-dl').href=P.resume;
$('h-soc').innerHTML=L(P.github,'GitHub')+L(P.linkedin,'LinkedIn')+'<a href="mailto:'+P.email+'">Email</a>';
$('a-photo').src=P.photo;
$('a-text').innerHTML=P.about.map(function(t){return '<p>'+E(t)+'</p>'}).join('')+'<blockquote>'+E(P.quote)+'</blockquote>'+
 '<p><b>Interests:</b> '+E(P.interests)+'</p><p>'+E(P.personal)+'</p>'+
 '<h3>Education</h3>'+P.education.map(function(e){return '<p><b>'+E(e[0])+'</b><br>'+E(e[1])+' | '+E(e[2])+'</p>'}).join('')+
 '<div class="vals">'+P.values.map(function(v){return '<div><b>'+v[0]+'</b><br>'+v[1]+'</div>'}).join('')+'</div>';
$('tl').innerHTML=D.journey.map(function(j){return '<li><b>'+E(j[0])+'</b><strong>'+E(j[1])+'</strong><br><span>'+E(j[2])+'</span></li>'}).join('');
$('sk').innerHTML=D.skills.map(function(s){return '<div class="sk"><b>'+E(s.group)+'</b><span>'+E(s.items)+'</span></div>'}).join('');
$('ex').innerHTML=D.experience.map(function(x){return '<div class="job"><h3>'+E(x.title)+'</h3><p>'+E(x.org)+' | '+E(x.dates)+'</p><ul>'+x.points.map(function(t){return '<li>'+E(t)+'</li>'}).join('')+'</ul></div>'}).join('');
$('pr').innerHTML=D.projects.cards.map(function(c){return '<article class="card"><h3>'+E(c.name)+'</h3><p>'+E(c.text)+'</p><p class="s">'+E(c.stack)+(c.status?' | '+E(c.status):'')+'</p>'+(c.url?'<p>'+L(c.url,'View project &rarr;')+'</p>':'')+'</article>'}).join('');
$('soon').textContent='Coming soon: '+D.projects.soon.join(', ');
$('st').innerHTML=D.ai.stages.map(function(s,i){return '<li'+(i==D.ai.current?' class="on" aria-current="true"':'')+'>'+E(s)+'</li>'}).join('');
$('ai-u').innerHTML='<li><b>Tools:</b> '+E(D.ai.tools)+'</li>'+D.ai.uses.map(function(u){return '<li>'+E(u)+'</li>'}).join('');
function chips(a){return a.map(function(t){return '<li>'+E(t)+'</li>'}).join('')}
$('ln').innerHTML=chips(D.learning.now);$('lx').innerHTML=chips(D.learning.next);
$('ce').innerHTML=D.certificates.map(function(g){return '<div class="cg"><h3>'+E(g.group)+'</h3><div class="cl">'+g.items.map(function(i){return '<a href="assets/certificates/'+i.file+'" target="_blank" rel="noopener">'+E(i.title)+'<small>'+E(i.by)+'</small></a>'}).join('')+'</div></div>'}).join('');
$('ac').innerHTML=['Co-author of two papers published in IJCRT (Smart Entry Counter, 2024; Eco Smart Plasma System, 2025).','Presented Smart Entry Counter at the National Conference NCSSPES, VVIET Mysuru.','Participant, AvEEEshkar 2024 and 2025 state-level project competitions.'].map(function(t){return '<li>'+E(t)+'</li>'}).join('');
$('c-t').textContent='Open to opportunities in protection, relay testing, commissioning and service engineering.';
$('c-b').innerHTML='<a class="btn pri" href="mailto:'+P.email+'">'+P.email+'</a>'+L(P.linkedin,'<span class="btn">LinkedIn</span>')+L(P.github,'<span class="btn">GitHub</span>');
$('ft').textContent='\u00a9 '+new Date().getFullYear()+' Koushil R Gowda | '+P.location;
var r=document.documentElement,t;try{t=localStorage.getItem('theme')}catch(e){}
if(t)r.setAttribute('data-theme',t);
$('theme').onclick=function(){var n=r.getAttribute('data-theme')=='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
$('menu').onclick=function(){var o=$('links').classList.toggle('open');this.setAttribute('aria-expanded',o)};
$('links').addEventListener('click',function(e){if(e.target.tagName=='A'){$('links').classList.remove('open')}});
})();
