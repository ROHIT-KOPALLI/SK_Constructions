// Mobile menu
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileNav').classList.remove('open');
}

// Sticky header shadow
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 20);

  // Active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// WhatsApp form submit
function submitForm(e) {
  e.preventDefault();

  const name     = document.getElementById('fname').value.trim();
  const phone    = document.getElementById('fphone').value.trim();
  const location = document.getElementById('flocation').value.trim();
  const size     = document.getElementById('fsize').value.trim() || 'Not specified';
  const floors   = document.getElementById('ffloors').value || 'Not specified';
  const type     = document.getElementById('ftype').value || 'Not specified';
  const message  = document.getElementById('fmessage').value.trim() || 'No additional message';

  const text =
    `*New Estimate Request – SK Constructions*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📍 *Location:* ${location}\n` +
    `📐 *Plot/Building Size:* ${size}\n` +
    `🏢 *Number of Floors:* ${floors}\n` +
    `🏗️ *Construction Type:* ${type}\n` +
    `💬 *Message:* ${message}\n\n` +
    `_Sent via SK Constructions Website_`;

  window.open('https://wa.me/918074381880?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
  e.target.reset();
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .step-card, .why-card, .project-card, .testi-card, .contract-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
