'use strict';
(()=>{const form=document.querySelector('#contact-form'),status=document.querySelector('#contact-status'),download=document.querySelector('#contact-download');let url;
function discard(){if(url){URL.revokeObjectURL(url);url=null}download.hidden=true;download.removeAttribute('href');status.textContent=''}
form.addEventListener('input',event=>{event.target.setCustomValidity?.('');discard()});
form.addEventListener('change',discard);
form.addEventListener('submit',event=>{event.preventDefault();for(const key of ['name','subject','message']){const field=form.elements.namedItem(key);const min=key==='message'?10:1;field.setCustomValidity(field.value.trim().length<min?(key==='message'?'Please describe your piece using at least 10 non-space characters.':`Please enter your ${key}.`):'')}if(!form.reportValidity())return;
const values=new FormData(form);const text=['WALNUT & GRAIN — CONTACT ENQUIRY','This message has not been sent.','',...['name','email','phone','subject','service','message'].map(key=>`${key}: ${String(values.get(key)||'').trim()||'Not supplied'}`)].join('\n');if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));download.href=url;download.hidden=false;status.textContent='Your enquiry is ready. Download it below to keep a copy. Nothing has been sent.'});window.addEventListener('pagehide',()=>{if(url)URL.revokeObjectURL(url)});
})();
