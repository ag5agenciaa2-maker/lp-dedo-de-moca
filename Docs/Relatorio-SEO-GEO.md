# Relatório de Auditoria SEO/GEO — Dedo de Moça Café da Roça

Data: 28/07/2026

## O que foi implementado

### Técnico / Local SEO
- `lang="pt-BR"` e `charset="UTF-8"` já estavam corretos.
- Criado `robots.txt` com `Allow: /` geral e liberação explícita para bots de IA (GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, Google-Extended), referenciando `sitemap.xml` e `llms.txt`.
- Criado `sitemap.xml` com as 3 URLs do site, todas em formato limpo (sem `.html`).
- Criado `llms.txt` na raiz com dados reais da empresa (endereço, WhatsApp, horário, nota Google, cardápio, diferenciais, FAQ, contato) — nenhum dado inventado, tudo extraído do dossiê da empresa.
- Adicionado `<link rel="canonical">` em `index.html`, `politica-de-privacidade.html` e `termos-e-condicoes.html`, todos apontando para URL limpa.
- **Corrigidas todas as ocorrências de `.html` em links internos** (navegação, rodapé, banner de cookies) nas 3 páginas — agora usam `/`, `/politica-de-privacidade`, `/termos-e-condicoes`. Confirmado com grep: zero ocorrências restantes.
- Corrigidas âncoras desatualizadas nas páginas legais (`#avaliacoes` → `#depoimentos`, refletindo a navbar atual).
- Adicionadas meta tags de geolocalização (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) com as coordenadas reais do Google Business Profile.
- NAP (Nome, Endereço, Telefone) já estava visível em texto real no rodapé — confirmado, nenhuma mudança necessária.

### Social & Semântica
- Adicionado Open Graph completo (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, `og:site_name`) em `index.html`.
- Adicionado Twitter Card (`summary_large_image`) em `index.html`.
- Envolvido o conteúdo principal em `<main>` (antes só existia `<header>`, `<section>`s soltas e `<footer>`).
- `<nav>` e `<footer>` já existiam corretamente.

### Performance / Core Web Vitals
- `script.js` agora carrega com `defer` (antes bloqueava o parser).
- Imagens abaixo da dobra já usavam `loading="lazy"` de forma consistente (confirmado por varredura completa).
- Formato `.webp` já em uso em todas as fotos.

### Conteúdo
- H1 da Hero ("Café da roça, servido todo santo dia") é um slogan de marca — mantive o visual, mas adicionei um `<span class="sr-only">Cafeteria em Campo Grande, RJ — </span>` no início do H1 para incluir a keyword principal + localização sem alterar o design aprovado.
- Hierarquia de H2 já estava correta e descritiva por seção.
- `alt` das imagens já descritivos com contexto (local + o que a foto mostra) — confirmado por varredura, nenhum "image1" genérico encontrado.

### Schema Markup (JSON-LD)
- **CafeOrCoffeeShop** (subtipo de LocalBusiness): nome, endereço, telefone, coordenadas, horário de funcionamento, `sameAs` (Google Maps + Instagram), e `aggregateRating` (4.7 / 1773 avaliações — dado real do Google Business Profile).
- **FAQPage**: as 5 perguntas/respostas reais do site, para elegibilidade a rich snippets e citação por IA.
- Ambos os blocos validados como JSON sintaticamente correto.

### Regra AG5 — Destaque de avaliações Google
- Nota real é 4,7 com 1.773 avaliações → **acima da régua** (≥4.7 e ≥30 avaliações), então o destaque numérico da nota é permitido. Não há destaque visual de nota na página atualmente (foi removido em iteração anterior a pedido do usuário) — o `aggregateRating` no schema é suficiente e está em conformidade, já que os depoimentos com estrelas seguem visíveis na seção de Depoimentos.

### Robô de Analytics AG5
- Adicionada a tag `<script src="https://control-blog.ag5agencia.site/r.js" data-c="dedo-de-moca" defer></script>` antes de `</body>` nas 3 páginas HTML.
- **Atenção**: o slug `dedo-de-moca` foi inferido a partir do nome do projeto — precisa ser confirmado/cadastrado no AG5 Content Control antes do deploy, senão os eventos são descartados silenciosamente.

## O que NÃO pude corrigir (dependências externas)

- [ ] **Domínio real**: usei a URL padrão AG5 `http://www.dedodemoca.ag5agencia.site/` (slug: `dedodemoca`) em canonical, OG, Twitter Card e schema. Se o cliente migrar para domínio próprio, atualizar todas as referências.
- [ ] **Google My Business**: verificar se o perfil está completo e o NAP bate exatamente com o site.
- [ ] **Google Search Console**: submeter `sitemap.xml` e solicitar indexação após o deploy.
- [ ] **Link direto do Google Business no rodapé**: há um `TODO` no código (`<!-- TODO: substituir "#" pela URL direta do perfil no Google Business -->`) — precisa da URL curta oficial do perfil.
- [ ] **Slug do AG5 Content Control**: confirmar que `dedo-de-moca` é o slug correto cadastrado, ou ajustar.
- [ ] **Backlinks**: buscar diretórios locais e parcerias para construção de autoridade.
- [ ] **PageSpeed Insights**: rodar teste ao vivo após o deploy para capturar métricas reais de servidor.
- [ ] **HTTPS**: confirmar que o hosting força SSL.
- [ ] **Perfis sociais linkados**: já há Instagram linkado; considerar Facebook/outros se existirem.

## Observação sobre o H1

A regra pede H1 único com keyword + localização, mas o slogan de marca ("Café da roça, servido todo santo dia") já era uma decisão de design validada em várias iterações anteriores com o usuário. Optei por preservar o visual e adicionar o contexto de forma acessível (`sr-only`) em vez de reescrever o H1 visível — se preferir o H1 visível literal com keyword+local, é uma troca de uma linha.
