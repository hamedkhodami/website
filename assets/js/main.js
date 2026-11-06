(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ICONS = window.ICONS || {};
  const SITE = window.SITE || { skillGroups: [], projects: [] };

  /* ───────── آیکن‌های داخل HTML ───────── */
  $$("[data-icon]").forEach((el) => el.insertAdjacentHTML("afterbegin", ICONS[el.dataset.icon] || ""));

  /* ───────── برچسب‌های فناوری در سوابق ───────── */
  $$("[data-tags]").forEach((ul) => {
    ul.innerHTML = ul.dataset.tags.split(",").map((t) =>
      `<li dir="ltr" class="rounded-full border border-line bg-white/[.03] px-3 py-1 font-mono text-[.76rem] text-fg/90">${t}</li>`).join("");
  });

  /* ───────── ابزارهای روزمره در کاشی هیرو ───────── */
  const heroStack = $("#heroStack");
  if (heroStack) {
    heroStack.innerHTML = ["python", "django", "drf", "fastapi", "celery", "redis", "postgresql", "docker"].map((k) =>
      `<li class="grid size-10 place-items-center rounded-xl bg-white/[.04] p-2 ring-1 ring-white/10 md:size-11 [&_svg]:size-full">${ICONS[k]}</li>`).join("");
  }

  /* ───────── مهارت‌ها ───────── */
  const skillList = $("#skillList");
  if (skillList) {
    skillList.innerHTML = SITE.skillGroups.map((g) => {
      const badge = g.badge
        ? `<span class="${g.lead ? "bg-accent text-bg" : "border border-accent/50 text-accent"} rounded-full px-3 py-0.5 text-[.78rem] font-bold">${g.badge}</span>` : "";
      const tiles = g.items.map((s) => `
        <li class="skill spot flex items-center gap-3.5 rounded-2xl p-3.5 ${g.lead ? "md:p-4" : ""}">
          <span class="ico grid ${g.lead ? "size-12" : "size-11"} shrink-0 place-items-center rounded-xl bg-white/[.04] p-2.5 ring-1 ring-white/10 [&_svg]:size-full">${ICONS[s.key] || ""}</span>
          <span class="min-w-0"><span class="block font-semibold leading-snug" dir="ltr">${s.name}</span><span class="block text-[.82rem] leading-snug text-mute">${s.note}</span></span>
        </li>`).join("");
      return `
      <div class="grid gap-6 border-t border-line py-9 md:grid-cols-[15rem_1fr] md:gap-12 md:py-10">
        <div>
          <div class="flex flex-wrap items-center gap-3"><h3 class="text-2xl font-bold">${g.title}</h3>${badge}</div>
          <p class="mt-2 max-w-[16rem] text-[.95rem] leading-[1.9] text-mute">${g.text}</p>
        </div>
        <ul class="grid grid-cols-1 gap-3 min-[440px]:grid-cols-2 ${g.lead || g.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}">${tiles}</ul>
      </div>`;
    }).join("");
  }

  /* ───────── کاور گرافیکی پروژه (اگر عکس نداشته باشد) ───────── */
  const accents = ["#ff6a3d", "#ffb36b", "#ff5c8a", "#8fa3ff"];
  const cover = (i) => {
    const a = accents[i % accents.length];
    const id = "c" + i;
    const bars = [0, 1, 2, 3, 4, 5].map((n) => 28 + Math.round(Math.abs(Math.sin((i + 1) * 1.7 + n * 1.3)) * 70));
    const bx = [470, 190, 430, 250][i % 4];
    return `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" class="size-full" aria-hidden="true">
      <defs>
        <filter id="${id}f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="55"/></filter>
        <pattern id="${id}g" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern>
      </defs>
      <rect width="640" height="400" fill="#0d0f15"/>
      <rect width="640" height="400" fill="url(#${id}g)"/>
      <circle cx="${bx}" cy="120" r="140" fill="${a}" opacity=".5" filter="url(#${id}f)"/>
      <g transform="translate(110 70)">
        <rect width="420" height="260" rx="18" fill="#161924" stroke="#fff" stroke-opacity=".12"/>
        <circle cx="26" cy="24" r="5" fill="#fff" fill-opacity=".25"/><circle cx="44" cy="24" r="5" fill="#fff" fill-opacity=".25"/><circle cx="62" cy="24" r="5" fill="#fff" fill-opacity=".25"/>
        <path d="M0 46H420" stroke="#fff" stroke-opacity=".08"/>
        <rect x="20" y="64" width="86" height="176" rx="10" fill="#fff" fill-opacity=".04"/>
        <rect x="126" y="64" width="130" height="14" rx="7" fill="#fff" fill-opacity=".14"/>
        <rect x="126" y="88" width="84" height="10" rx="5" fill="#fff" fill-opacity=".07"/>
        ${bars.map((h, n) => `<rect x="${126 + n * 45}" y="${240 - h}" width="30" height="${h}" rx="7" fill="${a}" fill-opacity="${0.35 + n * 0.1}"/>`).join("")}
      </g>
    </svg>`;
  };

  /* ───────── پروژه‌ها ───────── */
  const grid = $("#projectGrid");
  if (grid) {
    grid.innerHTML = SITE.projects.map((p, i) => `
      <article class="project spot reveal w-[82%] shrink-0 snap-center rounded-3xl md:w-auto md:shrink" style="--d:${(i % 3) * 0.08}s">
        <a href="${p.url}" target="_blank" rel="noopener" class="flex h-full flex-col" aria-label="مشاهده پروژه ${p.title}">
          <div class="cover aspect-[16/10] overflow-hidden rounded-t-[calc(1.5rem-1px)] bg-surface-2">
            ${p.image ? `<img src="${p.image}" alt="" loading="lazy" class="size-full object-cover">` : cover(i)}
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-[1.25rem] font-bold leading-snug">${p.title}</h3>
            <p class="mt-2 flex-1 text-[.96rem] leading-[1.95] text-mute">${p.text}</p>
            <ul class="mt-4 flex flex-wrap gap-2">${(p.tags || []).map((t) => `<li dir="ltr" class="rounded-full border border-line px-2.5 py-0.5 font-mono text-[.72rem]">${t}</li>`).join("")}</ul>
            <span class="mt-5 inline-flex items-center gap-2 font-bold text-accent">
              مشاهده پروژه
              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 7 7 17M7 8v9h9"/></svg>
            </span>
          </div>
        </a>
      </article>`).join("");
  }

  /* ───────── نور دنبال‌کننده‌ی نشانگر روی کارت‌ها و نام هیرو ───────── */
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (fine) {
    const name = $("#heroName");
    addEventListener("pointermove", (e) => {
      const card = e.target.closest?.(".spot");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      }
      if (name) {
        const r = name.getBoundingClientRect();
        name.style.setProperty("--hx", e.clientX - r.left + "px");
        name.style.setProperty("--hy", e.clientY - r.top + "px");
      }
    }, { passive: true });
  }

  /* ───────── ساعت آلمان ───────── */
  const clock = $("#clock");
  if (clock) {
    const fmt = new Intl.DateTimeFormat("fa-IR", { timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit", hour12: false });
    const tick = () => { clock.textContent = "ساعت آلمان " + fmt.format(new Date()); };
    tick(); setInterval(tick, 15000);
  }

  /* ───────── هدر ───────── */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-stuck", scrollY > 24);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ───────── لینک فعال (هدر دسکتاپ و داک موبایل) ───────── */
  const navLinks = $$(".nav-link, #dock a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)));
      navLinks.forEach((a) => { if (a.getAttribute("aria-current") === "false") a.removeAttribute("aria-current"); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["top", "about", "experience", "skills", "projects", "contact"].forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  /* ───────── ظاهر شدن هنگام اسکرول (کارت‌ها و حلقه) ───────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  $$(".reveal, #ringCard").forEach((el) => io.observe(el));

  /* ───────── کپی ایمیل ───────── */
  const toast = $("#toast"), label = $("#copyLabel");
  let t;
  $("#copyBtn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(SITE.email); }
    catch { const r = document.createRange(); r.selectNode($("#emailLink")); getSelection().removeAllRanges(); getSelection().addRange(r); document.execCommand("copy"); }
    label.textContent = "کپی شد";
    toast.classList.remove("opacity-0", "translate-y-3");
    clearTimeout(t);
    t = setTimeout(() => { toast.classList.add("opacity-0", "translate-y-3"); label.textContent = "کپی ایمیل"; }, 1800);
  });
})();
