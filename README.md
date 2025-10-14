# Entrega III – Interatividade e Funcionalidades (SPA + JS avançado)

Inclui:
- **SPA por hash** com `#/`, `#/projetos`, `#/cadastro`.
- **Templates JS** (DOM dinâmico via strings) em `assets/js/modules/templates.js`.
- **Validação/Consistência de dados** em `assets/js/modules/forms.js`:
  - Checksum de **CPF**;
  - E-mail, telefone, CEP e **idade mínima (16 anos)**;
  - Heurística **CEP x Estado** com aviso ao usuário;
  - Mensagens de erro campo a campo + **toasts**.
- **Armazenamento local** (`localStorage`) em `assets/js/modules/store.js`:
  - Salvar rascunho, limpar, registrar envios simulados.
- **Código modular** por funcionalidade em `assets/js/modules/`.
- **Design System + CSS modular** (da Entrega II) em `assets/css/`.

## Como testar
Abra `index.html` no navegador. Use o menu para navegar entre as rotas. No formulário de **Cadastro**, teste as validações e o salvamento de rascunho.

## Publicação (GitHub)
1. Crie um repositório **público** e envie todos os arquivos.
2. (Opcional) Ative o **GitHub Pages** em *Settings → Pages*.
3. Valide os HTMLs no [W3C Validator](https://validator.w3.org/#validate_by_upload).

## Entrega IV – Versionamento, Acessibilidade e Deploy

### Versionamento (Git/GitHub)
- **GitFlow**: `main` (produção), `develop` (integração), `feature/*`, `release/*`, `hotfix/*`.
- **Commits semânticos** (Conventional Commits). Veja `CONTRIBUTING.md`.
- **Releases**: versionamento semântico (SemVer) com tags e notas no GitHub.
- **Issues/Milestones/PRs**: modelos em `.github/` e checklist de acessibilidade.

### Acessibilidade (WCAG 2.1 AA)
- Navegação por **teclado** no dropdown, modal com **focus trap**, links e controles com **:focus-visible**.
- **Skip link** para pular ao conteúdo principal.
- **Leitores de tela**: landmarks (`role="navigation"`, `role="main"`, `role="contentinfo"`), `aria-live` no `#app`, rótulos claros.
- **Contraste**: variáveis focadas em contraste e **modo de alto contraste** (botão "Alto contraste") + respeito a `prefers-contrast: more`.
- **Dark mode** acessível por padrão (tema base).

### Otimização para Produção
- **Minificação** de HTML/CSS/JS em `dist/` com referências a `.min.*`.
- **Imagens otimizadas** (WEBP/PNG/SVG).

### Como publicar (GitHub Pages)
1. Suba o repositório como **público**.
2. Em *Settings → Pages*, selecione a branch (por ex. `main`) e a pasta `/dist` como origem.
3. Acesse a URL gerada após o deploy.

---

> Dica: Crie uma release `1.0.0` após revisar a branch `release/1.0.0` e fazer merge em `main`.