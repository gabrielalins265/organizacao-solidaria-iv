document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('#nav-toggle'); const nav=document.querySelector('#nav'); const dropdown=document.querySelector('.dropdown'); const ddButton=dropdown?dropdown.querySelector('button'):null;
  if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', nav.classList.contains('open'));});}
  if(ddButton&&dropdown){ddButton.addEventListener('click',()=>{const ex=dropdown.getAttribute('aria-expanded')==='true'; dropdown.setAttribute('aria-expanded', String(!ex));}); document.addEventListener('click',e=>{if(!dropdown.contains(e.target)) dropdown.setAttribute('aria-expanded','false');});}
});
function showToast(message){let t=document.querySelector('.toast'); if(!t){t=document.createElement('div'); t.className='toast'; document.body.appendChild(t);} t.textContent=message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3000);}
function openModal(id){const b=document.getElementById(id); if(b){b.classList.add('open');}}
function closeModal(id){const b=document.getElementById(id); if(b){b.classList.remove('open');}}// A11y: keyboard navigation for dropdown (ArrowDown/ArrowUp/Escape)
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const button = dropdown ? dropdown.querySelector('button') : null;
  const menu = dropdown ? dropdown.querySelector('.dropdown-menu') : null;

  if(button && menu){
    const items = () => Array.from(menu.querySelectorAll('a'));
    button.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowDown'){ e.preventDefault(); dropdown.setAttribute('aria-expanded','true'); items()[0]?.focus(); }
    });
    menu.addEventListener('keydown', (e) => {
      const list = items();
      const idx = list.indexOf(document.activeElement);
      if(e.key === 'ArrowDown'){ e.preventDefault(); list[Math.min(idx+1, list.length-1)]?.focus(); }
      if(e.key === 'ArrowUp'){ e.preventDefault(); list[Math.max(idx-1, 0)]?.focus(); }
      if(e.key === 'Escape'){ dropdown.setAttribute('aria-expanded','false'); button.focus(); }
    });
  }

  // Theme toggle (high contrast)
  const thBtn = document.querySelector('#btn-contrast');
  if(thBtn){
    thBtn.addEventListener('click', () => {
      const el = document.documentElement;
      const on = el.classList.toggle('theme-contrast');
      thBtn.setAttribute('aria-pressed', String(on));
      localStorage.setItem('theme-contrast', on ? '1' : '0');
    });
    // restore preference
    if(localStorage.getItem('theme-contrast') === '1'){
      document.documentElement.classList.add('theme-contrast');
      thBtn.setAttribute('aria-pressed', 'true');
    }
  }
});

// A11y: modal focus trap
(function(){
  function trapFocus(container){
    const FOCUSABLE = 'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';
    const els = Array.from(container.querySelectorAll(FOCUSABLE));
    if(els.length === 0) return;
    const first = els[0], last = els[els.length-1];
    function loop(e){
      if(e.key !== 'Tab') return;
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
    container.addEventListener('keydown', loop);
  }
  const modal = document.getElementById('modal-news');
  if(modal){
    modal.addEventListener('transitionend', () => { if(modal.classList.contains('open')) modal.querySelector('button')?.focus(); });
    // init trap
    trapFocus(modal);
  }
})();