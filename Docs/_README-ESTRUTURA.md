# README de Estrutura — Dedo de Moça Café da Roça

> Leia este arquivo ANTES de criar ou editar qualquer página `.html` deste projeto.
> Ele descreve a estrutura; o template pronto pra colar está em `_nav-footer-template.html`.

## 1. Mapa de páginas

| Arquivo | Pasta | Profundidade (`{{BASE}}`) | Tem seções `#âncora` próprias? |
|---|---|---|---|
| `index.html` | raiz | `` (vazio) | Sim — é a home, todas as âncoras (`#inicio`, `#cardapio`, `#espaco`, `#sobre`, `#depoimentos`, `#faq`, `#localizacao`, `#contato`) vivem aqui |
| `politica-de-privacidade.html` | raiz | `` (vazio) | Não — página de conteúdo legal só, nav/footer apontam de volta pra home via `/#âncora` |
| `termos-e-condicoes.html` | raiz | `` (vazio) | Não — mesma lógica |

Não há páginas em subpasta neste projeto no momento. Se uma for criada (ex: `blog/post.html`),
usar `{{BASE}} = "../"` e ajustar `src`/`href` de assets conforme a seção 3.

## 2. Template canônico

Ponto de partida obrigatório para nav, footer, drawer mobile, cookie banner (LGPD) e o balão
premium de WhatsApp: **`docs/_nav-footer-template.html`**.

- O placeholder `{{BASE}}` marca todo caminho relativo. Substituir por `""` (raiz) ou `"../"`
  (subpasta) ao colar o template numa página.
- Âncoras de seção (`#inicio`, `#cardapio` etc.) são sempre prefixadas com `/` quando a página
  atual NÃO é a `index.html`, porque essas seções só existem na home (ex: `href="/#cardapio"`).
  Na própria `index.html`, as âncoras ficam sem o `/` (`href="#cardapio"`).
- Nunca copiar nav/footer de uma página secundária existente — pode estar desatualizada. Sempre
  partir do template ou do `index.html` atual.

## 3. Regra de profundidade — caminhos por localização

| Recurso | Raiz (`{{BASE}}=""`) | Subpasta (`{{BASE}}="../"`) |
|---|---|---|
| CSS principal | `style.css` | `../style.css` |
| CSS de cookies | `cookie-banner.css` | `../cookie-banner.css` |
| Script principal | `script.js` | `../script.js` |
| Script de cookies | `cookie-banner.js` | `../cookie-banner.js` |
| Assets (imagens/logo) | `assets/arquivo.webp` | `../assets/arquivo.webp` |
| Voltar para a home | `/` | `../` (ou `/` se preferir link absoluto) |
| Política de privacidade | `/politica-de-privacidade` | `/politica-de-privacidade` (sempre absoluto, é raiz) |
| Termos e condições | `/termos-e-condicoes` | `/termos-e-condicoes` (sempre absoluto) |

**Regra de URL limpa (inviolável):** nunca usar `.html` em `href` de navegação, `canonical`,
`og:url`, JSON-LD ou `sitemap.xml`. O arquivo no disco continua `pagina.html`, mas a URL pública
é sempre limpa (`/termos-e-condicoes`, não `/termos-e-condicoes.html`). O Cloudflare Pages já
serve assim e redireciona 308 quem usar `.html`.

## 4. Itens obrigatórios em TODA página

- [ ] Nav idêntico ao `index.html` (pílula flutuante, logo, 5 links, botão "Falar no WhatsApp", burger)
- [ ] Footer idêntico (marca + social, Navegue, Nossas delícias, Contato, créditos AG5)
- [ ] Drawer mobile (overlay + menu + CTA WhatsApp)
- [ ] Cookie banner LGPD + modal de preferências + `cookie-banner.js`
- [ ] Balão premium de WhatsApp (`wa-premium-container`)
- [ ] `script.js` com `defer`, carregado ANTES de `cookie-banner.js`
- [ ] Robô de analytics AG5: `<script src="https://control-blog.ag5agencia.site/r.js" data-c="dedo-de-moca" defer></script>` como último script antes de `</body>`
- [ ] `<meta charset="utf-8">`, `<meta viewport>`, `<link rel="canonical">` (URL limpa, domínio `http://www.dedodemoca.ag5agencia.site/`)
- [ ] Favicon: `<link rel="icon" href="assets/favicon-dedo-de-moca.ico" />` (ajustar `{{BASE}}` se em subpasta)

## 5. Armadilhas conhecidas deste projeto

- **Links `.html` residuais**: antes desta sincronização, `politica-de-privacidade.html` e
  `termos-e-condicoes.html` tinham nav/footer desatualizados (navbar antiga sem `.nav__pill`,
  botão "Chamar no zap" em vez de "Falar no WhatsApp", links para `#avaliacoes` em vez de
  `#depoimentos`, footer reduzido só com créditos, sem o balão de WhatsApp). Corrigido em
  28/07/2026 — se voltar a acontecer, é sinal de que alguém editou a página secundária direto
  em vez de partir do template.
- **Domínio placeholder**: o canonical/schema/OG usam `http://www.dedodemoca.ag5agencia.site/`
  (slug AG5: `dedodemoca`). Se o cliente migrar para domínio próprio, atualizar em TODOS os
  arquivos (`index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`,
  `robots.txt`, `sitemap.xml`, `llms.txt`) de uma vez — nunca só em um.
- **`#avaliacoes` vs `#depoimentos`**: a seção de depoimentos já foi renomeada de `#avaliacoes`
  para `#depoimentos` no `index.html`. Qualquer link antigo apontando para `#avaliacoes` está
  quebrado — checar com `grep -rn "avaliacoes" *.html` antes de considerar uma página pronta.
- **TODO pendente no footer**: o link do ícone "Dedo de Moça café da roça" na coluna Contato
  aponta para `href="#"` com comentário `<!-- TODO: substituir "#" pela URL direta do perfil no
  Google Business -->`. Está assim tanto no `index.html` quanto no template — não é bug de
  sincronização, é uma pendência real aguardando a URL do perfil GBP.
- **Ícone do rodapé**: o ícone ao lado de "Dedo de Moça café da roça" é uma xícara de café
  (SVG customizado), não o ícone genérico de prédio/instituição que vinha por padrão. Se
  recriar o footer do zero, usar o SVG do template, não reinventar.

## 6. Como verificar depois de qualquer alteração

1. Abrir a página no navegador (desktop e mobile/DevTools).
2. Nav: pílula aparece, os 5 links funcionam, botão "Falar no WhatsApp" abre o wa.me correto.
3. Mobile: clicar no hambúrguer → drawer abre com animação, `#burger[aria-expanded]` vira `true`;
   clicar num link ou no X fecha o drawer.
4. Footer: 4 colunas visíveis (marca, Navegue, Nossas delícias, Contato), ícone Instagram e ícone
   de xícara de café aparecem, créditos "Desenvolvido por AG5 Agência" no rodapé.
5. Cookie banner aparece na primeira visita (limpar localStorage pra re-testar); modal de
   preferências abre ao clicar em "Personalizar".
6. Balão de WhatsApp: aparece o botão flutuante redondo no canto inferior direito.
7. Console do navegador sem erros 404 (CSS, JS, imagens) nem erros de JS.
8. Rodar `grep -rn 'href="[^"]*\.html' *.html` (deve retornar vazio, fora de comentários) e
   `grep -rn "avaliacoes" *.html` (deve retornar vazio) antes de considerar a sincronização completa.
