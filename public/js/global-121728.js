(function () {
  const init = () => {
    const hierarchyItems = document.querySelectorAll(".hierarchy-item");

    hierarchyItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      item.style.transitionDelay = `${index * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    hierarchyItems.forEach((item) => {
      observer.observe(item);
    });

    const buttons = document.querySelectorAll('a[href="#"]');
    buttons.forEach((button) => {
      button.addEventListener("mousedown", function () {
        this.style.transform = "scale(0.98)";
      });
      button.addEventListener("mouseup", function () {
        this.style.transform = "scale(1)";
      });
      button.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
