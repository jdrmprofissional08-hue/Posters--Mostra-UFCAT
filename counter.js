// Counter script for Posters site – client‑side only.
// Uses CountAPI (https://countapi.xyz) to increment a counter per page.
// Each page must have an element with id="counter-<pageKey>" where <pageKey>
// is the filename without the .html extension (e.g., "index" or "view-aplicacoes-ia").

document.addEventListener('DOMContentLoaded', () => {
  // Determine page key from pathname.
  const pathname = window.location.pathname;
  const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
  const pageKey = filename.replace('.html', '');

  const counterEl = document.getElementById(`counter-${pageKey}`);
  if (!counterEl) return; // No counter element on this page.

  // Namespace should be unique to avoid clashes with other projects.
  const namespace = 'jdrmprofissional08-hue';
  const apiUrl = `https://api.countapi.xyz/hit/${namespace}/${pageKey}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      // CountAPI returns {value: <number>, ...}
      counterEl.textContent = data.value;
    })
    .catch((err) => {
      console.error('Failed to fetch counter', err);
    });
});
