function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,2500);
  
  function nextSlide() {
    slides[currentSlide].className="slide";
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className="slide active";
  }

  