
(function(){
  const btn=document.querySelector('[data-menu]'), nav=document.querySelector('[data-nav]');
  if(btn&&nav) btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  document.querySelectorAll('[data-secure-booking]').forEach(el=>{
    el.addEventListener('click',e=>{
      const u=window.NCC_CONFIG&&window.NCC_CONFIG.patientBookingUrl;
      if(u){ e.preventDefault(); window.location.href=u; }
    });
  });
})();
