const featurePreference = {
  labels: ["일정 관리", "위치·교통 정보", "의견 조율", "비용 정산", "준비물 체크", "기록 기능"],
  values: [10, 10, 8, 8, 6, 3],
};

const flowSteps = [
  {
    number: "01",
    key: "onboard",
    layout: "flowLayoutIntro",
    icon: "sparkles",
    title: "공연 원정의 시작을, 더 간단하게.",
    copy: "스플래시, 온보딩, 로그인에서 서비스의 목적과 시작 흐름을 간결하게 연결합니다.",
    uxFocus: "처음부터 모든 기능을 보여주기보다 핵심 가치와 시작 행동을 구분합니다.",
    researchEvidence: "서비스 진입부는 조사 수치보다 이후 준비 경험을 이해하기 위한 맥락 전달에 집중했습니다.",
    highlights: ["서비스 목적 인지", "시작 행동 안내", "간결한 진입 흐름"],
    assets: [
      { label: "스플래시", presentationType: "phone", status: "planned" },
      { label: "온보딩", presentationType: "phone", status: "planned" },
      { label: "로그인", presentationType: "phone", status: "planned" },
    ],
  },
  {
    number: "02",
    key: "home",
    layout: "flowLayoutFocus",
    icon: "home",
    title: "등록한 공연을 중심으로, 준비 상황을 한눈에.",
    copy: "공연 D-day, 지금 해야 할 일, 크루 현황 및 아카이브 진입점을 확인합니다.",
    uxFocus: "공연을 서비스의 정보 기준점으로 삼고 해야 할 일과 현황을 정보 위계에 따라 배치합니다.",
    researchEvidence: "카카오톡으로 일정 계획 12/18, 준비 정보 분산 6/18 응답을 공연별 정보 통합 방향으로 연결했습니다.",
    highlights: ["D-day", "지금 해야 할 일", "크루 현황", "아카이브 진입"],
    assets: [
      { label: "홈 전체 화면", src: "./assets/homeScreen.png", presentationType: "phone", status: "ready" },
      { label: "D-day 정보", presentationType: "component", status: "designed" },
      { label: "해야 할 일·크루 상태", presentationType: "component", status: "designed" },
    ],
  },
  {
    number: "03",
    key: "explore",
    layout: "flowLayoutGallery",
    icon: "map",
    title: "공연장 주변에서, 원정에 필요한 장소를 찾습니다.",
    copy: "플랜에 포함된 공연장 주변 숙소·맛집·카페 추천 카드를 기준으로 장소 탐색 경험을 설명합니다.",
    uxFocus: "일반 지도 검색이 아니라 등록된 공연장의 위치를 탐색 출발점으로 사용합니다.",
    researchEvidence: "지도 앱 활용 6/18 응답을 공연장 기준 주변 정보 탐색 요구로 해석했습니다.",
    highlights: ["공연장 기준 탐색", "추천 카드", "일정 연결은 향후 상세 시안에서 확정"],
    assets: [
      { label: "주변 장소 추천 구간", src: "./assets/planScreen.png", presentationType: "component", status: "ready" },
      { label: "추천 카드 확대", presentationType: "component", status: "designed" },
      { label: "장소 상세 연결", presentationType: "placeholder", status: "planned" },
    ],
  },
  {
    number: "04",
    key: "crew",
    layout: "flowLayoutShowcase",
    icon: "users-round",
    title: "함께 움직이는 원정, 합류 정보까지 한곳에서.",
    copy: "크루원 초대부터 합류 관리, 합류 정보 등록까지 동행인 간의 서로 다른 준비 상태를 확인합니다.",
    uxFocus: "원정 전체의 공동 정보와 각자의 합류 시간을 구분해 표현합니다.",
    researchEvidence: "집합 지연 경험 8/18을 크루와 합류 정보 관리 문제로 연결했습니다. 해결 효과가 검증됐다고 주장하지 않습니다.",
    highlights: ["크루 메인", "크루원 초대", "합류 정보 등록", "합류 관리"],
    assets: [
      { label: "크루 메인", presentationType: "phone", status: "designed" },
      { label: "크루원 초대", presentationType: "bottomSheet", status: "designed" },
      { label: "합류 정보 등록", presentationType: "bottomSheet", status: "designed" },
      { label: "합류 관리", presentationType: "component", status: "designed" },
    ],
  },
  {
    number: "05",
    key: "vote",
    layout: "flowLayoutArc",
    icon: "vote",
    title: "서로 다른 의견을 모아, 함께 결정합니다.",
    copy: "투표 목록에서 안건을 확인하고 투표를 등록·참여하며 현재 의사결정 상태를 확인합니다.",
    uxFocus: "투표 등록, 선택, 결과 상태를 구분해 채팅 속 의견을 다시 취합해야 하는 상황에 대응합니다.",
    researchEvidence: "역할 집중 8/18, 의견 조율 지연 7/18 응답을 공동 의사결정 구조로 연결했습니다.",
    highlights: ["투표 목록", "투표 등록", "선택 상태", "결과 상태"],
    assets: [
      { label: "투표 화면", src: "./assets/voteScreen.png", presentationType: "phone", status: "ready" },
      { label: "투표 등록", presentationType: "bottomSheet", status: "designed" },
      { label: "선택·결과 상태", presentationType: "stateComparison", status: "designed" },
    ],
  },
  {
    number: "06",
    key: "prepare",
    layout: "flowLayoutShowcase",
    icon: "list-checks",
    title: "챙겨야 할 것과 남은 준비를 분명하게.",
    copy: "체크리스트 상세에서 항목을 확인하고 등록·수정합니다. 완료와 미완료가 보이는 상태를 중심으로 보여줍니다.",
    uxFocus: "단순 목록이 아니라 관리 가능한 작업으로 구성해 준비 상태가 드러나도록 합니다.",
    researchEvidence: "준비물 누락 경험 7/18을 체크리스트 등록, 수정, 완료 상태의 설계 근거로 연결했습니다.",
    highlights: ["체크리스트 상세", "체크리스트 등록", "체크리스트 수정", "완료 상태"],
    assets: [
      { label: "체크리스트 상세", presentationType: "phone", status: "designed" },
      { label: "체크리스트 등록", presentationType: "bottomSheet", status: "designed" },
      { label: "체크리스트 수정", presentationType: "bottomSheet", status: "designed" },
      { label: "완료 상태 컴포넌트", presentationType: "component", status: "designed" },
    ],
  },
  {
    number: "07",
    key: "plan",
    layout: "flowLayoutFocus",
    icon: "calendar-clock",
    title: "공연 시간을 기준으로, 하루의 흐름을 계획합니다.",
    copy: "공연 시작 시간을 기준점으로 호텔 체크인, 카페, 공연장 입장 같은 시간별 활동을 확인하고 일정을 추가합니다.",
    uxFocus: "공연 시작 시각이라는 고정된 제약을 중심으로 타임라인을 읽도록 구성합니다.",
    researchEvidence: "일정 관리 10/18 선호와 위치·교통 정보 10/18 선호를 공연 시간 중심 플랜으로 연결했습니다.",
    highlights: ["플랜 메인", "일정 등록", "타임라인 블록", "장소 추천 연결"],
    assets: [
      { label: "플랜 전체 화면", src: "./assets/planScreen.png", presentationType: "phone", status: "ready" },
      { label: "일정 등록", presentationType: "bottomSheet", status: "designed" },
      { label: "타임라인 시간 블록", presentationType: "component", status: "designed" },
    ],
  },
  {
    number: "08",
    key: "update",
    layout: "flowLayoutPair",
    icon: "bell",
    title: "변경된 정보도, 놓치지 않고 확인하도록.",
    copy: "알림 화면에서 원정과 크루 활동에 관한 업데이트를 확인하도록 구성합니다.",
    uxFocus: "알림은 현황을 다시 확인하는 진입점입니다. 별도로 디자인되지 않은 D-day 전용 화면이나 실시간 추적 기능은 만들지 않습니다.",
    researchEvidence: "지금 해야 할 일 안내 긍정 12/18 응답을 알림과 상태 확인의 필요성으로 연결했습니다.",
    highlights: ["알림 전체 화면", "업데이트 카드", "현황 재진입"],
    assets: [
      { label: "알림 전체 화면", src: "./assets/alertScreen.png", presentationType: "phone", status: "ready" },
      { label: "알림 카드 확대", presentationType: "component", status: "designed" },
    ],
  },
  {
    number: "09",
    key: "archive",
    layout: "flowLayoutPair",
    icon: "archive",
    title: "공연이 끝나도, 함께한 원정의 기록은 남습니다.",
    copy: "완료된 공연과 원정의 지난 일정·기록을 다시 살펴보는 후속 경험을 제안합니다.",
    uxFocus: "기록 기능 선호 3/18명을 고려해 핵심 협업·일정보다 낮은 비중의 확장 방향으로 표현합니다.",
    researchEvidence: "아카이브는 제작 예정 영역으로 유지하되, 완성 화면처럼 보이도록 꾸미지 않습니다.",
    highlights: ["제작 예정", "완료 공연", "지난 일정", "후속 경험"],
    assets: [
      { label: "아카이브 목록", presentationType: "placeholder", status: "planned" },
      { label: "아카이브 상세", presentationType: "placeholder", status: "planned" },
    ],
  },
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

function createHighlightList(items) {
  return `
    <ul class="flowHighlightList">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function createPhoneShell(asset, content, assetClass = "flowAssetPhone", frameClass = "") {
  return `
    <div class="screenSlot flowAsset ${assetClass}">
      <p class="screenLabel">${asset.label}</p>
      <figure class="phoneFrame flowPhoneFrame ${frameClass}">
        ${content}
      </figure>
    </div>
  `;
}

function createPhoneAsset(asset) {
  const content = asset.src
    ? `<img src="${asset.src}" alt="${asset.label} 화면" />`
    : `<div class="phoneScreenContent screenConcept">
        <i data-lucide="smartphone"></i>
        <strong>${asset.label}</strong>
        <span>${asset.status === "planned" ? "화면 제작 예정" : "실제 UI 형태 기반 구성"}</span>
      </div>`;

  return createPhoneShell(asset, content);
}

function createBottomSheetAsset(asset) {
  const content = `
    <div class="phoneScreenContent phoneScreenSheet">
      <figure class="bottomSheetFrame" aria-label="${asset.label} 바텀시트">
        <span class="sheetHandle"></span>
        <div class="sheetHeader">
          <strong>${asset.label}</strong>
          <small>Bottom sheet</small>
        </div>
        <div class="sheetRows" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button type="button" tabindex="-1">확인</button>
      </figure>
    </div>
  `;

  return createPhoneShell(asset, content, "flowAssetSheet", "flowFrameSheet");
}

function createComponentAsset(asset) {
  const content = `
    <div class="phoneScreenContent phoneScreenComponent">
      <figure class="componentFrame">
        ${asset.src ? `<img src="${asset.src}" alt="${asset.label} UI" />` : ""}
        <div>
          <strong>${asset.label}</strong>
          <span>${asset.status === "planned" ? "향후 상세 시안에서 확정" : "주요 UI 요소 확대"}</span>
        </div>
      </figure>
    </div>
  `;

  return createPhoneShell(asset, content, "flowAssetComponent", "flowFrameComponent");
}

function createStateComparisonAsset(asset) {
  const content = `
    <div class="phoneScreenContent phoneScreenState">
      <figure class="stateFrame">
        <div>
          <span>Before</span>
          <strong>선택 전</strong>
        </div>
        <div>
          <span>After</span>
          <strong>결과 확인</strong>
        </div>
      </figure>
    </div>
  `;

  return createPhoneShell(asset, content, "flowAssetState", "flowFrameState");
}

function createPlaceholderAsset(asset) {
  const content = `
    <div class="phoneScreenContent phoneScreenPlanned">
      <figure class="plannedFrame">
        <i data-lucide="plus"></i>
        <strong>${asset.label}</strong>
        <span>제작 예정 화면</span>
      </figure>
    </div>
  `;

  return createPhoneShell(asset, content, "flowAssetPlaceholder", "flowFramePlanned");
}

function createAsset(asset) {
  switch (asset.presentationType) {
    case "phone":
      return createPhoneAsset(asset);
    case "bottomSheet":
      return createBottomSheetAsset(asset);
    case "component":
      return createComponentAsset(asset);
    case "stateComparison":
      return createStateComparisonAsset(asset);
    default:
      return createPlaceholderAsset(asset);
  }
}

function renderFlowSteps() {
  const flowList = document.getElementById("flowList");

  if (!flowList) {
    return;
  }

  flowList.innerHTML = flowSteps
    .map(
      (step) => `
        <article class="flowArticle revealItem" id="${step.key}" data-flow-key="${step.key}">
          <div class="flowContent">
            <div class="flowKicker">
              <span class="flowNumber">${step.number}</span>
              <span class="flowIcon" aria-hidden="true"><i data-lucide="${step.icon}"></i></span>
            </div>
            <h3>${step.title}</h3>
            <p class="flowLead">${step.copy}</p>
            <div class="flowFocusGrid">
              <div>
                <span>UX Focus</span>
                <p>${step.uxFocus}</p>
              </div>
              <div>
                <span>Research Link</span>
                <p>${step.researchEvidence}</p>
              </div>
            </div>
            ${createHighlightList(step.highlights)}
          </div>
          <div class="mockupGrid ${step.layout}">
            ${step.assets.map(createAsset).join("")}
          </div>
        </article>
      `
    )
    .join("");
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
        duration: 900,
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

  gsap.utils.toArray(".flowArticle").forEach((article) => {
    const assets = article.querySelectorAll(".flowAsset");
    gsap.fromTo(
      assets,
      { y: 28, opacity: 0.86 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: article,
          start: "top 72%",
        },
      }
    );
  });

  if (!window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  gsap.utils.toArray(".strategyCard, .decisionCard, .findingCard").forEach((card) => {
    const rotateXTo = gsap.quickTo(card, "rotateX", { duration: 0.22, ease: "power2.out" });
    const rotateYTo = gsap.quickTo(card, "rotateY", { duration: 0.22, ease: "power2.out" });

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      card.style.transformPerspective = "700px";
      rotateXTo(y * -2.4);
      rotateYTo(x * 3.2);
    });

    card.addEventListener("pointerleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    });
  });
}

function initHeader(lenis) {
  const nav = document.querySelector(".siteNav");
  const progressBar = document.querySelector(".scrollProgressBar");
  const topButton = document.querySelector(".topButton");

  if (!nav) {
    return;
  }

  window.addEventListener("scroll", () => {
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
  });

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

  document.querySelectorAll(".brandMark, .navLinks a").forEach((link) => {
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
        lenis.scrollTo(target, {
          offset: -86,
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
  document.querySelectorAll(".prototypeDock, .navPrototypeButton").forEach((link) => {
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
