window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, index) => {
    const img = panel.querySelector("img");

    gsap.to(img, {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: panel,
        start: () => `top+=${index * window.innerHeight} top`,
        end: () => `top+=${(index + 1) * window.innerHeight} top`,
        scrub: true,
        onLeave: () => {
          gsap.to(img, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      }
    });
  });
});
