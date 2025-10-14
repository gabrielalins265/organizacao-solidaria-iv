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