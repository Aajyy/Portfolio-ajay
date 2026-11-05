
  const toggle = document.getElementById('menu-toggle');
  const navCenter = document.getElementById('nav-center');
  const downloadBtn = document.querySelector('.download-btn');
  
  

  toggle.addEventListener('click', () => {
    navCenter.classList.toggle('show');
    downloadBtn.classList.toggle('show');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });



