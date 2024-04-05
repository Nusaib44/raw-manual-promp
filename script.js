// script.js
window.addEventListener('scroll', function() {
    const animations = document.querySelectorAll('.animate');
  
    animations.forEach(function(animation) {
      const windowHeight = window.innerHeight;
      const elementTop = animation.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        animation.classList.remove('animate');
        animation.classList.add('animate-visible');
      }
    });
  });