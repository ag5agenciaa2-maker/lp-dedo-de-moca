COMANDO PARA CRIAÇÃO DO SITE

Quero que você crie o Site institucional "Roça Editorial Colorida" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.

REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.

IDENTIDADE VISUAL BASE:

Paleta:

--marrom-cacau: #7C3E1E (primária — lettering do logotipo)
--marrom-escuro: #4A2412 (texto/rodapé)
--caramelo: #D0A070 (secundária — moldura circular do logo)
--amarelo-milho: #FFD030 (acento 1)
--vermelho-cereja: #D02030 (acento 2 — CTA)
--verde-folha: #7E9440 (acento 3)
--laranja-terra: #F08020 (acento 4)
--creme: #F7F4EE (fundo base)
--areia: #EDE3D4 (fundo alternado de seção)

Tipografia:

Títulos: Fraunces (variable, eixo SOFT alto / opsz 144) — pesos 600 e 900
Corpo: Karla — pesos 400 e 600
Display de acento (apenas marquee e numerais grandes): Caprasimo — peso 400
Todas via Google Fonts

Estilo: Editorial rural festivo — base creme com blocos de cor sólida, tipografia serif suave de grande escala, moldura em arco (como a moldura circular do logo) recortando fotos, confetes vetoriais em SVG (folhas, grãos de café, bandeirinhas) posicionados como elementos decorativos. Cantos arredondados generosos (24–48px) em cards e mídias.

Sensação: Acolhimento de casa de vó + festa ao ar livre. Cheiroso, colorido, sem pressa, familiar, feito à mão. Nunca "specialty coffee minimalista", nunca marrom monocromático moody.

LAYOUT ESCOLHIDO:

Hero: opção D — Vídeo loop + texto com máscara de cor. Vídeo real vertical 9:16 (DEDO_D_1.MP4, 720×1280, 1min30 — tour pelo espaço) em autoplay muted loop playsinline, ocupando 42% à direita dentro de uma máscara em arco superior (border-radius: 50% 50% 24px 24px / 30% 30% 24px 24px), com moldura sólida de 10px em --caramelo replicando o círculo do logotipo. À esquerda (58%), título em Fraunces 900 com clamp(3rem, 6.5vw, 6.5rem) em duas linhas, onde a segunda linha recebe máscara de cor animada: um bloco --amarelo-milho que varre da esquerda para a direita revelando o texto em --marrom-cacau. Abaixo: subtítulo em Karla, dois botões (Ver o cardápio / Como chegar) e uma linha de dados (⏰ Todos os dias 7h–19h · ⭐ 4,7 no Google). Fundo --creme com 3 folhas SVG em --verde-folha a 12% de opacidade.
Serviços/Cardápio: opção A — Bento Grid com cards de tamanhos variados. Grid de 12 colunas com 6 blocos: 1 card grande 6×2 (foto real da mesa com café coado + aipim + bolinho), 2 cards 3×1, 1 card 3×2 vertical, 1 card de cor sólida --vermelho-cereja só com tipografia (sem foto), 1 card 6×1 horizontal. Gap de 20px, border-radius: 28px, cada card com um selo circular numerado no canto superior esquerdo em cor rotativa da paleta.
Depoimentos: opção A — Marquee infinito horizontal. Duas faixas de cards deslizando em direções opostas (linha 1 → esquerda, linha 2 → direita), velocidade 48s e 62s, animation-play-state: paused no hover. Cards de 380px com aspas em Caprasimo 4rem em --caramelo, texto, nome e 5 estrelas em --amarelo-milho. Acima do marquee, bloco com logo oficial do Google + nota 4,7 em Fraunces 900 tamanho 5rem.
Sobre/Credenciais: opção C — Foto grande com texto sobreposto em camadas. Foto real do portal de entrada (placa de madeira "Dedo de Moça Café da Roça") em altura 88vh com object-fit: cover, sobreposta por dois blocos de texto deslocados: um card creme rotacionado -1.5° ancorado à esquerda com a história, e um selo circular --caramelo de 160px sobreposto na quina inferior direita com "Todos os dias · 7h às 19h".

ANIMAÇÕES DO PROJETO (do breakdown Webflow):

Máscara do título hero → bloco de cor de scaleX(0) origem esquerda para scaleX(1) em 900ms, easing: cubic-bezier(0.76, 0, 0.24, 1), trigger: load (delay 250ms), stagger: não
Linhas do título hero → de translateY(110%) + clip-path: inset(0 0 100% 0) para translateY(0) + inset(0 0 0 0) em 800ms, easing: cubic-bezier(0.22, 1, 0.36, 1), trigger: load, stagger: sim (120ms entre linhas)
Máscara em arco do vídeo hero → de scale(0.92) + opacity 0 para scale(1) + opacity 1 em 1100ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: load (delay 400ms), stagger: não
Navbar → de background: transparent + height 96px para background: rgba(247,244,238,.94) + backdrop-filter: blur(12px) + height 68px + box-shadow 0 4px 24px rgba(74,36,18,.10) em 320ms, easing: ease-out, trigger: scroll > 80px, stagger: não
Cards do bento grid → de translateY(48px) + opacity 0 + scale(0.97) para translateY(0) + opacity 1 + scale(1) em 700ms, easing: cubic-bezier(0.22, 1, 0.36, 1), trigger: scroll (IntersectionObserver, threshold 0.18), stagger: sim (90ms)
Selos numerados dos cards → de rotate(-18deg) + scale(0) para rotate(0) + scale(1) em 500ms, easing: cubic-bezier(0.34, 1.56, 0.64, 1), trigger: scroll (junto ao card pai, delay 200ms), stagger: sim (90ms)
Foto da seção Sobre → de clip-path: inset(0 0 0 100%) para inset(0 0 0 0) em 1000ms, easing: cubic-bezier(0.76, 0, 0.24, 1), trigger: scroll (threshold 0.25), stagger: não
Card de texto sobreposto (Sobre) → de translateX(-40px) + opacity 0 para translateX(0) + opacity 1 em 750ms, easing: cubic-bezier(0.22, 1, 0.36, 1), trigger: scroll (delay 350ms), stagger: não
Nota 4,7 do Google → contador numérico de 0.0 para 4.7 em 1400ms, easing: easeOutExpo via requestAnimationFrame, trigger: scroll (threshold 0.5), stagger: não
Estrelas do bloco Google → de scale(0) + opacity 0 para scale(1) + opacity 1 em 380ms, easing: cubic-bezier(0.34, 1.56, 0.64, 1), trigger: scroll, stagger: sim (80ms)
Marquee de depoimentos → translateX(0) para translateX(-50%) em 48000ms (linha 1) e 62000ms (linha 2, sentido inverso), easing: linear, trigger: load infinito, stagger: não
Barra horizontal de palavras → translateX(0) para translateX(-50%) em 26000ms, easing: linear, trigger: load infinito, stagger: não
Itens do FAQ → altura de 0 para scrollHeight + ícone rotate(0) para rotate(45deg) em 380ms, easing: cubic-bezier(0.4, 0, 0.2, 1), trigger: click, stagger: não
Folhas/grãos decorativos SVG → translateY(0) para translateY(-14px) em 6000ms alternando infinito, easing: ease-in-out, trigger: load, stagger: sim (por elemento, delay aleatório 0–2000ms)
Botões primários → de background: --vermelho-cereja para background: --marrom-cacau + translateY(-3px) + box-shadow 0 10px 22px rgba(208,32,48,.28) em 260ms, easing: ease-out, trigger: hover, stagger: não

SEÇÕES OBRIGATÓRIAS (intercalar):

Navbar
Hero [opção D — vídeo loop vertical em arco + texto com máscara de cor]
Barra animada horizontal (marquee de palavras)
Seção de alto impacto: dor e solução do público-alvo
Cardápio/Nossas delícias [opção A — Bento Grid]
Seção de encantamento com imagens do espaço (as 3 fotos dos guarda-chuvas coloridos em grid de altura variada + parallax leve)
Sobre/Credenciais [opção C — foto grande do portal com texto sobreposto em camadas]
Bloco de avaliações Google (logo oficial + nota 4,7 + estrelas animadas)
Depoimentos [opção A — marquee infinito horizontal em duas faixas]
FAQ
Localização: endereço + mapa incorporado + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Nome → link do Google Business PENDENTE — usar # provisório e substituir
Endereço → https://www.google.com/maps/dir/?api=1&destination=Estrada+do+Viegas,+80+-+Rio+da+Prata,+Campo+Grande+-+RJ,+23017-370
WhatsApp → https://wa.me/5521983866213 (número não confirmado pelo cliente — validar antes do deploy)
Instagram → https://www.instagram.com/dedodemoca.daroca/
Linktree → https://linktr.ee/dedodemocacafedaroca

CRÉDITOS:

Esquerda: © Dedo de Moça café da roça 2026
Direita: Desenvolvido por AG5 Agência (AG5 em destaque em --marrom-cacau, link para www.ag5agencia.com.br)

DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza
Sem 3 colunas de ícone + título + texto
Específico deste nicho: sem estética "specialty coffee" monocromática (marrom sobre kraft, foto de grão em close, latte art em fundo escuro), sem ícones de xícara em linha fina, sem cardápio em lista de preços com linha pontilhada. O diferencial visual real do cliente é a explosão de cor dos guarda-chuvas — a cor tem que estar no layout, não só nas fotos.

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções (#inicio, #cardapio, #espaco, #sobre, #avaliacoes, #depoimentos, #faq, #localizacao, #contato)
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries (breakpoints 480 / 768 / 1024 / 1280)
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion: reduce) desligando marquees e reveals, loading="lazy" em todas as imagens abaixo da dobra
Vídeo com poster (usar a foto da fachada), preload="metadata", playsinline
Formulário com validação real (nome, telefone com máscara, mensagem) e feedback inline

OPCIONAL ATIVADO:

Barra animada horizontal: CAFÉ COADO ☕ PÃO DE QUEIJO 🌿 CHEIRINHO DE CASA DE VÓ ☕ RIO DA PRATA 🌿 CAMPO GRANDE ☕ TODOS OS DIAS 7h–19h em Caprasimo sobre fundo --vermelho-cereja, texto --creme
Seção de avaliações Google com logo oficial e cards animados: SIM
1 — MÍDIAS PRINCIPAIS
Tipo	Status	Arquivo
Foto da fachada	✅ 1 foto	..._1_.png — portal de madeira com placa entalhada "Dedo de Moça Café da Roça", portões vermelhos, bicicleta decorativa, caminho de pedras (965×1630, retrato)
Fotos internas	✅ 3 fotos	..._8_.jpeg (noite — guarda-chuvas coloridos suspensos, teto de chita floral, varal de fitas, clientes nas mesas) · ..._6_.jpeg (anoitecer — guarda-chuvas em primeiro plano, balcão alto, painéis coloridos, clientes) · ..._38_.jpeg (entardecer — guarda-chuvas + quiosque de sapê, rede vermelha, bancos de tronco, balões juninos)
Foto de produto	✅ 1 foto	..._1_.jpeg — café coado em xícara de vidro, aipim cozido, bolinhos, toalha floral, ambiente ao fundo
Fotos da equipe	❌ Ausente	→ pendência
Fotos dos proprietários	❌ Ausente	→ pendência
Vídeo	✅ 1 vídeo	DEDO_D_1.MP4 — 720×1280 (vertical 9:16), 1min30s, tour pelo espaço, com áudio
Logotipo	✅	Logotipo.jpeg — lettering marrom com miolos coloridos, frutos/folhas ilustrados, moldura circular caramelo, tagline "CAFÉ ☕ DA ROÇA"
Print do Instagram	✅	Perfil @dedodemoca.daroca para extração de dados

Direcionamento de seções conforme quantidade de mídia:

5 fotos + 1 vídeo → o vídeo é o herói (formato vertical pede coluna estreita, não fundo fullscreen). A fachada vai para Sobre (opção C). As 3 fotos do espaço formam a seção de encantamento. A única foto de produto ocupa o card grande do bento grid.
Lacuna crítica: apenas 1 foto de comida para uma cafeteria. O bento grid precisará de 4–5 imagens Unsplash de apoio (café coado, pão de queijo, bolo caseiro, mesa de café da manhã) até o cliente enviar o material real. Prioridade máxima na coleta.
2 — INFORMAÇÕES DA EMPRESA

Nome: Dedo de Moça café da roça
Nicho: Cafeteria / café da manhã e lanches · comida caseira brasileira · espaço ao ar livre com temática rural
Descrição institucional: Cafeteria ao ar livre em Rio da Prata, Campo Grande (Zona Oeste do Rio), montada em torno de um pátio de terra batida com quiosques de sapê, mesas e bancos de tronco, redes, plantas e um teto de guarda-chuvas coloridos suspensos. Serve café da manhã, lanches e comida caseira o dia inteiro, todos os dias.
Proposta de valor: "Cheirinho de casa de vó" — a experiência de um fim de semana na roça sem sair da cidade. Comida caseira, atendimento acolhedor e um cenário visualmente memorável.
Público-alvo: Famílias da Zona Oeste em programa de fim de semana; casais e grupos de amigos buscando café da manhã diferente; público 25–50 anos que fotografa e compartilha experiências; moradores do Rio inteiro dispostos a se deslocar por um destino gastronômico; turistas em rota pela região do Parque Estadual da Pedra Branca / Rio da Prata.
Principais produtos (observados no Instagram e em conteúdo de visitantes — carecem de confirmação do cliente): café coado tradicional, cappuccino da casa, chocolate quente com marshmallow, sucos naturais, pão de queijo, croissant recheado, waffle com frutas, rabanada, cuscuz, aipim cozido com café, bolinho de chuva, baguete de linguiça mineira, buraco quente, torradas, escondidinho.
Diferenciais: (1) Cenografia única — teto de guarda-chuvas coloridos, decoração artesanal, chita, plantas, redes; (2) ambiente ao ar livre integrado à natureza; (3) funciona todos os dias das 7h às 19h, incluindo feriados; (4) atendimento repetidamente elogiado nas avaliações; (5) forte reconhecimento digital — 101 mil seguidores e perfil verificado no Instagram, cobertura recorrente de perfis de gastronomia do Rio; (6) ações comunitárias e eventos sazonais (Arraiá, caminhada ecológica solidária com arrecadação de leite em pó).
História: ❌ Não informada → pendência.

Contato

Telefone/WhatsApp: (21) 98386-6213 — ⚠️ fonte terceira (agregador), não confirmado
E-mail: ❌ ausente
Endereço: Estrada do Viegas, 80 — Rio da Prata, Campo Grande, Rio de Janeiro/RJ — CEP 23017-370
Cidade/Estado: Rio de Janeiro — RJ
Horário: Todos os dias, 7h às 19h (fonte: bio oficial do Instagram)
Estacionamento: rua, gratuito; visitantes relatam dificuldade de vaga (fonte: avaliação em agregador)

Links

Site atual: ❌ inexistente (este é o primeiro)
Instagram: @dedodemoca.daroca — 101 mil seguidores · 557 posts · perfil verificado
Linktree: linktr.ee/dedodemocacafedaroca
Facebook / LinkedIn / TikTok oficial: ❌ não confirmados
Google Business: perfil existe (nota agregada disponível), URL direta não confirmada
Destaques do Instagram já estruturados: Trabalhe conosco · Nossas delícias · Cardápio · Funcionamento · Pagamento · WhatsApp · Localização → ótima base de arquitetura de conteúdo para o site

Documentação

CNPJ: ❌ ausente
Registro profissional: não aplicável ao nicho (verificar alvará sanitário se o cliente quiser exibir)
3 — AVALIAÇÕES

Plataforma: Google
Nota média: 4,7 ✅ (confirmada via agregador Restaurant Guru)
Total de avaliações: ❌ não confirmado → pendência

⚠️ Aviso metodológico: não foi possível acessar o perfil do Google Business diretamente — os agregadores bloqueiam leitura automatizada e o TripAdvisor do estabelecimento está sem avaliações. Os únicos depoimentos recuperáveis vieram de agregador, sem nome completo, sem data e sem nota individual, o que impede montar a lista em ordem decrescente de estrelas conforme o padrão AG5.

Conteúdo recuperado (substância, para orientar a curadoria — não usar como texto final):

⭐ (nota individual não informada) — cliente elogia ter tido a expectativa superada: destaca a comida, a música ambiente, a recepção e nominalmente o atendimento da colaboradora Milagros, descrita como paciente e carismática. Diz que voltará e que valeu o valor gasto.
⭐ (nota individual não informada) — cliente recorrente: relata ter ido três vezes no mesmo mês, com pessoas diferentes. Elogia o preparo e a simpatia da equipe, a fartura das porções, a apresentação dos pratos e o preço acessível.

Sinais complementares de avaliação (metadados de agregador):

Ticket médio relatado por visitantes: R$ 40–60 e R$ 60–80 por pessoa
Pratos recomendados citados: waffle de Nutella com morango; baguete de linguiça mineira
Notas por critério em uma avaliação: Comida 5 · Serviço 5 · Ambiente 5
Estacionamento: gratuito na rua, com dificuldade de vaga

➡️ AÇÃO OBRIGATÓRIA: o cliente (ou a AG5, logada no perfil) deve exportar de 8 a 12 avaliações reais do Google com nome do autor, tempo, nota em estrelas e texto integral, removendo apenas as respostas do proprietário. O layout escolhido (marquee infinito em duas faixas) precisa de no mínimo 8 depoimentos para não repetir visivelmente. Enquanto isso não chegar, a seção de depoimentos não deve ir ao ar.

4 — ANÁLISE DE BRANDING

Nicho: Cafeteria / café da roça / gastronomia experiencial ao ar livre

Posicionamento: Médio com forte ativo experiencial. Preço acessível a médio (R$ 40–80 por pessoa), comida caseira sem pretensão gourmet, mas com um capital de marca desproporcional ao porte: 101 mil seguidores, perfil verificado, cenografia autoral e cobertura editorial espontânea. Não é premium por preço — é premium por experiência e por marca. O site precisa comunicar isso: nem "barzinho de bairro", nem "cafeteria de especialidade minimalista".

Estilo visual predominante: Editorial artesanal / vernacular brasileiro colorido. É o oposto do minimalismo. Referências formais: chita, festa junina, feira de artesanato, tipografia de placa pintada à mão, empilhamento de cor. O tratamento moderno vem da estrutura (grid editorial, escala tipográfica agressiva, whitespace generoso), não da paleta — a paleta é onde a alegria mora.

Paleta recomendada (extraída do logotipo via análise Pillow em dois passos):

Papel	Hex	Origem
Primária	
#7C3E1E	Marrom cacau do lettering (12,7% dos pixels vívidos)
Primária escura	
#4A2412	Derivada — texto e rodapé
Secundária	
#D0A070	Caramelo da moldura circular (43,5k pixels — cor dominante do logo)
Acento 1	
#FFD030	Amarelo do miolo do "O"
Acento 2	
#D02030	Vermelho dos frutos
Acento 3	
#7E9440	Verde das folhas
Acento 4	
#F08020	Laranja do miolo do "e"
Neutro base	
#F7F4EE	Fundo do logotipo
Neutro alternado	
#EDE3D4	Derivado do caramelo dessaturado

Tipografia recomendada:

Fraunces (títulos) — serif variável com eixo soft/wonk, tem o mesmo DNA arredondado e levemente irregular do lettering do logo, sem cair no infantil
Karla (corpo) — grotesca humanista, contrapeso sóbrio que dá legibilidade e evita que a página vire cartaz
Caprasimo (display de acento, uso restrito) — pesada e arredondada, para marquee e numerais grandes; ecoa placa pintada à mão

Direção estética: Base creme respirada, seções alternando --creme e --areia, blocos de cor sólida chapada como pontuação (nunca gradiente), fotos recortadas em arco (citação direta da moldura circular do logo), confetes vetoriais discretos (folhas, grãos, bandeirinhas) em baixa opacidade, cantos muito arredondados, leve rotação (-1,5° a 2°) em cards isolados para tirar a rigidez do grid.

Sensação de marca: Acolhedora, calorosa, festiva, feita à mão, sem pressa, familiar. O usuário deve sair do site com vontade de ir, não de "pedir por delivery".

Referências de marcas premium do mesmo nicho (para o construtor calibrar o nível de execução, não a paleta):

Coffee Lab (SP) — construção de autoridade de marca em cafeteria brasileira
Padoca do Maní (SP) — comida caseira apresentada com acabamento editorial
Casa Cavia / Café Tortoni (BA, ARG) — patrimônio e atmosfera como argumento de venda
Tartine Bakery (SF) — fotografia de produto elevada sobre estrutura simples
Farm/Adoro Farm (RJ) — referência nacional de como usar cor vernacular brasileira com acabamento sofisticado; é a referência mais próxima do desafio deste projeto
5 — CHECKLIST DE PENDÊNCIAS

🔴 Bloqueantes (site não sobe sem isso)

 Confirmação do telefone/WhatsApp (21) 98386-6213 — hoje vem de fonte terceira
 8 a 12 avaliações do Google com nome, tempo, estrelas e texto integral
 URL direta do perfil do Google Business (para o link do nome no rodapé)
 Cardápio oficial — nomes corretos dos itens e definição sobre exibir ou não preços
 Fotos de comida — mínimo 6 fotos de produto em boa luz (hoje existe apenas 1)

🟡 Importantes

 E-mail institucional
 CNPJ e razão social (para o rodapé)
 Foto(s) da equipe e do(s) proprietário(s)
 História da marca — quando abriu, por quem, de onde vem o nome "Dedo de Moça"
 Texto sobre a política de eventos (aniversários, grupos, reservas)
 Confirmação de formas de pagamento (existe destaque "Pagamento" no Instagram)
 Confirmação de aceitação de pets (há fotos de cachorro no perfil)
 Existe estacionamento próprio? Avaliação menciona dificuldade de vaga
 Perfis oficiais no Facebook e TikTok, se houver

🟢 Desejáveis

 Versão do logotipo em vetor (SVG/AI) — hoje só há JPEG
 Foto da fachada em orientação paisagem (a atual é retrato, limita o uso)
 Fotos em luz de dia do pátio (as atuais são todas de fim de tarde/noite)
 Segundo vídeo, horizontal, para uso alternativo
 BASE_CONHECIMENTO_AG5.md — anexar na próxima sessão
6 — ANÁLISE DE REFERÊNCIAS WEBFLOW

Ambos os templates foram localizados via marketplace Webflow e acessados na URL de preview ao vivo, com leitura da página Home (não da landing de vendas). URLs verificadas e funcionais.

TEMPLATE 1 — Caffeine X (BRIX Templates)

Preview ao vivo: https://caffeinetemplate.webflow.io/home
Marketplace: https://webflow.com/templates/html/caffeine-x-coffee-shop-website-template

HERO: Composição centralizada em coluna única, proporção vertical aproximada 100vh, com o logotipo em SVG grande posicionado acima do H1 como elemento de marca (não como ícone de nav). Ordem: logo → H1 → parágrafo curto → CTA único ("Explore our menu"). O elemento diferenciador são grãos de café em SVG flutuando nos quatro cantos e uma onda vetorial de borda (vector-bottom) que separa o hero da seção seguinte em vez de um corte reto. Entrada: logo aparece primeiro, título sobe, parágrafo e botão em sequência.

NAV: Barra superior com logo à esquerda, links centrais (Home / About / Shop / Pages / Blog) e um bloco de ação à direita com CTA "Our menu" + ícone de carrinho com contador. Dropdown "Pages" em painel amplo, com colunas separadas para páginas principais e utilitárias. Ao rolar, o header fixa e ganha fundo sólido.

TIPOGRAFIA: Serif de exibição para H1/H2 em caixa alta suave, tamanho aproximado 4–5rem no desktop; kickers em caixa baixa e corpo pequeno (welcome to Caffeine, why us, our menu) funcionando como rótulo de seção acima de todo H2 — padrão consistente na página inteira. Corpo em sans neutra, ~1rem, altura de linha generosa.

CORES: (o template original usa marrom/creme — para este projeto, substituir integralmente pela paleta do branding Dedo de Moça: 
#7C3E1E, 
#D0A070, 
#FFD030, 
#D02030, 
#7E9440, 
#F08020, 
#F7F4EE, 
#EDE3D4)

SERVIÇOS/CARDS: Dois sistemas distintos. (a) Bloco "why us" em 3 colunas com ícone SVG customizado + H3 + parágrafo. (b) Cardápio em grid filtrado por abas — três categorias (drinks / meals / desserts), cada item como card com imagem, nome, descrição curta e preço; 6 itens visíveis por categoria em grid de 3 colunas × 2 linhas. Acima do cardápio existe uma galeria em mosaico de 5 imagens de tamanhos diferentes ("Experience a new way to taste coffee") — é o elemento mais aproveitável e a origem direta da escolha de Bento Grid deste projeto.

ANIMAÇÕES (formato técnico — especificação AG5 derivada do padrão observado):

Elementos do hero → de opacity 0 + translateY(28px) para opacity 1 + translateY(0) em 700ms, easing: cubic-bezier(0.22,1,0.36,1), trigger: load, stagger: sim (140ms)
Imagens do mosaico → de opacity 0 + scale(0.96) para opacity 1 + scale(1) em 800ms, easing: ease-out, trigger: scroll, stagger: sim (110ms)
Colunas "why us" → de translateY(40px) + opacity 0 para estado neutro em 650ms, easing: ease-out, trigger: scroll, stagger: sim (120ms)
Troca de abas do cardápio → grid de opacity 0 para opacity 1 em 300ms, easing: ease, trigger: click, stagger: não
Grãos decorativos → oscilação translateY(0 → -10px) em 5000ms alternando, easing: ease-in-out, trigger: load infinito, stagger: sim

MICRO-INTERAÇÕES: Cards de produto elevam levemente e a imagem sofre leve zoom no hover; botões trocam de preenchimento; links de nav ganham sublinhado. Sem cursor customizado.

ELEMENTOS DECORATIVOS: Vocabulário decorativo denso e sistemático — grãos de café SVG (canto superior esquerdo, canto inferior direito de quase toda seção), flor, saco de grãos, planta de café, e ondas vetoriais de topo e base que separam seções. Rodapé com quatro elementos decorativos ancorados nas quinas.

RESUMO CONSTRUTIVO: Para recriar este estilo, adote o padrão kicker + H2 serif grande + parágrafo em toda seção, e trate as separações entre seções como bordas orgânicas em SVG em vez de linhas retas. Espalhe de 2 a 4 ícones vetoriais temáticos por seção, sempre ancorados nas quinas em baixa opacidade e com oscilação lenta. Use um mosaico de imagens de tamanhos desiguais como peça central da apresentação de produto e reserve o grid regular para os itens do cardápio. Substitua o marrom/creme do original pela paleta completa do Dedo de Moça, promovendo os acentos amarelo/vermelho/verde a blocos de cor chapada — é justamente isso que quebra a genericidade do template original.

TEMPLATE 2 — Foodbuffet X (BRIX Templates)

Preview ao vivo: https://foodbuffettemplate.webflow.io/home-pages/home-v1
Marketplace: https://webflow.com/templates/html/foodbuffetx-website-template

HERO: Hero fullscreen com imagem de fundo e conteúdo alinhado à esquerda, proporção de conteúdo aproximada 55/45. Ordem vertical: kicker ("Welcome to…") → H1 grande em duas linhas → parágrafo → dois botões lado a lado (primário "Reserve" + secundário "Browse menu"). Diferenciador: seta de scroll ancorada na base e uma forma vetorial branca de borda inferior que faz a transição para a seção seguinte.

NAV: Header com logo centralizado no topo e links divididos nos dois lados; menu de páginas em dropdown de painel largo; ícone de carrinho com contador à direita. Header transparente sobre o hero, ganhando fundo ao rolar.

TIPOGRAFIA: Contraste alto entre um H1 muito grande (~4,5–6vw) e um corpo pequeno e neutro. Kickers em caixa alta com tracking aberto. H2 de seção mantêm escala grande e curta ("About us", "Browse our Menu", "What our clients say", "Our articles", "Book your table now") — títulos de duas a três palavras, o que sustenta o ritmo editorial da página.

CORES: (original em vermelho/preto/creme — substituir integralmente pela paleta do branding Dedo de Moça, aproveitando que a estrutura já é construída para um acento vermelho forte: 
#D02030 assume esse papel)

SERVIÇOS/CARDS: Três padrões encadeados. (a) Categorias em 4 cards horizontais com marcador circular colorido + título + descrição curta, todos linkando para a âncora do cardápio. (b) Grid de produtos 4 × 2 com imagem, nome, preço em destaque e descrição. (c) Bloco "About us" em split 50/50 com imagem grande de um lado e texto + dois CTAs + dados de contato do outro. (d) Ao final, grid de Instagram com 5 imagens de larguras desiguais — recurso extremamente relevante para este cliente, que tem 101 mil seguidores.

ANIMAÇÕES (formato técnico — especificação AG5 derivada do padrão observado):

Bloco de conteúdo do hero → de translateY(36px) + opacity 0 para neutro em 750ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load, stagger: sim (150ms)
Seta de scroll → translateY(0 → 10px → 0) em 1600ms, easing: ease-in-out, trigger: load infinito, stagger: não
Cards de categoria → de translateY(44px) + opacity 0 para neutro em 680ms, easing: ease-out, trigger: scroll, stagger: sim (100ms)
Cards de produto → de opacity 0 + scale(0.97) para neutro em 700ms, easing: cubic-bezier(0.22,1,0.36,1), trigger: scroll, stagger: sim (80ms)
Slider de depoimentos → transição horizontal translateX em 600ms, easing: ease-in-out, trigger: autoplay + arraste, stagger: não
Grid do Instagram → de opacity 0 para opacity 1 em 500ms, easing: ease, trigger: scroll, stagger: sim (70ms)

MICRO-INTERAÇÕES: Cards de produto com elevação e zoom de imagem no hover; botões primários invertem preenchimento e contorno; imagens do Instagram escurecem com ícone sobreposto no hover. Sem cursor customizado.

ELEMENTOS DECORATIVOS: Sistema mais contido que o Caffeine X: formas orgânicas de fundo em SVG (versões clara e escura) repetidas como divisórias e ancoradas atrás dos títulos de seção, mais marcadores circulares coloridos nos cards de categoria. A decoração é estrutural — divide seções — em vez de ilustrativa.

RESUMO CONSTRUTIVO: Para recriar este estilo, construa a página como uma sequência de blocos alternando fundo claro e fundo em cor sólida, sempre separados por uma forma orgânica vetorial em vez de borda reta. Mantenha os títulos de seção curtos (duas a três palavras) em escala muito grande e deixe a informação detalhada para o corpo pequeno logo abaixo. Use dois CTAs pareados em todo bloco de conversão (um sólido, um contornado). Feche a página com um grid de Instagram de larguras desiguais linkando para o perfil — no caso do Dedo de Moça, com 101 mil seguidores, essa seção é prova social de peso e deve substituir o bloco de blog do original. Aplique a paleta do branding do cliente, promovendo 
#D02030 ao papel de acento estrutural que o vermelho ocupa no template original.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT — ESCOLHAS REGISTRADAS
Categoria	Escolha	Justificativa
HERO	[X] D) Vídeo loop + texto com máscara de cor	O único vídeo disponível é vertical 9:16 de 1min30 mostrando o tour do espaço — é o ativo mais forte do cliente e o formato pede coluna estreita em máscara de arco, não fundo fullscreen. A máscara de cor no título injeta a paleta logo no primeiro scroll.
SERVIÇOS	[X] A) Bento Grid com cards de tamanhos variados	Cardápio de cafeteria tem itens de importâncias diferentes; o bento permite hierarquizar (café coado grande, itens menores ao redor) e absorve bem a mistura de foto real + Unsplash enquanto o material fotográfico não chega. Deriva do mosaico observado no Caffeine X.
DEPOIMENTOS	[X] A) Marquee infinito horizontal	Rompe com o carrossel fade + nota Google que já é padrão recorrente nos projetos AG5. O movimento contínuo em duas faixas opostas conversa com a energia festiva do espaço. A nota 4,7 e o logo do Google ficam em bloco fixo acima do marquee, preservando a prova social.
SOBRE/CREDENCIAIS	[X] C) Foto grande com texto sobreposto em camadas	Não há números de credencial confiáveis para alimentar counters (tempo de casa desconhecido, total de avaliações não confirmado) — usar counters exigiria inventar dados. A foto do portal de entrada é o melhor ativo narrativo e carrega o nome da marca entalhado em madeira.

Combinação final registrada: HERO-D + SERV-A + DEPO-A + SOBRE-C
(Combinação inédita no portfólio AG5 conforme histórico disponível — validar contra BASE_CONHECIMENTO_AG5.md quando o arquivo for anexado.)