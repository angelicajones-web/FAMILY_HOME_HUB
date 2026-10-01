document.documentElement.classList.add('js');

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
}

document.querySelectorAll('[data-resource]').forEach((link) => {
  const resource = window.HUB_RESOURCES?.[link.dataset.resource];
  if (resource && (/^https:\/\//i.test(resource) || /^assets\/documents\/[a-z0-9._/-]+\.pdf$/i.test(resource))) {
    link.href = resource;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return;
  }
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const container = link.closest('li, .callout');
    const message = container?.querySelector('.resource-message');
    if (message) message.hidden = false;
  });
});
