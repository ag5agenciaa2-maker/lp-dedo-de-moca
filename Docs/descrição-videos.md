# Catálogo de Vídeos — Dedo de Moça Café da Roça

> Documento gerado automaticamente. Descreve todos os vídeos (.mp4) da pasta `Assets/` para referência, acessibilidade e SEO.
> Atualizado em: 25/07/2026

---

## Nota metodológica

A skill original (`01-Skilll-Descrever-Imagens-e-Videos.md`) foi escrita apenas para arquivos de imagem. Este documento estende o mesmo processo aos 10 arquivos `.mp4` da pasta `Assets/`.

A ferramenta de leitura de imagens (Read) **não suporta reprodução direta de vídeo** — tentar abrir um `.mp4` retorna erro de arquivo binário não suportado. Para não depender apenas do nome do arquivo, foi usada uma ferramenta de linha de comando disponível no ambiente (`ffprobe`/`ffmpeg`) para:

1. Extrair metadados técnicos reais (resolução, duração, taxa de quadros) de cada vídeo — dados objetivos, não inferidos.
2. Extrair 3 frames (início, meio e fim) de cada vídeo e visualizá-los com a ferramenta de leitura de imagens — permitindo uma descrição de conteúdo baseada em evidência visual real, e não apenas em suposição pelo nome do arquivo.

Ainda assim, **o áudio e o movimento entre os frames extraídos não foram avaliados** (ex.: trilha sonora, ritmo dos cortes, presença de fala). Onde a skill original pede nota de limitação para imagens não visualizáveis, aplica-se aqui de forma análoga: *"Conteúdo integral do vídeo (áudio e transições) não avaliado — descrição baseada em metadados técnicos reais e em 3 frames extraídos (início/meio/fim), não na reprodução completa."*

---

## Resumo

| Arquivo atual | Resolução / Duração | Novo nome SEO | Uso atual | Uso recomendado |
|---|---|---|---|---|
| ...grande (10).mp4 | 720×1280 (9:16) · 89,7s | dedo-de-moca-tour-espaco-video-vertical.mp4 | Corresponde ao DEDO_D_1.MP4 citado no Dossiê-Site.md (hero comentado no HTML) | Hero (opção D) — vídeo loop vertical em máscara de arco |
| ...grande-rio+de+janeiro-rj (1).mp4 | 720×1280 (9:16) · 89,7s | dedo-de-moca-tour-espaco-video-vertical-alt.mp4 | Não identificada — duplicata idêntica do vídeo acima | Backup do arquivo do Hero / versão alternativa com nome geolocalizado para SEO |
| ...grande (3).mp4 | 464×832 (9:16) · 21,7s | dedo-de-moca-entrada-guarda-chuvas-video.mp4 | Não identificada | Seção de encantamento (clipe curto do espaço) / Stories Instagram |
| ...grande (4).mp4 | 1024×576 (16:9) · 8,6s | dedo-de-moca-cafe-coado-preparo-video.mp4 | Não identificada | Bento grid cardápio (clipe de preparo do café) |
| ...grande (5).mp4 | 464×832 (9:16) · 22,7s | dedo-de-moca-cafe-coado-servido-mesa-video.mp4 | Não identificada | Bento grid cardápio / seção de encantamento |
| ...grande (6).mp4 | 464×832 (9:16) · 16,0s | dedo-de-moca-guarda-chuvas-vaso-video.mp4 | Não identificada | Seção de encantamento |
| ...grande (7).mp4 | 464×832 (9:16) · 9,9s | dedo-de-moca-atendimento-cafe-coado-video.mp4 | Não identificada | Sobre/Credenciais (atendimento) / depoimentos |
| ...grande (8).mp4 | 464×832 (9:16) · 8,9s | dedo-de-moca-buraco-quente-bacon-video.mp4 | Não identificada | Bento grid cardápio |
| ...grande (9).mp4 | 464×832 (9:16) · 4,6s | dedo-de-moca-vinheta-logo-abertura-video.mp4 | Não identificada | Vinheta de abertura/encerramento institucional (redes sociais, não recomendado para hero) |
| ...grande.mp4 | 576×1024 (9:16) · 33,2s | dedo-de-moca-guarda-chuvas-noite-clientes-video.mp4 | Não identificada | Seção de encantamento (clipe noturno) |

---

## Descrições Detalhadas

### dedo+de+moca+cafe+da+roca-...+grande (10).mp4

**Metadados técnicos:** 720×1280 px (vertical 9:16) · 89,7 segundos · 30 fps.

**Descrição:** Vídeo vertical de tour pelo espaço. No frame inicial, câmera aponta para cima através da folhagem de árvores altas contra o céu azul, com contraluz solar. No frame do meio (~45s), a câmera está sob um teto/cortina de tecido de chita floral rosa e preta, com franjas de sapê penduradas e um poste amarelo ao fundo. No frame final (~89s), a câmera mostra um painel decorativo com o texto do "Pai Nosso" pintado em tábuas coloridas (azul, roxo, laranja, vermelho, verde-água, vermelho escuro) sobre fundo de grama artificial. O conjunto confirma um vídeo de tour guiado pelo espaço, percorrendo diferentes cantos decorados da cafeteria — compatível com a descrição do arquivo `DEDO_D_1.MP4` mencionado no `Docs/Dossiê-Site.md` (720×1280, ~1min30, tour pelo espaço, com áudio). *Conteúdo integral (áudio e transições) não avaliado — descrição baseada nos 3 frames extraídos.*

**Contexto de uso atual:** Corresponde ao vídeo já planejado no Dossiê-Site.md como ativo do Hero (opção D), atualmente comentado no `index.html` (`<!-- <video src="assets/DEDO_D_1.MP4" ...> -->`) e substituído por uma imagem estática (`assets/portal.webp`) até a etapa de finalização.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Hero — vídeo loop vertical 9:16 em máscara de arco (autoplay, muted, loop, playsinline), conforme já especificado no Dossiê-Site.md. É o ativo de vídeo mais forte e completo do cliente (tour pelo espaço inteiro).
- 🥈 **Uso alternativo 1:** Seção de encantamento como vídeo de fundo em loop curto (recortando apenas o trecho dos guarda-chuvas/decoração, se for feito um corte).
- 🥉 **Uso alternativo 2:** Vídeo de destaque no Instagram/Reels do site (se houver embed de redes sociais).
- ⚠️ **Evitar usar em:** Qualquer contexto horizontal ou fullscreen wide — o formato 9:16 exige coluna estreita, como já definido no Dossiê.

**Novo nome sugerido (SEO):** dedo-de-moca-tour-espaco-video-vertical.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo em loop mostrando um tour pelo espaço externo do Dedo de Moça Café da Roça, com árvores, teto de chita floral colorida e decoração artesanal.

---

### dedo+de+moca+cafe+da+roca-...+grande-rio+de+janeiro-rj (1).mp4

**Metadados técnicos:** 720×1280 px (vertical 9:16) · 89,7 segundos · 30 fps.

**Descrição:** Os três frames extraídos (início, meio e fim) são visualmente idênticos aos do arquivo `...grande (10).mp4` acima (mesma árvore contra o céu, mesmo teto de chita floral, mesmo painel do "Pai Nosso"). Duração e resolução também são idênticas. Tudo indica que se trata de uma cópia duplicada do mesmo arquivo de vídeo, apenas com um nome de arquivo diferente (com sufixo geolocalizado "rio+de+janeiro-rj"), possivelmente mantido para fins de SEO local em uma URL diferente. *Conteúdo integral não avaliado — inferência baseada na correspondência exata dos frames e metadados com o vídeo anterior.*



**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Manter como arquivo de backup/alternativo do vídeo do Hero, útil caso se queira usar um nome de arquivo com termo geográfico "rio de janeiro rj" em alguma URL pública (ex.: compartilhamento direto do vídeo) para reforço de SEO local.
- 🥈 **Uso alternativo 1:** Nenhum adicional — por ser duplicata, não há necessidade de usá-lo em dois lugares simultaneamente no site.
- 🥉 **Uso alternativo 2:** Arquivo de origem para gerar um recorte/versão editada (ex.: trecho mais curto para redes sociais), preservando o arquivo original do Hero intacto.
- ⚠️ **Evitar usar em:** Duplicar o mesmo vídeo em duas tags `<video>` diferentes na mesma página — desperdiça banda e carregamento sem ganho visual.

**Novo nome sugerido (SEO):** dedo-de-moca-tour-espaco-video-vertical-alt.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo em loop do tour pelo espaço do Dedo de Moça Café da Roça em Campo Grande, Rio de Janeiro — cópia alternativa do vídeo principal do hero.

---

### dedo+de+moca+cafe+da+roca-...+grande (3).mp4

**Metadados técnicos:** 464×832 px (vertical 9:16) · 21,7 segundos · ~59,9 fps (60000/1001).

**Descrição:** Início: close em um poste de madeira redondo iluminado por sol lateral forte (lens flare visível), com uma etiqueta/adesivo amarelo circular colado na madeira; ao fundo, desfocados, uma fonte de pedra e piso de terra. Meio: forte luz solar direta sobre uma entrada coberta com bandeirinhas coloridas penduradas e guarda-chuva colorido visível no canto superior direito; plantas floridas à esquerda, caminho de pedras à direita. Fim: vista sob um teto de sapê com bandeirinhas vermelha/amarela/azul, franjas escuras penduradas, e ao fundo um casal sentado a uma mesa de madeira, com um painel colorido desfocado atrás. Frame rate quase 60fps sugere possível câmera lenta ou vídeo de celular em modo de alta taxa de quadros. *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção de encantamento — clipe curto complementando as fotos estáticas dos guarda-chuvas e do espaço.
- 🥈 **Uso alternativo 1:** Stories/Reels de Instagram embutidos no site.
- 🥉 **Uso alternativo 2:** Vídeo de fundo em card de "conheça o espaço" na seção Sobre.
- ⚠️ **Evitar usar em:** Hero principal — resolução mais baixa (464×832) que o vídeo principal do Dossiê, perderia nitidez em tela cheia.

**Novo nome sugerido (SEO):** dedo-de-moca-entrada-guarda-chuvas-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo curto da entrada do Dedo de Moça Café da Roça com bandeirinhas coloridas e guarda-chuvas suspensos, luz solar forte.

---

### dedo+de+moca+cafe+da+roca-...+grande (4).mp4

**Metadados técnicos:** 1024×576 px (horizontal 16:9) · 8,6 segundos · 30 fps.

**Descrição:** Único vídeo em formato horizontal do lote. Início: café coado escuro, com vapor visível, sendo servido de coador de pano suspenso sobre xícara verde-menta em pratinho, sobre toalha estampada, dentro de ambiente com luz suave (teto de chita ao fundo desfocado). Meio: mesma cena, vapor subindo intensamente do café dentro da xícara verde-menta, caneca clara com espuma de leite em primeiro plano à direita. Fim: mesma composição de café e vapor, agora com ambiente mais aberto ao fundo (mesas e cadeiras coloridas visíveis). É um clipe de preparo/servida de café, com foco no vapor subindo — ótimo para transmitir "café quentinho recém-coado". *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Bento Grid do cardápio — como vídeo de fundo em loop no card do café coado, sendo o único vídeo horizontal disponível (mais compatível com cards retangulares wide).
- 🥈 **Uso alternativo 1:** Vídeo de poster/preview no card "Nossas delícias".
- 🥉 **Uso alternativo 2:** Segundo vídeo horizontal mencionado como "desejável" no Dossiê-Site.md (item 🟢 da checklist de pendências) — este arquivo já cobre essa lacuna.
- ⚠️ **Evitar usar em:** Hero vertical — formato incompatível com a máscara em arco 9:16 já definida.

**Novo nome sugerido (SEO):** dedo-de-moca-cafe-coado-preparo-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo em loop do preparo de café coado com vapor subindo, servido em xícara verde no Dedo de Moça Café da Roça.

---

### dedo+de+moca+cafe+da+roca-...+grande (5).mp4

**Metadados técnicos:** 464×832 px (vertical 9:16) · 22,7 segundos · 60 fps.

**Descrição:** Início: mão segurando bule de vidro despejando água quente sobre coador de pano posicionado sobre xícara verde-menta, com potinho decorativo de abóbora e torradas com manteiga em primeiro plano. Meio: mesma cena de preparo, vapor visível subindo do coador, ambiente com luz de teto colorido ao fundo desfocado (azul/amarelo). Fim: café pronto pingando, vapor ainda subindo, luminária acesa ao fundo, teto de chita floral visível, cliques laterais de mesas ao fundo. É um clipe de preparo de café ao vivo (bule → coador → xícara), semelhante em tema ao vídeo (4) mas em vertical e com mais duração. *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Bento Grid do cardápio (card vertical de café coado) ou seção de encantamento.
- 🥈 **Uso alternativo 1:** Stories/Reels.
- 🥉 **Uso alternativo 2:** Vídeo de apoio na seção "dor e solução" (café da manhã completo e caseiro).
- ⚠️ **Evitar usar em:** Hero — o vídeo principal do tour já cobre esse espaço; evitar redundância temática (café coado) logo no primeiro scroll.

**Novo nome sugerido (SEO):** dedo-de-moca-cafe-coado-servido-mesa-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo do preparo de café coado com água quente sendo despejada sobre coador de pano no Dedo de Moça Café da Roça.

---

### dedo+de+moca+cafe+da+roca-...+grande (6).mp4

**Metadados técnicos:** 464×832 px (vertical 9:16) · 16,0 segundos · 60 fps.

**Descrição:** Início: close de um vaso decorativo pintado à mão (formato orgânico rosa/verde com flor) pendurado em poste de madeira, com planta clorofito, guarda-chuvas coloridos suspensos contra céu azul ao fundo. Meio: câmera afasta um pouco, mostrando mais guarda-chuvas e área coberta com mesas ao fundo, dia ensolarado. Fim: plano mais aberto dos guarda-chuvas coloridos vistos de baixo com movimento de câmera (panorâmica), pessoas sentadas em mesas visíveis ao fundo desfocadas. Clipe puramente ambiental/decorativo, sem foco em comida. *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção de encantamento com imagens do espaço — complementa perfeitamente as fotos estáticas dos guarda-chuvas com movimento de câmera real.
- 🥈 **Uso alternativo 1:** Vídeo de fundo em card "Sobre o espaço".
- 🥉 **Uso alternativo 2:** Reels/Stories.
- ⚠️ **Evitar usar em:** Cards de cardápio (não mostra produto).

**Novo nome sugerido (SEO):** dedo-de-moca-guarda-chuvas-vaso-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo panorâmico dos guarda-chuvas coloridos suspensos e vaso decorativo artesanal no Dedo de Moça Café da Roça, em dia ensolarado.

---

### dedo+de+moca+cafe+da+roca-...+grande (7).mp4

**Metadados técnicos:** 464×832 px (vertical 9:16) · 9,9 segundos · 60 fps.

**Descrição:** Início: pessoa de camiseta preta (avental colorido visível na cintura) servindo café coado escuro em xícara cor-de-rosa, coador de pano suspenso, mesa com toalha estampada colorida. Meio: mesma cena, agora com um copo de bebida escura (refrigerante tipo cola ou chá mate) visível ao lado da xícara rosa, potinho de abóbora decorativo próximo. Fim: um funcionário (braço levantado, avental listrado visível) traz um prato com fatia de cheesecake com cobertura de morango até uma mesa de madeira, ambiente externo com plantas e vasos ao fundo, outras pessoas sentadas desfocadas. Clipe de atendimento em ação (servindo café + trazendo sobremesa). *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Sobre/Credenciais — reforça visualmente o atendimento acolhedor citado nas avaliações do Google (funcionária Milagros, elogios ao atendimento).
- 🥈 **Uso alternativo 1:** Seção de depoimentos como vídeo de apoio ao lado do marquee de avaliações.
- 🥉 **Uso alternativo 2:** Bento Grid do cardápio (mostra café + sobremesa sendo servidos).
- ⚠️ **Evitar usar em:** OG Image/thumbnail estático — é um vídeo de ação, não um still isolado; extrair um frame perderia o sentido do clipe.

**Novo nome sugerido (SEO):** dedo-de-moca-atendimento-cafe-coado-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo de atendimento no Dedo de Moça Café da Roça, com café coado sendo servido e cheesecake sendo levado à mesa.

---

### dedo+de+moca+cafe+da+roca-...+grande (8).mp4

**Metadados técnicos:** 464×832 px (vertical 9:16) · 8,9 segundos · 60 fps.

**Descrição:** Início: milkshake/bebida de café em copo de vidro trabalhado sobre toalha azul floral, ao fundo desfocado o mesmo tipo de ambiente colorido. Meio e fim: close de um sanduíche/torrada gratinada com queijo derretido coberta por fatias de bacon crocante, com o copo de milkshake de café desfocado ao fundo — foco claro no bacon crocante como elemento principal. Clipe de produto (prato salgado quente). *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Bento Grid do cardápio — item "buraco quente"/torrada com bacon e queijo, prato citado no Dossiê como um dos produtos.
- 🥈 **Uso alternativo 1:** Card de destaque de item salgado.
- 🥉 **Uso alternativo 2:** Stories/Reels de produto.
- ⚠️ **Evitar usar em:** Hero (formato/tema não combina com a abertura do site).

**Novo nome sugerido (SEO):** dedo-de-moca-buraco-quente-bacon-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo de torrada gratinada com queijo derretido e bacon crocante, servida com milkshake de café no Dedo de Moça Café da Roça.

---

### dedo+de+moca+cafe+da+roca-...+grande (9).mp4

**Metadados técnicos:** 464×832 px (vertical 9:16) · 4,6 segundos · 60 fps — o vídeo mais curto do lote.

**Descrição:** Início: prato com aipim cozido sendo levantado/exibido perto de outros pratos. Meio: mão segurando coador de pano suspenso sobre xícara branca com o logotipo colorido "Dedo de Moça Café da Roça" estampado, com fonte de pedra de três níveis desfocada ao fundo (mesmo elemento decorativo visto nas fotos estáticas 11/12/15) e árvores/vegetação ao redor. Fim: tela de encerramento estática — fundo sólido em duas tonalidades de caramelo/dourado com o logotipo "Dedo de Moça Café da Roça" centralizado, sem nenhum outro elemento. Este último frame confirma que o vídeo termina com uma vinheta de assinatura de marca, típica de vídeo institucional curto para redes sociais. *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Vinheta de abertura ou encerramento em vídeos institucionais/promocionais nas redes sociais — não é ideal como vídeo de loop de fundo por conter uma tela de logo estática ao final.
- 🥈 **Uso alternativo 1:** Se cortado (removendo a tela final de logo), o trecho de 0–3s poderia ilustrar um card curto do cardápio.
- 🥉 **Uso alternativo 2:** Elemento de transição entre seções do site, caso o site use vídeos como micro-interação.
- ⚠️ **Evitar usar em:** Hero ou qualquer loop contínuo sem edição prévia — a tela final de logo estático quebraria a experiência de vídeo-loop ambiental esperada pelas outras seções.

**Novo nome sugerido (SEO):** dedo-de-moca-vinheta-logo-abertura-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo curto institucional do Dedo de Moça Café da Roça com café coado e fonte de pedra, finalizando com o logotipo da marca.

---

### dedo+de+moca+cafe+da+roca-...+grande.mp4

**Metadados técnicos:** 576×1024 px (vertical 9:16) · 33,2 segundos · 30 fps.

**Descrição:** Início: interior iluminado por luz artificial quente, com uma tigela laranja de aipim cozido sendo erguida em primeiro plano, fundo desfocado com trepadeiras verdes penduradas e um caminho de tapete de crochê colorido na mesa em primeiro plano. Meio: mão segurando coador de pano suspenso sobre uma xícara branca com o logotipo "Dedo de Moça Café da Roça" estampado, ao fundo (mais nítido que no vídeo anterior) uma fonte de pedra de três níveis, árvores altas com trepadeiras e um painel decorativo colorido à direita — cena noturna/de fim de tarde com iluminação artificial. Fim: tela de encerramento idêntica à do vídeo (9) — fundo caramelo/dourado com o logotipo "Dedo de Moça Café da Roça" centralizado. Este vídeo parece ser uma versão mais longa (ou a fonte original) do clipe (9), com a mesma cena de café coado + fonte de pedra e a mesma vinheta final de logo. *Conteúdo integral não avaliado.*

**Contexto de uso atual:** Não identificada no HTML.

**Sugestões de uso no site:**
- 🥇 **Uso principal recomendado:** Seção de encantamento (ambiente noturno com fonte de pedra) — se a tela final de logo for cortada em edição.
- 🥈 **Uso alternativo 1:** Vídeo institucional para redes sociais/Linktree, já que termina com vinheta de marca.
- 🥉 **Uso alternativo 2:** Fonte para gerar um recorte de 3-5s reaproveitável em cards do site.
- ⚠️ **Evitar usar em:** Hero em loop contínuo sem edição — mesma ressalva do vídeo (9): a tela de logo estática ao final interrompe a experiência de vídeo ambiental.

**Novo nome sugerido (SEO):** dedo-de-moca-guarda-chuvas-noite-clientes-video.mp4

**Descrição alternativa/acessibilidade para `<video>`:** Vídeo do Dedo de Moça Café da Roça à noite, com café coado, aipim cozido e fonte de pedra iluminada, finalizando com o logotipo da marca.

---

## Instruções de Renomeação

Lista dos comandos de renomeação a serem executados (apenas para referência — **NÃO executar sem confirmação do usuário**):

```bash
# Renomear vídeos (Assets/)
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (10).mp4" "Assets/dedo-de-moca-tour-espaco-video-vertical.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande-rio+de+janeiro-rj (1).mp4" "Assets/dedo-de-moca-tour-espaco-video-vertical-alt.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (3).mp4" "Assets/dedo-de-moca-entrada-guarda-chuvas-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (4).mp4" "Assets/dedo-de-moca-cafe-coado-preparo-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (5).mp4" "Assets/dedo-de-moca-cafe-coado-servido-mesa-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (6).mp4" "Assets/dedo-de-moca-guarda-chuvas-vaso-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (7).mp4" "Assets/dedo-de-moca-atendimento-cafe-coado-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (8).mp4" "Assets/dedo-de-moca-buraco-quente-bacon-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande (9).mp4" "Assets/dedo-de-moca-vinheta-logo-abertura-video.mp4"
mv "Assets/dedo+de+moca+cafe+da+roca-...+grande.mp4" "Assets/dedo-de-moca-guarda-chuvas-noite-clientes-video.mp4"
```

> ⚠️ Nomes de arquivo abreviados com "..." acima para legibilidade — usar o nome completo real do arquivo ao executar os comandos.
> ⚠️ Antes de renomear, recomenda-se ao cliente/usuário decidir se deseja: (a) manter os dois vídeos de 89,7s por serem idênticos, ou (b) descartar a cópia duplicada; e (b) editar os vídeos (9) e "grande.mp4" para remover a tela final de logo estático antes de usá-los como loop de fundo.
