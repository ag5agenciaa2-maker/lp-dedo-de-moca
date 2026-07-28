# 📋 Falta Adicionar no Schema
**Empresa:** Cafeteria Campo Grande RJ - Dedo de Moça café da roça | Café da Manhã | Comida Caseira
**Data de geração:** 28/07/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não encontrado no dossiê nem no site.
- [ ] `address.postalCode` — Já preenchido (23017-370), confirmado no dossiê. ✅ Não é mais pendência (ver seção Resolvidos).

## 🟡 IMPORTANTES

- [ ] `sameAs` Facebook — Link da página não encontrado no dossiê.
- [ ] `sameAs` LinkedIn — Não aplicável a este tipo de negócio (cafeteria local); não registrar como pendência real.
- [x] Domínio — atualizado para a URL padrão AG5 `http://www.dedodemoca.ag5agencia.site/` (slug: `dedodemoca`) em todo o `<head>`, schema, `robots.txt`, `sitemap.xml` e `llms.txt`. Se o cliente migrar para domínio próprio no futuro, repetir o find-and-replace.

## 🔵 COMPLEMENTARES

- [ ] `legalName` — Razão social não exibida no site nem no dossiê (dossiê só menciona "possui CNPJ", sem expor o número ou a razão social).
- [ ] `founder.name` — Nome do(a) responsável não identificado explicitamente no site (a história menciona "uma dona de casa", sem nome próprio citado).
- [ ] `paymentAccepted` — Não incluído no schema ainda; o FAQ do site cita "dinheiro, Pix e os principais cartões" — pode ser adicionado como string simples se desejado.
- [ ] `datePublished` / `dateModified` da WebPage — Não incluídos (dependem de definição de quando a LP foi publicada/atualizada; usar data real do deploy).

## 🟢 FAQ

- [x] Seção FAQ presente na LP — 5 perguntas reais incluídas no `FAQPage` do schema.

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — `801365720573789747` (fonte: Pleper export no dossiê)
- [x] `identifier.Google Place ID` — `ChIJmb6HEpXhmwARM8b5heAFHws` (fonte: Pleper export no dossiê)
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=801365720573789747` aplicada (prioridade CID > Place ID > link do perfil, conforme ETAPA 1.6)
- [x] `geo.latitude` / `geo.longitude` — `-22.9155687, -43.5150784`, extraídas diretamente do Pleper (mais precisas que geocodificação manual)
- [x] `name` — Oficial do Google Business Profile: "Dedo de Moça café da roça"
- [x] `alternateName` — Fórmula AG5 aplicada: "Cafeteria Campo Grande RJ - Dedo de Moça café da roça | Café da Manhã | Comida Caseira" (2 categorias-pai: Café da Manhã + Comida Caseira, cobrindo a oferta principal do negócio)
- [x] `areaServed` — Bairro base (Rio da Prata, dentro de Campo Grande) + 5 adjacentes de Campo Grande (Senador Vasconcelos, Santíssimo, Cosmos, Inhoaíba, Paciência), conforme tabela padrão AG5
- [x] `aggregateRating` — 4,7 / 1.773 avaliações, dado real e verificado do Google Business Profile (Pleper)
- [x] `foundingDate` — 2022-03-05 (05/03/2022, conforme dossiê)
- [x] `openingHoursSpecification` — Todos os dias, 7h às 19h, inclusive feriados
- [x] `sameAs` Instagram — `https://www.instagram.com/dedodemoca.daroca/`
- [x] `telephone` — `+5521983866213` (único número disponível — WhatsApp; não há telefone fixo adicional, então não se aplica a estrutura de múltiplos telefones da ETAPA 4.5)
- [x] `FAQPage` — 5 perguntas/respostas reais do site incluídas

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile — já conferido nesta execução.
📌 **Domínio atual**: `http://www.dedodemoca.ag5agencia.site/` (padrão AG5). Se migrar para domínio próprio, rodar find-and-replace em todo o `<head>` (schema, canonical, OG, Twitter) e nos arquivos `robots.txt`, `sitemap.xml` e `llms.txt`.
