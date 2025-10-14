(function(root){
  const { Store } = root.App;

  function isValidCPF(cpf){
    cpf=(cpf||'').replace(/\D/g,'');
    if(!cpf||cpf.length!==11) return false;
    if(/^(\d)\1+$/.test(cpf)) return false;
    let s=0; for(let i=0;i<9;i++) s+=parseInt(cpf[i])*(10-i);
    let r=(s*10)%11; if(r===10||r===11) r=0; if(r!==parseInt(cpf[9])) return false;
    s=0; for(let i=0;i<10;i++) s+=parseInt(cpf[i])*(11-i);
    r=(s*10)%11; if(r===10||r===11) r=0; return r===parseInt(cpf[10]);
  }
  function ageFrom(d){const x=new Date(d); if(isNaN(x)) return 0; const diff=Date.now()-x.getTime(); const a=new Date(diff); return Math.abs(a.getUTCFullYear()-1970);}
  function setError(el,msg){
    let small=el.nextElementSibling;
    if(!small||!small.classList.contains('form-msg')){small=document.createElement('div');small.className='form-msg';el.insertAdjacentElement('afterend',small);}
    small.textContent=msg||'';
    if(msg){el.setAttribute('aria-invalid','true'); el.style.borderColor='#b91c1c';} else {el.removeAttribute('aria-invalid'); el.style.borderColor='';}
  }
  function validateForm(form){
    let ok=true;
    const nome=form.querySelector('#nome'); if(!nome.value.trim()){setError(nome,'Informe seu nome completo.'); ok=false;} else setError(nome,'');
    const email=form.querySelector('#email'); const re=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; if(!re.test(email.value)){setError(email,'E-mail inválido.'); ok=false;} else setError(email,'');
    const cpf=form.querySelector('#cpf'); if(!isValidCPF(cpf.value)){setError(cpf,'CPF inválido.'); ok=false;} else setError(cpf,'');
    const tel=form.querySelector('#telefone'); if(!/\(\d{2}\)\s?\d{4,5}-\d{4}/.test(tel.value)){setError(tel,'Telefone no formato (00) 00000-0000.'); ok=false;} else setError(tel,'');
    const nasc=form.querySelector('#nascimento'); const idade=ageFrom(nasc.value); if(idade<16){setError(nasc,'É necessário ter ao menos 16 anos.'); ok=false;} else setError(nasc,'');
    const cep=form.querySelector('#cep'); if(!/^\d{5}-\d{3}$/.test(cep.value)){setError(cep,'CEP no formato 00000-000.'); ok=false;} else setError(cep,'');
    const cidade=form.querySelector('#cidade'); if(!cidade.value.trim()){setError(cidade,'Informe a cidade.'); ok=false;} else setError(cidade,'');
    const estado=form.querySelector('#estado'); if(!estado.value){setError(estado,'Selecione o estado.'); ok=false;} else setError(estado,'');
    const cepNum=parseInt((cep.value||'').replace(/\D/g,''),10);
    if(!isNaN(cepNum)){ const spRange=cepNum>=1000000 && cepNum<=19999999; if(estado.value==='SP' && !spRange){ setError(cep,'CEP parece não pertencer a SP. Verifique.'); ok=false; } }
    return ok;
  }
  function readForm(form){const v={}; ['nome','email','cpf','telefone','nascimento','endereco','cep','cidade','estado'].forEach(id=>{const el=form.querySelector('#'+id); v[id]=el?el.value:''}); return v;}
  function fillForm(form,data){ if(!data) return; Object.entries(data).forEach(([k,val])=>{ const el=form.querySelector('#'+k); if(el) el.value=val; }); }

  function bindCadastroForm(){
    const form=document.getElementById('cadastroForm'); if(!form) return;
    fillForm(form, Store.loadDraft());
    const btnR=document.getElementById('btnRascunho'); const btnL=document.getElementById('btnLimpar');
    if(btnR){btnR.addEventListener('click',()=>{Store.saveDraft(readForm(form)); showToast('Rascunho salvo localmente.');});}
    if(btnL){btnL.addEventListener('click',()=>{form.reset(); Store.clearDraft(); showToast('Formulário limpo.');});}
    form.addEventListener('submit',(e)=>{
      e.preventDefault(); form.classList.add('was-validated');
      if(!validateForm(form)){ showToast('Há inconsistências no formulário.'); return; }
      Store.addSubmit(readForm(form)); Store.clearDraft(); showToast('Cadastro enviado! (simulação)'); form.reset();
    });
  }

  root.App=root.App||{}; root.App.Forms={bindCadastroForm, validateForm};
})(window);