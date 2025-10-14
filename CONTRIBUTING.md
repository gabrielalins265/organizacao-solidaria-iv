# Contribuição & Fluxo de Trabalho

## GitFlow
- `main`: produção (somente releases).
- `develop`: integração.
- Branches:
  - `feature/<slug>` para novas funcionalidades.
  - `fix/<slug>` para correções.
  - `release/<x.y.z>` para estabilização antes do merge em `main`.
  - `hotfix/<x.y.z>` para correções críticas em produção.

## Commits Semânticos (Conventional Commits)
Formato: `tipo(escopo): descrição`  
Tipos comuns: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Exemplos:
- `feat(form): valida CPF com checksum`
- `fix(nav): corrige foco no dropdown com teclado`
- `docs(readme): adiciona seção de deploy`

## Releases (SemVer)
- `MAJOR.MINOR.PATCH` (ex.: `1.2.0`).
- Gere tags e GitHub Releases com changelog.