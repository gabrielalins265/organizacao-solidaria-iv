(function(root){
  const KEY_DRAFT='osolidaria:cadastro:draft', KEY_SUBMITS='osolidaria:cadastro:submits';
  function saveDraft(d){localStorage.setItem(KEY_DRAFT, JSON.stringify(d||{}));}
  function loadDraft(){try{return JSON.parse(localStorage.getItem(KEY_DRAFT)||'{}')}catch(e){return {}}}
  function clearDraft(){localStorage.removeItem(KEY_DRAFT)}
  function addSubmit(d){const xs=getSubmits(); xs.push({...d,submittedAt:new Date().toISOString()}); localStorage.setItem(KEY_SUBMITS, JSON.stringify(xs));}
  function getSubmits(){try{return JSON.parse(localStorage.getItem(KEY_SUBMITS)||'[]')}catch(e){return []}}
  root.App=root.App||{}; root.App.Store={saveDraft,loadDraft,clearDraft,addSubmit,getSubmits};
})(window);