/* ============================================================
   Dedo de Moça Café da Roça — script.js (Vanilla ES6)
   AG5 Agência · 2026
   ============================================================ */
(function () {
  'use strict';

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- DADOS ---------- */

  // Avaliações reais exportadas do perfil do Google Business (nome, tempo e texto integral).
  const DEPOIMENTOS = [
    { nome: 'Julia Soares', tempo: '3 meses atrás', texto: 'Fui hoje mais cedo e gostei muito. A comida estava bem saborosa, o atendimento foi ótimo, principalmente da atendente Milagros, super educada e simpática. O ambiente é lindo e muito agradável.' },
    { nome: 'Patrícia Larrubia', tempo: '2 meses atrás', texto: 'Amei a comida e o ambiente!! Sabor sem comparação!! O atendimento foi um pouco demorado devido à quantidade de pessoas, mas nada que prejudique a experiência no local maravilhoso.' },
    { nome: 'Gabriela Rocha', tempo: '3 meses atrás', texto: 'O ambiente é muito lindo e aconchegante. Atendimento ótimo também. Comemos uma baguete de linguiça que estava ótima, quiche de damasco com brie excelente também.' },
    { nome: 'Conrado Aquino', tempo: '7 meses atrás', texto: 'Pedi um pão de alho com frango, bolinho de chuva e suco de morango com maracujá. Estava tudo muito gostoso. O ambiente é muito agradável e a música ambiente é calma. Super recomendo!' },
    { nome: 'Lidia Marques Guimaraes', tempo: '4 meses atrás', texto: 'Muito aconchegante, lindo, colorido e muito bem ornamentado. Atendimento impecável, as atendentes dão sugestões e explicam tudo direitinho. Gostinho de comida de vó.' },
    { nome: 'Fabiana Brumano', tempo: '1 ano atrás', texto: 'Ambiente familiar e tranquilo, onde conseguimos conversar e sentir a paz que a natureza transmite. Destaque para o cappuccino Dedo de Moça com creme de avelã, uma experiência inesquecível.' },
    { nome: 'Virgínia Sampaio', tempo: '7 meses atrás', texto: 'Um lugar aconchegante, música ambiente e uma colaboradora chamada Milagros, super simpática, educada e carismática. Um verdadeiro cantinho da roça. Super recomendo, café maravilhoso.' },
    { nome: 'Adriana Azevedo', tempo: '5 meses atrás', texto: 'O espaço é muito acolhedor e bem aproveitado. Tem área kids e a natureza torna o ambiente ainda mais agradável. Comida boa e excelente atendimento.' },
    { nome: 'Izabelly Santos', tempo: '4 meses atrás', texto: 'Tudo perfeito! A comida é uma delícia, os funcionários são atenciosos e fazem com que nos sintamos em casa. O ambiente é muito aconchegante, com música agradável e área kids.' },
    { nome: 'Vilma Batista', tempo: '1 ano atrás', texto: 'Amei tudo: comida, atendimento e ambiente super acolhedor e bem decorado. A atendente Vanessa foi muito prestativa, apresentou todo o cardápio e nos atendeu muito bem.' }
  ];

  const FAQ = [
    { p: 'Precisa reservar mesa?', r: 'Não trabalhamos com reserva no dia a dia — é chegar e sentar. Para grupos acima de 10 pessoas ou aniversários, fale com a gente antes pelo WhatsApp.' },
    { p: 'Funciona em dia de chuva?', r: 'Sim. O pátio é ao ar livre, mas os quiosques de sapê e as áreas cobertas garantem lugar seco. Em chuva muito forte, confirme pelo WhatsApp.' },
    { p: 'Pode levar pet?', r: 'Nosso espaço é aberto e recebe famílias com pets — mantenha na guia e por perto. Confirme pelo WhatsApp se for um grupo grande.' },
    { p: 'Tem estacionamento?', r: 'O estacionamento é na rua, gratuito. Nos fins de semana as vagas ficam disputadas depois das 10h — vale chegar cedo.' },
    { p: 'Quais as formas de pagamento?', r: 'Aceitamos dinheiro, Pix e os principais cartões. Detalhes atualizados também no destaque "Pagamento" do Instagram.' }
  ];

  /* ---------- NAVBAR + MENU MOBILE (Drawer) ---------- */
  const nav = $('#nav');
  const burger = $('#burger');
  const drawer = $('#mobileMenu');
  const drawerOverlay = $('#drawerOverlay');
  const drawerClose = $('#drawerClose');

  const aoRolar = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 80);
    parallax();
  };
  window.addEventListener('scroll', aoRolar, { passive: true });

  const abrirDrawer = () => {
    drawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
    document.body.classList.add('no-scroll');
    burger.setAttribute('aria-expanded', 'true');
  };
  const fecharDrawer = () => {
    drawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? fecharDrawer() : abrirDrawer();
  });
  drawerClose.addEventListener('click', fecharDrawer);
  drawerOverlay.addEventListener('click', fecharDrawer);
  $$('#mobileMenu a').forEach((a) => a.addEventListener('click', fecharDrawer));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharDrawer();
  });

  /* ---------- ENTRADA DO HERO ---------- */
  window.addEventListener('load', () => {
    $('.hero__title').classList.add('is-in');
    $('#heroMedia').classList.add('is-in');
  });

  /* ---------- SOM DO VÍDEO DA HERO ---------- */
  const heroVideo = $('#heroVideo');
  const heroSom = $('#heroSom');
  if (heroVideo && heroSom) {
    heroSom.addEventListener('click', () => {
      heroVideo.muted = !heroVideo.muted;
      const comSom = !heroVideo.muted;
      heroSom.setAttribute('aria-pressed', String(comSom));
      heroSom.setAttribute('aria-label', comSom ? 'Desativar som do vídeo' : 'Ativar som do vídeo');
    });
  }

  /* ---------- REVEALS (IntersectionObserver) ---------- */
  const revelar = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        revelar.unobserve(el);
        const i = Number(el.dataset.stagger || 0);
        el.style.transitionDelay = i * 90 + 'ms';
        el.classList.add('is-in');
      });
    },
    { threshold: 0.18 }
  );
  $$('[data-reveal]').forEach((el, i) => {
    el.dataset.stagger = String(i % 6);
    revelar.observe(el);
  });

  /* ---------- SOBRE (moldura em arco) ---------- */
  const secSobre = $('.sobre');
  const sobre = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        sobre.unobserve(e.target);
        $$('.sobre__media').forEach((el) => el.classList.add('is-in'));
      });
    },
    { threshold: 0.25 }
  );
  if (secSobre) sobre.observe(secSobre);

  /* ---------- PARALLAX LEVE ---------- */
  let ticking = false;
  function parallax() {
    if (semMovimento || ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      $$('[data-parallax]').forEach((el) => {
        const r = el.getBoundingClientRect();
        const k = parseFloat(el.dataset.parallax);
        const d = (r.top + r.height / 2 - window.innerHeight / 2) * k;
        el.style.transform = `translateY(${d.toFixed(1)}px)`;
      });
      ticking = false;
    });
  }

  /* ---------- DEPOIMENTOS (marquee em duas faixas) ---------- */
  const iniciais = (nome) => nome.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase();
  const cartao = (d) => `
    <div class="depo__card">
      <p class="depo__aspas">&ldquo;</p>
      <p class="depo__txt">${d.texto}</p>
      <footer class="depo__rodape">
        <span class="depo__avatar">${iniciais(d.nome)}</span>
        <div class="depo__info">
          <p class="depo__nome">${d.nome}</p>
          <p class="depo__meta">
            <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.48a5.54 5.54 0 01-2.4 3.63v3h3.89c2.28-2.1 3.55-5.2 3.55-8.81z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.92l-3.89-3c-1.08.73-2.46 1.16-4.05 1.16-3.11 0-5.75-2.1-6.69-4.92H1.3v3.09A12 12 0 0012 24z"/><path fill="#FBBC05" d="M5.31 14.32a7.2 7.2 0 010-4.64V6.59H1.3a12 12 0 000 10.82z"/><path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.59 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0A12 12 0 001.3 6.59l4.01 3.09C6.25 6.86 8.89 4.75 12 4.75z"/></svg>
            ${d.tempo}
          </p>
        </div>
      </footer>
    </div>`;
  const montarFaixa = (el, lista) => {
    if (!el) return;
    // duplicado para o loop infinito de translateX(-50%)
    el.innerHTML = lista.concat(lista).map(cartao).join('');
  };
  montarFaixa($('#depoRow1'), DEPOIMENTOS);
  montarFaixa($('#depoRow2'), DEPOIMENTOS.slice().reverse());

  /* ---------- FAQ (acordeão) ---------- */
  const lista = $('#faqList');
  if (lista) {
    lista.innerHTML = FAQ.map(
      (f, i) => `
      <div class="faq__item" data-faq="${i}">
        <button class="faq__btn" type="button" aria-expanded="false">
          <span class="faq__num">${String(i + 1).padStart(2, '0')}</span>
          <span class="faq__pergunta">${f.p}</span>
          <span class="faq__icone">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>
          </span>
        </button>
        <div class="faq__resp"><p>${f.r}</p></div>
      </div>`
    ).join('');

    $$('.faq__item', lista).forEach((item) => {
      const btn = $('.faq__btn', item);
      const resp = $('.faq__resp', item);
      btn.addEventListener('click', () => {
        const abrindo = !item.classList.contains('is-open');
        $$('.faq__item', lista).forEach((outro) => {
          if (outro === item) return;
          const outroResp = $('.faq__resp', outro);
          outro.classList.remove('is-open');
          outroResp.style.height = outroResp.scrollHeight + 'px';
          outroResp.offsetHeight; // força reflow para registrar a altura atual antes de animar
          outroResp.style.height = '0px';
          $('.faq__btn', outro).setAttribute('aria-expanded', 'false');
        });
        if (!abrindo) {
          item.classList.remove('is-open');
          resp.style.height = resp.scrollHeight + 'px';
          resp.offsetHeight; // força reflow para registrar a altura atual antes de animar
          resp.style.height = '0px';
          btn.setAttribute('aria-expanded', 'false');
        }
        if (abrindo) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          requestAnimationFrame(() => {
            resp.style.height = resp.scrollHeight + 'px';
          });
          resp.addEventListener('transitionend', function onEnd(ev) {
            if (ev.propertyName === 'height' && item.classList.contains('is-open')) {
              resp.style.height = 'auto';
            }
          }, { once: true });
          item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    });
  }

  /* ---------- FORMULÁRIO (máscara + validação) ---------- */
  const form = $('#form');
  const tel = $('#telefone');

  const mascaraTel = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) return d.length ? '(' + d : '';
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };
  tel.addEventListener('input', (e) => {
    e.target.value = mascaraTel(e.target.value);
  });

  const mostrarErro = (campo, msg) => {
    const el = $('#erro' + campo.charAt(0).toUpperCase() + campo.slice(1));
    el.textContent = msg;
    el.classList.toggle('is-visible', Boolean(msg));
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = $('#nome').value.trim();
    const fone = tel.value.replace(/\D/g, '');
    const msg = $('#mensagem').value.trim();

    const erros = {
      nome: nome.length < 2 ? 'Diga como podemos te chamar.' : '',
      telefone: fone.length < 10 ? 'Telefone incompleto — inclua o DDD.' : '',
      mensagem: msg.length < 8 ? 'Escreva um pouco mais sobre o que precisa.' : ''
    };
    Object.keys(erros).forEach((k) => mostrarErro(k, erros[k]));

    const ok = Object.values(erros).every((v) => !v);
    $('#sucesso').classList.toggle('is-visible', ok);
    if (ok) {
      // ▼ MENSAGEM OBRIGATÓRIA — estrutura fixa (padrão AG5) ▼
      let texto = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.\n`;
      texto += `\n- Telefone: ${tel.value}`;
      texto += `\n- Mensagem: ${msg}`;
      // ▲ ────────────────────────────────────────────────── ▲
      const urlWhatsApp = `https://wa.me/5521983866213?text=${encodeURIComponent(texto)}`;
      window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
      form.reset();
    }
  });

  /* ---------- MOVIMENTO REDUZIDO ---------- */
  if (semMovimento) {
    $$('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    $('.hero__title').classList.add('is-in');
    $('#heroMedia').classList.add('is-in');
    $$('.sobre__media').forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- PARALLAX SUTIL — foto "Sobre a casa" ---------- */
  if (!semMovimento) {
    const sobreFoto = $('.sobre__foto');
    const sobreSection = $('.sobre');
    if (sobreFoto && sobreSection) {
      let ticking = false;
      const aplicarParallax = () => {
        const r = sobreSection.getBoundingClientRect();
        const vh = window.innerHeight;
        if (r.bottom > 0 && r.top < vh) {
          const progresso = (vh - r.top) / (vh + r.height);
          const deslocamento = (progresso - 0.5) * 60;
          sobreFoto.style.transform = `translateY(${deslocamento.toFixed(1)}px) scale(1.12)`;
        }
        ticking = false;
      };
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(aplicarParallax);
          ticking = true;
        }
      }, { passive: true });
      aplicarParallax();
    }
  }

  aoRolar();
})();

/* ──────────────────────────────────────────────
   WHATSAPP PREMIUM — Balão flutuante (AG5 V4)

   Timeline:
     • t=0s  → usuário chega na 3ª seção (#espaco) → botão verde aparece imediatamente
     • t=25s → balão sobe ("digitando..." por 2.5s → mensagem real)
     • t=40s → balão some automaticamente (visível por 15s)
     • t=45s → badge vermelho "1" aparece (5s depois de sumir) — nicho tranquilo
─────────────────────────────────────────────── */
(function initWaPremium() {
  const MODO_COMPLIANCE = false; // nicho tranquilo (gastronomia) → COM badge

  const bubble        = document.getElementById('wa-message-bubble');
  const typing        = document.getElementById('wa-typing');
  const realMessage   = document.getElementById('wa-real-message');
  const badge         = document.getElementById('wa-notification');
  const closeBtn      = document.getElementById('wa-close-btn');
  const mainBtn       = document.getElementById('wa-main-btn');
  const targetSection = document.getElementById('espaco');

  if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

  const DELAY_BALAO            = 25000; // 25s após entrar na seção
  const DURATION_TYPING        = 2500;  // 2.5s de "digitando..."
  const DURATION_BALAO_VISIVEL = 15000; // 15s exibido depois de aparecer
  const DELAY_BADGE_APOS_SUMIR = 5000;  // 5s após sumir → badge

  let triggered = false;
  let autoHideTimer = null;
  let badgeTimer = null;
  let userClosed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;

        mainBtn.classList.add('visible');

        setTimeout(() => {
          if (userClosed) return;
          bubble.classList.add('show');

          setTimeout(() => {
            if (userClosed) return;
            typing.classList.add('is-hidden');
            realMessage.classList.add('is-visible');
            requestAnimationFrame(() => realMessage.classList.add('is-in'));
          }, DURATION_TYPING);

          autoHideTimer = setTimeout(() => {
            if (userClosed) return;
            bubble.classList.remove('show');

            if (!MODO_COMPLIANCE && badge) {
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APOS_SUMIR);
            }
          }, DURATION_BALAO_VISIVEL);
        }, DELAY_BALAO);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetSection);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userClosed = true;
    bubble.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
    if (!MODO_COMPLIANCE && badge) {
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
    }
  });

  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    if (badge) badge.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
  });
})();
