const sections = document.querySelectorAll('.fade-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));