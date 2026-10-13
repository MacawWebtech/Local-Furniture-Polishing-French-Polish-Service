'use strict';
const root=document.documentElement;
const readSetting=k=>{try{return localStorage.getItem(k)}catch{return null}};
const saveSetting=(k,v)=>{try{localStorage.setItem(k,v)}catch{}};
const themeButton=document.querySelector('#theme');
function setTheme(theme){root.dataset.theme=theme;themeButton.textContent=theme==='dark'?'Light':'Dark';themeButton.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} mode`)}
setTheme(readSetting('wg-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
themeButton.addEventListener('click',()=>{const theme=root.dataset.theme==='dark'?'light':'dark';setTheme(theme);saveSetting('wg-theme',theme)});
const rtlButton=document.querySelector('#rtl');
function setDirection(dir){root.dir=dir;rtlButton.setAttribute('aria-pressed',String(dir==='rtl'))}
setDirection(readSetting('wg-direction')||'ltr');
rtlButton.addEventListener('click',()=>{const dir=root.dir==='rtl'?'ltr':'rtl';setDirection(dir);saveSetting('wg-direction',dir)});
const menu=document.querySelector('#menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',`${open?'Close':'Open'} navigation`)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
const range=document.querySelector('#compare-range');
range?.addEventListener('input',()=>{document.querySelector('#comparison').style.setProperty('--position',`${range.value}%`);document.querySelector('#compare-value').textContent=`${range.value}%`});
const serviceDescriptions={'French Polishing':'Shellac is applied by hand with a polishing pad in thin layers. We assess the existing finish and intended use first, then discuss tone and sheen. Shellac is sensitive to heat, water and alcohol, so it is not the right choice for every surface.','Furniture Restoration':'A tailored assessment considers construction, loose joints, veneer, surface condition and the existing finish. The aim is to preserve suitable original material and agree repairs and refinishing before work begins.','Wood Surface Repair':'Scratches, dents, rings and worn finishes need different treatments. Some can be blended locally; deeper damage may need wider refinishing. We explain limitations before recommending work.'};
Object.assign(serviceDescriptions,{"French Polishing": "Hand-applied shellac for suitable wooden surfaces, with tone and sheen agreed after assessment. Enhance the natural grain. An assessment is required before agreeing treatment; ", "Furniture Restoration": "Repairs and refinishing shaped around construction, condition and the original character. Keep a valued piece in use. An assessment is required before agreeing treatment; ", "Wood Varnishing": "A suitable protective varnish selected for the wood, intended use and existing finish. Protection chosen for the surface. An assessment is required before agreeing treatment; ", "Scratch & Dent Repair": "Damage assessed for localized filling, blending or broader refinishing where required. A considered repair strategy. An assessment is required before agreeing treatment; ", "Antique Furniture Restoration": "A restrained approach that considers original finishes, patina and previous repairs. Preserve character where suitable. An assessment is required before agreeing treatment; ", "Cabinet Refinishing": "Cabinet doors, drawers and surfaces prepared and finished with compatibility in mind. Renew a coordinated appearance. An assessment is required before agreeing treatment; ", "Wood Staining & Colour Matching": "Tone trials and careful blending to help new work sit alongside an existing surface. Agree the colour before finishing. An assessment is required before agreeing treatment; ", "Door & Staircase Polishing": "Assessment and on-site finishing of suitable architectural woodwork and fitted surfaces. Care for the details of your space. An assessment is required before agreeing treatment; ", "Tabletop Refinishing": "Preparation and refinishing tailored to surface wear, construction and everyday use. A finish suited to the way you live. An assessment is required before agreeing treatment; ", "Water Ring & Heat Mark Repair": "Finish damage examined to determine whether localized treatment or refinishing is appropriate. Understand the mark before treatment. An assessment is required before agreeing treatment; ", "Custom Wood Finishing": "Bespoke tone and sheen choices for suitable new or restored wooden pieces. A finish with a clear intention. An assessment is required before agreeing treatment; ", "Maintenance & Aftercare": "Practical advice tailored to the applied finish, curing period and intended use. Care that continues after restoration. An assessment is required before agreeing treatment; "});
const dialog=document.querySelector('#service-dialog');
document.querySelectorAll('.service-info').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#dialog-title').textContent=button.dataset.service;document.querySelector('#dialog-copy').textContent=serviceDescriptions[button.dataset.service];dialog.showModal()}));
document.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
document.querySelector('.dialog-quote')?.addEventListener('click',()=>dialog.close());
const photos=document.querySelector('#photos'),preview=document.querySelector('#photo-preview');let photoURLs=[];
photos?.addEventListener('change',()=>{photoURLs.forEach(URL.revokeObjectURL);photoURLs=[];preview.replaceChildren();photos.setCustomValidity('');const files=[...photos.files];if(files.length>5||files.some(f=>f.size>5*1024*1024||!['image/jpeg','image/png','image/webp'].includes(f.type))){photos.setCustomValidity('Choose up to 5 JPG, PNG or WebP images, each no larger than 5 MB.');photos.reportValidity();return}files.forEach(file=>{const img=new Image();img.alt=`Selected furniture photograph: ${file.name}`;img.src=URL.createObjectURL(file);photoURLs.push(img.src);preview.append(img)})});
let enquiryURL;
document.querySelector('#quote-form')?.addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const name=form.elements.name.value.trim(),message=form.elements.message.value.trim();if(!name||message.length<10){document.querySelector('#form-status').textContent='Enter your name and at least 10 characters describing your piece.';return}const values=new FormData(form);const text=['WALNUT & GRAIN — ENQUIRY','This enquiry has not been sent. No appointment has been confirmed.','',...['name','email','furniture','service','message'].map(k=>`${k}: ${values.get(k)}`),'',`Photographs selected: ${[...photos.files].map(f=>f.name).join(', ')||'None'}`,'Photograph bytes are not included in this text file.'].join('\n');if(enquiryURL)URL.revokeObjectURL(enquiryURL);enquiryURL=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const download=document.querySelector('#download-enquiry');download.href=enquiryURL;download.hidden=false;document.querySelector('#form-status').textContent='Your enquiry is ready to download. Nothing has been sent.'});
document.querySelector('#year').textContent=new Date().getFullYear();
const topButton=document.querySelector('#to-top');window.addEventListener('scroll',()=>{topButton.hidden=scrollY<600},{passive:true});topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.section-heading,.service-card,.plain-card,.price-card').forEach(element=>observer.observe(element))}

const homeDropdowns=document.querySelectorAll(".home-dropdown");document.addEventListener("click",event=>homeDropdowns.forEach(dropdown=>{if(!dropdown.contains(event.target))dropdown.open=false}));document.addEventListener("keydown",event=>{if(event.key==="Escape")homeDropdowns.forEach(dropdown=>dropdown.open=false)});
// Keep the mobile header compact; reuse the same controls inside the menu.
const mobileHeaderQuery=matchMedia('(max-width: 639px)');
const headerActions=document.querySelector('.header-actions');
const header=document.querySelector('header');
function placeHeaderControls(){
 if(mobileHeaderQuery.matches){nav.append(headerActions)}
 else{header.append(headerActions)}
}
placeHeaderControls();
mobileHeaderQuery.addEventListener('change',placeHeaderControls);
document.querySelectorAll('.gallery-range').forEach(control=>control.addEventListener('input',()=>{document.getElementById(control.dataset.target).style.setProperty('--position',`${control.value}%`);document.getElementById(control.dataset.output).textContent=`${control.value}%`}));
document.querySelectorAll('.gallery-filter').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.filter;let count=0;document.querySelectorAll('.gallery-project').forEach(project=>{const show=category==='All'||project.dataset.category===category;project.hidden=!show;if(show)count++});document.querySelectorAll('.gallery-filter').forEach(filter=>filter.setAttribute('aria-pressed',String(filter===button)));document.querySelector('#gallery-status').textContent=`Showing ${count} project ${count===1?'study':'studies'}.`}));
document.querySelector('#estimate-form')?.addEventListener('submit',event=>{event.preventDefault();const base=Number(document.querySelector('#estimate-service').value);const multiplier=['#estimate-size','#estimate-condition','#estimate-setting'].reduce((product,selector)=>product*Number(document.querySelector(selector).value),1);const low=Math.round(base*multiplier/5)*5;const high=Math.round(low*1.3/5)*5;document.querySelector('#estimate-output').textContent=`£${low.toLocaleString('en-GB')}–£${high.toLocaleString('en-GB')} · indicative range`});
/* Current navigation state and restrained page motion. */
(()=>{
 const page=location.pathname.split('/').pop()||'index.html';
 const parentPage={'service-details.html':'services.html','blog-details.html':'blog.html'}[page]||page;
 const links=[...nav.querySelectorAll('a')];
 function activeNavigation(){
  links.forEach(link=>{const url=new URL(link.getAttribute('href'),location.href);const target=url.pathname.split('/').pop()||'index.html';const active=target===parentPage;link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')});
  const home=nav.querySelector('.home-dropdown');home.classList.toggle('is-active',page==='index.html'||page==='home-2.html');
 }
 activeNavigation();
 links.forEach(link=>link.addEventListener('click',()=>{links.forEach(item=>{item.classList.remove('is-active');item.removeAttribute('aria-current')});link.classList.add('is-active');link.setAttribute('aria-current','page')}));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(!('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-enter');observer.unobserve(entry.target)}})},{threshold:.08});
 const seen=new WeakSet();
 function addMotion(node){if(reduced.matches)return;const elements=[...(node.matches?.('main section,main article,main .image-frame,footer .footer-grid>div')?[node]:[]),...node.querySelectorAll('main section,main article,main .image-frame,footer .footer-grid>div')];elements.forEach(element=>{if(!seen.has(element)){seen.add(element);observer.observe(element)}})}
 addMotion(document);
 const mutations=new MutationObserver(entries=>{entries.forEach(entry=>entry.addedNodes.forEach(node=>{if(node.nodeType===1)addMotion(node)}))});
 mutations.observe(document.querySelector('main'),{childList:true,subtree:true});
 reduced.addEventListener('change',()=>{if(reduced.matches){observer.disconnect();document.querySelectorAll('.motion-enter').forEach(element=>element.classList.remove('motion-enter'))}else{document.querySelectorAll('main section,main article,main .image-frame,footer .footer-grid>div').forEach(element=>observer.observe(element))}});
})();
