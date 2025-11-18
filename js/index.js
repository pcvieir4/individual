function scrollToSection(id) {
  var section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        var id = href.replace("#", "");
        scrollToSection(id);
        navLinks.forEach(function (l) {
          l.parentElement.classList.remove("active");
        });
        link.parentElement.classList.add("active");
      }
    });
  });

  var slides = document.querySelectorAll("#slider .slide");
  var currentSlide = 0;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0) {
    setInterval(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4000);
  }

  // Otimização do Scroll com requestAnimationFrame
  var backToTop = document.getElementById("backToTop");
  var isScrolling = false;

  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      window.requestAnimationFrame(function () {
        if (window.scrollY > 300) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var reveals = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(function (el) {
    observer.observe(el);
  });

  var themeToggle = document.getElementById("themeToggle");
  var body = document.body;

  themeToggle.addEventListener("click", function () {
    if (body.classList.contains("sombrio")) {
      body.classList.remove("sombrio");
      body.classList.add("jedi");
      themeToggle.textContent = "Modo Sombrio";
    } else {
      body.classList.remove("jedi");
      body.classList.add("sombrio");
      themeToggle.textContent = "Modo Jedi";
    }
  });

  var vaderButton = document.getElementById("vaderButton");
  var vaderAudio = document.getElementById("vaderAudio");
  var isPlaying = false;

  vaderButton.addEventListener("click", function () {
    if (!vaderAudio) {
      return;
    }
    if (!isPlaying) {
      vaderAudio.currentTime = 0;
      vaderAudio.play();
      vaderButton.textContent = "Pausar respiração do Vader";
      isPlaying = true;
    } else {
      vaderAudio.pause();
      vaderButton.textContent = "Ativar respiração do Vader";
      isPlaying = false;
    }
  });
});
