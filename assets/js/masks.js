function onlyDigits(v){return v.replace(/\D+/g,'');}
function maskCPF(value){let v=onlyDigits(value).slice(0,11);v=v.replace(/(\d{3})(\d)/,'$1.$2');v=v.replace(/(\d{3})(\d)/,'$1.$2');v=v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');return v;}
function maskCEP(value){let v=onlyDigits(value).slice(0,8);v=v.replace(/(\d{5})(\d)/,'$1-$2');return v;}
function maskPhone(value){let v=onlyDigits(value).slice(0,11);if(v.length>10){v=v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3')}else{v=v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3')}return v.trim();}
document.addEventListener('input', (e)=>{
  const id = e.target.id;
  if(id==='cpf') e.target.value = maskCPF(e.target.value);
  if(id==='cep') e.target.value = maskCEP(e.target.value);
  if(id==='telefone') e.target.value = maskPhone(e.target.value);
});