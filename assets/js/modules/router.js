(function(root){
  const { Templates, Forms } = root.App;
  const routes = { '/': Templates.Home, '/projetos': Templates.Projetos, '/cadastro': Templates.Cadastro };

  function render(route){
    const app=document.getElementById('app'); if(!app) return;
    const tpl=routes[route]||routes['/']; app.innerHTML=tpl();
    if(route==='/cadastro') Forms.bindCadastroForm();
    setActive(route);
  }
  function setActive(route){
    document.querySelectorAll('nav a, nav .dropdown-menu a').forEach(a=>{
      const href=a.getAttribute('href')||'';
      const active=(href===('#'+route) || href.endsWith('#'+route));
      if(active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
  }
  function parseRoute(){ const h=location.hash.replace(/^#/, ''); return h || '/'; }
  function navigate(route){ if(location.hash!=='#'+route) location.hash='#'+route; render(route); }
  function start(){
    document.addEventListener('click', (e)=>{
      const a=e.target.closest('a[href^="#/"]'); if(a){ e.preventDefault(); navigate(a.getAttribute('href').slice(1)); }
    });
    window.addEventListener('hashchange', ()=>render(parseRoute()));
    render(parseRoute());
  }
  root.App=root.App||{}; root.App.Router={start, navigate};
})(window);