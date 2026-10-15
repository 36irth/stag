const featurePreference = {
  labels: ["일정 관리", "위치·교통 정보", "의견 조율", "비용 정산", "준비물 체크", "기록 기능"],
  values: [10, 10, 8, 8, 6, 3],
};

const flowSteps = [
  {
    "number": "01",
    "key": "onboard",
    "label": "시작 경험",
    "title": "공연 원정의 시작, 어렵지 않게.",
    "copy": "STAG와 함께할 준비를 시작해 보세요. 서비스를 알아보고 간단한 흐름으로 시작할 수 있어요.",
    "featured": false,
    "assets": [
      {
        "id": "splash",
        "label": "스플래시",
        "src": null,
        "presentationType": "phone"
      },
      {
        "id": "onboarding",
        "label": "온보딩",
        "src": "./assets/onboardingScreen.png",
        "presentationType": "phone"
      },
      {
        "id": "login",
        "label": "로그인",
        "src": null,
        "presentationType": "phone"
      }
    ]
  },
  {
    "number": "02",
    "key": "home",
    "label": "홈",
    "title": "우리의 원정 준비, 한눈에 확인해요.",
    "copy": "공연 D-day부터 남은 할 일과 크루 현황까지. 등록한 공연을 중심으로 필요한 정보를 확인할 수 있어요.",
    "featured": true,
    "assets": [
      {
        "id": "home-main",
        "label": "홈 메인",
        "src": "./assets/homeScreen.png",
        "presentationType": "phone"
      },
      {
        "id": "home-status",
        "label": "D-day · 할 일 · 크루 현황",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "03",
    "key": "explore",
    "label": "주변 장소",
    "title": "공연장 주변, 어디가 좋을까?",
    "copy": "공연장 주변의 숙소와 맛집, 카페까지. 원정에 필요한 장소를 공연장 중심으로 살펴보세요.",
    "featured": false,
    "assets": [
      {
        "id": "explore-cards",
        "label": "공연장 주변 장소 추천",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "04",
    "key": "crew",
    "label": "크루·합류",
    "title": "함께 가는 공연이라면, 준비도 함께.",
    "copy": "크루를 초대하고 서로의 합류 정보를 공유해 보세요. 누구와 어디서 만나는지 쉽게 확인할 수 있어요.",
    "featured": true,
    "assets": [
      {
        "id": "crew-main",
        "label": "크루 메인",
        "src": null,
        "presentationType": "phone"
      },
      {
        "id": "crew-invite",
        "label": "크루원 초대",
        "src": null,
        "presentationType": "bottomSheet"
      },
      {
        "id": "crew-join",
        "label": "합류 정보 등록",
        "src": null,
        "presentationType": "bottomSheet"
      },
      {
        "id": "crew-status",
        "label": "합류 관리",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "05",
    "key": "vote",
    "label": "투표",
    "title": "어디서 만날지 고민된다면? 투표로 정해요.",
    "copy": "선택지를 만들고 친구들의 의견을 모아보세요. 투표 현황과 결과를 한눈에 확인할 수 있어요.",
    "featured": true,
    "assets": [
      {
        "id": "vote-main",
        "label": "투표 메인",
        "src": "./assets/voteScreen.png",
        "presentationType": "phone"
      },
      {
        "id": "vote-create",
        "label": "투표 등록",
        "src": null,
        "presentationType": "bottomSheet"
      },
      {
        "id": "vote-states",
        "label": "참여 · 결과 상태",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "06",
    "key": "prepare",
    "label": "체크리스트",
    "title": "응원봉 챙겼어? 티켓은?",
    "copy": "놓치기 쉬운 준비물도 체크리스트로 꼼꼼하게. 필요한 항목을 추가하고 완료한 준비를 확인해 보세요.",
    "featured": true,
    "assets": [
      {
        "id": "checklist-main",
        "label": "체크리스트",
        "src": null,
        "presentationType": "phone"
      },
      {
        "id": "checklist-create",
        "label": "항목 등록",
        "src": null,
        "presentationType": "bottomSheet"
      },
      {
        "id": "checklist-edit",
        "label": "항목 수정",
        "src": null,
        "presentationType": "bottomSheet"
      },
      {
        "id": "checklist-states",
        "label": "완료 · 미완료 상태",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "07",
    "key": "plan",
    "label": "플랜",
    "title": "공연 시간에 맞춰, 하루를 계획해요.",
    "copy": "카페부터 호텔 체크인, 공연장 입장까지. 시간별 일정을 정리하고 원정의 하루를 한눈에 살펴보세요.",
    "featured": true,
    "assets": [
      {
        "id": "plan-main",
        "label": "시간별 플랜",
        "src": "./assets/planScreen.png",
        "presentationType": "phone"
      },
      {
        "id": "plan-create",
        "label": "일정 등록",
        "src": null,
        "presentationType": "bottomSheet"
      },
      {
        "id": "plan-timeline",
        "label": "타임라인 시간 블록",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "08",
    "key": "update",
    "label": "알림",
    "title": "달라진 일정도 놓치지 않게.",
    "copy": "원정 일정과 크루 활동에 관한 새로운 소식을 알림에서 확인해 보세요.",
    "featured": false,
    "assets": [
      {
        "id": "alert-main",
        "label": "알림",
        "src": "./assets/alertScreen.png",
        "presentationType": "phone"
      },
      {
        "id": "alert-card",
        "label": "업데이트 알림",
        "src": null,
        "presentationType": "component"
      }
    ]
  },
  {
    "number": "09",
    "key": "archive",
    "label": "아카이브",
    "title": "공연이 끝나도, 우리의 기록은 계속되니까.",
    "copy": "함께했던 원정의 지난 일정과 기록을 언제든 다시 살펴보세요.",
    "featured": false,
    "assets": [
      {
        "id": "archive-list",
        "label": "아카이브 목록",
        "src": null,
        "presentationType": "phone"
      },
      {
        "id": "archive-detail",
        "label": "아카이브 상세",
        "src": null,
        "presentationType": "phone"
      }
    ]
  }
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initSmoothScroll() {
  if (prefersReducedMotion || typeof Lenis === "undefined") {
    return null;
  }

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.82,
  });

  if (typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
    }

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    return lenis;
  }

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
}

function createAsset(asset) {
  const source = window.STAG_ASSETS?.[asset.id] || asset.src;
  const type = asset.presentationType;
  return `<figure class="featureAsset asset-${type} ${source ? 'hasImage' : 'emptyAsset'}" data-slot-id="${asset.id}">
    <div class="assetSurface">${source ? `<img src="${source}" alt="${asset.label} 화면" loading="lazy" decoding="async" />` : `<div class="neutralSlot" role="img" aria-label="${asset.label} 이미지 영역"><span class="slotMark" aria-hidden="true">STAG</span><span>${asset.label}</span></div>`}</div><figcaption>${asset.label}</figcaption></figure>`;
}

function createFeatureTitle(step) {
  const accents = {
    onboard: "어렵지 않게.", home: "한눈에 확인해요.", explore: "공연장 주변",
    crew: "준비도 함께.", vote: "투표로 정해요.", prepare: "티켓은?",
    plan: "하루를 계획해요.", update: "놓치지 않게.", archive: "우리의 기록",
  };
  const accent = accents[step.key];
  return accent ? step.title.replace(accent, `<span class="featureAccent">${accent}</span>`) : step.title;
}

function renderFlowSteps() {
  const list = document.getElementById('flowList');
  if (!list) return;
  list.innerHTML = flowSteps.map(step => `<article class="featureStory revealItem ${step.featured ? 'featureMajor' : 'featureCompact'} feature-${step.key}" id="${step.key}" data-flow-key="${step.key}"><div class="featureCopy"><p class="featureLabel">${step.number} / ${step.label}</p><h3>${createFeatureTitle(step)}</h3><p>${step.copy}</p>${step.key === 'explore' ? '<a class="textLink" href="#plan">하루의 플랜으로 이어보기 →</a>' : ''}</div><div class="featureStage">${step.assets.map(createAsset).join('')}</div></article>`).join('');
  list.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
    const figure = img.closest('.featureAsset');
    const label = figure.querySelector('figcaption').textContent;
    figure.classList.replace('hasImage', 'emptyAsset');
    const slot = document.createElement('div');
    slot.className = 'neutralSlot'; slot.setAttribute('role','img'); slot.setAttribute('aria-label', label + ' 이미지 영역');
    const mark = document.createElement('span'); mark.className = 'slotMark'; mark.textContent = 'STAG'; mark.setAttribute('aria-hidden','true');
    const caption = document.createElement('span'); caption.textContent = label;
    slot.append(mark,caption); img.replaceWith(slot);
  }, {once:true}));
}

function initDesignLinks() {
  const config = window.STAG_LINKS;
  const isPrototype = config.kind === 'prototype';
  document.querySelectorAll('[data-design-link]').forEach(link => {
    link.href = config.url;
    link.textContent = isPrototype ? '프로토타입 살펴보기 ↗' : '디자인 살펴보기 ↗';
    link.setAttribute('aria-label', isPrototype ? 'Figma 프로토타입 새 창으로 열기' : 'Figma 디자인 새 창으로 열기');
    link.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('[data-design-context]').forEach(el => el.textContent = isPrototype ? 'Figma 실행형 프로토타입으로 이동합니다.' : 'Figma 디자인 파일로 이동합니다.');
}

function initChart() {
  const chartCanvas = document.getElementById("researchChart");

  if (!chartCanvas || typeof Chart === "undefined") {
    return null;
  }

  const chart = new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: featurePreference.labels,
      datasets: [
        {
          label: "응답 수",
          data: featurePreference.values.map(() => 0),
          backgroundColor: ["#05d4c6", "#05d4c6", "#ff842e", "#ff842e", "#baf3ea", "#baf3ea"],
          borderRadius: 999,
          borderSkipped: false,
          barThickness: 18,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            afterLabel: () => "N=18, 복수 선택",
          },
        },
      },
      animation: {
        duration: prefersReducedMotion ? 0 : 900,
        easing: "easeOutQuart",
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 12,
          ticks: {
            stepSize: 3,
            color: "rgba(255, 255, 255, 0.56)",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.08)",
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            color: "rgba(255, 255, 255, 0.78)",
            font: {
              family: "Pretendard",
              weight: 700,
            },
          },
        },
      },
    },
  });

  return chart;
}

function initChartAnimation(chart) {
  const chartPanel = document.querySelector(".chartPanel");

  if (!chart || !chartPanel) {
    return;
  }

  let hasAnimated = false;

  const fillChart = () => {
    if (hasAnimated) {
      return;
    }

    hasAnimated = true;
    chart.data.datasets[0].data = featurePreference.values;
    chart.update();
  };

  if (prefersReducedMotion) {
    fillChart();
    return;
  }

  if (typeof ScrollTrigger !== "undefined" && typeof gsap !== "undefined") {
    ScrollTrigger.create({
      trigger: chartPanel,
      start: "top 78%",
      once: true,
      onEnter: fillChart,
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        fillChart();
        observer.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(chartPanel);
}

function initMotion() {
  if (prefersReducedMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    document.querySelectorAll(".revealItem").forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".revealItem").forEach((item) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 86%",
      },
    });
  });

  gsap.to(".heroPhoneOne", {
    y: -34,
    ease: "none",
    scrollTrigger: {
      trigger: ".heroSection",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".heroPhoneTwo", {
    y: 52,
    rotate: -2,
    ease: "none",
    scrollTrigger: {
      trigger: ".heroSection",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".featureStory").forEach((article) => {
    const assets = article.querySelectorAll(".featureAsset");
    gsap.fromTo(
      assets,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: article,
          start: "top 72%",
        },
      }
    );
  });

  gsap.utils.toArray(".valueCards").forEach((group) => {
    gsap.from(group.children, {
      y: 24,
      opacity: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: group, start: "top 88%", once: true },
    });
  });

  gsap.from(".prototypeVisual", {
    y: 28, scale: 0.96, opacity: 0, duration: 0.85, ease: "power3.out",
    scrollTrigger: { trigger: ".prototypeVisual", start: "top 85%", once: true },
  });
}

function initHeader(lenis) {
  const nav = document.querySelector(".siteNav");
  const progressBar = document.querySelector(".scrollProgressBar");
  const topButton = document.querySelector(".topButton");
  const navGroups = [["problem", "problem"], ["solution", "problem"], ["mainFlow", "mainFlow"], ["research", "research"], ["prototype", "prototype"], ["closing", "prototype"]];

  if (!nav) {
    return;
  }

  const updateHeader = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

    nav.style.background = scrollTop > 24 ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0.62)";

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (topButton) {
      topButton.classList.toggle("isVisible", scrollTop > 520);
    }
    let active = "";
    navGroups.forEach(([id, group]) => {
      if (document.getElementById(id)?.getBoundingClientRect().top <= window.innerHeight * 0.35) active = group;
    });
    nav.querySelectorAll('.navLinks a').forEach(link => {
      if (link.hash === `#${active}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", updateHeader, {passive: true});
  updateHeader();

  if (topButton) {
    topButton.addEventListener("click", () => {
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.05,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        return;
      }

      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  document.querySelectorAll('.brandMark, .navLinks a, a[href="#mainFlow"], .textLink').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) {
        return;
      }

      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();

      if (lenis && !prefersReducedMotion) {
        lenis.resize();
        lenis.scrollTo(href === "#hero" ? 0 : target, {
          offset: href === "#research" || href === "#hero" ? 0 : -86,
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      }

      window.history.replaceState(null, "", href);
    });
  });
}

function initPrototypeAnchors() {
  document.querySelectorAll(".prototypeDock, .navPrototypeButton, .serviceCTA").forEach((link) => {
    link.addEventListener("pointerenter", () => {
      if (typeof gsap === "undefined" || prefersReducedMotion) {
        return;
      }

      gsap.to(link, {
        scale: 1.04,
        duration: 0.18,
        ease: "power2.out",
      });
    });

    link.addEventListener("pointerleave", () => {
      if (typeof gsap === "undefined" || prefersReducedMotion) {
        return;
      }

      gsap.to(link, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lenis = initSmoothScroll();
  renderFlowSteps();
  initDesignLinks();
  initIcons();
  if (lenis && typeof lenis.resize === "function") {
    lenis.resize();
  }
  const chart = initChart();
  initMotion();
  initChartAnimation(chart);
  initHeader(lenis);
  initPrototypeAnchors();

  window.addEventListener("load", () => {
    if (lenis && typeof lenis.resize === "function") {
      lenis.resize();
    }

    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  });
});
