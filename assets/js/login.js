'use strict';
(()=>{const form=document.querySelector('#login-form'),email=document.querySelector('#login-email'),password=document.querySelector('#login-password'),toggle=document.querySelector('#password-toggle'),remember=document.querySelector('#remember-email'),status=document.querySelector('#login-status');
try{const saved=localStorage.getItem('wg-login-email');if(saved){email.value=saved;remember.checked=true}}catch{}
toggle.addEventListener('click',()=>{const visible=password.type==='password';password.type=visible?'text':'password';toggle.textContent=visible?'Hide':'Show';toggle.setAttribute('aria-label',visible?'Hide password':'Show password');toggle.setAttribute('aria-pressed',String(visible))});
form.addEventListener('input',()=>{password.setCustomValidity('');status.textContent=''});
remember.addEventListener('change',()=>{if(!remember.checked)try{localStorage.removeItem('wg-login-email')}catch{}});
form.addEventListener('submit',event=>{event.preventDefault();password.setCustomValidity(password.value.trim()?'':'Please enter your password.');if(!form.reportValidity())return;try{if(remember.checked)localStorage.setItem('wg-login-email',email.value.trim());else localStorage.removeItem('wg-login-email')}catch{}password.value='';password.type='password';toggle.textContent='Show';toggle.setAttribute('aria-label','Show password');toggle.setAttribute('aria-pressed','false');status.textContent='Sign-in is currently unavailable. Please try again later.'});
document.querySelector('#forgot-password').addEventListener('click',()=>{status.textContent='Password recovery is currently unavailable. No reset email has been sent.'});
})();
