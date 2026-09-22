(() => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-nav]");
  const navLinks = navigation ? [...navigation.querySelectorAll('a[href^="#"]')] : [];
  const revealElements = [...document.querySelectorAll("[data-reveal]")];
  const yearElement = document.querySelector("[data-current-year]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopMedia = window.matchMedia("(min-width: 821px)");

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  const setMenuState = (open) => {
    if (!menuToggle || !navigation) return;

    menuToggle.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);

    const label = menuToggle.querySelector(".sr-only");
    if (label) {
      label.textContent = open ? "Fechar menu" : "Abrir menu";
    }
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
      menuToggle?.focus();
    }
  });

  const handleDesktopChange = (event) => {
    if (event.matches) {
      setMenuState(false);
    }
  };

  if (typeof desktopMedia.addEventListener === "function") {
    desktopMedia.addEventListener("change", handleDesktopChange);
  }

  const sectionTargets = navLinks
    .map((link) => {
      const selector = link.getAttribute("href");
      const section = selector ? document.querySelector(selector) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sectionTargets.length) {
    const activeSectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => link.classList.remove("is-active"));
        const match = sectionTargets.find(({ section }) => section === visible.target);
        match?.link.classList.add("is-active");
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sectionTargets.forEach(({ section }) => activeSectionObserver.observe(section));
  }

  const prepareRevealAnimations = () => {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      document.body.classList.remove("motion-ready");
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
      }
    });

    document.body.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      }
    );

    revealElements
      .filter((element) => !element.classList.contains("is-visible"))
      .forEach((element) => revealObserver.observe(element));
  };

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", prepareRevealAnimations);
  }

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();
  prepareRevealAnimations();
})();
