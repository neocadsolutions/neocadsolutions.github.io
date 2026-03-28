/* ================================================
   NeoCad Solutions — main.js v2
   ================================================ */

// ── Pricing Tabs
function showTab(id, btn) {
  document.querySelectorAll('.pricing-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Scroll Reveal
  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  reveals.forEach(function (r) { observer.observe(r); });
});

// ── Contact Form → WhatsApp
function handleFormSubmit(btn) {
  var form = btn.closest('.contact-form');
  var name    = form.querySelector('input[type=text]').value.trim();
  var phone   = form.querySelector('input[type=tel]').value.trim();
  var service = form.querySelector('select').value;
  var msg     = form.querySelector('textarea').value.trim();

  if (!name || !phone) {
    alert('Please enter your name and phone number.');
    return;
  }

  var text = 'Hi NeoCad! I need help with CAD or audit documentation.\n\n'
           + 'Name: ' + name + '\n'
           + 'Phone: ' + phone + '\n'
           + 'Service: ' + (service || 'General enquiry') + '\n\n'
           + (msg || '');

  window.open('https://wa.me/917775014876?text=' + encodeURIComponent(text), '_blank');
}
