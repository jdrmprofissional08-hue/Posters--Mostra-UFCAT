// Counter script for Posters site – client‑side only.
// Uses CountAPI (https://countapi.mileshilliard.com/) to count unique visits per page.
// Each page must have an element with id="counter-<pageKey>" where <pageKey>
// corresponds to the filename (e.g., "index", "view-aplicacoes-ia", etc.).
// This script maps those page keys to unique counter identifiers required by the API.

document.addEventListener('DOMContentLoaded', () => {
  // Determine page key from pathname (filename without .html).
  const pathname = window.location.pathname;
  const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
  const pageKey = filename.replace('.html', '') || 'index';

  const counterEl = document.getElementById(`counter-${pageKey}`);
  if (!counterEl) return; // No counter element on this page.

  // Map pageKey to a unique counter identifier (no namespaces in this API).
  const keyMap = {
    'index': 'mostra-ufcat-home',
    'view-aplicacoes-ia': 'mostra-ufcat-aplicacoes',
    'view-carreiras-ia': 'mostra-ufcat-carreiras',
    'view-ednai': 'mostra-ufcat-ednai',
    'view-academia': 'mostra-ufcat-academia',
    'view-terceira-lua': 'mostra-ufcat-terceira-lua'
  };

  const counterKey = keyMap[pageKey];
  if (!counterKey) {
    console.warn('No counter key defined for pageKey', pageKey);
    return;
  }

  // localStorage flag to avoid double counting from the same browser/device.
  const storageKey = `counted_${counterKey}`;
  const hasCounted = localStorage.getItem(storageKey) === 'true';

  // Choose the appropriate endpoint: hit (increment) if not counted yet, otherwise get.
  const endpoint = hasCounted ? 'get' : 'hit';
  const apiUrl = `https://countapi.mileshilliard.com/api/v1/${endpoint}/${counterKey}`;

  fetch(apiUrl)
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      // API returns { key: "...", message: "...", value: "123" }
      const value = Number(data.value);
      const formatter = new Intl.NumberFormat('pt-BR');
      counterEl.textContent = formatter.format(value);
      // If we just performed a hit, set the flag so future loads only read.
      if (!hasCounted) {
        try { localStorage.setItem(storageKey, 'true'); } catch (e) { /* ignore storage errors */ }
      }
    })
    .catch(err => {
      console.error('Failed to fetch counter from CountAPI', err);
      // Keep whatever content is already in the element (e.g., 0) if the API fails.
    });
});
