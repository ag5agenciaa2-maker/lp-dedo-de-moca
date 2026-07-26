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

  // ⚠️ PENDÊNCIA BLOQUEANTE: substituir pelos 8–12 depoimentos reais exportados
  // do Google Business (nome, tempo, nota e texto integral).
  const DEPOIMENTOS = [
    { nome: 'Visitante no Google', texto: 'Expectativa superada: a comida, a música ambiente e a recepção. A Milagros nos atendeu com uma paciência e um carisma enormes. Voltarei com certeza.' },
    { nome: 'Visitante no Google', texto: 'Fui três vezes no mesmo mês, com pessoas diferentes. Porção farta, prato bem apresentado, equipe simpática e preço acessível.' },
    { nome: 'Depoimento pendente', texto: 'Espaço reservado para avaliação real do Google — exportar do perfil com nome, tempo e nota antes do deploy.' },
    { nome: 'Depoimento pendente', texto: 'Espaço reservado para avaliação real do Google — exportar do perfil com nome, tempo e nota antes do deploy.' },
    { nome: 'Depoimento pendente', texto: 'Espaço reservado para avaliação real do Google — exportar do perfil com nome, tempo e nota antes do deploy.' },
    { nome: 'Depoimento pendente', texto: 'Espaço reservado para avaliação real do Google — exportar do perfil com nome, tempo e nota antes do deploy.' },
    { nome: 'Depoimento pendente', texto: 'Espaço reservado para avaliação real do Google — exportar do perfil com nome, tempo e nota antes do deploy.' },
    { nome: 'Depoimento pendente', texto: 'Espaço reservado para avaliação real do Google — exportar do perfil com nome, tempo e nota antes do deploy.' }
  ];

  const FAQ = [
    { p: 'Precisa reservar mesa?', r: 'Não trabalhamos com reserva no dia a dia — é chegar e sentar. Para grupos acima de 10 pessoas ou aniversários, fale com a gente antes pelo WhatsApp.' },
    { p: 'Funciona em dia de chuva?', r: 'Sim. O pátio é ao ar livre, mas os quiosques de sapê e as áreas cobertas garantem lugar seco. Em chuva muito forte, confirme pelo WhatsApp.' },
    { p: 'Pode levar pet?', r: 'Nosso espaço é aberto e recebe famílias com pets — mantenha na guia e por perto. Confirme pelo WhatsApp se for um grupo grande.' },
    { p: 'Tem estacionamento?', r: 'O estacionamento é na rua, gratuito. Nos fins de semana as vagas ficam disputadas depois das 10h — vale chegar cedo.' },
    { p: 'Quais as formas de pagamento?', r: 'Aceitamos dinheiro, Pix e os principais cartões. Detalhes atualizados também no destaque "Pagamento" do Instagram.' },
    { p: 'Qual o valor médio por pessoa?', r: 'Visitantes relatam algo entre R$ 40 e R$ 80 por pessoa, dependendo do que se pede. Cardápio caseiro, sem couvert.' }
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

  /* ---------- SOBRE (foto + card sobreposto) ---------- */
  // Observa a SEÇÃO (a foto começa com clip-path e nunca dispararia o observer)
  const secSobre = $('.sobre');
  const sobre = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        sobre.unobserve(e.target);
        $('#sobreFoto').classList.add('is-in');
        $('#sobreCard').classList.add('is-in');
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

  /* ---------- NOTA DO GOOGLE (contador + estrelas) ---------- */
  const blocoGoogle = $('#googleBloco');
  const notaEl = $('#notaNum');
  const obsGoogle = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        obsGoogle.unobserve(e.target);
        $$('[data-star]', e.target).forEach((s, i) => {
          s.style.transitionDelay = i * 80 + 'ms';
          s.classList.add('is-in');
        });
        if (semMovimento) {
          notaEl.textContent = '4,7';
          return;
        }
        const t0 = performance.now();
        const passo = (t) => {
          const p = Math.min(1, (t - t0) / 1400);
          const eased = 1 - Math.pow(2, -10 * p); // easeOutExpo
          notaEl.textContent = (4.7 * eased).toFixed(1).replace('.', ',');
          if (p < 1) requestAnimationFrame(passo);
          else notaEl.textContent = '4,7';
        };
        requestAnimationFrame(passo);
      });
    },
    { threshold: 0.5 }
  );
  if (blocoGoogle) obsGoogle.observe(blocoGoogle);

  /* ---------- DEPOIMENTOS (marquee em duas faixas) ---------- */
  const cartao = (d) => `
    <div class="depo__card">
      <p class="depo__aspas">&ldquo;</p>
      <p class="depo__txt">${d.texto}</p>
      <p class="depo__nome">${d.nome}</p>
      <p class="depo__estrelas">★★★★★</p>
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
          ${f.p}<span class="faq__icone">+</span>
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
          outro.classList.remove('is-open');
          $('.faq__resp', outro).style.height = '0px';
          $('.faq__btn', outro).setAttribute('aria-expanded', 'false');
        });
        if (abrindo) {
          item.classList.add('is-open');
          resp.style.height = resp.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
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
    $('#sobreFoto').classList.add('is-in');
    $('#sobreCard').classList.add('is-in');
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
