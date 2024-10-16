// Smooth scrolling when clicking sidebar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      
      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
