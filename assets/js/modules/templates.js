(function(root){
  const Home = () => `
    <section class="grid grid-2">
      <article class="card">
        <header><h1>Bem-vindo(a) à Organização Solidária</h1><p class="helper">Impacto social com educação, saúde e cidadania.</p></header>
        <p>Conheça nossos projetos e participe.</p>
        <div class="tags"><span class="tag primary">Educação</span><span class="tag success">Saúde</span><span class="tag warning">Cidadania</span></div>
      </article>
      <figure class="card"><img src="assets/img/hero.webp" alt="Ação comunitária"><figcaption>Junte-se a nós.</figcaption></figure>
    </section>`;

  const Projetos = () => `
    <section class="grid grid-2">
      <article class="card">
        <header><h1>Nossos Projetos</h1><p class="helper">Voluntariado e doações.</p></header>
        <h2 id="voluntariado">Voluntariado</h2><p>Cadastre-se e selecione áreas de interesse.</p>
        <h2 id="doacoes">Como Doar</h2><p>Doe itens e recursos financeiros com transparência.</p>
        <div class="alert alert-info">Alta demanda por itens de higiene neste mês.</div>
      </article>
      <figure class="card"><img src="assets/img/projetos.webp" alt="Equipe de voluntários"><figcaption>Impacto real.</figcaption></figure>
    </section>`;

  const Cadastro = () => `
    <section class="grid grid-2">
      <article class="card">
        <header><h1>Cadastro</h1><p class="helper">Preencha seus dados.</p></header>
        <form id="cadastroForm" novalidate>
          <fieldset><legend>Dados Pessoais</legend>
            <label for="nome">Nome Completo *</label>
            <input type="text" id="nome" required autocomplete="name">
            <label for="email">E-mail *</label>
            <input type="email" id="email" required autocomplete="email">
            <label for="cpf">CPF *</label>
            <input type="text" id="cpf" placeholder="000.000.000-00" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}">
            <label for="telefone">Telefone *</label>
            <input type="tel" id="telefone" placeholder="(00) 00000-0000" required pattern="\(\d{2}\)\s?\d{4,5}-\d{4}">
            <label for="nascimento">Data de Nascimento *</label>
            <input type="date" id="nascimento" required>
          </fieldset>
          <fieldset><legend>Endereço</legend>
            <label for="endereco">Endereço *</label>
            <input type="text" id="endereco" required autocomplete="street-address">
            <label for="cep">CEP *</label>
            <input type="text" id="cep" placeholder="00000-000" required pattern="\d{5}-\d{3}">
            <label for="cidade">Cidade *</label>
            <input type="text" id="cidade" required autocomplete="address-level2">
            <label for="estado">Estado *</label>
            <select id="estado" required autocomplete="address-level1">
              <option value="" disabled selected>Selecione</option>
              <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
              <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
              <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
              <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
              <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
              <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
              <option>SP</option><option>SE</option><option>TO</option>
            </select>
          </fieldset>
          <div class="modal-actions">
            <button type="submit" class="btn">Enviar</button>
            <button type="button" class="btn btn-outline" id="btnRascunho">Salvar rascunho</button>
            <button type="button" class="btn btn-outline btn-danger" id="btnLimpar">Limpar</button>
          </div>
        </form>
      </article>
      <figure class="card"><img src="assets/img/cadastro.webp" alt="Preenchendo formulário"><figcaption>Leva menos de 2 minutos.</figcaption></figure>
    </section>`;

  root.App = root.App || {};
  root.App.Templates = { Home, Projetos, Cadastro };
})(window);