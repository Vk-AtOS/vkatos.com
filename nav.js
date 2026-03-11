document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/') || (currentPath.startsWith(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
      link.style.color = 'var(--white)';
    }
  });
});
