
// FUNÇÃO PARA ROLAR ATÉ UMA SEÇÃO DO SITE

function scrollToSection(id) {
  var section = document.getElementById(id);
  if (section) {
    // Desce suavemente até a seção
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {

 
  // MENU DE NAVEGAÇÃO — ROLAR SUAVE + ACTIVE
  
  var navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");

      // Se o link for âncora (#), prevenir comportamento padrão
      if (href && href.startsWith("#")) {
        e.preventDefault();

        var id = href.replace("#", "");

        // Rolagem suave
        scrollToSection(id);

        // Remove active de todos
        navLinks.forEach(function (l) {
          l.parentElement.classList.remove("active");
        });

        // Adiciona active no item clicado
        link.parentElement.classList.add("active");
      }
    });
  });

 
  // SLIDER AUTOMÁTICO DE IMAGENS (CARROSSEL)
  
  var slides = document.querySelectorAll("#slider .slide");
  var currentSlide = 0;

  // Função que ativa o slide correto
  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === index);
    });
  }

  // Troca de slide a cada 4 segundos
  if (slides.length > 0) {
    setInterval(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4000);
  }

 
  // BOTÃO "VOLTAR AO TOPO" — SCROLL OTIMIZADO
 
  var backToTop = document.getElementById("backToTop");
  var isScrolling = false;

  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      // requestAnimationFrame melhora desempenho ao rolar
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

  // Ação do botão — volta ao topo suavemente
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  
  // ANIMAÇÃO DE REVEAL (APARECER AO ROLAR)
  
  var reveals = document.querySelectorAll(".reveal");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Quando o elemento entra na área visível, ativa a animação
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 }); // 20% do elemento precisa estar visível

  // Observa cada elemento com a classe .reveal
  reveals.forEach(function (el) {
    observer.observe(el);
  });

  
  // TROCA DE TEMA — MODO SOMBRIO / MODO JEDI

  var themeToggle = document.getElementById("themeToggle");
  var body = document.body;

  themeToggle.addEventListener("click", function () {
    // Se está no modo sombrio, troca para Jedi
    if (body.classList.contains("sombrio")) {
      body.classList.remove("sombrio");
      body.classList.add("jedi");
      themeToggle.textContent = "Modo Sombrio";
    } else {
      // Se está no modo Jedi, volta para sombrio
      body.classList.remove("jedi");
      body.classList.add("sombrio");
      themeToggle.textContent = "Modo Jedi";
    }
  });


  // AUDIO DO DARTH VADER — PLAY / PAUSE
  
  var vaderButton = document.getElementById("vaderButton");
  var vaderAudio = document.getElementById("vaderAudio");
  var isPlaying = false;

  vaderButton.addEventListener("click", function () {
    if (!vaderAudio) {
      return; // Caso o áudio não exista, evita erro
    }

    // Toca ou pausa o áudio
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
